import axios from 'axios';

const $received_email = document.querySelector('.received_email');
const $userPwd = document.querySelector('.userPwd');
const $eyeIcon = document.querySelector('.eye-icon');
const $result = document.querySelector('.result');

//버튼 요소
const $previousBtn = document.querySelector('.button-box[data-theme="white"]');
const $loginBtn = document.querySelector('.button-box[data-theme="black"]');

const userEmail = sessionStorage.getItem('email');

//sessionStorage에서 이메일 받아오기
window.addEventListener('load', function () {
  console.log(userEmail);

  //전달 받은 이메일이 있다면 출력
  if (userEmail) {
    $received_email.textContent = userEmail;
  } else {
    //전달 받은 이메일이 없다면 출력
    $received_email.textContent = '전달받은 이메일이 없습니다.';
  }
});

const togglePwd = function () {
  if ($userPwd.type === 'password') {
    $userPwd.type = 'text';
    $eyeIcon.src = '../../assets/icons/eye-half.svg';
  } else if ($userPwd.type === 'text') {
    $userPwd.type = 'password';
    $eyeIcon.src = '../../assets/icons/eye.svg';
  }
};

//이전 버튼을 눌렀을 때 -> signIn_main (기존) or signUp_main (신규)
const GoPreviousPage = function () {
  //.reffer: 이전 페이지 url을 갖고 옴
  const previousPage = document.referrer;

  if (previousPage.includes('signIn_main.html')) {
    window.location.href = 'signIn_main.html';
  } else if (previousPage.includes('signUp_main.html')) {
    window.location.href = 'signUp_main.html';
  }
};

//결과 출력 함수
const printResult = function (msg) {
  $result.textContent = msg;
  $result.style.color = 'red';
};

//로그인 버튼 눌렀을 때
const clickLoginBtn = function (event) {
  event.preventDefault();

  const pwdInput = $userPwd.value;

  //비밀번호를 입력 받지 못했을 때
  if (!pwdInput) {
    printResult('비밀번호를 입력해주세요.');

    return;
  }
  getPwd(userEmail, pwdInput);
};

//비밀번호 입력
const getPwd = async function (userEmail, userPwd) {
  //비밀번호를 입력 받았을 때 로그인 시도를 함
  try {
    const response = await axios.post(
      'https://11.fesp.shop/users/login',
      {
        email: userEmail,
        password: userPwd,
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
      // console.log(userEmail, userPwd);
    } else {
      //로그인 실패
      printResult('비밀번호가 일치하지 않습니다.');
    }
  } catch (error) {
    //422 에러처리: 비밀번호가 유효하지 않을 때
    if (error.response && error.response.status === 422) {
      printResult('비밀번호가 일치하지 않습니다.');
    } else {
      //다른 error
      console.log('서버에서 에러가 발생하였습니다.', error);
      printResult('서버에서 오류가 발생했습니다..');

      // console.error('응답 데이터:', error.response.data);
      // console.error('응답 상태 코드:', error.response.status);
      // console.error('응답 헤더:', error.response.headers);
      // console.error('요청 데이터:', error.request);
      // console.error('오류 메시지:', error.message);
      // console.error('전체 오류 객체:', error.toJSON());
    }
  }
};

$eyeIcon.addEventListener('click', togglePwd);
$previousBtn.addEventListener('click', GoPreviousPage);
$loginBtn.addEventListener('click', clickLoginBtn);
