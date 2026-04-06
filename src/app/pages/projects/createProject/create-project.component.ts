import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/pages/dashboard/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'az-create-project',
  templateUrl: './create-project.component.html',
  styleUrls:  ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  name        = '';
  companyName = '';
  status      = 'active';
  start       = '';
  end         = '';
  foremanName = '';
  saving      = false;

  foremenOptions: { label: string; value: string }[] = [];

  statusOptions = [
    { label: 'Active',    value: 'active'    },
    { label: 'On Hold',   value: 'on_hold'   },
    { label: 'Completed', value: 'complete'  },
  ];

  constructor(
    public dialogRef: MatDialogRef<CreateProjectComponent>,
    private ds: DataService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.ds.getForemans().subscribe((data: any) => {
      const list = Array.isArray(data) ? data : (data.foremen ?? []);
      this.foremenOptions = list.map((f: any) => ({
        label: `${f.firstName ?? f.firstname ?? ''} ${f.lastName ?? f.lastname ?? ''}`.trim(),
        value: `${f.firstName ?? f.firstname ?? ''} ${f.lastName ?? f.lastname ?? ''}`.trim(),
      }));
    });
  }

  submit(): void {
    if (!this.name.trim() || !this.companyName.trim() || !this.start || !this.end) { return; }
    this.saving = true;
    const payload = {
      name:        this.name.trim(),
      companyName: this.companyName.trim(),
      status:      this.status,
      foremanName: this.foremanName,
      start:       `${this.start}T00:00:00Z`,
      end:         `${this.end}T00:00:00Z`,
      tasks:       [],
    };
    this.ds.createProjectApi(payload).subscribe({
      next: () => {
        this.toastr.success('Project created!', 'Success');
        this.dialogRef.close(true);
      },
      error: () => {
        this.toastr.error('Failed to create project.', 'Error');
        this.saving = false;
      }
    });
  }

  cancel(): void { this.dialogRef.close(false); }
}
