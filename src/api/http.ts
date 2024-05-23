import { serverString } from '../config';
import axios from 'axios';
import { setIsAuth } from '../pages/auth-pages/store/auth.slice';
import { store } from '../index';
import { appRoutsPath } from '../routing/routs';

export const instanceWithoutToken = axios.create({
  baseURL: serverString,
});

export const instance = axios.create({
  baseURL: serverString,
  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization =
    'Bearer ' + localStorage.getItem('accessToken');
  return config;
});

let isRefreshing = false;
let failedQueue: any = [];

const processQueue = (error: any, token = null) => {
  failedQueue.forEach((prom: any) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    const originalRequest = err.config;

    if (err.response.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers['Authorization'] = 'Bearer ' + token;
            return axios(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      return new Promise(function (resolve, reject) {
        axios
          .post(serverString + 'auth/refresh-token', {
            refreshToken: localStorage.getItem('refreshToken'),
          })
          .then(({ data }) => {
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('refreshToken', data.refreshToken);
            instance.defaults.headers.common['Authorization'] =
              'Bearer ' + data.accessToken;
            originalRequest.headers['Authorization'] =
              'Bearer ' + data.accessToken;
            processQueue(null, data.accessToken);
            resolve(axios(originalRequest));
          })
          .catch((err) => {
            store.dispatch(setIsAuth(false));
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            window.location.pathname = appRoutsPath.LoginPage.to;
            processQueue(err, null);
            reject(err);
          })
          .then(() => {
            isRefreshing = false;
          });
      });
    } else {
      // todo
      // toast.warning(`${err.message}`);
    }
    return Promise.reject(err);
  }
);
