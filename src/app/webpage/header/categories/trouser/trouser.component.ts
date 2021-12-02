import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/service/item.service';
import { Item } from 'src/model/items.model';

@Component({
  selector: 'app-trouser',
  templateUrl: './trouser.component.html',
  styleUrls: ['./trouser.component.scss']
})
export class TrouserComponent implements OnInit {
  items: Item[]; 

  constructor(private trouserSv: ItemService) { 
    this.items = this.trouserSv.getListItem('trouser')
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.items = this.trouserSv.getListItem('trouser');
  }
}
