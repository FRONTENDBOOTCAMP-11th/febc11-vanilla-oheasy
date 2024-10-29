import axios from 'axios';

const myAxios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'client-id': import.meta.env.VITE_CLIENT_ID,
    Authorization: import.meta.env.VITE_TOKEN,
  },
});

myAxios.interceptors.request.use(
  config => {
    // 요청 보내기 전 수행할 작업
    // 예: 토큰 추가
    // const token = sessionStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default myAxios;
