export class ShoppingITem {
    public name: string;
    public type: string;
    public price: number;
    public amount: number;
  
    constructor(name: string, type: string, price: number, amount: number) {
      this.name = name;
      this.type = type;
      this.price = price;
      this.amount = amount;
    }
  }