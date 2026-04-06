import { Component, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/pages/dashboard/data.service';
import { EditProjectComponent } from './editProject/edit-project.component';
import { CreateProjectComponent } from './createProject/create-project.component';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'az-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  @ViewChild(DatatableComponent) table: DatatableComponent;

  rows:    any[] = [];
  allRows: any[] = [];
  loading = false;
  searchTerm = '';

  statusFilter = 'all';

  statusOptions = [
    { label: 'Active',    value: 'active'    },
    { label: 'On Hold',   value: 'on_hold'   },
    { label: 'Completed', value: 'completed' },
    { label: 'All',       value: 'all'       },
  ];

  constructor(
    private ds: DataService,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void { this.loadProjects(); }

  loadProjects(): void {
    this.loading = true;
    const obs =
      this.statusFilter === 'all'      ? this.ds.getAllProjects()       :
      this.statusFilter === 'active'   ? this.ds.getActiveProjects()   :
      this.statusFilter === 'on_hold'  ? this.ds.getOnHoldProjects()   :
                                         this.ds.getCompletedProjects();

    obs.subscribe({
      next: (data: any) => {
        const list = Array.isArray(data) ? data : (data.projects ?? data.items ?? []);
        this.allRows = list.map((p: any) => ({
          id:      p.id,
          name:    p.name        ?? p.projectName ?? '',
          company: p.companyName ?? p.company     ?? '',
          foreman: p.foremanName || p.foreman || '',
          start:   p.startDate   ?? p.start       ?? '',
          end:     p.endDate     ?? p.end         ?? '',
          status:  p.status      ?? this.statusFilter,
        }));
        this.applySearch();
        this.loading = false;
      },
      error: () => {
        this.toastr.error('Failed to load projects.', 'Error');
        this.loading = false;
      }
    });
  }

  onStatusChange(): void { this.searchTerm = ''; this.loadProjects(); }

  onSearch(): void { this.applySearch(); }

  private applySearch(): void {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) { this.rows = [...this.allRows]; return; }
    this.rows = this.allRows.filter(r =>
      (r.name    || '').toLowerCase().includes(term) ||
      (r.company || '').toLowerCase().includes(term) ||
      (r.foreman || '').toLowerCase().includes(term) ||
      (r.status  || '').toLowerCase().includes(term)
    );
  }

  addProject(): void {
    const ref = this.dialog.open(CreateProjectComponent, { width: '620px' });
    ref.afterClosed().subscribe(result => {
      if (result) { this.loadProjects(); }
    });
  }

  editRow(row: any): void {
    const ref = this.dialog.open(EditProjectComponent, {
      width: '620px',
      data: {
        id:      row.id,
        name:    row.name,
        company: row.company,
        foreman: row.foreman,
        status:  row.status,
        start:   row.start,
        end:     row.end,
      }
    });
    ref.afterClosed().subscribe(result => {
      if (result) { this.loadProjects(); }
    });
  }

  deleteRow(row: any): void {
    const ref = this.dialog.open(ConfirmDialogComponent, {
      width: '380px',
      data: { title: 'Delete Project', message: `Delete "${row.name}"? This cannot be undone.` }
    });
    ref.afterClosed().subscribe(confirmed => {
      if (!confirmed) { return; }
      this.ds.deleteProject(row.id).subscribe({
        next: () => {
          this.toastr.success('Project deleted.', 'Success');
          this.loadProjects();
        },
        error: () => this.toastr.error('Failed to delete project.', 'Error')
      });
    });
  }

  formatDate(dateStr: string): string {
    if (!dateStr) { return '—'; }
    try { return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }); }
    catch { return dateStr; }
  }
}
