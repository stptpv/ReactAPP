import axios from 'axios';
import { authURL } from './config.js';

const api = axios.create({
  baseURL: authURL, 
});

export default api;
