import axios from "axios";
import { store, authStore } from "../stores/store";

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
axiosClient.interceptors.response.use(response => {
    return response;
}, async (error) => {
    // get the original axios request config for the error
    const originalRequest = error.config;
    // done by axios, anything that's not a 200 response
    const { status } = error.response;
    switch (status) {
    case 400:
        console.log(error);
        break;
    case 401:
        // First check if the original request doesn't need to be retried
        // This is to avoid infinite loops basically
        if (!originalRequest._retry) {
            // Set to true, so no infinite loop :-[
            originalRequest._retry = true;
            // Create the endpoint where we need to refresh the bearer token
            const response = await createEndpoint("refresh").post();
            // Get the new token
            const { token } = response.data;
            // Save it in the auth store, so next time this happens
            // it has the new token set
            store.authStore.setToken(token);
            // Update the auth header for bearer token
            // And replace it with the new one that has been generated
            originalRequest.headers.Authorization = `Bearer ${token}`;
            // Retry the original request
            // But this time with the bearer token refreshed
            // And pray it works
            return axios(originalRequest);
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
});

const responseBody = (response) => response.data;

// Different http request types using axios
const requests = {
    get: (url) => axiosClient.get(url).then(responseBody),
    post: (url, body) => axiosClient.post(url, body).then(responseBody),
    put: (url, body) => axiosClient.put(url, body).then(responseBody),
    del: (url) => axiosClient.delete(url).then(responseBody)
};

// Create the standard crud operations for the endpoints
const createEndpoint = (endpoint) => ({
    get: () => requests.get(`/${endpoint}`),
    post: (data) => axiosClient.post(`/${endpoint}`, data),
    put: (id, data) => axiosClient.put(`/${endpoint}/${id}`, data),
    delete: (id) => axiosClient.del(`/${endpoint}/${id}`)
});

export { createEndpoint };
