import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BodyComponent } from './webpage/body/body.component';
import { ShirtComponent } from './webpage/header/categories/shirt/shirt.component';
import { TrouserComponent } from './webpage/header/categories/trouser/trouser.component';
import { ShoeComponent } from './webpage/header/categories/shoe/shoe.component';
import { CapComponent } from './webpage/header/categories/cap/cap.component';
import { WatchComponent } from './webpage/header/categories/watch/watch.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { ShoppingBagComponent } from './webpage/shopping-bag/shoppping-bag.component';
import { AdminLoginComponent } from './adminpage/admin-login/admin-login.component';
import { UserHandlingComponent } from './adminpage/user-handling/user-handling.component';
import { UserDetailComponent } from './adminpage/user-handling/user-detail/user-detail.component';

const  appRoutes = [
  { path: '', component: BodyComponent},
  { path: 'shirt', component: ShirtComponent},
  { path: 'trouser', component: TrouserComponent},
  { path: 'shoe', component: ShoeComponent},
  { path: 'cap', component: CapComponent},
  { path: 'watch', component: WatchComponent},
  { path: 'register', component: RegisterPageComponent},
  { path: 'login', component: LoginpageComponent},
  { path: 'admin', component: AdminpageComponent},
  { path: 'loginAdmin', component: AdminLoginComponent},
  { path: 'userHandling', component: UserHandlingComponent},
  { path: 'userDetail', component: UserDetailComponent},
  { path: 'shopping-bag', component: ShoppingBagComponent},
  { path: '**', redirectTo: '/'}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
