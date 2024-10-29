import loadHTML from '../utils/loadHTML';

loadHTML('/src/components/footer.html', function (response) {
  document.getElementById('footer-wrapper').innerHTML = response;
});
