import axios from 'axios';

const API_BASE = 'http://127.0.0.1:8000/api/v0.1/';


const request = async ({ method = 'post', url = '', data = {}, headers = {} }) => {
    try {
        const token = localStorage.getItem('token');
        console.log('Auth token:', token);
        const isFormData = data instanceof FormData;

        const config = {
            method,
            url: `${API_BASE}${url}`,
            headers: {
                ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
                Authorization: `Bearer ${token}`,
                ...headers,
            },
        };

        if (method.toLowerCase() === 'get') {
            config.params = data;
        } else {
            config.data = data;
        }

        const res = await axios(config);
        return res.data.payload;
    } catch (err) {
        console.error('API error:', err);
        throw err;
    }
};

export default request;
