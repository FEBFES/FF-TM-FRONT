import axios from 'axios';
import { serverString } from '../config';

const token = localStorage.getItem('tokenAccess');

export const instance = axios.create({
  baseURL: serverString,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
