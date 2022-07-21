import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  noPuedeSerAgathor ( control: FormControl ): ValidationErrors | null {
    const valor: string = control.value?.trim().toLowerCase();

    if(valor === 'agathor') {
      return {
        noAgathor: true
      }
    }

    return null;
  }

  isEqualFields ( field1: string, field2: string) {

    return ( formGroup: AbstractControl ): ValidationErrors | null => {

      const field1Value = formGroup.get(field1)?.value;
      const field2Value = formGroup.get(field2)?.value;

      if( field1Value !== field2Value)
      {
        const error = { notEquals: true};
        formGroup.get(field2)?.setErrors(error);
        return error
      }

      formGroup.get(field2)?.setErrors(null);

      return null;
    }
  }

}
