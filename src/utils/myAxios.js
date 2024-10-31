import axios from 'axios';

const myAxios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'client-id': import.meta.env.VITE_CLIENT_ID,
    Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
  },
});

//서버에서 응답을 받은 후 실행
myAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  //에러가 발생했을 때
  async function (error) {
    //토큰 만료 에러: 401 에러
    if (error.response && error.response.status === 401) {
      const currentPage = window.location.href;

      alert('로그인이 필요합니다.');

      sessionStorage.removeItem('accessToken');
      sessionStorage.removeItem('refreshToken');
      sessionStorage.removeItem('name');

      //현재 페이지 저장
      sessionStorage.setItem('currentPage', currentPage);
      window.location.href = '/src/pages/auth/signIn_main.html';
    } else {
      //그 외 에러: 에러가 호출된 곳으로 이동
      return Promise.reject(error);
    }
  },
);

export default myAxios;
