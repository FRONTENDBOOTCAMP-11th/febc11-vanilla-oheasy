import axios from 'axios';

const myAxios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'client-id': import.meta.env.VITE_CLIENT_ID,
    // Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
  },
});

//요청이 전송되기 전에 시작
myAxios.interceptors.request.use(
  //헤더 토큰 설정
  function (config) {
    //세션스토리지에서 토큰을 가져옴
    const accessToken = sessionStorage.getItem('accessToken');

    //세션 스토리지에 토큰이 존재한다면 Authorization에 추가함
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    } else if (!accessToken) {
      //토큰이 존재하지 않는다면 알림창을 띄우고 이동함
      alert('로그인이 필요합니다.');
      window.location.href = '/signIn_main.html';
      //요청 취소
      throw new axios.Cancel('로그인이 필요합니다.');
    }
    //반영
    return config;
  },

  //다른 에러 처리 -> 에러가 생긴 곳으로 감
  function (error) {
    return Promise.reject(error);
  },
);

//서버에서 응답을 받은 후 실행
myAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  //에러가 발생했을 때
  async function (error) {
    //토큰 만료 에러: 401 에러
    if (error.response && error.response.status === 401) {
      const currentURL = window.location.href;

      alert('세션이 만료되어 재로그인이 필요합니다.');

      sessionStorage.removeItem('accessToken');
      sessionStorage.removeItem('refreshToken');
      sessionStorage.removeItem('name');

      //현재 페이지 저장
      sessionStorage.setItem('currentPage', currentURL);

      window.location.href = '/signIn_main.html';
    } else {
      //그 외 에러: 에러가 호출된 곳으로 이동
      return Promise.reject(error);
    }
  },
);

export default myAxios;
