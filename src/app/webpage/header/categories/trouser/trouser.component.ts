import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemService } from 'src/app/service/item.service';
import { Item } from 'src/model/items.model';

@Component({
  selector: 'app-trouser',
  templateUrl: './trouser.component.html',
  styleUrls: ['./trouser.component.scss']
})
export class TrouserComponent implements OnInit {
  subscription: Subscription;
  items: Item[];
  amount: number;

  constructor(private trouserSV: ItemService) { 
  }

  ngOnInit(): void {
    this.subscription = this.trouserSV.getListItem('trouser').subscribe((data) => {
      this.items = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onPutIn(itemName: string, amountInput: number) {
  //   this.trouserSV.getChosenItems(itemName, amountInput)
  }
}
