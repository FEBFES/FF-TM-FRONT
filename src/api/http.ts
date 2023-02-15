import { serverString } from '../config';
import axios from 'axios';
import { setIsAuth } from '../pages/AuthPages/store/auth.slice';
import { store } from '../index';

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

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      store.dispatch(setIsAuth(false));
      window.location.pathname = '/Login';
      localStorage.clear();
    }
  }
);
