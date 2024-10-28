import axios from 'axios';

//필수 입력 필드
const $requiredInputs = document.querySelectorAll('.required-input');

//사용자 정보
const $firstName = document.querySelector('.first-name');
const $lastName = document.querySelector('.last-name');
const $bDay = document.querySelector('.bday');

//비밀번호 관련 요소
const $pwdInput = document.querySelector('.pwd-input');
const $minLength = document.querySelector('.min-length');
const $pwdRequire = document.querySelector('.pwd-require');
const $pwdImg = document.querySelectorAll('img');

//체크박스
const $chkbox = document.querySelector('#chkbox1');
const $label = document.querySelector('#chkbox1 ~ p');

const $proceedBtn = document.querySelector('.button-box');

//이메일 전달 받기
const userEmail = sessionStorage.getItem('email');

//이메일 전달받기
window.addEventListener('load', function () {
  console.log(userEmail);
});

//pwd 조건 체크하기
const pwdValid = function () {
  const pwd = $pwdInput.value;

  //비밀번호 조건   1. 최소 8자     2. 알파벳 대문자 및 소문자 조합이고 최소 1개 이상의 숫자를 갖기

  let pwdValid = true;

  //1. 최소 8자
  if (pwd.length >= 8) {
    $minLength.style.color = 'green';
    $pwdImg[1].src = '../../assets/icons/check.svg';
  } else {
    $minLength.style.color = 'red';
    $pwdImg[1].src = '../../assets/icons/x-red.svg';
    pwdValid = false;
  }

  //2. 알파벳 대문자 및 소문자 조합이고 최소 1개 이상의 숫자를 갖기
  if (/[A-Z]/.test(pwd) && /[a-z]/.test(pwd) && /\d/.test(pwd)) {
    $pwdRequire.style.color = 'green';
    $pwdImg[2].src = '../../assets/icons/check.svg';
  } else {
    $pwdRequire.style.color = 'red';
    $pwdImg[2].src = '../../assets/icons/x-red.svg';
    pwdValid = false;
  }

  return pwdValid;
};


$proceedBtn.addEventListener('click', function (event) {
  event.preventDefault();

  // signUp();
  inputCheck();
  chkboxCheck();
});

//모든 input 태그들이 작성 되었는지 확인하는 함수
const inputCheck = function () {
  //input이(체크박스 제외) 모두 입력 되었는지 확인하기 위한 변수
  let isFilled = true;

  $requiredInputs.forEach(input => {
    if (!input.value) {
      input.style.border = '1px solid red';
      isFilled = false;
    } else {
      input.style.border = '';
    }
  });

  const isValid = pwdValid();

  if(!isValid) {
    $pwdInput.style.border = '1px solid red';
  }

  return isFilled && isValid;
};

//체크박스가 체크 되었는지 확인하는 함수
const chkboxCheck = function () {
  if (!$chkbox.checked) {
    $label.style.color = 'red';
    return false;
  } else {
    $label.style.color = '';
    return true;
  }
};

//결과 메세지 출력하는 함수
const printResult = function (isFilled, isChecked, isValid) {
  if (!isFilled && !isChecked) {
    // $result.textContent =
    //   '모든 입력 필드를 작성하고 약관에 동의해야 진행할 수 있습니다.';
    // $result.style.color = 'red';
  } else if (!isFilled && isChecked) {
    // $result.textContent = '입력 필드를 확인해주세요.';
    // $result.style.color = 'red';
  } else if (isFilled && !isChecked) {
    // $result.textContent = '약관에 동의해야 진행할 수 있습니다.';
    // $result.style.color = 'red';
  } else if (isFilled && isChecked && !isValid) {
    // $result.textContent = '비밀번호를 확인해주세요.';
    // $result.style.color = 'red';
  } else if (isFilled && isChecked) {
    // $result.textContent = '성공';
    // $result.style.color = 'green';
  }
};

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
  } catch (error) {
    console.log('실패', error.response?.data || error.message);
  }
};

$pwdInput.addEventListener('input', pwdValid);
