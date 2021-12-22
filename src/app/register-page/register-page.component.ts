import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, Validators, FormBuilder, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { GuidHelper } from '../guild.helper';
import { LoginManagementService } from '../service/login-management.service';
import { forbiddenNameValidator } from '../shared/forbiden.directive';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  signupForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl(null, Validators.required)
  },
    {
      validators: [this.match('password', 'confirmPassword')]
    });

  checkMatch: '';
  constructor(private registerService: LoginManagementService, private router: Router) { }

  ngOnInit() { }

  get email() { return this.signupForm.get('email') };
  get password() { return this.signupForm.get('password') };
  get confirmPassword() { return this.signupForm.get('confirmPassword') };

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

  onSubmit(form) {
    const id = GuidHelper.newGuid();
    this.registerService.addNewAccount(id, form.value.userName, form.value.email, form.value.password)
    this.router.navigate(['login'])
  }
}
