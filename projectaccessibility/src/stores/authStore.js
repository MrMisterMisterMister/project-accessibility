import Cookies from "js-cookie";
import { autorun, makeAutoObservable } from "mobx";

export default class AuthStore {
    // This "might" be a problem because the published
    // app doesn't return the usercookie for some reason
    token = Cookies.get("userCookie") || Cookies.get("token");

    constructor () {
        makeAutoObservable(this);

        // this runs immediately when the token is set unlike reaction()
        autorun(() => {
            if (this.token) {
                Cookies.set("token", this.token, {
                    expires: new Date(Date.now() + 30 * 60 * 1000), // might do this in a global variable
                    sameSite: "None",
                    secure: true
                });
            }
        });
    }

    setToken (token) {
        this.token = token;
    }
}
