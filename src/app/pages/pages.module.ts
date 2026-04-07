import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { DirectivesModule } from '../theme/directives/directives.module';
import { PipesModule } from '../theme/pipes/pipes.module';
import { PagesRoutingModule } from './pages.routing';
import { PagesComponent } from './pages.component';
import { MenuComponent } from '../theme/components/menu/menu.component';
import { SidebarComponent } from '../theme/components/sidebar/sidebar.component';
import { NavbarComponent } from '../theme/components/navbar/navbar.component';
import { MessagesComponent } from '../theme/components/messages/messages.component';
import { BreadcrumbComponent } from '../theme/components/breadcrumb/breadcrumb.component';
import { BackTopComponent } from '../theme/components/back-top/back-top.component';
import { UsersComponent } from './users/userPage/users.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CreateUserComponent } from './users/createUser/create-user/create-user.component';
import { ProjectsComponent } from './projects/projects.component';
import { TasksComponent } from './tasks/tasks.component';
import { EditUserComponent } from './users/editUser/edit-user.component';
import { EditProjectComponent } from './projects/editProject/edit-project.component';
import { CreateProjectComponent } from './projects/createProject/create-project.component';
import { ConfirmDialogComponent } from '../shared/confirm-dialog/confirm-dialog.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrModule } from 'ngx-toastr';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { NgMultiselectDropdown3Module } from 'ng-multiselect-dropdown3';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgScrollbarModule,
    DirectivesModule,
    PipesModule,
    PagesRoutingModule,
    NgxDatatableModule,
    NgSelectModule,
    SelectDropDownModule,
    NgMultiselectDropdown3Module,
    MatDialogModule,
    ToastrModule,
  ],
  declarations: [
    PagesComponent,
    MenuComponent,
    SidebarComponent,
    NavbarComponent,
    MessagesComponent,
    BreadcrumbComponent,
    BackTopComponent,
    UsersComponent,
    CreateUserComponent,
    EditUserComponent,
    ProjectsComponent,
    TasksComponent,
    EditProjectComponent,
    CreateProjectComponent,
    ConfirmDialogComponent,
  ]
})
export class PagesModule { }
