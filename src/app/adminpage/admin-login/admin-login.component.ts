import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginManagementService } from 'src/app/service/login-management.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit, OnDestroy {
  subcription = new Subscription;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)])
  });

  constructor(private router: Router, private adminLoginSv: LoginManagementService)
    { }

  ngOnInit(): void {}
  onSubmitLogin(form: FormGroup) {
    if(form.value.email === null || form.value.password === null) {
        alert('Vui lòng nhập tài khoản và mật khẩu!')
        return;
    };
    this.adminLoginSv.onSubmitAdminLogin(form.value.email, form.value.password);
    this.subcription = this.adminLoginSv.loginAccount.subscribe(data => {
        if (data) {
            this.router.navigate(['/admin']);
            return
        }
        alert('Bạn phải là admin');
        return;
    });
  };

  get email() { return this.loginForm.get('email') };
  get password() { return this.loginForm.get('password') };

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  };
}
