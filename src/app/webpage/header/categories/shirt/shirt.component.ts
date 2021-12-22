import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemService } from 'src/app/service/item.service';
import { LoginManagementService } from 'src/app/service/login-management.service';
import { ShoppingBagService } from 'src/app/service/shopping-bag.service';
import { Item } from 'src/model/items.model';

@Component({
  selector: 'app-cap',
  templateUrl: './shirt.component.html',
  styleUrls: ['./shirt.component.scss']
})
export class ShirtComponent implements OnInit {
  subscription: Subscription;
  items: Item[];
  userName = null;
  userGmail = null;

  constructor(private capSv: ItemService, private shoppingSv: ShoppingBagService, private userSv: LoginManagementService) {
  }

  ngOnInit(): void {
    this.subscription = this.userSv.loginAccount.subscribe(data => { 
      if(data !== null) {
        this.userName = data.name;
        this.userGmail = data.email;
      }     
    });
    this.subscription.add(this.capSv.getListItem('shirt').subscribe((data) => {
      this.items = data;
    })); 
  }

  onPutIn(value) {
    console.log(value)
    this.shoppingSv.onPutInShoppingItem(this.userName, this.userGmail, value.item, value.amount);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
}
