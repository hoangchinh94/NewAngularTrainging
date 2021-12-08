import { Component, Input, OnDestroy, OnInit } from '@angular/core';
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
  items: Item[];

  constructor(private itemSv: ItemService) {
  }

  ngOnInit() {
    this.items = this.itemSv.getListItem(this.type);
  }
}
