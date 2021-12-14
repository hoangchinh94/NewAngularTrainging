import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemService } from 'src/app/service/item.service';
import { Item } from 'src/model/items.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  subscription: Subscription;
  numberChosen;
  priceMustPaid;

  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.subscription = this.itemService.amountWasChosen.subscribe(number =>
      this.numberChosen = number
    )
    this.subscription = this.itemService.priceMustPaid.subscribe(number =>
      this.priceMustPaid = number
    )
  }
}
