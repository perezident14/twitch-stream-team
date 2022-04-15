import axios from 'axios';
require('dotenv').config();

let api = axios.create({
  headers: {
    'Client-ID': process.env.REACT_APP_API_KEY,
    'Authorization': process.env.REACT_APP_API_AUTH
  }
});

export default api;
