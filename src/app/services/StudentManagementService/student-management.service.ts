import {Injectable} from '@angular/core';
import {Student} from '../../../model/student';

@Injectable()
export class StudentManagementService {

  private students = [new Student('Trajche', 'Trajkov', 151190, 'PET'),
    new Student('Stojche', 'Stojchev', 131190, 'IKI'),
    new Student('Petar', 'Petkov', 112011, 'KNIA'),
    new Student('Dimko', 'Dimkov', 153090, 'PET')];

  /* [{name:'Trajche',_surname:'Trajkov',_index:151190,_module:'PET'},
 {name:'Petar',_surname:'Petkov',_index:131190,_module:'IKI'},
 {name:'Stojche',_surname:'Stojchev',_index:112011,_module:'KNIA'},
 {name:'Dimko',_surname:'Dimkov',_index:153090,_module:'kni'}
 ]*/

  constructor() {
  }

  public Studenti(): Promise<Student[]> {
    return Promise.resolve(this.students);
  }

  /*
   public Studenti(): Student[]{
     return this.students;
   }*/

  /*public editStudent(student: Student, id: number): void {
    this.students[id] = student;
    console.log(student);
  }
*/
  public edit(orginalStudent: Student, updatedStudent: Student): Promise<any> {
    Object.assign(orginalStudent, updatedStudent);
    return Promise.resolve();
  }

  /*public addStudent(student: Student): void {
    this.students.push(student);
  }*/
  public add(newStudent: Student): Promise<any> {
    this.students.push(newStudent);
    return Promise.resolve();
  }


}

