import axios from 'axios';

const api = axios.create({});

api.interceptors.request.use((config) => {
  return Object.assign(config, {
    headers: {
      ...config.headers,
      Authorization: `Bearer ${localStorage.authToken || ''}`
    }
  });
});

api.interceptors.response.use((response) => response.data,
(error) => {
  return Promise.reject(error)
});

export default api;