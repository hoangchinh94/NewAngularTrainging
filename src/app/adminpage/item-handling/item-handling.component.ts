import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemService } from 'src/app/service/item.service';
import { Item } from 'src/model/items.model';

@Component({
  selector: 'app-item-handling',
  templateUrl: './item-handling.component.html',
  styleUrls: ['./item-handling.component.scss']
})
export class ItemHandlingComponent implements OnInit {
  @Input() type: string;
  @Input("titleName") titleName: string;
  items: Item[];
  subscription: Subscription;


  constructor(private itemSv: ItemService) {

  }

  ngOnInit() {
    this.subscription = this.itemSv.getListItem(this.type).subscribe((data) => {
      this.items = data;
    });
  }
  onDeleteItem(itemDelete: Item) {
    this.subscription = this.itemSv.deleteItem(itemDelete).subscribe(itemDelete =>
      this.items = itemDelete.filter(item => item.type === this.type)
    )}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}
