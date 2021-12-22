import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item } from 'src/model/items.model';
@Component({
  selector: 'app-shirt-item',
  templateUrl: './shirt-item.component.html',
  styleUrls: ['./shirt-item.component.scss']
})
export class ShirtItemComponent {
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