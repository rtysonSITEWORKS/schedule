import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/pages/dashboard/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'az-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  firstName = '';
  lastName  = '';
  saving    = false;

  constructor(
    public dialogRef: MatDialogRef<CreateUserComponent>,
    private ds: DataService,
    private toastr: ToastrService
  ) {}

  submit(): void {
    const first = this.firstName.trim();
    const last  = this.lastName.trim();
    if (!first && !last) { return; }
    this.saving = true;
    this.ds.createForeman(first, last).subscribe({
      next: () => {
        this.toastr.success('Foreman added!', 'Success');
        this.dialogRef.close(true);
      },
      error: () => {
        this.toastr.error('Failed to add foreman.', 'Error');
        this.saving = false;
      }
    });
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}
