import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemService } from 'src/app/service/item.service';
import { Item } from 'src/model/items.model';

@Component({
  selector: 'app-shoe',
  templateUrl: './shoe.component.html',
  styleUrls: ['./shoe.component.scss']
})
export class ShoeComponent implements OnInit {
  subscription: Subscription
  items: Item[];
  amount: number;

  constructor(private shoeSv: ItemService) { 
  }

  ngOnInit(): void {
    this.subscription = this.shoeSv.getListItem('shoe').subscribe((data) => {
      this.items = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onPutIn(itemName: string, amountInput: number) {
    // this.shoeSv.getChosenItems(itemName, amountInput)
  }
}
