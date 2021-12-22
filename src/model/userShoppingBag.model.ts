export class UserBag {
    public userAccount: string;
    public userGmail: string;
    public id: string; 
    public name: string;
    public type: string;
    public price: number;
    public amount: number;
  
    constructor(userAccount: string, userGmail: string, id: string, name: string, type: string, price: number, amount: number) {
        this.userAccount = userAccount;
        this.userGmail = userGmail;
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = price;
        this.amount = amount;
      }
  }