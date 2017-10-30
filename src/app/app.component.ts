import {Component, OnInit} from '@angular/core';
import {Student} from '../model/student';
import {StudentManagementService} from './services/StudentManagementService/student-management.service';
import {log} from "util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public students: Student[];
  public curStudent: Student;
  private pom: boolean = true;


  constructor(private studentmanagementservice: StudentManagementService) {

  }

  ngOnInit() {
    this.students = this.studentmanagementservice.Studenti();
  }


  showStudent(student: Student) {
    this.curStudent = student;
    log(student.name);
    this.pom = false;
  }





}
