import { loadHTML } from '../utils/loadHTML.js';

loadHTML('/src/components/footer-mobile.html', function (response) {
  document.getElementById('footer-wrapper').innerHTML = response;
});
