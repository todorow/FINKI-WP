///<reference path="../../../node_modules/@angular/forms/src/model.d.ts"/>
///<reference path="../Validators/module-validator.ts"/>
import {Component, OnInit,} from '@angular/core';
import {Student} from '../../model/student';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentManagementService} from '../services/StudentManagementService/student-management.service';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ModuleValidator} from '../Validators/module-validator';


@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  in: number;
  index: number;
  student: Student;
  studentedit: FormGroup;


  public students: Student[];

  constructor(private router: Router, private route: ActivatedRoute, private studentmanagementservice: StudentManagementService) {

  }

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
    //this.students=this.studentmanagementservice.Studenti();
    this.studentmanagementservice.Studenti()
      .then(students => this.getStudent(students)).catch(error => console.log(error));


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

    this.studentedit = new FormGroup(
      {
        'name': new FormControl(this.student.name, [
          Validators.required, Validators.minLength(2), Validators.maxLength(30)
        ]),
        '_surname': new FormControl(this.student._surname, [
          Validators.required, Validators.minLength(2), Validators.maxLength(30)

        ]),
        '_index': new FormControl(this.student._index, [
          Validators.maxLength(6), Validators.minLength(6), Validators.min(100000), Validators.max(999999), Validators.required
        ]),
        '_module': new FormControl(this.student._module, [Validators.required, ModuleValidator.moduleOfFinki,])

      }
    );


  }


  onSumbit(v: AbstractControl) {
    console.log(v);
    let str: any = v;
    console.log(str.name);
    console.log(str);
    //this.studentmanagementservice.editStudent(new Student(str.name,str._surname,str._index,str._module),this.in);
    this.studentmanagementservice.edit(this.student, new Student(str.name, str._surname, str._index, str._module));
    this.router.navigate(["/list"]);
  }
}
