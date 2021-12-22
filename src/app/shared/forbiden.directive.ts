import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator, NG_VALIDATORS  } from "@angular/forms";

@Directive({
    selector: '[app-user-validator]',
    providers: [{
      provide: NG_VALIDATORS,
      useExisting: forbiddenNameValidator,
      multi: true
    }]
  })
export class forbiddenNameValidator implements Validator {
    validate(control: AbstractControl) : {[key: string]: any} | null {
      if (control.value && control.value.length != 10) {
        return { 'phoneNumberInvalid': true };
      }
      return null;
    }
}    