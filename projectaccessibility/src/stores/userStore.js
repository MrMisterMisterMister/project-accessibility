import { makeAutoObservable, runInAction } from "mobx";
import { createEndpoint } from "../api/axiosClient";

// On crack
export default class UserStore {
    user = null;

    constructor () {
        makeAutoObservable(this);
    }

    get isLoggedIn () {
        return !!this.user;
    }

    setUser = user => {
        this.user = user;
    };

    getUser = async () => {
        const user = await createEndpoint("users/getcurrentuser").get();
        runInAction(() => { this.user = user; });
    };

    // should be here but dunno how to do it yet
    // login
    // register
    // logout
}
