import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from 'src/app/service/item.service';
import { Item } from 'src/model/items.model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  @Input() shirts: Item[];
  @Input() trousers: Item[];
  @Input() shoes: Item[];
  @Input() caps: Item[];
  @Input() watches: Item[];

  constructor(private itemSv: ItemService) { 
    this.shirts = this.itemSv.getListItem('shirt');
    this.trousers = this.itemSv.getListItem('trouser');
    this.shoes = this.itemSv.getListItem('shoe');
    this.caps = this.itemSv.getListItem('cap');
    this.watches = this.itemSv.getListItem('watch');
  }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(){
    this.shirts = this.itemSv.getListItem('shirt');
    this.trousers = this.itemSv.getListItem('trouser');
    this.shoes = this.itemSv.getListItem('shoe');
    this.caps = this.itemSv.getListItem('cap');
    this.watches = this.itemSv.getListItem('watch');
  }
}
