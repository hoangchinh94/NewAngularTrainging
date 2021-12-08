import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from 'src/app/service/item.service';
import { Item } from 'src/model/items.model';
import { TypeItem } from 'src/model/types.model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  categories: TypeItem[];

  constructor(private itemSv: ItemService) {
  }

  ngOnInit(): void {
    this.categories = this.itemSv.getTitleName()
  }
}
