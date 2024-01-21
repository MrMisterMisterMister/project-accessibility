import { makeAutoObservable, runInAction } from "mobx";
import { createEndpoint } from "../api/axiosClient";
import { store } from "./store";

// The UserStore manages user-related state and actions using MobX.
// It includes methods for getting the current user, refreshing the token,
// and handling the token expiration with a timer.
export default class UserStore {
    user = null; // The current user
    refreshTokenTimeout = undefined; // Timeout ID for the token refresh

    // Constructor to initialize the MobX auto-observable properties
    constructor () {
        makeAutoObservable(this);
    }

    // Computed property to check if the user is logged in
    get isLoggedIn () {
        return !!this.user;
    }

    // Set the user in the store
    setUser = (user) => {
        this.user = user;
    };

    // Get the current user asynchronously
    getUser = async () => {
        try {
            const user = await createEndpoint("users/getcurrentuser").get();
            // Set the token in the AuthStore and start the token refresh timer
            store.authStore.setToken(user.token);
            this.startRefreshTokenTimer(user);
            // Update the user state using MobX action
            runInAction(() => {
                this.user = user;
            });
        } catch (error) {
            console.log(error); // Handle error, e.g., redirect to login
        }
    };

    // Refresh the user's token
    refreshToken = async () => {
        this.stopRefreshTokenTimer(); // Stop the refresh token timer before making the request
        try {
            // Make a POST request to the refresh token endpoint
            const response = await createEndpoint("refresh/refreshToken").post();

            // Set the refreshed token in the AuthStore and restart the timer
            store.authStore.setToken(response.data.token);
            this.startRefreshTokenTimer(response.data);
        } catch (error) {
            console.log(error); // Handle error, e.g., redirect to login
        }
    };

    // Start the token refresh timer based on the token expiration
    startRefreshTokenTimer = (user) => {
        // Extract data from the token
        const jwtToken = JSON.parse(atob(user.token.split(".")[1]));
        // Calculate the timeout until token expiration with a 30-second buffer
        const expires = new Date(jwtToken.exp * 1000);
        const timeout = expires.getTime() - Date.now() - 30000;
        // Set the refresh token timeout and log it
        this.refreshTokenTimeout = setTimeout(this.refreshToken, timeout);
    };

    // Stop the token refresh timer
    stopRefreshTokenTimer = () => {
        clearTimeout(this.refreshTokenTimeout);
    };
}
