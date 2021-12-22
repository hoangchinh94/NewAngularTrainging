import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemService } from 'src/app/service/item.service';
import { LoginManagementService } from 'src/app/service/login-management.service';
import { ShoppingBagService } from 'src/app/service/shopping-bag.service';
import { Item } from 'src/model/items.model';

@Component({
  selector: 'app-shoe',
  templateUrl: './shoe.component.html',
  styleUrls: ['./shoe.component.scss']
})
export class ShoeComponent implements OnInit {
  subscription: Subscription;
  items: Item[];
  // userName = null;
  // userGmail = null;

  constructor(private shoeSv: ItemService) {
  }

  ngOnInit(): void {
    // this.subscription = this.userSv.loginAccount.subscribe(data => { 
    //   if(data !== null) {
    //     this.userName = data.userName;
    //     this.userGmail = data.email;
    //   }     
    // });
    this.subscription = this.shoeSv.getListItem('shoe').subscribe((data) => {
      this.items = data;
    }); 
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
}
