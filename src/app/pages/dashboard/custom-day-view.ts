import {
    GanttView,
    GanttViewOptions,
    GanttViewDate,
    GanttDate,
    eachDayOfInterval,
    GanttDatePoint,
    GanttViewType
} from "@worktile/gantt";

// Header SVG is expanded to 60px via CSS override.
// Y positions are baselines within that 60px viewport.
// Primary (month): baseline=22 → cap-height≈21px → top≈1px (at max 30px font)
// Secondary (day):  baseline=47 → cap-height≈18px → top≈29px, descenders≈52px
const PRIMARY_Y   = 22;
const SECONDARY_Y = 47;

const viewOptions: GanttViewOptions = {
    cellWidth: 120,
    start: new GanttDate()
        .startOfYear()
        .addYears(-1)
        .startOfWeek({ weekStartsOn: 1 }),
    end: new GanttDate()
        .endOfYear()
        .addYears(1)
        .endOfWeek({ weekStartsOn: 1 }),
    addAmount: 1,
    addUnit:   'month',
    fillDays:  1,
};

export class GanttViewCustom extends GanttView {
    override showWeekBackdrop: boolean = false;
    override showTimeline: boolean     = true;
    override viewType: GanttViewType   = GanttViewType.day;

    constructor(start: GanttViewDate, end: GanttViewDate, options?: GanttViewOptions) {
        super(start, end, Object.assign({}, viewOptions, options));
        this.showWeekBackdrop = false;
        this.showTimeline     = true;
        this.viewType         = GanttViewType.day;
    }

    startOf(date: GanttDate) { return date.startOfWeek({ weekStartsOn: 1 }); }
    endOf(date: GanttDate)   { return date.endOfWeek({ weekStartsOn: 1 }); }

    getPrimaryWidth() { return this.getCellWidth() * 7; }

    getDayOccupancyWidth(date: GanttDate): number {
        if (!this.options['showWeekend'] && date.isWeekend()) { return 0; }
        return this.cellWidth;
    }

    getPrimaryDatePoints(): GanttDatePoint[] {
        const days      = eachDayOfInterval({ start: this.start.value, end: this.end.value });
        const points: GanttDatePoint[] = [];
        const primaryPx = Math.min(Math.round(this.getCellWidth() * 0.50), 36);

        // One label per 7-day week, labelled with the month of the week's midpoint.
        // This ensures every visible segment always shows the current month name.
        for (let i = 0; i < days.length; i += 12) {
            const weekStart     = new GanttDate(days[i]);
            const weekCount     = Math.min(12, days.length - i);
            const midpointIndex = Math.min(i + 6, days.length - 1);
            const midday        = new GanttDate(days[midpointIndex]);
            const xCenter       = i * this.getCellWidth() + (weekCount * this.getCellWidth()) / 2;

            const point = new GanttDatePoint(
                weekStart,
                midday.format('MMMM yyyy'),
                xCenter,
                PRIMARY_Y,
                { isWeekend: false, isToday: midday.isToday() }
            );
            point.style = {
                fontWeight: 'bold',
                fill:       '#000000',
                fontSize:   `${primaryPx}px`,
                fontFamily: 'Inter, sans-serif',
            };
            points.push(point);
        }
        return points;
    }

    getSecondaryDatePoints(): GanttDatePoint[] {
        const days        = eachDayOfInterval({ start: this.start.value, end: this.end.value });
        const points: GanttDatePoint[] = [];
        // 50% larger than original — cap at 26px to fit at y=47 in 60px SVG
        const dayFontSize = `${Math.min(Math.round(this.getCellWidth() * 0.34), 26)}px`;

        for (let i = 0; i < days.length; i++) {
            const start     = new GanttDate(days[i]);
            const isWeekend = start.isWeekend();
            const isToday   = start.isToday();

            const point = new GanttDatePoint(
                start,
                start.format('d'),
                i * this.getCellWidth() + this.getCellWidth() / 2,
                SECONDARY_Y,
                { isWeekend, isToday }
            );

            if (isWeekend) {
                point.style = { fill: '#878282', fontStyle: 'italic', fontSize: dayFontSize, fontFamily: 'Inter, sans-serif' };
            } else if (isToday) {
                point.style = { fill: '#ff9f73', fontWeight: 'bold',  fontSize: dayFontSize, fontFamily: 'Inter, sans-serif' };
            } else {
                point.style = {                  fontWeight: 'bold',  fontSize: dayFontSize, fontFamily: 'Inter, sans-serif' };
            }
            points.push(point);
        }
        return points;
    }
}
