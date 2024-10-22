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
