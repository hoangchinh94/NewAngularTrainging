import { EventEmitter } from "@angular/core";
import { BehaviorSubject, filter, map, Subject, tap } from "rxjs";
import { Item } from "src/model/items.model";
import { ShoppingITem } from "src/model/shopping-item.model";
import { TypeItem } from "src/model/types.model";
export class ItemService {
  _listItems: Item[] = [
    new Item('T-shirt', 'shirt', 200000, 'assets/images/T-shirt.png'),
    new Item('Sơ mi', 'shirt', 150000, 'assets/images/somi.png'),
    new Item('Jean', 'trouser', 250000, 'assets/images/jean.jpg'),
    new Item('Quần tây', 'trouser', 180000, 'assets/images/quantay.png'),
    new Item('Bitis', 'shoe', 300000, 'assets/images/bitis.png'),
    new Item('Bata', 'shoe', 250000, 'assets/images/bata.png'),
    new Item('Mũ jean', 'cap', 150000, 'assets/images/jeancap.png'),
    new Item('Mũ hoa', 'cap', 160000, 'assets/images/flowercap.png'),
    new Item('Rolex', 'watch', 1500000, 'assets/images/rolex.png'),
    new Item('Apple', 'watch', 1000000, 'assets/images/apple.png'),
  ];
  shoppingListItem: ShoppingITem[] =[];
  listItems = new BehaviorSubject(this._listItems);
  // shoppingItems = new BehaviorSubject(this.shoppingListItem);
  typeItems: TypeItem[] = [
    new TypeItem('shirt', 'Áo'),
    new TypeItem('trouser', 'Quần'),
    new TypeItem('shoe', 'Giày'),
    new TypeItem('cap', 'Mũ'),
    new TypeItem('watch', 'Đồng hồ'),
  ];

  getListItem(type: string) {
    return this.listItems.pipe(
      map(data => data.filter(item => item.type === type))
    );
  }

  getTitleName() {
    return this.typeItems;
  }


  addItem(name: string, type: string, price: number, srcUrl: string) {
    const newItem = { name: name, type: type, price: price, srcUrl: srcUrl };
    this._listItems.push(newItem);
    this.listItems.next(this._listItems);
    console.log(newItem)
  }

  deleteItem(itemDelete: Item) {
    this._listItems.forEach((item, index) => {
      if (item.name == itemDelete.name) this._listItems.splice(index, 1);
    })
    this.listItems.next(this._listItems);
  }

  getChosenItems(itemNameChosen: String, amount: number) {
    var item = this._listItems.find(item => item.name == itemNameChosen);
    var shopping = new ShoppingITem(item.name, item.type, item.price, amount)
    // this.shoppingItems = this.listItems.pipe(
    //   map(data => data.find(item => item.name === itemNameChosen))
    // );
    this.shoppingListItem.push(shopping);
  }
}