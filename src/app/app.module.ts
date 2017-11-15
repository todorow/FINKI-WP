import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StudentManagementService} from './services/StudentManagementService/student-management.service';
import {StudentDetailsComponent} from './student-details/student-details.component';
import {RouterModule, Routes} from '@angular/router';
import {StudentEditComponent} from './student-edit/student-edit.component';
import {StudentNewComponent} from './student-new/student-new.component';
import {StudentListComponent} from './student-list/student-list.component';


const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {path: 'list', component: StudentListComponent},
  {path: 'detais/:index', component: StudentDetailsComponent},
  {path: 'new', component: StudentNewComponent},
  {path: 'edit/:index', component: StudentEditComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    StudentEditComponent,
    StudentNewComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule,
    FormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [StudentManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
