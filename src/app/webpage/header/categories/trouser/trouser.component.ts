import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemService } from 'src/app/service/item.service';
import { Item } from 'src/model/items.model';

@Component({
  selector: 'app-trouser',
  templateUrl: './trouser.component.html',
  styleUrls: ['./trouser.component.scss']
})
export class TrouserComponent implements OnInit {
  subscription: Subscription;
  items: Item[];

  constructor(private capSv: ItemService) { 
  }

  ngOnInit(): void {
    this.subscription = this.capSv.getListItem('trouser').subscribe((data) => {
    this.items = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
