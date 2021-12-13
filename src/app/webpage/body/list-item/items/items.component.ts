import { Component, Input, OnInit } from '@angular/core';
import { ItemService } from 'src/app/service/item.service';
import { Item } from 'src/model/items.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  @Input() item: Item;
  amount = 0;
  constructor(private itemSv: ItemService) { 
    
  }

  ngOnInit(): void {
  }
  
  onPutIn(item: Item, amountInput: number) {
    this.itemSv.getChosenItems(item, amountInput)
  }
}
