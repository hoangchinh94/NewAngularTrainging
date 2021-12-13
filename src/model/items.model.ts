export class Item {
  public id: string;
  public name: string;
  public type: string;
  public price: number;
  public srcUrl: string;

  constructor(id: string, name: string, type: string, price: number, srcUrl: string) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.price = price;
    this.srcUrl = srcUrl;
  }
}