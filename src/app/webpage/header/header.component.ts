import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ItemService } from 'src/app/service/item.service';
import { Item } from 'src/model/items.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() onChosenType = new EventEmitter<string>()
  itemService =  new ItemService;
  // chosenList: Item[];

  constructor() { 
    
  }


  ngOnInit(): void {
  }
  
  chooseType(type: string) {
    this.onChosenType.emit(type)
  }
}
