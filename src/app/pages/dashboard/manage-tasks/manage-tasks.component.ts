import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector:    'az-manage-tasks',
  templateUrl: './manage-tasks.component.html',
  styleUrls:   ['./manage-tasks.component.scss']
})
export class ManageTasksComponent implements OnInit {
  tasks:       any[]  = [];
  newTaskName          = '';
  search               = '';
  loading              = false;
  saving               = false;

  get filteredTasks(): any[] {
    const q = this.search.trim().toLowerCase();
    return q
      ? this.tasks.filter(t => t.task.toLowerCase().includes(q))
      : this.tasks;
  }

  constructor(
    private ds:         DataService,
    private toastr:     ToastrService,
    public  dialogRef:  MatDialogRef<ManageTasksComponent>
  ) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.loading = true;
    this.ds.getTaskList().subscribe({
      next:  tasks => {
        this.tasks   = tasks.slice().sort((a, b) => a.task.localeCompare(b.task));
        this.loading = false;
      },
      error: ()    => { this.toastr.error('Failed to load tasks'); this.loading = false; }
    });
  }

  add(): void {
    const name = this.newTaskName.trim();
    if (!name) return;
    this.saving = true;
    this.ds.createTaskType(name).subscribe({
      next: () => {
        this.newTaskName = '';
        this.saving      = false;
        this.loadTasks();
        this.toastr.success(`"${name}" added`);
      },
      error: () => {
        this.saving = false;
        this.toastr.error('Failed to add task');
      }
    });
  }

  delete(task: any): void {
    this.ds.deleteTaskType(task.id).subscribe({
      next: () => {
        this.tasks = this.tasks.filter(t => t.id !== task.id);
        this.toastr.success(`"${task.task}" removed`);
      },
      error: () => this.toastr.error('Failed to delete task')
    });
  }

  close(): void { this.dialogRef.close(); }
}
