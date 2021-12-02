import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ItemService } from 'src/app/service/item.service';
import { Item } from 'src/model/items.model';

@Component({
  selector: 'app-item-handling',
  templateUrl: './item-handling.component.html',
  styleUrls: ['./item-handling.component.scss']
})
export class ItemHandlingComponent implements OnInit {
  @Input('titleName') titleName: string = '';
  availableType = [
    { type: 'Áo', value: 'shirt' },
    { type: 'Quần', value: 'trouser' },
    { type: 'Mũ', value: 'cap' },
    { type: 'Giày', value: 'shoe' },
    { type: 'Đồng hồ', value: 'watch' }
  ]
  shirtListItem: Item[];
  trouserListItem: Item[];
  shoeListItem: Item[];
  capListItem: Item[];
  watchListItem: Item[];

  constructor(private adminItemSv: ItemService) { 
    this.shirtListItem = this.adminItemSv.getListItem('shirt');
    this.trouserListItem = this.adminItemSv.getListItem('trouser');
    this.shoeListItem = this.adminItemSv.getListItem('shoe');
    this.capListItem = this.adminItemSv.getListItem('cap');
    this.watchListItem = this.adminItemSv.getListItem('watch');
  }

  ngOnInit(): void {
  }
  
  onSubmit(submittedForm: any) {
    this.adminItemSv.addItem(submittedForm.value.name, submittedForm.value.type, submittedForm.value.srcUrl);
    this.shirtListItem = this.adminItemSv.getListItem('shirt');
    this.trouserListItem = this.adminItemSv.getListItem('trouser');
    this.shoeListItem = this.adminItemSv.getListItem('shoe');
    this.capListItem = this.adminItemSv.getListItem('cap');
    this.watchListItem = this.adminItemSv.getListItem('watch');
  }
}
