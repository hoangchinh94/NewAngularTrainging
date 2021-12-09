import { Component, Input, OnInit } from '@angular/core';
import { ItemService } from 'src/app/service/item.service';
import { Item } from 'src/model/items.model';

@Component({
  selector: 'app-itemmanage',
  templateUrl: './itemmanage.component.html',
  styleUrls: ['./itemmanage.component.scss']
})
export class ItemmanageComponent implements OnInit {
@Input() items: Item[];
  constructor( private itemSv: ItemService) { }

  ngOnInit(): void {
  }

  onDelete(itemDelete) {
    this.itemSv.deleteItem(itemDelete)
  }
}
