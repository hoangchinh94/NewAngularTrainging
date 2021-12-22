import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemService } from 'src/app/service/item.service';
import { Item } from 'src/model/items.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() type: string;
  @Input("titleName") titleName: string;
  @Output() putIn = new EventEmitter<object>();
  items: Item[];
  subscription: Subscription;
  

  constructor(private itemSv: ItemService) {

  }

  ngOnInit() {
    this.subscription = this.itemSv.getListItem(this.type).subscribe((data) => {
    this.items = data;
    });
  }

  onPutIn(value){
    // console.log(value)
    this.putIn.emit(value);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
