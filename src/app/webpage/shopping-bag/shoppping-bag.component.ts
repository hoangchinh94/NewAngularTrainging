import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemService } from 'src/app/service/item.service';
import { Item } from 'src/model/items.model';
import { ShoppingITem } from 'src/model/shopping-item.model';
@Component({
    selector: 'app-shopping-bag',
    templateUrl: './shopping-bag.component.html',
    styleUrls: ['./shopping-bag.component.html']
})
export class ShoppingBagComponent implements OnInit, OnDestroy {
    shoppingItems: ShoppingITem[];
    subscription: Subscription;
    total: number;

    constructor(private shoppingSV: ItemService) {

    }

    ngOnInit() {
        this.total = 0
        this.subscription = this.shoppingSV.shoppingItems.subscribe((data) => {
            this.shoppingItems = data;
        })  
        this.shoppingItems.forEach(item => this.total += item.price * item.amount)
    }

    onPaid() {
        if (this.shoppingItems.length === 0) {
            console.log(this.shoppingItems.length   )
            alert('Giỏ hàng trống!')
        }
        else {
            alert('Bạn đã thanh toán thành công!');
            this.shoppingItems = null;
            this.total =0
        }
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
      }
    // deleteChosenItem(item: ShoppingITem) {
    //     this.shoppingItems.shoppingSV.deleteChosenItem(item)
    // }
}