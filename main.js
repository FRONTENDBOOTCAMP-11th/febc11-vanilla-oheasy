
const $sideBar = document.querySelector('.side-bar');
const $headerBox = document.getElementById('header-box');

$headerBox.addEventListener("click" , function (event) {
    if(event.target.id === "menuBtn") {
      $sideBar.classList.toggle('active');
    }
})

document.querySelector('.side-bar-header-img img').addEventListener('click', function() {
    $sideBar.classList.remove('active');
  });