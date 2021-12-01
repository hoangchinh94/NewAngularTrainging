import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/service/item.service';
import { Item } from 'src/model/items.model';

@Component({
  selector: 'app-shoe',
  templateUrl: './shoe.component.html',
  styleUrls: ['./shoe.component.scss']
})
export class ShoeComponent implements OnInit {
  shoeSv = new ItemService;
  items: Item[];
  

  constructor() { 
    this.items = this.shoeSv.getListItem('shoe')
  }

  ngOnInit(): void {
  }

}
