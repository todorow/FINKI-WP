import {Component, OnInit} from '@angular/core';
import {Student} from '../../model/student';
import {StudentManagementService} from '../services/StudentManagementService/student-management.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  public students: Student[];


  constructor(private router: Router, private studentmanagementservice: StudentManagementService) {

  }

  ngOnInit() {
    this.studentmanagementservice.Studenti()
      .then(students => this.students = students)
      .catch(error => console.log(error));
    //this.students = this.studentmanagementservice.Studenti();
  }


}
