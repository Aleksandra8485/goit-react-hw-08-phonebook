import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

// Dodaj interceptor do dodawania nagłówka autoryzacji
axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token'); // Pobierz token JWT z localStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

export default axiosInstance;
