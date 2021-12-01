import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/model/items.model';

@Component({
  selector: 'app-itemmanage',
  templateUrl: './itemmanage.component.html',
  styleUrls: ['./itemmanage.component.scss']
})
export class ItemmanageComponent implements OnInit {
@Input() items: Item[];
  constructor() { }

  ngOnInit(): void {
  }

  deleteItem() {
    
  }
}
