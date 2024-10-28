import axios from 'axios';

const $btn = document.querySelector('.button-box');
const $result = document.querySelector('.result');
const $userEmail = document.querySelector('.userEmail');

//이메일 유효성 검증 함수 (올바른 형식으로 작성 되었는지 확인)
const validateEmail = function (email) {
  //email 조건
  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //전달받은 email을 소문자로 변경하고 email 조건과 맞는지 확인
  let result = String(email).toLowerCase().match(emailReg);
  return result;
};

//서버에 이메일이 존재하는지 확인하기
//(중복 검사 - 중복(기존): signIn_pwd.html, 중복x(신규): signUp_terms.html)
const getEmail = async function (userEmail) {
  try {
    const response = await axios.get('https://11.fesp.shop/users/email', {
      params: {
        email: userEmail,
      },
      headers: {
        'client-id': 'vanilla05',
      },
    });

    //test용 이메일 -> 등록o: u1@gmail.com, 등록x: dd@gmail.com

    //ok: 1 (신규) 0 (기존)
    //이메일 중복x -> signUp_terms 로 이동
    if (response.data.ok === 1) {
      sessionStorage.setItem('email', userEmail);
      window.location.href = 'signUp_terms.html';
    } else {
      //이메일 중복o -> signIn_pwd 로 이동
      sessionStorage.setItem('email', userEmail);
      window.location.href = 'signIn_pwd.html';
    }
  } catch (error) {
    //409 error 발생: 이메일이 중복 되었을 때 발생함 -> signIn_pwd로 이동한다.
    if (error.response && error.response.status === 409) {
      sessionStorage.setItem('email', userEmail);
      window.location.href = 'signIn_pwd.html';
    } else {
      //그외 error
      console.error('서버에서 오류가 발생했습니다: ', error);
      $result.textContent = '서버에서 오류가 발생했습니다.';
      $result.style.color = 'red';
    }
  }
};

const printResult = function (msg) {
  $result.textContent = msg;
  $result.style.color = 'red';
};

//계속 버튼을 눌렀을 때
const btnClick = function (event) {
  event.preventDefault();

  //사용자가 이메일을 입력하지 않았을 때
  if (!$userEmail.value) {
    printResult('이메일을 입력해주세요.');
    return;
  }

  //이메일 형식에 맞지 않을 때
  if (!validateEmail($userEmail.value)) {
    printResult('이메일 형식으로 작성해주세요.');
    return;
  }

  getEmail($userEmail.value);
};

$btn.addEventListener('click', btnClick);
