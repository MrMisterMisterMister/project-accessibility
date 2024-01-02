import axios from "axios";

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

// Get request
async function getRequest (URL) {
    return axiosClient.get(`/${URL}`);
}

// Post request
async function postRequest (URL, payload) {
    return axiosClient.post(`/${URL}`, payload);
}

// Put request
async function putRequest (URL, payload) {
    return axiosClient.put(`/${URL}`, payload);
}

// Delete request
async function deleteRequest (URL) {
    return axiosClient.delete(`/${URL}`);
}

export { getRequest, postRequest, putRequest, deleteRequest };
