import axios from 'axios';

export default axios.create({
    baseURL: process.env.local.API_ENDPOINT,
});
