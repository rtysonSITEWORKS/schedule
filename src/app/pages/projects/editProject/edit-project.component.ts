import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/pages/dashboard/data.service';
import { ToastrService } from 'ngx-toastr';

export interface EditProjectData {
  id:      number;
  name:    string;
  company: string;
  foreman: string;
  status:  string;
  start:   string;
  end:     string;
}

@Component({
  selector: 'az-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls:  ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {
  name:       string;
  company:    string;
  foremanName: string;
  status:     string;
  start:      string;
  end:        string;
  saving = false;

  foremenOptions: { label: string; value: string }[] = [];

  statusOptions = [
    { label: 'Active',    value: 'active'    },
    { label: 'On Hold',   value: 'on_hold'   },
    { label: 'Completed', value: 'complete'  },
  ];

  constructor(
    public dialogRef: MatDialogRef<EditProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EditProjectData,
    private ds: DataService,
    private toastr: ToastrService
  ) {
    this.name        = data.name;
    this.company     = data.company;
    this.foremanName = data.foreman ?? '';
    this.status      = data.status;
    this.start       = this.toInputDate(data.start);
    this.end         = this.toInputDate(data.end);
  }

  ngOnInit(): void {
    this.ds.getForemans().subscribe((data: any) => {
      const list = Array.isArray(data) ? data : (data.foremen ?? []);
      this.foremenOptions = list.map((f: any) => ({
        label: `${f.firstName ?? f.firstname ?? ''} ${f.lastName ?? f.lastname ?? ''}`.trim(),
        value: `${f.firstName ?? f.firstname ?? ''} ${f.lastName ?? f.lastname ?? ''}`.trim(),
      }));
    });
  }

  private toInputDate(val: string): string {
    if (!val) { return ''; }
    try {
      const d = new Date(val);
      const yyyy = d.getFullYear();
      const mm   = String(d.getMonth() + 1).padStart(2, '0');
      const dd   = String(d.getDate()).padStart(2, '0');
      return `${yyyy}-${mm}-${dd}`;
    } catch { return val; }
  }

  submit(): void {
    if (!this.name.trim()) { return; }
    this.saving = true;
    const payload = {
      name:        this.name.trim(),
      companyName: this.company.trim(),
      foremanName: this.foremanName ?? '',
      status:      this.status,
      start:       this.start ? `${this.start}T00:00:00Z` : undefined,
      end:         this.end   ? `${this.end}T00:00:00Z`   : undefined,
    };
    this.ds.updateProject(this.data.id, payload).subscribe({
      next: () => {
        this.toastr.success('Project updated!', 'Success');
        this.dialogRef.close(true);
      },
      error: () => {
        this.toastr.error('Failed to update project.', 'Error');
        this.saving = false;
      }
    });
  }

  cancel(): void { this.dialogRef.close(false); }
}
