import { Subject } from "rxjs";
import { Item } from "src/model/items.model";
import { TypeItem } from "src/model/types.model";
export class ItemService {
  listItems: Item[] = [
    new Item('T-shirt', 'shirt', 'assets/images/T-shirt.png'),
    new Item('Sơ mi', 'shirt', 'assets/images/somi.png'),
    new Item('Jean', 'trouser', 'assets/images/jean.jpg'),
    new Item('Quần tây', 'trouser', 'assets/images/quantay.png'),
    new Item('Bitis', 'shoe', 'assets/images/bitis.png'),
    new Item('Bata', 'shoe', 'assets/images/bata.png'),
    new Item('Mũ jean', 'cap', 'assets/images/jeancap.png'),
    new Item('Mũ hoa', 'cap', 'assets/images/flowercap.png'),
    new Item('Rolex', 'watch', 'assets/images/rolex.png'),
    new Item('Apple', 'watch', 'assets/images/apple.png'),
  ];

  typeItems: TypeItem[] = [
    new TypeItem('shirt', 'Áo'),
    new TypeItem('trouser', 'Quần'),
    new TypeItem('shoe', 'Giày'),
    new TypeItem('cap', 'Mũ'),
    new TypeItem('watch', 'Đồng hồ')
  ];

  showItem = new Subject<void>();
  newListItem: Item[];
  getListItem(type: string) {
    return this.listItems.filter(item => item.type === type);
  }

  getTitleName() {
    return this.typeItems;
  }

  addItem(name: string, type: string, srcUrl: string) {
    const newItem = { name: name, type: type, srcUrl: srcUrl };
    this.listItems.push(newItem);
    // this.showItem.next();
  }
}