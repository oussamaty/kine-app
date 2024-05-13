import axios from 'axios';
import { checkAndUpdateToken } from '@services/auth';


const api = axios.create({
  baseURL: 'https://kinefit.fr/api',
});

api.interceptors.request.use(
  async config => {
    const token = await checkAndUpdateToken();
    if (!token) {
        throw new Error('Cannot update token');
    }

    config.headers['Authorization'] = `Bearer ${token.accessToken}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default api;