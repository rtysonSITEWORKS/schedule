import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/pages/dashboard/data.service';
import { ToastrService } from 'ngx-toastr';

export interface EditUserData {
  id:        number;
  firstname: string;
  lastname:  string;
}

@Component({
  selector: 'az-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {
  firstName: string;
  lastName:  string;
  saving = false;

  constructor(
    public dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EditUserData,
    private ds: DataService,
    private toastr: ToastrService
  ) {
    this.firstName = data.firstname;
    this.lastName  = data.lastname;
  }

  submit(): void {
    const first = this.firstName.trim();
    const last  = this.lastName.trim();
    if (!first && !last) { return; }
    this.saving = true;
    this.ds.updateForeman(this.data.id, first, last).subscribe({
      next: () => {
        this.toastr.success('Foreman updated!', 'Success');
        this.dialogRef.close(true);
      },
      error: () => {
        this.toastr.error('Failed to update foreman.', 'Error');
        this.saving = false;
      }
    });
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}
