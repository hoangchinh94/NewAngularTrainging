import { BehaviorSubject } from "rxjs";
import { UserBag } from "src/model/userShoppingBag.model";

export class UserManagementService {
    _userBag: UserBag[] = [
        new UserBag('chinh', 'chinh@gmail', '123', 'ao somi', 'shirt', 10000, 5),
        new UserBag('alaa', 'alaa@gmail', '123', 'Quần jean', 'trouser', 2000, 1),    
    ];
    userBag = new BehaviorSubject(this._userBag);
}