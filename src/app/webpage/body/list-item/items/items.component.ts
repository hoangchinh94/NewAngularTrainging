import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoginManagementService } from 'src/app/service/login-management.service';
import { ShoppingBagService } from 'src/app/service/shopping-bag.service';
import { Item } from 'src/model/items.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  @Input() item: Item;
  @Output() putIn = new EventEmitter<object>();
  amount: number;
  constructor( private userSv: LoginManagementService, private shoppingCartSv: ShoppingBagService) {   
  }

  ngOnInit(): void {
    this.amount = 0;
  }
  
  onPutIn(item: Item, amountInput: number) {
    // const userName = this.userSv.loginAccount.getValue()?.userName;
    // const userGmail = this.userSv.loginAccount.getValue()?.email;
    // console.log(userName, userGmail, item, amountInput)

    // this.shoppingCartSv.onPutInShoppingItem( userName, userGmail, item, amountInput);
    this.putIn.emit({item, amountInput})
    
    this.amount = 0;
  }
}
