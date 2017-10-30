import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {StudentManagementService} from './services/StudentManagementService/student-management.service';
import {StudentDetailsComponent} from './student-details/student-details.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StudentManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
