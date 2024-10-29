import axios from 'axios';

// get method로 url의 responseText를 받아온 후 callback 함수를 실행하는 함수
async function loadHTML(url, callback) {
  try {
    const response = await axios.get(url);
    callback(response.data);
  } catch (error) {
    console.log(error);
  }
}

export default loadHTML;
