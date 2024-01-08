import { createContext, useContext } from "react";
import UserStore from "./userStore";

export const store = {
    userStore: new UserStore()
};

export const StoreContext = createContext(store);

export function useStore () {
    return useContext(StoreContext);
}
