import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email] ),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)] ),
    confirmPassword: new FormControl(null, Validators.required)
  });


  constructor() { }

  ngOnInit(): void {
  }
  onSubmitLogin() {

  }

  get email() {return this.loginForm.get('email')};
  get password() {return this.loginForm.get('password')};
}
