import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/model/items.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input('titleName') titleName: string = '';
  @Input() items: Item[];

  constructor() { }

  ngOnInit() {

  }
}
