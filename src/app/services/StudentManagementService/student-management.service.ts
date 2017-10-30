import {Injectable} from '@angular/core';
import {Student} from '../../../model/student';

@Injectable()
export class StudentManagementService {

  private students = [new Student('Trajche', 'Trajkov', 151190, 'PET'),
    new Student('Stojche', 'Stojchev', 131190, 'IKI'),
    new Student('Petar', 'Petkov', 112011, 'KNIA'),
    new Student('Dimko', 'Dimkov', 153090, 'PET')];

  constructor() {
  }

  public Studenti(): Student[] {
    return this.students;
  }


}

