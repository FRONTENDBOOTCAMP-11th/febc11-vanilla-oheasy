import { loadHTML } from '../utils/loadHTML';

// html 컴포넌트 파일을 불러와 콜백함수를 실행
loadHTML('/src/components/button.html', function (response) {
  const $buttonBox = document.getElementById('button-box');

  $buttonBox.innerHTML = response;
  const $button = $buttonBox.children[2];

  $button.textContent = $buttonBox.dataset.text;
  $button.style.backgroundColor = $buttonBox.dataset.bgcolor;
  $button.style.color = $buttonBox.dataset.color;
  $button.style.width = $buttonBox.dataset.width;
  $button.style.height = $buttonBox.dataset.height;
  $button.style.lineHeight = $buttonBox.dataset.height;
  $button.style.border = `1px solid ${$buttonBox.dataset.bordercolor}`;
});
