import { loadHTML } from '../utils/loadHTML.js';

// html 컴포넌트 파일을 불러와 콜백함수를 실행
loadHTML('/src/components/header-mobile.html', function (response) {
  document.getElementById('header-box').innerHTML = response;

  let headerBox = document.getElementById('header-box');
  let sideBar = document.querySelector('.side-bar');

  headerBox.addEventListener('click', function (event) {
    if (event.target.id === 'menuBtn') {
      sideBar.classList.toggle('active');
    }
  });

  /* 닫기를 클릭했을 때 .side-bar에 active 클래스를 제거한다.*/
  document
    .querySelector('.side-bar-header-img img')
    .addEventListener('click', function () {
      sideBar.classList.remove('active');
    });
});
