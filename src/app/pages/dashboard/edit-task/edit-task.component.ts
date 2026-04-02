import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'az-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent {
  selectedForeman: any;
  subs = new Subscription();

  foremanFilters: any[] = [
  ]; 

  taskrange: FormGroup;
  id: any;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<EditTaskComponent>, public ds: DataService) {
    this.selectedForeman = data.foundItem.foreman;
    const startDate = new Date(data.foundItem.start);
    const endDate = new Date(data.foundItem.end);
    this.taskrange = new FormGroup({
      start: new FormControl<Date | null>(startDate), // Set initial value for start control
      end: new FormControl<Date | null>(endDate), // Set initial value for end control
    });
    this.ds.getForemans().subscribe((data) => {
      this.foremanFilters = data;
      this.foremanFilters = this.foremanFilters.map(item => {
        return {
          label: `${item.firstname} ${item.lastname}`,
          value: `${item.firstname} ${item.lastname}`
        };
      });
    });
    this.id = data.foundItem.id

  }



  submit(){
    
    let task = {
      id: this.id,
      start: new Date(this.taskrange.get('start').value),
      end: new Date(this.taskrange.get('end').value),
      foreman: this.selectedForeman
    };

    this.subs.add(
      this.ds.editTask(task).subscribe({
        next: () => this.dialogRef.close({}),
        error: (err) => console.error('Error updating task:', err)
      })
    );
    
  }

  cancel(){
    this.dialogRef.close({ reason: null });
  }
}


