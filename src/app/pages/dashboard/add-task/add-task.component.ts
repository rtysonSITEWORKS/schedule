import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { GanttItem, GanttGroup } from '@worktile/gantt';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'az-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  availableTasks: any[] = [];
  subs = new Subscription();

  taskrange: FormGroup;
  isFormValid: boolean = false;
  isFormSubmitted: boolean = false;
  isTaskValid: boolean = false;  // Define the property

  items: GanttItem[] = [];
  groups: GanttGroup[] = [];
  selectedProject: any = {};
  selectedTask: any = {};
  isLoading = false;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<AddTaskComponent>, private ds: DataService, private formBuilder: FormBuilder, private toastr: ToastrService) {
    this.subs.add(this.ds.getTaskList()
        .subscribe((res:any) => {
          this.availableTasks = res.map(user => {
            return {
              label: `${user.task}`,
              value: `${user.task}`,
              // You can include other properties if needed
            };
          });
          this.availableTasks = [...this.availableTasks];
        }));
    this.ds.getAllItems().subscribe((data) => {
      this.groups = data.groups;
      this.items = data.items;
      
      this.groups = data.groups.filter(group => group.id !== -1);  // Exclude holiday groups
      this.items = data.items.filter(item => item.groupId !== -1);  // Exclude holiday items
    });
    this.watchSelectedTask();

  }
  watchSelectedTask() {
    this.selectedTask = null;
    this.isTaskValid = false;
  }

  ngOnInit(): void {
    const pre = this.data || {};
    this.taskrange = this.formBuilder.group({
      start: [pre.defaultStart ?? '', Validators.required],
      end:   [pre.defaultEnd   ?? '', Validators.required]
    });

    // Subscribe to valueChanges of the form to update isFormValid
    this.taskrange.valueChanges.subscribe(() => {
      this.isFormValid = this.taskrange.valid;
    });
  }

  onTaskChange(task: any) {
    this.selectedTask = task;
    this.isTaskValid = task && Object.keys(task).length > 0;
  }


  submit(){
    this.isLoading = true;
    let task = {
      name: this.selectedTask,
      project_id: this.selectedProject,
      start: new Date(this.taskrange.get('start').value),
      end: new Date(this.taskrange.get('end').value),
    };

    this.subs.add(
      this.ds.createTask(task).subscribe({
        next: () => {
          this.toastr.success('Task created successfully!', 'Success');
          this.dialogRef.close({});
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Error creating task:', err);
          this.toastr.error('Failed to create task. Please try again.', 'Error');
          this.isLoading = false;
        }
      })
    );
    
  }

  cancel(){
    this.dialogRef.close({  });
  }
}
