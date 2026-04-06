import { Component, ViewChild, ViewEncapsulation, HostBinding, ElementRef, AfterViewInit, HostListener } from "@angular/core";
import {
  GanttBarClickEvent,
  GanttDate,
  GanttDragEvent,
  GanttGroup,
  GanttItem,
  GanttViewType,
  NgxGanttComponent,
  registerView
} from "@worktile/gantt";
import { of } from 'rxjs';
import { DataService } from "./data.service";
import { random, randomItems } from "./helper";
import { delay } from 'rxjs/operators';
import { MatDialog } from "@angular/material/dialog";
import { ActionNeededComponent } from "./action-needed/action-needed.component";
import { GanttViewCustom } from "./custom-day-view";
import { AddTaskComponent } from "./add-task/add-task.component";
import { EditTaskComponent } from "./edit-task/edit-task.component";
import { format, parse } from "date-fns";
import { ExportPdfComponent } from './export-pdf/export-pdf.component';

interface CustomGanttItem extends GanttItem {
  foreman?: string;
  isHoliday?: boolean;
  actionText?: string;
}

const customViewType = 'custom';
registerView(customViewType, GanttViewCustom);

@Component({
  selector: 'az-dashboard',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

  viewType: GanttViewType = customViewType as GanttViewType;

  statusFilters = [
    { value: 'active',        label: 'Active' },
    { value: 'onHold',        label: 'On Hold' },
    { value: 'actionNeeded',  label: 'Action Needed' }
  ];

  foremanFilters: any[] = [];

  expanded  = true;
  showGantt = false; // stays false until data loads + column widths are calculated

  // Column widths — fixed at these values across all zoom levels
  readonly col1Width = '425px';
  readonly col2Width = '300px';

  // Gantt zoom — calendar, bars, column text, and row heights all scale together
  readonly ZOOM_DEFAULT = 55;
  readonly ZOOM_MIN     = 15;
  readonly ZOOM_MAX     = 300;
  readonly ZOOM_STEP    = 20;
  zoomCellWidth = this.ZOOM_DEFAULT;

  statusFilter: string;
  foremanFilter: string;

  items: CustomGanttItem[]         = [];
  originalItems: CustomGanttItem[] = [];
  groups: GanttGroup[]             = [];
  originalGroups: GanttGroup[]     = [];

  // Options passed to [viewOptions] on the gantt component
  viewOptions: any = {
    showWeekend: true,
    cellWidth:   55   // matches ZOOM_DEFAULT
  };

  @HostBinding('class.gantt-example-component') hostClass = true;
  @ViewChild('gantt')    ganttComponent: NgxGanttComponent;
  @ViewChild('toolbar')  toolbarRef: ElementRef<HTMLElement>;

  ganttFrameHeight = 500; // sensible fallback until measured

  selectedItem: CustomGanttItem | null = null;

  // ── Hover tooltip ─────────────────────────────────────────────────────────
  tooltipVisible = false;
  tooltipItem: CustomGanttItem | null = null;
  tooltipX = 0;
  tooltipY = 0;

  // ── Empty-space right-click menu ──────────────────────────────────────────
  emptyMenuVisible = false;
  emptyMenuX       = 0;
  emptyMenuY       = 0;
  emptyMenuDate: Date | null = null;

  // ── Drag date label ───────────────────────────────────────────────────────
  isDragging    = false;
  dragDateLabel = '';
  dragLabelX    = 0;
  dragLabelY    = 0;

  /** All size tokens derived from zoom, calibrated so 60px cell = clean round numbers:
   *  font=21px  |  task-row=50px  |  bar=42px  |  group-row=35px */
  get barFontSize(): string  { return Math.round(this.zoomCellWidth * 0.45) + 'px'; }

  /** Hide bar label when the bar is narrower than ~2 days at current zoom */
  barIsNarrow(item: CustomGanttItem): boolean {
    const ms   = this.ganttValToMs(item.end) - this.ganttValToMs(item.start);
    const days = ms / 86400000;
    return days * this.zoomCellWidth < 90;
  }
  get ganttStyles(): { lineHeight: number; barHeight: number } {
    return {
      lineHeight: Math.round(this.zoomCellWidth * 0.833),  // 60px → 50px
      barHeight:  Math.round(this.zoomCellWidth * 0.76)    // snug fit for font + descenders
    };
  }
  /** Group header rows match task row height — calibrated so 60px zoom = 50px */
  get ganttGroupHeight(): string {
    return Math.round(this.zoomCellWidth * 0.833) + 'px';
  }

  private nameDictionary: { [key: string]: string } = {};

  constructor(private ds: DataService, public dialog: MatDialog) {}

  ngAfterViewInit(): void {
    this.updateGanttHeight();
  }

  @HostListener('window:resize')
  updateGanttHeight(): void {
    const toolbarH = this.toolbarRef?.nativeElement?.offsetHeight ?? 0;
    this.ganttFrameHeight = window.innerHeight - toolbarH;
  }

  ngOnInit(): void {
    this.ds.getForemans().subscribe((data: any[]) => {
      this.foremanFilters = data.map(item => ({
        label: `${item.firstname} ${item.lastname}`,
        value: `${item.firstname} ${item.lastname}`
      }));
    });
    this.loadChart();
  }

  loadChart(): void {
    this.ds.getDict().subscribe((data: any) => {
      this.nameDictionary = data;
      this.ds.getAllItems().subscribe((data: any) => {
        const parsedItems = data.items.map((item: any) => ({
          ...item,
          start: this.parseDateWithoutGMT(item.start),
          end:   this.parseDateWithoutGMT(item.end)
        }));
        const formattedItems = parsedItems.map((item: any) => ({
          ...item,
          start: format(item.start, 'dd MMM yyyy HH:mm:ss'),
          end:   format(item.end,   'dd MMM yyyy HH:mm:ss')
        }));
        this.groups = data.groups;
        this.items  = formattedItems;
        this.items.forEach(task => {
          task.foreman   = this.getManagerName(task.id);
          task.isHoliday = Number(task.group_id) === -1;
          task.draggable = !task.isHoliday;
        });
        this.originalGroups = [...this.groups];
        this.originalItems  = [...this.items];
        this.showGantt = false;
        setTimeout(() => {
          this.showGantt = true;
          setTimeout(() => {
            this.addWeekendShading();
            this.ganttComponent?.scrollToToday();
          }, 300);
        }, 30);
      });
    });
  }

  zoomIn(): void {
    this.zoomCellWidth = Math.min(this.zoomCellWidth + this.ZOOM_STEP, this.ZOOM_MAX);
    this.applyZoom();
  }

  zoomOut(): void {
    this.zoomCellWidth = Math.max(this.zoomCellWidth - this.ZOOM_STEP, this.ZOOM_MIN);
    this.applyZoom();
  }

  zoomReset(): void {
    this.zoomCellWidth = this.ZOOM_DEFAULT;
    this.applyZoom();
  }

  private applyZoom(): void {
    this.viewOptions = { ...this.viewOptions, cellWidth: this.zoomCellWidth };
    this.showGantt = false;
    setTimeout(() => {
      this.showGantt = true;
      setTimeout(() => {
        this.addWeekendShading();
        this.ganttComponent?.scrollToToday();
      }, 300);
    }, 30);
  }

  addWeekendShading(): void {
    const svg = document.querySelector('.gantt-calendar-grid-main');
    if (!svg) return;

    svg.querySelectorAll('.weekend-shade').forEach(el => el.remove());

    const cellWidth = this.zoomCellWidth;
    const svgWidth  = parseInt(svg.getAttribute('width') || '0');

    // View starts on Monday (weekStartsOn: 1): index % 7 → 0=Mon … 5=Sat, 6=Sun
    for (let i = 0; i * cellWidth < svgWidth; i++) {
      const dayOfWeek = i % 7;
      if (dayOfWeek === 5 || dayOfWeek === 6) {
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('x',      (i * cellWidth).toString());
        rect.setAttribute('y',      '0');
        rect.setAttribute('width',  cellWidth.toString());
        rect.setAttribute('height', '5000');
        rect.setAttribute('fill',   'rgba(0, 0, 0, 0.09)');
        rect.setAttribute('class',  'weekend-shade');
        svg.insertBefore(rect, svg.firstChild);
      }
    }
  }

  private parseDateWithoutGMT(dateString: string): Date {
    return new Date(dateString.replace(' GMT', ''));
  }

  generatePDF(): void {
    this.dialog.open(ExportPdfComponent, {
      width: '520px',
      data: {
        items:          this.originalItems,
        groups:         this.originalGroups,
        nameDictionary: this.nameDictionary
      }
    });
  }

  // ── Tooltip ───────────────────────────────────────────────────────────────
  showTooltip(event: MouseEvent, item: CustomGanttItem): void {
    this.tooltipItem    = item;
    this.tooltipVisible = true;
    this.positionTooltip(event);
  }

  positionTooltip(event: MouseEvent): void {
    const pad = 22;
    const tw  = 488;
    this.tooltipX = event.clientX + pad + tw > window.innerWidth
      ? event.clientX - tw - pad
      : event.clientX + pad;
    this.tooltipY = Math.min(event.clientY - 10, window.innerHeight - 300);
  }

  hideTooltip(): void { this.tooltipVisible = false; }

  tooltipStatus(item: CustomGanttItem): string {
    if (item?.color === '#FF0000') return 'On Hold';
    if (item?.color === '#E1CA00') return 'Action Needed';
    return 'Active';
  }

  tooltipStatusColor(item: CustomGanttItem): string {
    if (item?.color === '#FF0000') return '#c62828';
    if (item?.color === '#E1CA00') return '#e65100';
    return '#2e7d32';
  }

  /** Convert a gantt date value (unix seconds OR formatted string) to milliseconds */
  private ganttValToMs(val: any): number {
    if (!val) return 0;
    if (typeof val === 'number') return val * 1000;
    try {
      return parse((val as string).trim(), 'dd MMM yyyy HH:mm:ss', new Date()).getTime();
    } catch { return 0; }
  }

  tooltipFormatDate(val: any): string {
    if (!val) return '—';
    const ms = this.ganttValToMs(val);
    if (!ms) return '—';
    return format(new Date(ms), 'MMM d, yyyy');
  }

  tooltipDuration(item: CustomGanttItem): string {
    if (!item?.start || !item?.end) return '—';
    const days = Math.round((this.ganttValToMs(item.end) - this.ganttValToMs(item.start)) / 86400000);
    return days > 0 ? `${days} day${days !== 1 ? 's' : ''}` : '< 1 day';
  }

  // ── Date from gantt x-position ────────────────────────────────────────────
  private getDateFromGanttClick(event: MouseEvent): Date {
    const mc = document.querySelector('gantt-main') as HTMLElement;
    if (!mc) return new Date();
    const rect = mc.getBoundingClientRect();
    const x    = event.clientX - rect.left + mc.scrollLeft;
    const day  = Math.floor(x / this.zoomCellWidth);
    const base = new GanttDate().startOfYear().addYears(-1).startOfWeek({ weekStartsOn: 1 }).value;
    const d    = new Date(base);
    d.setDate(d.getDate() + day);
    return d;
  }

  // ── Arrow-key scrolling ────────────────────────────────────────────────────
  onGanttKeydown(event: KeyboardEvent): void {
    const arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
    if (!arrowKeys.includes(event.key)) { return; }
    event.preventDefault();
    const step = 80;
    const wrapper = event.currentTarget as HTMLElement;
    // ngx-gantt renders its own scroll containers internally
    const hScroll = wrapper.querySelector<HTMLElement>('.gantt-main-container');
    const vScroll = wrapper.querySelector<HTMLElement>('.gantt-scroll-container');
    if (event.key === 'ArrowLeft')  { (hScroll || wrapper).scrollLeft -= step; }
    if (event.key === 'ArrowRight') { (hScroll || wrapper).scrollLeft += step; }
    if (event.key === 'ArrowUp')    { (vScroll || wrapper).scrollTop  -= step; }
    if (event.key === 'ArrowDown')  { (vScroll || wrapper).scrollTop  += step; }
  }

  // ── Right-click context menu ───────────────────────────────────────────────
  onGanttContextMenu(event: MouseEvent): void {
    event.preventDefault();
    const target = event.target as HTMLElement;
    // If on a bar let CDK handle it; bars use left-click so right-click closes any open menu
    if (target.closest('.gantt-bar') || target.closest('.gantt-bar-content')) return;

    // Only show in the calendar/bar area, not the left table panel
    const mc = document.querySelector('gantt-main') as HTMLElement;
    if (!mc) return;
    if (event.clientX < mc.getBoundingClientRect().left) return;

    this.emptyMenuDate    = this.getDateFromGanttClick(event);
    this.emptyMenuX       = Math.min(event.clientX, window.innerWidth  - 210);
    this.emptyMenuY       = Math.min(event.clientY, window.innerHeight - 80);
    this.emptyMenuVisible = true;
  }

  closeEmptyMenu(): void {
    this.emptyMenuVisible = false;
    this.emptyMenuDate    = null;
  }

  addTaskAtDate(): void {
    const date = this.emptyMenuDate;
    this.closeEmptyMenu();
    const dialogRef = this.dialog.open(AddTaskComponent, {
      width: '1500px',
      height: '300px',
      data: { defaultStart: date, defaultEnd: date }
    });
    dialogRef.afterClosed().subscribe(() => this.loadChart());
  }

  // ── Drag feedback ──────────────────────────────────────────────────────────
  onDragStarted(_event: GanttDragEvent): void {
    this.isDragging = true;
  }

  onGanttMouseMove(event: MouseEvent): void {
    if (!this.isDragging) return;
    const d = this.getDateFromGanttClick(event);
    this.dragDateLabel = format(d, 'EEE, MMM d yyyy');
    this.dragLabelX    = event.clientX + 14;
    this.dragLabelY    = event.clientY - 42;
  }

  filter(): void {
    this.items = [...this.originalItems];

    if (this.statusFilter === 'onHold') {
      this.items = this.items.filter(item => item.color === '#FF0000');
    } else if (this.statusFilter === 'actionNeeded') {
      this.items = this.items.filter(item => item.color === '#E1CA00');
    } else if (this.statusFilter === 'active') {
      this.items = this.items.filter(item => item.color !== '#E1CA00' && item.color !== '#FF0000');
    }

    if (this.foremanFilter) {
      this.items = this.items.filter(item => this.getManagerName(item.id) === this.foremanFilter);
    }
  }

  onFilterChangeStatus(): void {
    this.filter();
  }

  barClick(event: GanttBarClickEvent): void {
    this.selectedItem = event.item as CustomGanttItem;
  }

  activeButtonClick(menuItem: CustomGanttItem): void {
    const target = menuItem ?? this.selectedItem;
    if (!target) return;
    const foundItem = this.items.find(item => item.id === target.id);
    if (!foundItem) return;

    if (foundItem.actionText) {
      foundItem.title      = foundItem.title.replace(foundItem.actionText, '');
      foundItem.actionText = null;
    }
    foundItem.color = null;
    this.items = [...this.items];

    this.ds.convertToActive(parseInt(foundItem.id)).subscribe({
      error: err => console.error('Error updating project status:', err)
    });
  }

  actionNeededButtonClick(menuItem: CustomGanttItem): void {
    const target = menuItem ?? this.selectedItem;
    if (!target) return;
    const foundItem = this.items.find(item => item.id === target.id);
    if (!foundItem) return;

    const dialogRef = this.dialog.open(ActionNeededComponent, { width: '1000px', height: '300px' });
    dialogRef.afterClosed().subscribe((reason: any) => {
      if (!reason) return;
      const reasonString   = `${reason.reason} : `;
      foundItem.color      = '#E1CA00';
      foundItem.title      = reasonString + foundItem.title;
      foundItem.actionText = reasonString;
      this.items = [...this.items];

      this.ds.convertToActionNeeded(parseInt(foundItem.id), reasonString).subscribe({
        error: err => console.error('Error updating project status:', err)
      });
    });
  }

  editButtonClick(menuItem: CustomGanttItem): void {
    const target = menuItem ?? this.selectedItem;
    if (!target) return;
    const foundItem = this.items.find(item => item.id === target.id);
    if (!foundItem) return;

    const dialogRef = this.dialog.open(EditTaskComponent, {
      width: '1000px',
      height: '300px',
      data: { foundItem }
    });
    dialogRef.afterClosed().subscribe(() => this.loadChart());
  }

  onHoldButtonClick(menuItem: CustomGanttItem): void {
    const target = menuItem ?? this.selectedItem;
    if (!target) return;
    const foundItem = this.items.find(item => item.id === target.id);
    if (!foundItem) return;

    if (foundItem.actionText) {
      foundItem.title      = foundItem.title.replace(foundItem.actionText, '');
      foundItem.actionText = null;
    }
    foundItem.color = '#FF0000';
    this.items = [...this.items];

    this.ds.convertToOnHold(parseInt(foundItem.id)).subscribe({
      error: err => console.error('Error updating project status:', err)
    });
  }

  completedButtonClick(menuItem: CustomGanttItem): void {
    const target = menuItem ?? this.selectedItem;
    if (!target) return;
    if (!confirm('Are you sure you want to complete this project?')) return;

    const foundItem = this.items.find(item => item.id === target.id);
    if (!foundItem) return;

    const { group_id } = foundItem;
    this.items          = this.items.filter(item => item.group_id !== group_id);
    this.originalItems  = this.originalItems.filter(item => item.group_id !== group_id);
    this.groups         = this.groups.filter(group => group.id !== group_id);
    this.originalGroups = this.originalGroups.filter(group => group.id !== group_id);

    this.ds.convertToComplete(parseInt(group_id)).subscribe({
      error: err => console.error('Error completing project:', err)
    });
  }

  deletedButtonClick(menuItem: CustomGanttItem): void {
    const target = menuItem ?? this.selectedItem;
    if (!target) return;
    if (!confirm('Are you sure you want to delete this task?')) return;

    const foundItem = this.items.find(item => item.id === target.id);
    if (!foundItem) return;

    this.items         = this.items.filter(item => item.id !== foundItem.id);
    this.originalItems = this.originalItems.filter(item => item.id !== foundItem.id);

    this.ds.convertToDeleted(parseInt(foundItem.id)).subscribe({
      error: err => console.error('Error deleting task:', err)
    });
  }

  deletedMenuButtonClick(item: any): void {
    if (!confirm('Are you sure you want to delete this task?')) return;

    const foundItem = this.items.find(itm => itm.id === item.id);
    if (!foundItem) return;

    this.ds.convertToDeleted(parseInt(foundItem.id)).subscribe({
      next:  () => this.loadChart(),
      error: err => console.error('Error deleting task:', err)
    });
  }

  getManagerName(itemId: any): string {
    return this.nameDictionary[itemId] ?? '';
  }

  dragEnded(event: GanttDragEvent): void {
    this.isDragging    = false;
    this.dragDateLabel = '';
    const adjustedItem = {
      ...event.item,
      start: new Date((event.item.start as number) * 1000).toLocaleString(),
      end:   new Date((event.item.end   as number) * 1000).toLocaleString()
    };
    this.ds.updateTask(adjustedItem).subscribe({
      next:  () => this.loadChart(),
      error: () => this.loadChart()
    });
  }

  addTask(): void {
    const dialogRef = this.dialog.open(AddTaskComponent, { width: '1500px', height: '300px' });
    dialogRef.afterClosed().subscribe(() => this.loadChart());
  }

  expandAllGroups(): void {
    if (this.expanded) {
      this.expanded = false;
      this.ganttComponent.collapseAll();
    } else {
      this.expanded = true;
      this.ganttComponent.expandAll();
    }
  }

  scrollToToday(): void {
    this.ganttComponent.scrollToToday();
  }

  childrenResolve = (item: GanttItem) => {
    return of(randomItems(random(1, 5), item)).pipe(delay(1000));
  };
}
