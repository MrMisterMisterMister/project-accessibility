import { makeAutoObservable } from "mobx";
import { getRequest } from "../api/axiosClient";

// On crack
export default class UserStore {
    user = null;

    constructor () {
        makeAutoObservable(this);
    }

    get isLoggedIn () {
        return !!this.user;
    }

    setUser (user) {
        this.user = user;
    }

    get userId () {
        return this.user && this.user.userId ? this.user.userId : null;
    }

    // User info
    fetchUserInfo () {
        const unserInfo = getRequest("login/userinfo/");
        unserInfo
            .then((response) => {
                this.setUser(response.data);
            });
    }
}
