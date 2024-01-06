import axios from "axios";
import Cookies from "js-cookie";

// Axios instance with prefined configurations
const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true, // This is to handle cookies
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
    const userToken = Cookies.get("token");

    if (userToken) {
        config.headers.Authorization = `Bearer ${userToken}`;
    }

    return config;
}, (error) => {

    return Promise.reject(error); 
});

const responseBody = (response) => response.data;

const requests = {
    get: (url) => axiosClient.get(url).then(responseBody),
    post: (url, body) => axiosClient.post(url, body).then(responseBody),
    put: (url, body) => axiosClient.put(url, body).then(responseBody),
    del: (url) => axiosClient.delete(url).then(responseBody)
};

const createEndpoint = (endpoint) => ({
    post: (data) => axiosClient.post(`/${endpoint}`, data),
    get: () => requests.get(`/${endpoint}`),
    put: (id, data) => axiosClient.put(`/${endpoint}/${id}`, data),
    delete: (id) => axiosClient.del(`/${endpoint}/${id}`)
});

// Get request
async function getRequest (URL) {
    return await axiosClient.get(`/${URL}`);
}

// Post request
async function postRequest (URL, payload) {
    return await axiosClient.post(`/${URL}`, payload);
}

// Put request
async function putRequest (URL, payload) {
    return await axiosClient.put(`/${URL}`, payload);
}

// Delete request
async function deleteRequest (URL) {
    return await axiosClient.delete(`/${URL}`);
}

export { getRequest, postRequest, putRequest, deleteRequest, createEndpoint };
