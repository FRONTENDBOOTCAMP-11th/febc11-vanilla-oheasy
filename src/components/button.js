import { loadHTML } from '../utils/loadHTML.js';

// html 컴포넌트 파일을 불러와 콜백함수를 실행
loadHTML('/src/components/button.html', function (response) {
  const buttonBoxes = [...document.querySelectorAll('.button-box')]; // 노드 객체를 배열로 변환

  buttonBoxes.forEach(buttonBox => {
    const contents = buttonBox.innerHTML; // 작성된 inner html을 저장

    buttonBox.innerHTML = response; // button box의 inner html을 button.html로 교체
    const $button = buttonBox.querySelector('.btn'); // button box 자식 중 button을 선택

    /* button 스타일 수정 */
    $button.innerHTML = contents; // 저장된 inner html 되돌리기

    const buttonTheme = buttonBox.dataset.theme;
    // color theme
    if (buttonTheme === 'black') {
      $button.style.color = '#fff';
      $button.style.backgroundColor = '#111';
    } else {
      $button.style.color = '#111';
      $button.style.backgroundColor = '#fff';
      $button.style.border = '1px solid #cacacb';
    }
    // size
    $button.style.width = buttonBox.dataset.width;
    $button.style.height = buttonBox.dataset.height;

    if (buttonBox.dataset.fontweight)
      $button.style.fontWeight = +buttonBox.dataset.fontweight;
  });
});
