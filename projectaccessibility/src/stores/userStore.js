import { makeAutoObservable } from "mobx";

// User store
class userStore {
    name = "John doe";

    constructor () {
        makeAutoObservable(this);
    }

    setUserName = (firstName, lastName) => {
        this.name = firstName + " " + lastName;
    };
}

export default userStore;
