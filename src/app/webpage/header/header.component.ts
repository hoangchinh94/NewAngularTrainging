import { Component, Input, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginManagementService } from 'src/app/service/login-management.service';
import { ShoppingBagService } from 'src/app/service/shopping-bag.service';
import { ShoppingITem } from 'src/model/shopping-item.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  numberChosen: number;
  priceMustPaid: number;
  shoppingItems: ShoppingITem[];
  @Input() userName: string;
  @Input() userGmail: string;
  showBag: boolean;
  constructor(private itemService: ShoppingBagService, private userSv: LoginManagementService, private router: Router) {
  }

  ngOnInit(): void {
    this.subscription = this.itemService.shoppingItems.subscribe(data => {
      var sumAmount = 0;
      var sumPrice = 0;
      var carts = data?.filter((item) => item.userGmail === this.userGmail);
      
      carts?.forEach((cart) => {
        // var a = carts.reduce((x, cart) => x + (cart.amount * cart.price), 0)
        sumAmount += cart.amount;
        sumPrice += cart.price*cart.amount;
      });
      this.numberChosen = sumAmount;
      this.priceMustPaid = sumPrice;
      this.shoppingItems = carts;7
    })
  }
  onChangeAmount(itemId, amountChoose) {
    this.itemService.updateShoppingBag(itemId, amountChoose);
  }

  logout() {
    this.router.navigate(['/login']);
    this.userSv.onLogOut();
  }

  toAdminPage() {
    const checkAccount = this.userSv.loginAccount.value;
    const adminAccounts = this.userSv.listAdminAccount.value;
    for(let adminAccount of adminAccounts) {
      if(checkAccount?.email === adminAccount.email) {
        this.router.navigate(['/admin']);
        return;
      }
      this.router.navigate(['loginAdmin']);
      return;
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
