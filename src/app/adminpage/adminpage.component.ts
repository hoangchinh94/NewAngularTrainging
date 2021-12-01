import { Component, OnInit } from '@angular/core';
import { Item } from 'src/model/items.model';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.scss']
})
export class AdminpageComponent implements OnInit {
  adminItemSv: Item[];
  itemTotal: Item[];
  constructor() { }

  ngOnInit(): void {
  }

}
