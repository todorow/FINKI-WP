import {AbstractControl, ValidationErrors} from '@angular/forms';

export class ModuleValidator {
  static moduleOfFinki(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).toLowerCase() == 'kni' ||
      (control.value as string).toLowerCase() == 'pet'
      || (control.value as string).toLowerCase() == 'knia' ||
      (control.value as string).toLowerCase() == 'iki'
      || (control.value as string).toLowerCase() == 'mt' ||
      (control.value as string).toLowerCase() == 'asi') {
      //  console.log((control.value as string).toLowerCase());
      return null;
    }
    return {moduleOfFinki: true};

  }

}
