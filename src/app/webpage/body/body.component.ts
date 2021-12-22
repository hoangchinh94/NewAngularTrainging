import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemService } from 'src/app/service/item.service';
import { LoginManagementService } from 'src/app/service/login-management.service';
import { ShoppingBagService } from 'src/app/service/shopping-bag.service';
import { Item } from 'src/model/items.model';
import { TypeItem } from 'src/model/types.model';
import { ShoppingBagComponent } from '../shopping-bag/shoppping-bag.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit, OnDestroy {
  categories: TypeItem[];
  userName = null;
  userGmail = null;
  subscription: Subscription;
  constructor(private itemSv: ItemService, private shoppingSv: ShoppingBagService, private userSv: LoginManagementService) {
  }

  ngOnInit(): void {
    this.subscription = this.userSv.loginAccount.subscribe(data => { 
      if(data !== null) {
        this.userName = data.name;
        this.userGmail = data.email;
      }     
    })
    this.categories = this.itemSv.getTitleName();
  }

  onPutIn(value) {
    this.shoppingSv.onPutInShoppingItem(this.userName, this.userGmail, value.item, value.amountInput);
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
