export class Item {
  public name: string;
  public type: string;
  public price: string;
  public srcUrl: string;

  constructor(name: string, type: string, price: string, srcUrl: string) {
    this.name = name;
    this.type = type;
    this.price = price;
    this.srcUrl = srcUrl;
  }
}