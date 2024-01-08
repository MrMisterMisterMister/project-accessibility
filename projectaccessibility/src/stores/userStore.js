import { makeAutoObservable } from "mobx";

export default class UserStore {
    user = null;

    constructor () {
        makeAutoObservable(this);
    }

    get isLoggedIn () {
        return !!this.user;
    }

    login = async creds => {
    };

    logout = () => {
    };
}
