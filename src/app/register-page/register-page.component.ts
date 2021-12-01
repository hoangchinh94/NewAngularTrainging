import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, Validators, FormBuilder, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  signupForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email] ),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)] ),
    confirmPassword: new FormControl(null, Validators.required)
  },
  {
    validators: [this.match('password', 'confirmPassword')]
  });

  checkMatch: 'aa';
  constructor() { }

  ngOnInit() {}

  onSubmit() {
   
  }

  get email() {return this.signupForm.get('email')};
  get password() {return this.signupForm.get('password')};
  get confirmPassword() {return this.signupForm.get('confirmPassword')};

  match(controlName: string, checkControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const checkControl = controls.get(checkControlName);

      if (checkControl.errors && !checkControl.errors['matching']) {
        return null;
      }

      if (control.value !== checkControl.value) {
        controls.get(checkControlName).setErrors({ matching: true });
        return { matching: true };
      } else {
        return null;
      }
    };
  }
}
