import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from 'src/app/service/item.service';
import { Item } from 'src/model/items.model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  itemSv =  new ItemService;
  @Input() shirts: Item[];
  @Input() trousers: Item[];
  @Input() shoes: Item[];
  @Input() caps: Item[];
  @Input() watches: Item[];

  constructor() { 
    this.shirts = this.itemSv.getListItem('shirt');
    this.trousers = this.itemSv.getListItem('trouser');
    this.shoes = this.itemSv.getListItem('shoe');
    this.caps = this.itemSv.getListItem('cap');
    this.watches = this.itemSv.getListItem('watch');
  }

  ngOnInit(): void {
  }
  
}
