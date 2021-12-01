import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/service/item.service';
import { Item } from 'src/model/items.model';

@Component({
  selector: 'app-trouser',
  templateUrl: './trouser.component.html',
  styleUrls: ['./trouser.component.scss']
})
export class TrouserComponent implements OnInit {
trouserSv = new ItemService
  items: Item[];
  

  constructor() { 
    this.items = this.trouserSv.getListItem('trouser')
  }

  ngOnInit(): void {
  }

}
