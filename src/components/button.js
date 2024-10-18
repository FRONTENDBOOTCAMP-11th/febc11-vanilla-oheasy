import { loadHTML } from '../utils/loadHTML.js';

// html 컴포넌트 파일을 불러와 콜백함수를 실행
loadHTML('/src/components/button.html', function (response) {
  const buttonBoxes = [...document.querySelectorAll('.button-box')]; // 노드 객체를 배열로 변환

  buttonBoxes.forEach(buttonBox => {
    buttonBox.innerHTML = response; // button box의 inner html을 button.html로 교체
    console.log(buttonBox.children);
    const $button = buttonBox.children[1]; // button box 자식 중 button을 선택

    /* button 스타일 수정 */
    $button.textContent = buttonBox.dataset.text;

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
    $button.style.lineHeight = buttonBox.dataset.height;
  });
});
