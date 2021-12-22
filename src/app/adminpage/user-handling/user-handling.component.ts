import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemService } from 'src/app/service/item.service';
import { ShoppingBagService } from 'src/app/service/shopping-bag.service';
import { UserManagementService } from 'src/app/service/user-management.service';
import { UserBag } from 'src/model/userShoppingBag.model';

@Component({
  selector: 'app-user-handling',
  templateUrl: './user-handling.component.html',
  styleUrls: ['./user-handling.component.scss']
})
export class UserHandlingComponent implements OnInit {
    subscription = new Subscription;
    userBags: UserBag[];
    stt = 0 ;

  constructor(private userBagSv: UserManagementService) {

  }

  ngOnInit() {
    this.userBags =  this.userBagSv.userBag.value;
    console.log(this.userBags)
    
  }

}
