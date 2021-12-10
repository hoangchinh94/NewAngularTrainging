import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemService } from 'src/app/service/item.service';
import { Item } from 'src/model/items.model';

@Component({
  selector: 'app-cap',
  templateUrl: './cap.component.html',
  styleUrls: ['./cap.component.scss']
})
export class CapComponent implements OnInit {
  subscription: Subscription;
  items: Item[];
  amount: number;

  constructor(private capSv: ItemService) {
  }

  ngOnInit(): void {
    this.subscription = this.capSv.getListItem('cap').subscribe((data) => {
      this.items = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onPutIn(itemName: string, amountInput: number) {
    this.capSv.getChosenItems(itemName, amountInput)
  }
}
