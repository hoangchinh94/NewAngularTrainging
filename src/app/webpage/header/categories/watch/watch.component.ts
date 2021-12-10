import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemService } from 'src/app/service/item.service';
import { Item } from 'src/model/items.model';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit {
  subscription: Subscription;
  items: Item[];

  constructor(private watchSv: ItemService) { 
  }

  ngOnInit(): void {
    this.subscription = this.watchSv.getListItem('watch').subscribe((data) => {
      this.items = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onPutIn(itemName: string) {
    // this.watchSv.getChosenItems(itemName)
  }
}
