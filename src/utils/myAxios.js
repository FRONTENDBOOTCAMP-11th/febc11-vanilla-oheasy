import axios from 'axios';

const myAxios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'client-id': import.meta.env.VITE_CLIENT_ID,
    Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
  },
});

export default myAxios;
