import loadHTML from '../utils/loadHTML';

// html 컴포넌트 파일을 불러와 콜백함수를 실행
loadHTML('/src/components/header.html', function (response) {
  document.getElementById('header-box').innerHTML = response;

  const $headerBox = document.getElementById('header-box');
  const $sideBar = document.querySelector('.side-bar');
  const $xbutton = document.querySelector('.sidebar-xbtn');
  const $overlay = document.querySelector('.overlay');
  const $userIcon = document.querySelector('.user');

  $headerBox.addEventListener('click', function (event) {
    if (event.target.id === 'menuBtn') {
      $sideBar.classList.toggle('active');
      $overlay.classList.toggle('active');
    }
  });

  /* 닫기를 클릭했을 때 .side-bar에 active 클래스를 제거한다.*/
  $xbutton.addEventListener('click', function () {
    $sideBar.classList.remove('active');
    $overlay.classList.toggle('active');
  });

  $userIcon.addEventListener('click', function () {
    const accessToken = sessionStorage.getItem('accessToken');
    const userName = sessionStorage.getItem('name');

    //세션에 토큰이 없는 상태: 로그인이 되어있지 않은 상태 -> 로그인 창으로 이동시킨다.
    if (!accessToken) {
      window.location.href = '/src/pages/auth/signIn_main.html';
      return;
    }

    //accessToken을 . 으로 나누면 header, payload, verify signature 세개로 나누어 짐
    const tokenPart = accessToken.split('.');
    //로그인이 되어 세션에 토큰이 저장되어있는 상태
    if (accessToken) {
      //그 중 두 번째 요소인 payload를 가져온다.
      const payload = JSON.parse(atob(tokenPart[1]));
      //초 단위의 현재 시간을 받아옴
      const currentTime = Math.floor(Date.now() / 1000);

      //세션에 토큰이 저장되어있지만 시간이 지나 토큰이 만료된 상태
      //payload.exp가 존재함, 만료시간이 현재 시간보다 작아 만료 시간이 지남
      if (payload.exp && payload.exp < currentTime) {
        alert('세션이 만료되어 재로그인이 필요합니다.');

        //세션에 저장되어있는걸 지움
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('refreshToken');
        sessionStorage.removeItem('name');

        //로그인창으로 간다.
        window.location.href = '/src/pages/auth/signIn_main.html';

        //원래 작업하던 창으로 돌아가게끔 한다
        return;
      } else {
        //세션에 토큰이 저장되어있고 만료되지 않은 상태
        console.log('성공');
        alert(`안녕하세요 ${userName} 님!`);
      }
    }
  });
});
