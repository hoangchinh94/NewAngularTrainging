import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemService } from 'src/app/service/item.service';
import { ShoppingBagService } from 'src/app/service/shopping-bag.service';
import { UserManagementService } from 'src/app/service/user-management.service';
import { UserBag } from 'src/model/userShoppingBag.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
})
export class UserDetailComponent implements OnInit {
    subscription = new Subscription;

  constructor(private userBagSv: UserManagementService) {

  }

  ngOnInit() {
    
  }

}
