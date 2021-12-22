import { BehaviorSubject, map, Subject } from "rxjs";
import { Account } from "src/model/account.model";

export class LoginManagementService {
    _listAdminAccount: Account[] = [
        new Account('admin', 'admin@gmail.com', '123456')
    ]
    _listUserAccount: Account[] = [
        new Account('user', 'user@gmail.com', '123456'),
        new Account('user1', 'user1@gmail.com', '123456')
    ];
    listAdminAccount = new BehaviorSubject(this._listAdminAccount)
    listUserAccount = new BehaviorSubject(this._listUserAccount);
    loginAccount = new BehaviorSubject<Account>(null);
    
    getUserName() {
        return this.loginAccount.value;
    }

    addNewAccount(id: string, userName: string, email: string, password: string) {
        const newAccount = { id: id, name: userName, email: email, password: password }
        this.listUserAccount.next(this.listUserAccount.getValue().concat([newAccount]))
    }

    onSubmitLoginUser(email: string, password: string) {
        const accounts = this.listUserAccount.value;
        accounts.find((data) => {
            if (data.email === email && data.password === password) {
                this.loginAccount.next(data);
                return true;
            }
            return false;
        })      
    };

    onSubmitAdminLogin(email: string, password: string) {
        const accounts = this.listAdminAccount.value;
        accounts.find((data) => {
            if (data.email === email && data.password === password) {
                this.loginAccount.next(data);
                return true;
            }
            return false;
        })      
    }
    onLogOut() {
        this.loginAccount.next(null)
    }

}   