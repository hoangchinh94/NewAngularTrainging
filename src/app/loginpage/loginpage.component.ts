import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginManagementService } from '../service/login-management.service';
import { ShoppingBagService } from '../service/shopping-bag.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit, OnDestroy {
  subcription = new  Subscription;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)])
  });

  constructor(
    private loginSv: LoginManagementService, 
    private router: Router, 
    private shoppingSv: ShoppingBagService) { }

  ngOnInit(): void {
    
  }
  onSubmitLogin(form: FormGroup) {
    this.loginSv.onSubmitLoginUser(form.value.email, form.value.password);
    const temporaryShoppingBag = this.shoppingSv.shoppingItems.value.filter(item => item.userGmail === null);
    this.subcription = this.loginSv.loginAccount.subscribe(data => {
      if (data) {
        if(temporaryShoppingBag){
          for(let a of temporaryShoppingBag) {
            a.userGmail = form.value.email;
          }     
        }
        this.router.navigate(['/']);
      } else {
        alert('Tài khoản này chưa được đăng ký!');
      }
    })
  }

  get email() { return this.loginForm.get('email') };
  get password() { return this.loginForm.get('password') };

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }
}
