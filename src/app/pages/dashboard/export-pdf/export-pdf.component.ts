import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { format, differenceInCalendarDays, parse } from 'date-fns';

// pdfmake — already in package.json as ^0.2.7
import * as pdfMake  from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = (pdfFonts as any).pdfMake
  ? (pdfFonts as any).pdfMake.vfs
  : (pdfFonts as any);

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

  filename  = `Project_Schedule_${format(new Date(), 'yyyy-MM-dd')}`;
  exporting = false;

  private logoDataUrl: string | null = null;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ExportPdfData,
    public dialogRef: MatDialogRef<ExportPdfComponent>
  ) {}

  ngOnInit(): void {
    // Pre-load the logo so it's ready when the user clicks Export
    fetch('assets/img/logo/siteworks.png')
      .then(r => r.blob())
      .then(blob => {
        const reader    = new FileReader();
        reader.onload   = () => { this.logoDataUrl = reader.result as string; };
        reader.readAsDataURL(blob);
      })
      .catch(() => { /* logo simply won't appear if assets unreachable */ });
  }

  get projectCount(): number { return this.data.groups.length; }
  get taskCount():    number {
    return this.data.items.filter(i => Number(i.group_id) !== -1).length;
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

  // ── Branded cover header block (first item in content) ────────────────────
  private buildCoverHeader(today: string): any {
    const logoCell: any = this.logoDataUrl
      ? { image: this.logoDataUrl, width: 130, alignment: 'center', margin: [0, 6, 0, 6] }
      : { text: 'SiteWorks', fontSize: 20, bold: true, color: '#ffffff', alignment: 'center', margin: [0, 14, 0, 14] };

    return {
      table: {
        widths: [160, '*', 130],
        body: [[
          // ── Left: logo ─────────────────────────────────────────────────
          { ...logoCell, fillColor: '#0d3b6e', border: [false, false, false, false] },

          // ── Centre: report title + date ────────────────────────────────
          {
            stack: [
              {
                text: 'PROJECT SCHEDULE REPORT',
                fontSize: 17,
                bold:     true,
                color:    '#ffffff',
                letterSpacing: 1
              },
              {
                canvas: [{ type: 'line', x1: 0, y1: 4, x2: 300, y2: 4, lineWidth: 1, lineColor: '#4fc3f7' }]
              },
              {
                text:      `Generated  ${today}`,
                fontSize:  9,
                color:     '#b3d9f7',
                margin:    [0, 6, 0, 0]
              }
            ],
            fillColor: '#1565c0',
            border:    [false, false, false, false],
            margin:    [18, 12, 10, 12]
          },

          // ── Right: stats ────────────────────────────────────────────────
          {
            stack: [
              {
                columns: [
                  { text: String(this.projectCount), fontSize: 26, bold: true, color: '#ffffff', width: 40 },
                  { text: 'Active\nProjects', fontSize: 8, color: '#b3d9f7', margin: [4, 6, 0, 0] }
                ]
              },
              { canvas: [{ type: 'line', x1: 0, y1: 2, x2: 110, y2: 2, lineWidth: 0.5, lineColor: '#4fc3f7' }] },
              {
                columns: [
                  { text: String(this.taskCount), fontSize: 26, bold: true, color: '#ffffff', width: 40, margin: [0, 4, 0, 0] },
                  { text: 'Total\nTasks', fontSize: 8, color: '#b3d9f7', margin: [4, 10, 0, 0] }
                ]
              }
            ],
            fillColor: '#0d47a1',
            border:    [false, false, false, false],
            margin:    [12, 8, 12, 8]
          }
        ]]
      },
      layout: { defaultBorder: false },
      margin: [0, 0, 0, 16]
    };
  }

  // ── Repeating page header (page 2+) ──────────────────────────────────────
  private buildPageHeader(today: string, currentPage: number, pageCount: number): any {
    const logoCell: any = this.logoDataUrl
      ? { image: this.logoDataUrl, width: 60, alignment: 'center', margin: [0, 3, 0, 3] }
      : { text: 'SiteWorks', fontSize: 10, bold: true, color: '#ffffff', alignment: 'center', margin: [0, 7, 0, 7] };

    return {
      table: {
        widths: [80, '*', 'auto'],
        body: [[
          { ...logoCell, fillColor: '#0d3b6e', border: [false, false, false, false] },
          {
            text:      'PROJECT SCHEDULE REPORT',
            fontSize:  9,
            bold:      true,
            color:     '#ffffff',
            fillColor: '#1565c0',
            border:    [false, false, false, false],
            margin:    [10, 9, 0, 9]
          },
          {
            stack: [
              { text: today,                            fontSize: 7, color: '#b3d9f7', alignment: 'right' },
              { text: `Page ${currentPage} of ${pageCount}`, fontSize: 7, color: '#ffffff', bold: true, alignment: 'right', margin: [0, 2, 0, 0] }
            ],
            fillColor: '#0d47a1',
            border:    [false, false, false, false],
            margin:    [0, 7, 10, 7]
          }
        ]]
      },
      layout: { defaultBorder: false },
      margin: [30, 8, 30, 0]
    };
  }

  export(): void {
    this.exporting = true;

    const { items, groups, nameDictionary } = this.data;
    const today = format(new Date(), 'MMMM d, yyyy');

    // ── Task table ──────────────────────────────────────────────────────────
    const COL_WIDTHS = ['*', 110, 78, 78, 50, 88];

    const headerRow = ['Task / Activity', 'Foreman', 'Start Date', 'End Date', 'Days', 'Status']
      .map(t => ({
        text: t, bold: true, fontSize: 9,
        color: '#ffffff', fillColor: '#1e3a5f',
        margin: [4, 6, 4, 6]
      }));

    const tableBody: any[][] = [headerRow];

    const activeGroups = groups.filter(g =>
      items.some(i => i.group_id === g.id && Number(i.group_id) !== -1)
    );

    activeGroups.forEach(group => {
      tableBody.push([{
        text:      group.title,
        colSpan:   6,
        bold:      true,
        fontSize:  10,
        color:     '#ffffff',
        fillColor: '#37474f',
        margin:    [8, 6, 6, 6]
      }, '', '', '', '', '']);

      items
        .filter(i => i.group_id === group.id && Number(i.group_id) !== -1)
        .forEach((item, idx) => {
          const start    = this.parseItemDate(item.start);
          const end      = this.parseItemDate(item.end);
          const days     = start && end ? String(differenceInCalendarDays(end, start)) : '—';
          const startStr = start ? format(start, 'MM/dd/yyyy') : '—';
          const endStr   = end   ? format(end,   'MM/dd/yyyy') : '—';
          const fill     = idx % 2 === 0 ? '#f4f7fb' : '#ffffff';

          tableBody.push([
            { text: this.cleanTitle(item),          fontSize: 9, margin: [4,4,4,4], fillColor: fill },
            { text: nameDictionary[item.id] || '—', fontSize: 9, margin: [4,4,4,4], fillColor: fill },
            { text: startStr,                        fontSize: 9, margin: [4,4,4,4], fillColor: fill },
            { text: endStr,                          fontSize: 9, margin: [4,4,4,4], fillColor: fill },
            { text: days, alignment: 'center',       fontSize: 9, margin: [4,4,4,4], fillColor: fill },
            {
              text:      this.statusLabel(item),
              bold:      true,
              fontSize:  9,
              color:     this.statusColor(item),
              margin:    [4,4,4,4],
              fillColor: fill
            }
          ]);
        });

      // Subtle spacer between projects
      tableBody.push([{
        text: '', colSpan: 6,
        border: [false, false, false, false],
        margin: [0, 3, 0, 3]
      }, '', '', '', '', '']);
    });

    // ── Document definition ─────────────────────────────────────────────────
    const coverHeader = this.buildCoverHeader(today);

    const docDef: any = {
      pageOrientation: 'landscape',
      pageSize:        'LETTER',
      pageMargins:     [30, 45, 30, 40],

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
            headerRows:    1,
            widths:        COL_WIDTHS,
            body:          tableBody,
            dontBreakRows: false
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
