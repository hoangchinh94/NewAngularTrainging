import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/service/item.service';
import { Item } from 'src/model/items.model';

@Component({
  selector: 'app-cap',
  templateUrl: './cap.component.html',
  styleUrls: ['./cap.component.scss']
})
export class CapComponent implements OnInit {
  items: Item[];

  constructor(private capSv: ItemService) { 
    this.items = this.capSv.getListItem('cap');
  }

  ngOnInit(): void {
  }

  // ngAfterViewInit(){
  //   this.items = this.capSv.getListItem('cap');
  // }
}
