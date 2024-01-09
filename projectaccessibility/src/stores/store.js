import { createContext, useContext } from "react";
import UserStore from "./userStore";
import AuthStore from "./authStore";

export const store = {
    userStore: new UserStore(),
    authStore: new AuthStore()
};

export const StoreContext = createContext(store);

export function useStore () {
    return useContext(StoreContext);
}
