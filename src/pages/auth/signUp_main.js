import axios from 'axios';

//사용자 정보
const $firstName = document.querySelector('.first-name');
const $lastName = document.querySelector('.last-name');
const $bDay = document.querySelector('.bday');

//비밀번호 관련 요소
const $pwdInput = document.querySelector('.pwd-input');

//체크박스
const $proceedBtn = document.querySelector('.button-box');

//이메일 전달 받기
const userEmail = sessionStorage.getItem('email');

//이메일 전달받기
window.addEventListener('load', function () {
  console.log(userEmail);
});

$proceedBtn.addEventListener('click', function (event) {
  event.preventDefault();

  signUp();
});

const signUp = async function () {
  const pwd = $pwdInput.value;
  const firstName = $firstName.value;
  const lastName = $lastName.value;
  const name = `${firstName} ${lastName}`;
  const birthday = $bDay.value;

  try {
    const response = await axios.post(
      'https://11.fesp.shop/users',
      {
        email: userEmail,
        password: pwd,
        name: name,
        type: 'user',
        extra: {
          birthday: birthday,
        },
      },
      {
        headers: {
          'client-id': 'vanilla05',
        },
      },
    );
    console.log('성공');
    signIn(userEmail, pwd);
  } catch (error) {
    if (error.response && error.response.data) {
      console.log('실패', error.response.data);
    } else {
      console.log('실패', error.message);
    }
  }
};

const signIn = async function (userEmail, pwd) {
  //비밀번호를 입력 받았을 때 로그인 시도를 함
  try {
    const response = await axios.post(
      'https://11.fesp.shop/users/login',
      {
        email: userEmail,
        password: pwd,
      },
      {
        headers: {
          'client-id': 'vanilla05',
        },
      },
    );

    //로그인에 성공
    if (response.data.ok === 1) {
      //토큰을 받아오고 저장한다
      const accessToken = response.data.item.token.accessToken;
      const refreshToken = response.data.item.token.refreshToken;

      sessionStorage.setItem('accessToken', accessToken);
      sessionStorage.setItem('refreshToken', refreshToken);

      //home으로 이동한다
      window.location.href = '/index.html';
    } else {
      //로그인 실패
      console.log('로그인에 실패했습니다.');
    }
  } catch (error) {
    console.log('오류가 발생했습니다.');
  }
};
