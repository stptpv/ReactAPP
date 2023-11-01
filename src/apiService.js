// apiService.js
import axios from 'axios';
import { authURL } from './config.js';

const api = axios.create({
  baseURL: authURL, // Замените на URL вашего сервера
});

export default api;
