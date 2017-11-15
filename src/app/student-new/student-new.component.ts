import {Component, OnInit} from '@angular/core';
import {Student} from '../../model/student';
import {StudentManagementService} from '../services/StudentManagementService/student-management.service';
import {Router} from '@angular/router';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ModuleValidator} from '../Validators/module-validator';


@Component({
  selector: 'app-student-new',
  templateUrl: './student-new.component.html',
  styleUrls: ['./student-new.component.css']
})
export class StudentNewComponent implements OnInit {
  student: Student;
  studentedit: FormGroup;

  constructor(private router: Router, private studentmanagementservice: StudentManagementService) {
  }

  /*
    sendStudent(){
    console.log(this.student.name);
    this.studentmanagementservice.add(this.student);
     this.router.navigate(['/list'])
    }*/
  get name() {
    return this.studentedit.get('name');
  }

  get _surname() {
    return this.studentedit.get('_surname');
  }

  get _index() {
    return this.studentedit.get('_index');
  }

  get _module() {
    return this.studentedit.get('_module');
  }

  ngOnInit() {
    this.studentedit = new FormGroup(
      {
        'name': new FormControl('', [
          Validators.required, Validators.minLength(2), Validators.maxLength(30)
        ]),
        '_surname': new FormControl('', [
          Validators.required, Validators.minLength(2), Validators.maxLength(30)

        ]),
        '_index': new FormControl('', [
          Validators.maxLength(6), Validators.minLength(6), Validators.min(100000), Validators.max(999999), Validators.required
        ]),
        '_module': new FormControl('', [Validators.required, ModuleValidator.moduleOfFinki,])

      }
    );


  }

  onSumbit(v: AbstractControl) {
    console.log(v);
    let str: any = v;
    console.log(str.name);
    console.log(str);
    //this.studentmanagementservice.editStudent(new Student(str.name,str._surname,str._index,str._module),this.in);
    this.studentmanagementservice.add(new Student(str.name, str._surname, str._index, str._module));
    this.router.navigate(["/list"]);

  }
}
