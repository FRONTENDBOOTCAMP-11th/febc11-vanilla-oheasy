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

    if (accessToken) {
      const userName = sessionStorage.getItem('name');

      if (userName) {
        alert(`안녕하세요 ${userName} 님!`);
      } else {
        console.log(`등록되어있지 않은 사용자`);
      }
    } else {
      window.location.href = '/src/pages/auth/signIn_main.html';
    }
  });
});
