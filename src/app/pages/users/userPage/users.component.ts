import { Component, ViewChild } from '@angular/core';
import { DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/pages/dashboard/data.service';
import { CreateUserComponent } from '../createUser/create-user/create-user.component';
import { EditUserComponent } from '../editUser/edit-user.component';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'az-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  selection = SelectionType.single;

  rows:     any[] = [];
  allRows:  any[] = [];
  selected: any[] = [];
  loading    = false;
  searchTerm = '';

  constructor(
    private ds: DataService,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) {}

  ngOnInit() { this.loadUsers(); }

  loadUsers(): void {
    this.loading = true;
    (this.ds as any).foremansCache$ = null;
    this.ds.getForemans().subscribe({
      next: (data: any) => {
        const list = Array.isArray(data) ? data : (data.foremen ?? []);
        this.allRows = list.map((f: any) => ({
          id:        f.id,
          firstname: f.firstName ?? f.firstname ?? '',
          lastname:  f.lastName  ?? f.lastname  ?? '',
        }));
        this.applySearch();
        this.loading = false;
      },
      error: () => {
        this.toastr.error('Failed to load foremen.', 'Error');
        this.loading = false;
      }
    });
  }

  onSearch(): void { this.applySearch(); }

  private applySearch(): void {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) { this.rows = [...this.allRows]; return; }
    this.rows = this.allRows.filter(r =>
      (r.firstname || '').toLowerCase().includes(term) ||
      (r.lastname  || '').toLowerCase().includes(term)
    );
  }

  addItem(): void {
    const ref = this.dialog.open(CreateUserComponent, { width: '500px' });
    ref.afterClosed().subscribe(result => {
      if (result) { this.loadUsers(); }
    });
  }

  editRow(row: any): void {
    const ref = this.dialog.open(EditUserComponent, {
      width: '500px',
      data: { id: row.id, firstname: row.firstname, lastname: row.lastname }
    });
    ref.afterClosed().subscribe(result => {
      if (result) { this.loadUsers(); }
    });
  }

  deleteRow(row: any): void {
    const ref = this.dialog.open(ConfirmDialogComponent, {
      width: '380px',
      data: {
        title:   'Delete Foreman',
        message: `Delete ${row.firstname} ${row.lastname}? This cannot be undone.`
      }
    });
    ref.afterClosed().subscribe(confirmed => {
      if (!confirmed) { return; }
      this.ds.deleteForeman(row.id).subscribe({
        next: () => {
          this.toastr.success('Foreman deleted.', 'Success');
          this.loadUsers();
        },
        error: () => this.toastr.error('Failed to delete foreman.', 'Error')
      });
    });
  }

  onSelect({ selected }: any) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }
}
