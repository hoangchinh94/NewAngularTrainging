import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemService } from 'src/app/service/item.service';
import { Item } from 'src/model/items.model';

@Component({
  selector: 'app-itemmanage',
  templateUrl: './itemmanage.component.html',
  styleUrls: ['./itemmanage.component.scss']
})
export class ItemmanageComponent implements OnInit {
@Input() item: Item;
@Output() deleteItem = new EventEmitter<Item>()
subcription: Subscription;
  constructor( private itemSv: ItemService) { }

  ngOnInit(): void {
  }

  onDelete(itemDelete: Item) {
    if (!confirm('Bạn thực sự muốn xóa sản phẩm này?')){
      return
    }
    this.deleteItem.emit(itemDelete);
  }
}
