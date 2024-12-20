import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:8000',
});

API.interceptors.request.use((config) => {
    console.log('Request made:', config);
    return config;
});

export default API;
