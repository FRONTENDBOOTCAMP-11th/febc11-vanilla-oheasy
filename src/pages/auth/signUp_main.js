import myAxios from '../../utils/myAxios';

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

//전달 받은 이메일
const userEmail = sessionStorage.getItem('email');

//input 요소들 focus, blur 처리
$requiredInputs.forEach(input => {
  const $span = input.nextElementSibling;

  input.addEventListener('focus', function () {
    $span.style.top = '-10%';
    $span.style.left = '12px';
    $span.style.transform = 'translateY(0)';
    $span.style.transition = 'all 0.3s ease';
  });

  // input에서 focus 해제되었을 때
  input.addEventListener('blur', function () {
    if (input.value === '') {
      // 값이 없으면 span을 원래 위치로
      $span.style.top = '50%';
      $span.style.left = '12px';
      $span.style.transform = 'translateY(-50%)';
    }
  });
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

  if (!isValid) {
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

const signUp = async function () {
  const pwd = $pwdInput.value;
  const firstName = $firstName.value;
  const lastName = $lastName.value;
  const name = `${firstName} ${lastName}`;
  const birthday = $bDay.value;

  try {
    const response = await myAxios.post('/users', {
      email: userEmail,
      password: pwd,
      name: name,
      type: 'user',
      extra: {
        birthday: birthday,
      },
    });

    if (response.data) {
      const userName = response.data.item.name;
      sessionStorage.setItem('name', userName);
      signIn(userEmail, pwd, userName);
    }
  } catch (error) {
    if (error.response && error.response.data) {
      console.log('실패', error.response.data);
    } else {
      console.log('실패', error.message);
    }
  }
};

const signIn = async function (userEmail, pwd, userName) {
  try {
    const response = await myAxios.post('/users/login', {
      email: userEmail,
      password: pwd,
    });

    const accessToken = response.data.item.token.accessToken;
    const refreshToken = response.data.item.token.refreshToken;
    const currentPage = sessionStorage.getItem('currentPage');

    sessionStorage.setItem('accessToken', accessToken);
    sessionStorage.setItem('refreshToken', refreshToken);

    // console.log(accessToken);
    // console.log(refreshToken);
    // console.log(userName);
    alert(`${userName} 님 환영합니다`);

    if (currentPage) {
      window.location.href = currentPage;
      sessionStorage.removeItem('currentPage');
    } else {
      console.log('홈으로');
      window.location.href = '/index.html';
    }
  } catch (error) {
    console.log('실패', error.response.data);
    console.log('실패', error.message);
  }
};

$pwdInput.addEventListener('input', pwdValid);
$proceedBtn.addEventListener('click', function (event) {
  event.preventDefault();

  const isFilled = inputCheck();
  const isChecked = chkboxCheck();

  if (isFilled && isChecked) {
    signUp();
  }
});
