import 'pace';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing';
import { AppConfig } from './app.config';
import { AppComponent } from './app.component';
import { ErrorComponent } from './pages/error/error.component';
import { ToastrModule } from 'ngx-toastr';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { LoginService } from './logic/services/login.service';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatDialogModule } from '@angular/material/dialog';
import { NgMultiselectDropdown3Module } from 'ng-multiselect-dropdown3';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { AuthguardService } from './logic/services/authguard.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { DataService } from './pages/dashboard/data.service';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: 'toast-top-right', timeOut: 3000 }),
    AppRoutingModule,
    CommonModule,
    FormsModule,
    NgSelectModule,
    NgxDatatableModule,
    MatDialogModule,
    NgMultiselectDropdown3Module,
    SelectDropDownModule,
  ],
  providers: [
    AppConfig,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    DatePipe,
    LoginService,
    DataService,
    AuthguardService,
    provideHttpClient(withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
