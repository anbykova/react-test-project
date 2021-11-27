import axios from 'axios';
import LoginService from './LoginService';

const InterceptorService = {
  createAuthInterceptor: (history) => {
    axios.interceptors.response.use(
      (res) => res,
      (error) => {
        const { status } = error.response;

        if (status === 401) {
          LoginService.refreshToken(history);
        }

        return Promise.reject(error);
      },
    );
  },
  includeCredentials: () => {
    axios.interceptors.request.use(
      (requestConfig) => {
        const token = localStorage.getItem('accessToken');

        if (token) {
          requestConfig.headers.Authorization = `Bearer ${token}`;
        }

        return requestConfig;
      },
      (error) => Promise.reject(error),
    );
  },
};

export default InterceptorService;
