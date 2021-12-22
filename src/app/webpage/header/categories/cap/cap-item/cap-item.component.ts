import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item } from 'src/model/items.model';
@Component({
  selector: 'app-cap-item',
  templateUrl: './cap-item.component.html',
  styleUrls: ['./cap-item.component.scss']
})
export class CapItemComponent {
  @Input() item: Item;
  @Output() putIn = new EventEmitter<object>();
  subscription: Subscription;
  amount: number;
  constructor() {
  }

  ngOnInit(): void {
    this.amount = 0;
  }

  onPutIn(item: Item, amount: number) {
    this.putIn.emit({item, amount});
    this.amount = 0;
  }
}