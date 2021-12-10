import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { WebpageComponent } from './webpage/webpage.component';
import { HeaderComponent } from './webpage/header/header.component';
import { BodyComponent } from './webpage/body/body.component';
import { ItemsComponent } from './webpage/body/list-item/items/items.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ListItemComponent } from './webpage/body/list-item/list-item.component';
import { ItemService } from './service/item.service';
import { CapComponent } from './webpage/header/categories/cap/cap.component';
import { ShirtComponent } from './webpage/header/categories/shirt/shirt.component';
import { ShoeComponent } from './webpage/header/categories/shoe/shoe.component';
import { TrouserComponent } from './webpage/header/categories/trouser/trouser.component';
import { WatchComponent } from './webpage/header/categories/watch/watch.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { ItemHandlingComponent } from './adminpage/item-handling/item-handling.component';
import { ItemmanageComponent } from './adminpage/item-handling/itemmanage/itemmanage.component';
import { ShoppingBagComponent } from './webpage/shopping-bag/shoppping-bag.component';






@NgModule({
  declarations: [
    AppComponent,
    WebpageComponent,
    HeaderComponent,
    BodyComponent,
    ListItemComponent,
    ItemsComponent,
    RegisterPageComponent,
    CapComponent,
    ShirtComponent,
    ShoeComponent,
    TrouserComponent,
    WatchComponent,
    LoginpageComponent,
    AdminpageComponent,
    ItemHandlingComponent,
    ItemmanageComponent,
    ShoppingBagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
