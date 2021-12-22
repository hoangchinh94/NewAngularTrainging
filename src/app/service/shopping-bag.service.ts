import { BehaviorSubject } from "rxjs";
import { Item } from "src/model/items.model";
import { ShoppingITem } from "src/model/shopping-item.model";

export class ShoppingBagService {
    shoppingListItem: ShoppingITem[] = [];
    shoppingItems = new BehaviorSubject<ShoppingITem[]>(this.shoppingListItem);

    onPutInShoppingItem(userName:string, userGmail: string, itemWasChosen: Item, amount: number) {
        const currValue = this.shoppingItems.value;
        const newValue = new ShoppingITem(userName, userGmail, itemWasChosen.id, itemWasChosen.name, itemWasChosen.type, itemWasChosen.price, amount);
        const updateValue = [...currValue, newValue];
        this.shoppingItems.next(updateValue);
    }

    updateShoppingBag(id: string, amount: number) {
        const currValue = this.shoppingItems.value;
        currValue.find((item) => {
            if (item.id === id) {
                item.amount = amount;
                return true;
            }
            return false;
        })
        this.shoppingItems.next(currValue)
    }

    onDeleteChosenItem(deleteItem: ShoppingITem) {
        const currValue = this.shoppingItems.value;
        const updateValue = currValue.filter(item => item.id !== deleteItem.id);
        this.shoppingItems.next(updateValue);
    }

    clearCart() {
        this.shoppingItems.next(null);
    }
}