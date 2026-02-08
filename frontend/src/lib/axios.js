import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // Set the base URL for all requests
    withCredentials: true, //by adding this field browser will send the cookies to server automatically on every single req
})

export default axiosInstance;