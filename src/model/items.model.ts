export class Item {
  public name: string;
  public type: string;
  public price: number;
  public srcUrl: string;

  constructor(name: string, type: string, price: number, srcUrl: string) {
    this.name = name;
    this.type = type;
    this.price = price;
    this.srcUrl = srcUrl;
  }
}