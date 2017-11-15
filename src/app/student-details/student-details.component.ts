import {Component, OnInit} from '@angular/core';
import {Student} from '../../model/student';
import {ActivatedRoute} from '@angular/router';
import {StudentManagementService} from '../services/StudentManagementService/student-management.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  // @Input() student: Student = null;
  student: Student;
  public students: Student[];
  index: number;

  constructor(private route: ActivatedRoute, private studentmanagementservice: StudentManagementService) {
  }

  ngOnInit() {
    // this.students=this.studentmanagementservice.Studenti();
    this.studentmanagementservice.Studenti()
      .then(students => this.getStudent(students)).catch(error => console.log(error));


    /*
    }*/
  }

  getStudent(S: Student[]): void {
    this.students = S;
    const id = +this.route.snapshot.paramMap.get('index');
    // this.students=this.studentmanagementservice.Studenti();

    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i]._index == id) {
        this.student = this.students[i];
      }
    }

  }

}
