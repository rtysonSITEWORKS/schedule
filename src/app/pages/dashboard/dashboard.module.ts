import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { DashboardComponent } from './dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { DayPilotModule } from '@daypilot/daypilot-lite-angular';
import { DashboardService } from './dashboard.service';
import { GANTT_GLOBAL_CONFIG, NgxGanttModule } from '@worktile/gantt';
import { MatMenuModule } from '@angular/material/menu';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { ActionNeededComponent } from './action-needed/action-needed.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { AddTaskComponent } from './add-task/add-task.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgMultiselectDropdown3Module } from 'ng-multiselect-dropdown3';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { ExportPdfComponent } from './export-pdf/export-pdf.component';
import { ManageTasksComponent } from './manage-tasks/manage-tasks.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DirectivesModule,
    PipesModule,
    RouterModule.forChild(routes),
    DayPilotModule,
    NgxGanttModule,
    MatMenuModule,
    CdkMenuTrigger,
    CdkMenu,
    CdkMenuItem,
    NgSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxDatatableModule,
    ToastrModule,
    NgMultiselectDropdown3Module,
    SelectDropDownModule,
  ],
  providers: [
    {
      provide: GANTT_GLOBAL_CONFIG,
      useValue: {
        dateFormat: {
          week: 'W',
          month: 'M',
          quarter: 'QQQ',
          year: 'yyyy',
          yearMonth: 'MMM yyyy',
          yearQuarter: 'yyyy QQQ'
        },
      }
    },
    DashboardService,
  ],
  declarations: [
    DashboardComponent,
    ActionNeededComponent,
    AddTaskComponent,
    EditTaskComponent,
    ExportPdfComponent,
    ManageTasksComponent,
  ]
})
export class DashboardModule { }
