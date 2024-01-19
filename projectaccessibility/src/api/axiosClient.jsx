import axios from "axios";
import { store } from "../stores/store";
import Logout from "../pages/Logout";

// Axios instance with prefined configurations
const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true, // This is to handle cookies, allows sending cookies with requests, useful for sessions.
    timeout: 3000,
    headers: {
        common: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    }
});

// Request interceptor to add authorization header with bearer token
// If there is no bearer token, and there is a get request made, it will return error 401 unauthorized
// This fixes it that problem
axiosClient.interceptors.request.use((config) => {
    // This is temporary, need to figure out a better way to store the token on browser for easy access
    const userToken = store.authStore.token;

    if (userToken) {
        config.headers.Authorization = `Bearer ${userToken}`;
    }

    return config;
});

// Response interceptors to log the different error types
// For now we are catching if the bearer has expired here, and afterwards refresh it
// Very crack, but works, somewhat
axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        // get the original axios request config for the error
        // const originalRequest = error.config;
        // done by axios, anything that's not a 200 response
        const { status, headers } = error.response;
        switch (status) {
        case 400:
            console.log(error);
            break;
        case 401:
            if (headers["www-authenticate"]?.startsWith("Bearer error=\"invalid_token\"")) {
                Logout();
                console.log("session expired"); // change maybe?
            } else {
                console.log(error); // create seperate component maybe?
            }
            break;
        case 403:
            console.log(error);
            break;
        case 500:
            console.log(error);
            break;
        }
        return Promise.reject(error);
    }
);

const responseBody = (response) => response.data;

// Different http request types using axios
const requests = {
    get: (url) => axiosClient.get(url).then(responseBody),
    post: (url, body) => axiosClient.post(url, body).then(responseBody),
    put: (url, body) => axiosClient.put(url, body).then(responseBody),
    delete: (url) => axiosClient.delete(url).then(responseBody)
};

// Create the standard crud operations for the endpoints
const createEndpoint = (endpoint) => ({
    get: () => requests.get(`/${endpoint}`),
    post: (data) => axiosClient.post(`/${endpoint}`, data),
    put: (id, data) => axiosClient.put(`/${endpoint}/${id}`, data),
    delete: (id) => axiosClient.delete(`/${endpoint}/${id}`)
});

export { createEndpoint };
