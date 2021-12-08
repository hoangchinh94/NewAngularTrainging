import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/service/item.service';
import { Item } from 'src/model/items.model';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit {
  items: Item[];

  constructor(private watchSv: ItemService) { 
    this.items = this.watchSv.getListItem('watch')
  }

  ngOnInit(): void {
  }

  // ngAfterViewInit(){
  //   this.items = this.watchSv.getListItem('watch');
  // }
}
