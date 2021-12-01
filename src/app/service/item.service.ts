import { Item } from "src/model/items.model";
export class ItemService {
    listItems: Item[] = [
        new Item('T-shirt', 'shirt', 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/440017/item/goods_00_440017.jpg?width=1008&impolicy=quality_75'),
        new Item('Sơ mi', 'shirt','https://thuvienmuasam.com/uploads/default/original/2X/e/ebace14de8c553f414a830be6bb2b3c13a1194e6.jpeg'),
        new Item('Jean', 'trouser','https://storage.googleapis.com/cdn.nhanh.vn/store/2071/ps/20210121/bj041_xanh_da_tri_1_50857999998_o.jpg'),
        new Item('Quần tây', 'trouser','https://malanaz.com/wp-content/uploads/2018/04/40.jpg'),
        new Item('Bitis', 'shoe','https://muagiachinhhang.com/wp-content/uploads/2020/12/giay-bitis-hunterxdentsu-redder-huong-giang-dsmh03001trg-dwh03001trg.jpg'),
        new Item('Bata', 'shoe','https://namtrungsafety.com/wp-content/uploads/2021/05/giay-bata-trang.jpg'),
        new Item('Mũ jean', 'cap','https://vn-live-05.slatic.net/p/5a762d7529d8acf0c1e7801bac1708ce.jpg_720x720q80.jpg_.webp'),
        new Item('Mũ hoa', 'cap','https://cf.shopee.vn/file/8c3cb43fd501f679fce851a1264beb60'),
        new Item('Rolex', 'watch',''),
        new Item('Apple', 'watch',''),

      ]

      newListItem: Item[];
      getListItem(type: string) {
        return this.listItems.filter(item => item.type === type);
      }

      addItem(name: string, type: string, srcUrl: string) {
        const newItem = {name: name, type: type, srcUrl: srcUrl};
        this.listItems.push(newItem);
        // console.log(newItem)
      }
}