import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/service/item.service';
import { Item } from 'src/model/items.model';

@Component({
  selector: 'app-shirt',
  templateUrl: './shirt.component.html',
  styleUrls: ['./shirt.component.scss']
})
export class ShirtComponent implements OnInit {
  shirtSv = new ItemService;
  items: Item[];

  constructor() { 
    this.items = this.shirtSv.getListItem('shirt')
  }

  ngOnInit(): void {
  }

}