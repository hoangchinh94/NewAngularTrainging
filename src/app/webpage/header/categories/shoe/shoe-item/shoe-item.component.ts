import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginManagementService } from 'src/app/service/login-management.service';
import { ShoppingBagService } from 'src/app/service/shopping-bag.service';
import { Item } from 'src/model/items.model';
@Component({
  selector: 'app-shoe-item',
  templateUrl: './shoe-item.component.html',
  styleUrls: ['./shoe-item.component.scss']
})
export class ShoeItemComponent {
  @Input() item: Item;
  @Output() putIn = new EventEmitter<object>();
  subscription: Subscription;
  amount: number;
  constructor(private shoppingSv: ShoppingBagService, private userSv: LoginManagementService) {
  }

  ngOnInit(): void {
    this.amount = 0;
  }

  onPutIn(item: Item, amount: number) {
    const userName = this.userSv.loginAccount.getValue()?.name;
    const userGmail = this.userSv.loginAccount.getValue()?.email;
    this.shoppingSv.onPutInShoppingItem(userName, userGmail, item, amount);
    this.amount = 0;
   }
 
  // onPutIn(item: Item, amount: number) {
  //   this.putIn.emit({item, amount});
  //   this.amount = 0;
  // }
}