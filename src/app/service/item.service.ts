import { EventEmitter } from "@angular/core";
import { BehaviorSubject, filter, map, Subject, tap } from "rxjs";
import { Item } from "src/model/items.model";
import { ShoppingITem } from "src/model/shopping-item.model";
import { TypeItem } from "src/model/types.model";
import { GuidHelper } from "../guild.helper";
export class ItemService {
  _listItems: Item[] = [
    new Item('1', 'T-shirt', 'shirt', 200000, 'assets/images/T-shirt.png'),
    new Item('2', 'Sơ mi', 'shirt', 150000, 'assets/images/somi.png'),
    new Item('3', 'Jean', 'trouser', 250000, 'assets/images/jean.jpg'),
    new Item('4', 'Quần tây', 'trouser', 180000, 'assets/images/quantay.png'),
    new Item('5', 'Bitis', 'shoe', 300000, 'assets/images/bitis.png'),
    new Item('6', 'Bata', 'shoe', 250000, 'assets/images/bata.png'),
    new Item('7', 'Mũ jean', 'cap', 150000, 'assets/images/jeancap.png'),
    new Item('8', 'Mũ hoa', 'cap', 160000, 'assets/images/flowercap.png'),
    new Item('9', 'Rolex', 'watch', 1500000, 'assets/images/rolex.png'),
    new Item('10', 'Apple', 'watch', 1000000, 'assets/images/apple.png'),
  ];
  shoppingListItem: ShoppingITem[] = [];
  listItems = new BehaviorSubject(this._listItems);
  shoppingItems = new BehaviorSubject(this.shoppingListItem);
  amountWasChosen = new Subject<number>();
  priceMustPaid = new Subject<number>();
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


  addItem(id: string, name: string, type: string, price: number, srcUrl: string) {
    const newItem = { id: id, name: name, type: type, price: price, srcUrl: srcUrl };
    this.listItems.next(this.listItems.getValue().concat([newItem]))
  }

  deleteItem(itemDelete: Item) {
    return this.listItems.pipe(
      map(data => {
        const a = data.findIndex(i => i.id === itemDelete.id)
        return data.splice(a, 1)
      })
    )

  }

  getChosenItems(itemWasChosen: Item, amount: number) {
    const currValue = this.shoppingItems.value;
    const newValue = new ShoppingITem(itemWasChosen.name, itemWasChosen.type, itemWasChosen.price, amount);
    const updateValue = [...currValue, newValue];
    var sumAmount = 0;
    var sumPrice = 0;
    updateValue.forEach((data) => {
      sumAmount += data.amount;
      sumPrice += data.price;
    })
    this.shoppingItems.next(updateValue);
    this.amountWasChosen.next(sumAmount);
    this.priceMustPaid.next(sumPrice);
  }
  



  // deleteChosenItem(delteItem: ShoppingITem) {
  //   this.shoppingListItem.filter(item => item.name === delteItem.name)
  // }
}