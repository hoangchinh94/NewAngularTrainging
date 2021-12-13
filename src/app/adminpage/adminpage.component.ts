import { Component, OnInit } from '@angular/core';
import { TypeItem } from 'src/model/types.model';
import { ItemService } from '../service/item.service';


@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.scss']
})
export class AdminpageComponent implements OnInit {
  categories: TypeItem[];
  availableType = [
    { type: 'Áo', value: 'shirt' },
    { type: 'Quần', value: 'trouser' },
    { type: 'Mũ', value: 'cap' },
    { type: 'Giày', value: 'shoe' },
    { type: 'Đồng hồ', value: 'watch' }
  ]
  currDate = new Date();
  constructor(private adminSv: ItemService) {
  }

  ngOnInit(): void {
    this.categories = this.adminSv.getTitleName()
  }
  onSubmit(submittedForm: any) {
    const id = this.currDate.toLocaleString()
    this.adminSv.addItem(id, submittedForm.value.name, submittedForm.value.type,submittedForm.value.price, submittedForm.value.srcUrl)
  }
}
