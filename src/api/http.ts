import { serverString } from '../config';
import axios from 'axios';

const token = localStorage.getItem('tokenAccess');

export const instanceWithoutToken = axios.create({
  baseURL: serverString,
});

export const instance = axios.create({
  baseURL: serverString,
  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: `Bearer ${token}`,
  },
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
  return config;
});
