import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ItemService } from 'src/app/service/item.service';
import { LoginManagementService } from 'src/app/service/login-management.service';
import { ShoppingBagService } from 'src/app/service/shopping-bag.service';
import { Item } from 'src/model/items.model';
import { ShoppingITem } from 'src/model/shopping-item.model';
@Component({
    selector: 'app-shopping-bag',
    templateUrl: './shopping-bag.component.html',
    styleUrls: ['./shopping-bag.component.scss']
})
export class ShoppingBagComponent implements OnInit, OnDestroy {
    shoppingItems: ShoppingITem[];
    subscription = new Subscription;
    userName = null;
    userGmail = null;
    total: number;

    constructor(
        private shoppingSV: ShoppingBagService,
        private temporaryAccountSv: LoginManagementService,
        private router: Router) {
    }

    ngOnInit() {
        this.subscription = this.temporaryAccountSv.loginAccount.subscribe(data => {
            if (data !== null) {
                this.userName = data.name;
                this.userGmail = data.email;
            }
        });
        
        this.subscription.add(this.shoppingSV.shoppingItems.subscribe((data) => {
            this.shoppingItems = data?.filter(item => item.userGmail === this.userGmail);
            var sumPrice = 0;
            this.shoppingItems?.forEach((cart) => {
                sumPrice += cart.price * cart.amount;
            })
            this.total = sumPrice;
        }));
    };

    onChangeAmount(id, amount) {
        this.shoppingSV.updateShoppingBag(id, amount);
    }

    deleteChosenItem(item) {
        if (!confirm('Bạn muốn xóa sản phẩm này khỏi giỏ hàng?')) {
            return;
        };
        this.shoppingSV.onDeleteChosenItem(item);
    }

    onPaid() {
        const checkUserGmail = this.shoppingItems.find(item => item.userGmail === null);
        if (checkUserGmail) {
            if (confirm('Bạn cần đăng nhập để thanh toán!')) {
                this.router.navigate(['/login']);
                this.temporaryAccountSv.loginAccount.subscribe(data => {
                    if (data !== null) {
                        this.userName = data.name;
                        this.userGmail = data.email;
                    }
                })
            }
            return
        }

        if (!checkUserGmail) {
            if (this.shoppingItems.length === 0) {
                alert('Giỏ hàng trống!');
            }
            else {
                alert('Bạn đã thanh toán thành công!');
                this.total = 0;
                this.shoppingSV.clearCart();
            }
        }

    }

    logout() {
        this.router.navigate(['/login']);
        this.temporaryAccountSv.onLogOut();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}