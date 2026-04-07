import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'az-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  selectedForeman = '';
  foremanFilters: { label: string; value: string }[] = [];
  startDate = '';
  endDate   = '';
  saving    = false;
  private id: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditTaskComponent>,
    private ds: DataService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    const item = this.data.foundItem;
    this.id             = item.id;
    this.selectedForeman = item.foreman || '';

    // Parse existing dates — item.start/end are formatted strings like "15 Apr 2025 00:00:00"
    const parseToInput = (val: any): string => {
      if (!val) return '';
      try {
        const d = new Date(val);
        if (isNaN(d.getTime())) return '';
        return d.toISOString().slice(0, 10);
      } catch { return ''; }
    };
    this.startDate = parseToInput(item.start);
    this.endDate   = parseToInput(item.end);

    this.ds.getForemans().subscribe((data: any[]) => {
      this.foremanFilters = data.map(f => ({
        label: `${f.firstname} ${f.lastname}`,
        value: `${f.firstname} ${f.lastname}`,
      }));
    });
  }

  submit(): void {
    if (!this.startDate || !this.endDate) { return; }
    this.saving = true;

    const task = {
      id:     this.id,
      start:  `${this.startDate}T00:00:00Z`,
      end:    `${this.endDate}T00:00:00Z`,
      foreman: this.selectedForeman,
    };

    this.ds.editTask(task).subscribe({
      next: () => {
        this.toastr.success('Task updated!', 'Success');
        this.dialogRef.close(task);
      },
      error: () => {
        this.toastr.error('Failed to update task.', 'Error');
        this.saving = false;
      }
    });
  }

  cancel(): void { this.dialogRef.close(false); }
}
