import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemService } from 'src/app/service/item.service';
import { Item } from 'src/model/items.model';

@Component({
  selector: 'app-shirt',
  templateUrl: './shirt.component.html',
  styleUrls: ['./shirt.component.scss']
})
export class ShirtComponent implements OnInit {
  subscription: Subscription
  items: Item[];

  constructor(private shirtSv: ItemService) { 
  }

  ngOnInit(): void {
    this.subscription = this.shirtSv.getListItem('shirt').subscribe((data) => {
    this.items = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
