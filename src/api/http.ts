import { serverString } from '../config';
import axios from 'axios';

const token = localStorage.getItem('tokenAccess');

export const instance = axios.create({
  baseURL: serverString,
  // headers: {
  //   Authorization: `Bearer ${token}`,
  // },
});
