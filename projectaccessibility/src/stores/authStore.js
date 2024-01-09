import Cookies from "js-cookie";
import { autorun, makeAutoObservable } from "mobx";

export default class AuthStore {
    // This "might" be a problem because the published
    // app doesn't return the usercookie for some reason
    token = Cookies.get("userCookie");

    constructor () {
        makeAutoObservable(this);

        // this runs immediately when the token is set unlike reaction()
        autorun(() => {
            if (this.token) {
                Cookies.set("token", this.token);
            } else {
                Cookies.remove("token");
            }
        });
    }

    setToken (token) {
        this.token = token;
    }
}
