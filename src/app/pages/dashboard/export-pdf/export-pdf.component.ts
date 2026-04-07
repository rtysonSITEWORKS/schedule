import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { format, differenceInCalendarDays, parse } from 'date-fns';

// pdfmake — esbuild requires default import so the vfs property is mutable
// eslint-disable-next-line @typescript-eslint/no-require-imports
const pdfMake:  any = require('pdfmake/build/pdfmake');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const pdfFonts: any = require('pdfmake/build/vfs_fonts');
pdfMake.vfs = pdfFonts.pdfMake ? pdfFonts.pdfMake.vfs : pdfFonts;

export interface ExportPdfData {
  items:          any[];
  groups:         any[];
  nameDictionary: { [key: string]: string };
}

@Component({
  selector:    'az-export-pdf',
  templateUrl: './export-pdf.component.html',
  styleUrls:   ['./export-pdf.component.scss']
})
export class ExportPdfComponent implements OnInit {

  filename           = `Project_Schedule_${format(new Date(), 'yyyy-MM-dd')}`;
  exporting          = false;
  selectedProjectIds: any[]    = [];
  selectedForemans:   string[] = [];

  private logoDataUrl: string | null = null;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ExportPdfData,
    public dialogRef: MatDialogRef<ExportPdfComponent>
  ) {}

  ngOnInit(): void {
    fetch('assets/img/logo/siteworks-full.png')
      .then(r => r.blob())
      .then(blob => {
        const reader  = new FileReader();
        reader.onload = () => { this.logoDataUrl = reader.result as string; };
        reader.readAsDataURL(blob);
      })
      .catch(() => {});

    // Pre-select ALL projects and ALL foremans so everything is visible by default
    this.selectedProjectIds = this.projectOptions.map(o => o.value);
    this.selectedForemans   = this.foremanOptions.map(o => o.value);
  }

  // ── Filter option lists ───────────────────────────────────────────────────
  get projectOptions(): { label: string; value: any }[] {
    return this.data.groups
      .filter(g => this.data.items.some(i => i.group_id === g.id && Number(i.group_id) !== -1))
      .map(g => ({ label: g.title, value: g.id }));
  }

  get foremanOptions(): { label: string; value: string }[] {
    const names = [...new Set(
      Object.values(this.data.nameDictionary)
        .filter((v): v is string => !!v && v.trim() !== '' && v !== '—')
    )].sort() as string[];
    return names.map(n => ({ label: n, value: n }));
  }

  // ── Live-updating summary counts ─────────────────────────────────────────
  get projectCount(): number { return this.selectedProjectIds.length; }
  get taskCount():    number {
    return this.data.items.filter(i => {
      if (Number(i.group_id) === -1) return false;
      if (!this.selectedProjectIds.includes(i.group_id)) return false;
      const foreman = this.data.nameDictionary[i.id];
      if (foreman && !this.selectedForemans.includes(foreman)) return false;
      return true;
    }).length;
  }

  private parseItemDate(raw: string | null | undefined): Date | null {
    if (!raw) return null;
    try { return parse(raw.trim(), 'dd MMM yyyy HH:mm:ss', new Date()); }
    catch { return null; }
  }

  private statusLabel(item: any): string {
    if (item.color === '#FF0000') return 'On Hold';
    if (item.color === '#E1CA00') return 'Action Needed';
    return 'Active';
  }

  private statusColor(item: any): string {
    if (item.color === '#FF0000') return '#c62828';
    if (item.color === '#E1CA00') return '#e65100';
    return '#2e7d32';
  }

  private cleanTitle(item: any): string {
    let t = item.title ?? '';
    if (item.actionText) t = t.replace(item.actionText, '').trim();
    return t;
  }

  // ── Mini Gantt SVG for one project ────────────────────────────────────────
  private buildGanttSvg(groupItems: any[]): { svg: string; height: number } | null {
    const esc = (s: string) => s
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');

    const rows = groupItems
      .map(item => ({
        item,
        start: this.parseItemDate(item.start),
        end:   this.parseItemDate(item.end),
        label: this.cleanTitle(item)
      }))
      .filter(r => r.start && r.end);

    if (rows.length === 0) return null;

    const minMs = Math.min(...rows.map(r => r.start!.getTime()));
    const maxMs = Math.max(...rows.map(r => r.end!.getTime()));
    const rangeStart = new Date(minMs);
    const rangeEnd   = new Date(maxMs);

    const totalDays = differenceInCalendarDays(rangeEnd, rangeStart);
    if (totalDays <= 0) return null;

    const TW        = 710;
    const LABEL_W   = 130;
    const RIGHT_PAD = 10;
    const BAR_W     = TW - LABEL_W - 2 - RIGHT_PAD;
    const MONTH_H   = 20;   // top row: month labels
    const DAY_H     = 16;   // second row: day number ticks
    const HDR_H     = MONTH_H + DAY_H;
    const ROW_H     = 18;
    const BAR_H     = 12;
    const SVG_H     = HDR_H + rows.length * ROW_H + 2;

    const xFor = (d: Date): number =>
      LABEL_W + (differenceInCalendarDays(d, rangeStart) / totalDays) * BAR_W;

    // Pick day-tick interval so labels don't overlap (min ~14px per tick)
    const pxPerDay = BAR_W / totalDays;
    const interval = pxPerDay >= 7  ? 1
                   : pxPerDay >= 3  ? 7
                   : pxPerDay >= 1.5 ? 14
                   : 30;

    // Build list of tick dates — start exactly at rangeStart, step by interval
    const ticks: Date[] = [];
    const t = new Date(rangeStart);
    while (t <= rangeEnd) {
      ticks.push(new Date(t));
      t.setDate(t.getDate() + interval);
    }

    let s = `<svg xmlns="http://www.w3.org/2000/svg" width="${TW}" height="${SVG_H}">`;

    // Overall background + label column
    s += `<rect width="${TW}" height="${SVG_H}" fill="#f5f7fa"/>`;
    s += `<rect x="0" y="${HDR_H}" width="${LABEL_W}" height="${SVG_H - HDR_H}" fill="#eceff4"/>`;

    // ── Month header row (top) ────────────────────────────────────────────
    s += `<rect width="${TW}" height="${MONTH_H}" fill="#2c3e50"/>`;
    // Light label column override so task names don't sit on dark header
    s += `<rect x="0" y="0" width="${LABEL_W}" height="${HDR_H}" fill="#f0f2f5"/>`;
    // Start the month cursor at the month containing rangeStart
    let cur = new Date(rangeStart.getFullYear(), rangeStart.getMonth(), 1);
    while (cur <= rangeEnd) {
      const nextM  = new Date(cur.getFullYear(), cur.getMonth() + 1, 1);
      // Clamp label span to the visible window
      const xSegStart = Math.max(xFor(cur),    LABEL_W);
      const xSegEnd   = Math.min(xFor(nextM),  TW);
      const xMid      = (xSegStart + xSegEnd) / 2;
      // Month boundary separator (skip the very first edge at rangeStart)
      const xBound = xFor(cur);
      if (xBound > LABEL_W + 1) {
        s += `<line x1="${xBound.toFixed(1)}" y1="0" x2="${xBound.toFixed(1)}" y2="${MONTH_H}" stroke="#455a64" stroke-width="0.8"/>`;
      }
      s += `<text x="${xMid.toFixed(1)}" y="14" text-anchor="middle" font-family="Helvetica" font-size="8" font-weight="bold" fill="#ffffff">${esc(format(cur, 'MMM yyyy'))}</text>`;
      cur = nextM;
    }

    // ── Day-number sub-header row ─────────────────────────────────────────
    s += `<rect y="${MONTH_H}" width="${TW}" height="${DAY_H}" fill="#37474f"/>`;

    ticks.forEach(tick => {
      const x = xFor(tick);
      if (x < LABEL_W) return;
      const dayNum = String(tick.getDate());
      // Day number centered in sub-header row
      s += `<text x="${x.toFixed(1)}" y="${MONTH_H + Math.floor(DAY_H / 2) + 3}" text-anchor="middle" font-family="Helvetica" font-size="6.5" fill="#b0bec5">${esc(dayNum)}</text>`;
      // Tick hash at bottom of sub-header, pointing into chart area
      s += `<line x1="${x.toFixed(1)}" y1="${HDR_H - 4}" x2="${x.toFixed(1)}" y2="${HDR_H}" stroke="#90a4ae" stroke-width="0.8"/>`;
      // Vertical column line through task rows
      s += `<line x1="${x.toFixed(1)}" y1="${HDR_H}" x2="${x.toFixed(1)}" y2="${SVG_H}" stroke="#d8dde6" stroke-width="0.4"/>`;
    });

    // Month boundary lines through task rows (slightly stronger)
    let curM = new Date(rangeStart.getFullYear(), rangeStart.getMonth() + 1, 1);
    while (curM < rangeEnd) {
      const xM = xFor(curM);
      if (xM > LABEL_W) {
        s += `<line x1="${xM.toFixed(1)}" y1="${HDR_H}" x2="${xM.toFixed(1)}" y2="${SVG_H}" stroke="#b0bec5" stroke-width="0.8"/>`;
      }
      curM = new Date(curM.getFullYear(), curM.getMonth() + 1, 1);
    }

    // ── Task rows ─────────────────────────────────────────────────────────
    rows.forEach(({ item, start, end, label }, idx) => {
      const rowY  = HDR_H + idx * ROW_H;
      const barY  = rowY + Math.floor((ROW_H - BAR_H) / 2);
      const rowBg = idx % 2 === 0 ? '#eef1f7' : '#f8fafc';

      s += `<rect x="${LABEL_W}" y="${rowY}" width="${BAR_W + 2}" height="${ROW_H}" fill="${rowBg}"/>`;

      const lbl = label.length > 23 ? label.slice(0, 21) + '\u2026' : label;
      s += `<text x="4" y="${rowY + ROW_H - 5}" font-family="Helvetica" font-size="7.5" fill="#2c3e50">${esc(lbl)}</text>`;

      const x1    = Math.max(xFor(start!), LABEL_W);
      const x2    = Math.min(xFor(end!),   TW - 1);
      const barW  = Math.max(x2 - x1, 2);

      const barColor = item.color === '#FF0000' ? '#c0392b'
                     : item.color === '#E1CA00' ? '#d4ac0d'
                     : '#2e78d6';

      s += `<rect x="${x1.toFixed(1)}" y="${barY}" width="${barW.toFixed(1)}" height="${BAR_H}" rx="2" ry="2" fill="${barColor}"/>`;
    });

    s += `<line x1="0" y1="${SVG_H - 1}" x2="${TW}" y2="${SVG_H - 1}" stroke="#c8d0dc" stroke-width="0.5"/>`;
    s += '</svg>';
    return { svg: s, height: SVG_H };
  }

  // ── Compact cover header (same height as repeating page header) ─────────
  private buildCoverHeader(today: string): any {
    const logoCell: any = this.logoDataUrl
      ? { image: this.logoDataUrl, width: 100, alignment: 'center', margin: [6, 4, 6, 4] }
      : { text: 'SiteWorks', fontSize: 10, bold: true, color: '#ffffff', alignment: 'center', margin: [0, 7, 0, 7] };

    return {
      table: {
        widths: [120, '*', 'auto'],
        body: [[
          { ...logoCell, fillColor: '#ffffff', border: [false, false, false, false] },
          {
            stack: [
              { text: 'PROJECT SCHEDULE REPORT', fontSize: 11, bold: true, color: '#ffffff' },
              { text: `Generated  ${today}`, fontSize: 8, color: '#b3d9f7', margin: [0, 3, 0, 0] }
            ],
            fillColor: '#1565c0',
            border:    [false, false, false, false],
            margin:    [14, 7, 10, 7]
          },
          {
            stack: [
              { text: `${this.projectCount}`, fontSize: 18, bold: true, color: '#ffffff', alignment: 'right' },
              { text: 'Projects',             fontSize: 7,  color: '#b3d9f7',             alignment: 'right' },
              { text: `${this.taskCount}`,    fontSize: 18, bold: true, color: '#ffffff', alignment: 'right', margin: [0, 2, 0, 0] },
              { text: 'Tasks',                fontSize: 7,  color: '#b3d9f7',             alignment: 'right' }
            ],
            fillColor: '#0d47a1',
            border:    [false, false, false, false],
            margin:    [10, 5, 12, 5]
          }
        ]]
      },
      layout: { defaultBorder: false },
      margin: [0, 0, 0, 8]
    };
  }

  // ── Repeating page header (page 2+) ──────────────────────────────────────
  private buildPageHeader(today: string, currentPage: number, pageCount: number): any {
    const logoCell: any = this.logoDataUrl
      ? { image: this.logoDataUrl, width: 110, alignment: 'center', margin: [6, 4, 6, 4] }
      : { text: 'SiteWorks', fontSize: 10, bold: true, color: '#ffffff', alignment: 'center', margin: [0, 7, 0, 7] };

    return {
      table: {
        widths: [130, '*', 'auto'],
        body: [[
          // White background so wordmark PNG renders cleanly
          { ...logoCell, fillColor: '#ffffff', border: [false, false, false, false] },
          {
            text:      'PROJECT SCHEDULE REPORT',
            fontSize:  9,
            bold:      true,
            color:     '#ffffff',
            fillColor: '#1565c0',
            border:    [false, false, false, false],
            margin:    [10, 7, 0, 7]
          },
          {
            stack: [
              { text: today,                                 fontSize: 7, color: '#b3d9f7', alignment: 'right' },
              { text: `Page ${currentPage} of ${pageCount}`, fontSize: 7, color: '#ffffff', bold: true, alignment: 'right', margin: [0, 2, 0, 0] }
            ],
            fillColor: '#0d47a1',
            border:    [false, false, false, false],
            margin:    [0, 5, 10, 5]
          }
        ]]
      },
      layout: { defaultBorder: false },
      margin: [30, 6, 30, 0]
    };
  }

  export(): void {
    this.exporting = true;

    const { nameDictionary } = this.data;
    const today = format(new Date(), 'MMMM d, yyyy');

    // Apply filters
    const items  = this.data.items.filter(i => {
      if (Number(i.group_id) === -1) return false;
      if (!this.selectedProjectIds.includes(i.group_id)) return false;
      const foreman = nameDictionary[i.id];
      if (foreman && !this.selectedForemans.includes(foreman)) return false;
      return true;
    });
    const groups = this.data.groups.filter(g => this.selectedProjectIds.includes(g.id));

    const tableBody: any[][] = [];

    const activeGroups = groups.filter(g =>
      items.some(i => i.group_id === g.id)
    );

    activeGroups.forEach(group => {
      // Project header
      tableBody.push([{
        text:      group.title,
        bold:      true,
        fontSize:  10,
        color:     '#ffffff',
        fillColor: '#37474f',
        margin:    [8, 6, 6, 6],
        border:    [false, false, false, false]
      }]);

      // Gantt chart
      const groupItems = items.filter(i => i.group_id === group.id);
      const gantt = this.buildGanttSvg(groupItems);
      if (gantt) {
        tableBody.push([{
          stack: [
            { svg: gantt.svg, fit: [710, gantt.height], alignment: 'center' }
          ],
          border: [false, false, false, false],
          margin: [0, 0, 0, 0]
        }]);
      }

      // Spacer between projects
      tableBody.push([{
        text:   '',
        border: [false, false, false, false],
        margin: [0, 6, 0, 6]
      }]);
    });

    // ── Document definition ─────────────────────────────────────────────────
    const coverHeader = this.buildCoverHeader(today);

    const docDef: any = {
      pageOrientation: 'landscape',
      pageSize:        'LETTER',
      pageMargins:     [30, 55, 30, 30],

      header: (currentPage: number, pageCount: number) => {
        // Page 1: no repeated header — the cover block in content serves as the header
        if (currentPage === 1) return null;
        return this.buildPageHeader(today, currentPage, pageCount);
      },

      footer: (currentPage: number, pageCount: number) => ({
        columns: [
          { text: 'CONFIDENTIAL — For internal distribution only', fontSize: 7, color: '#aaaaaa', margin: [30, 10, 0, 0] },
          { text: `Page ${currentPage} of ${pageCount}`,           fontSize: 7, color: '#aaaaaa', alignment: 'right', margin: [0, 10, 30, 0] }
        ]
      }),

      content: [
        coverHeader,
        {
          table: {
            widths:        ['*'],
            body:          tableBody,
            dontBreakRows: true
          },
          layout: {
            hLineWidth: (_i: number) => 0.4,
            vLineWidth: (_i: number) => 0.4,
            hLineColor: (_i: number) => '#cccccc',
            vLineColor: (_i: number) => '#cccccc'
          }
        }
      ]
    };

    const fname = (this.filename || 'Project_Schedule').replace(/\.pdf$/i, '');
    (pdfMake as any).createPdf(docDef).download(`${fname}.pdf`);

    this.exporting = false;
    this.dialogRef.close();
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
