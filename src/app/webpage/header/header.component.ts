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
  // @Output() onChosenType = new EventEmitter<string>()

  // chosenList: Item[];
  subscription: Subscription;

  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {
  }
}
