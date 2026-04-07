import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../dashboard/data.service';

@Component({
  selector:    'az-tasks',
  templateUrl: './tasks.component.html',
  styleUrls:   ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  @ViewChild(DatatableComponent) table!: DatatableComponent;

  rows:        any[] = [];
  allRows:     any[] = [];
  loading            = false;
  saving             = false;
  searchTerm         = '';
  newTaskName        = '';

  constructor(
    private ds:     DataService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void { this.loadTasks(); }

  loadTasks(): void {
    this.loading = true;
    (this.ds as any).taskListCache$ = null;   // always fetch fresh
    this.ds.getTaskList().subscribe({
      next: (data: any[]) => {
        this.allRows = data
          .slice()
          .sort((a, b) => (a.task ?? '').localeCompare(b.task ?? ''));
        this.applySearch();
        this.loading = false;
      },
      error: () => {
        this.toastr.error('Failed to load task templates.', 'Error');
        this.loading = false;
      }
    });
  }

  onSearch(): void { this.applySearch(); }

  private applySearch(): void {
    const term = this.searchTerm.trim().toLowerCase();
    this.rows = term
      ? this.allRows.filter(r => (r.task ?? '').toLowerCase().includes(term))
      : [...this.allRows];
  }

  add(): void {
    const name = this.newTaskName.trim();
    if (!name) return;
    this.saving = true;
    this.ds.createTaskType(name).subscribe({
      next: () => {
        this.toastr.success(`"${name}" added.`, 'Success');
        this.newTaskName = '';
        this.saving = false;
        this.loadTasks();
      },
      error: () => {
        this.saving = false;
        this.toastr.error('Failed to add task template.', 'Error');
      }
    });
  }

  deleteRow(row: any): void {
    this.ds.deleteTaskType(row.id).subscribe({
      next: () => {
        this.toastr.success(`"${row.task}" removed.`, 'Success');
        this.allRows = this.allRows.filter(r => r.id !== row.id);
        this.applySearch();
      },
      error: () => this.toastr.error('Failed to delete task template.', 'Error')
    });
  }
}
