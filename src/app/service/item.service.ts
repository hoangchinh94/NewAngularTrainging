import { EventEmitter } from "@angular/core";
import { BehaviorSubject, filter, map, Subject, tap } from "rxjs";
import { Item } from "src/model/items.model";
import { TypeItem } from "src/model/types.model";
export class ItemService {
  _listItems: Item[] = [
    new Item('T-shirt', 'shirt', '200.000', 'assets/images/T-shirt.png'),
    new Item('Sơ mi', 'shirt', '150.000', 'assets/images/somi.png'),
    new Item('Jean', 'trouser', '250.000', 'assets/images/jean.jpg'),
    new Item('Quần tây', 'trouser', '180.000', 'assets/images/quantay.png'),
    new Item('Bitis', 'shoe', '300.000', 'assets/images/bitis.png'),
    new Item('Bata', 'shoe', '250.000', 'assets/images/bata.png'),
    new Item('Mũ jean', 'cap', '150.000', 'assets/images/jeancap.png'),
    new Item('Mũ hoa', 'cap', '160.000', 'assets/images/flowercap.png'),
    new Item('Rolex', 'watch', '1.500.000', 'assets/images/rolex.png'),
    new Item('Apple', 'watch', '1.000.000', 'assets/images/apple.png'),
  ];

  listItems = new BehaviorSubject(this._listItems)
  newItem: Item;
  typeItems: TypeItem[] = [
    new TypeItem('shirt', 'Áo'),
    new TypeItem('trouser', 'Quần'),
    new TypeItem('shoe', 'Giày'),
    new TypeItem('cap', 'Mũ'),
    new TypeItem('watch', 'Đồng hồ'),
  ];

  newListItem: Item[];
  getListItem(type: string) {
    return this.listItems.pipe(
      map(data => data.filter(item => item.type === type))
    );
  }

  getTitleName() {
    return this.typeItems;
  }


  addItem(name: string, type: string, price: string, srcUrl: string) {
    const newItem = { name: name, type: type, price: price, srcUrl: srcUrl };
    this._listItems.push(newItem);
  }

  deleteItem(itemDelete: Item) {
    // const item = this._listItems.findIndex(item => item.name = itemDelete.name)
    // if(item !==)
    // delete this.listItems[item];
  }
}