import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'az-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  availableTasks: { label: string; value: string }[] = [];
  groups: { id: any; title: string }[] = [];

  selectedProject: any = null;
  selectedTask: any    = null;
  startDate            = '';
  endDate              = '';
  isLoading            = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddTaskComponent>,
    private ds: DataService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    // Pre-fill dates if passed from right-click context menu
    const pre = this.data || {};
    if (pre.defaultStart instanceof Date) {
      this.startDate = pre.defaultStart.toISOString().slice(0, 10);
    }
    if (pre.defaultEnd instanceof Date) {
      this.endDate = pre.defaultEnd.toISOString().slice(0, 10);
    }

    // Load task types
    this.ds.getTaskList().subscribe((res: any[]) => {
      this.availableTasks = res.map(t => ({ label: t.task, value: t.task }));
    });

    // Load projects
    this.ds.getAllItems().subscribe((data: any) => {
      this.groups = (data.groups || []).filter((g: any) => g.id !== -1);
    });
  }

  submit(): void {
    if (!this.selectedProject || !this.selectedTask || !this.startDate || !this.endDate) { return; }
    this.isLoading = true;

    const task = {
      name:       this.selectedTask,
      project_id: this.selectedProject,
      start:      `${this.startDate}T00:00:00Z`,
      end:        `${this.endDate}T00:00:00Z`,
    };

    this.ds.createTask(task).subscribe({
      next: () => {
        this.toastr.success('Task created!', 'Success');
        this.dialogRef.close(true);
      },
      error: () => {
        this.toastr.error('Failed to create task.', 'Error');
        this.isLoading = false;
      }
    });
  }

  cancel(): void { this.dialogRef.close(false); }
}
