// get method로 url의 responseText를 받아온 후 callback 함수를 실행하는 함수
function loadHTML(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = function () {
    callback(xhr.responseText);
  };
  xhr.send();
}

export { loadHTML };
