import { loadHTML } from '../utils/loadHTML';

// html 컴포넌트 파일을 불러와 콜백함수를 실행
loadHTML('/src/components/header-mobile.html', function (response) {
  document.getElementById('header').innerHTML = response;
});
