import axios from 'axios'
import { token } from 'morgan';

const API = axios.create({ baseUR: process.env.REACT_APP_BASEURL })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('token')) {
        req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    }
    return req;
});

export default API;