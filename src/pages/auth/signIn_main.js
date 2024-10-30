import myAxios from '../../utils/myAxios';

//email-section
const $emailSection = document.querySelector('.email-section');
const $proceedBtn = document.querySelector('#proceed');
const $emailResult = document.querySelector('.email-result');
const $userEmail = document.querySelector('.userEmail');

//pwd-section
const $pwdSection = document.querySelector('.pwd-section');
const $received_email = document.querySelector('.received_email');
const $userPwd = document.querySelector('.userPwd');
const $pwdResult = document.querySelector('.pwd-result');
const $eyeIcon = document.querySelector('.eye-icon');
const $previousBtn = document.querySelector('#previous');
const $loginBtn = document.querySelector('#login');

// input에 focus 되었을 때
const inputFocus = function (event) {
  const $inputContainer = event.target.closest('.input-container');
  const $span = $inputContainer.querySelector('span');

  $span.style.top = '-10%';
  $span.style.left = '12px';
  $span.style.transform = 'translateY(0)';
  $span.style.transition = 'all 0.3s ease';
};

// input에 focus가 해제 되었을 때: 값이 있다면 위치 고정, 없다면 하단 이동
const inputBlur = function (event) {
  const inputContainer = event.target.closest('.input-container');
  const $span = inputContainer.querySelector('span');

  if (event.target.value === '') {
    $span.style.top = '50%';
    $span.style.left = '12px';
    $span.style.transform = 'translateY(-50%)';
  }
};

//email-section
const printEmailResult = function (msg) {
  $emailResult.textContent = msg;
  $emailResult.style.color = 'red';
};

//이메일 유효성 검증 함수 (올바른 형식으로 작성 되었는지 확인)
const validateEmail = function (email) {
  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //전달받은 email을 소문자로 변경하고 email 조건과 맞는지 확인
  let result = String(email).toLowerCase().match(emailReg);
  return result;
};

//서버에 이메일이 존재하는지 확인하기
//(중복 검사 - 중복(기존): signIn_pwd.html, 중복x(신규): signUp_terms.html)
const getEmail = async function (userEmail) {
  try {
    const response = await myAxios.get('/users/email', {
      params: {
        email: userEmail,
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
      showPwdSection();
    }
  } catch (error) {
    //409 error 발생: 이메일이 중복 되었을 때 발생함 -> signIn_pwd로 이동한다.
    if (error.response && error.response.status === 409) {
      showPwdSection();
    } else {
      //그외 error
      console.error('서버에서 오류가 발생했습니다: ', error);
      $emailResult.textContent = '서버에서 오류가 발생했습니다.';
      $emailResult.style.color = 'red';
    }
  }
};

//계속 버튼을 눌렀을 때
const clickProceedBtn = function (event) {
  event.preventDefault();

  //사용자가 이메일을 입력하지 않았을 때
  if (!$userEmail.value) {
    printEmailResult('이메일을 입력해주세요.');
    return;
  }

  //이메일 형식에 맞지 않을 때
  if (!validateEmail($userEmail.value)) {
    printEmailResult('이메일 형식으로 작성해주세요.');
    return;
  }

  getEmail($userEmail.value);
};

//pwd-section
const showPwdSection = function () {
  printPwdResult('');
  $userPwd.value = '';

  $pwdSection.classList.add('show');
  $pwdSection.classList.remove('hidden');

  $emailSection.classList.add('hidden');
  $emailSection.classList.remove('show');
  printEmail();
};

//전달 받은 이메일이 있다면 출력
const printEmail = function () {
  if ($userEmail.value) {
    $received_email.textContent = $userEmail.value;
  } else {
    //전달 받은 이메일이 없다면 출력
    $received_email.textContent = '전달받은 이메일이 없습니다.';
  }
};

const printPwdResult = function (msg) {
  $pwdResult.textContent = msg;
  $pwdResult.style.color = 'red';
};

//비밀번호 눈 아이콘
const togglePwd = function () {
  if ($userPwd.type === 'password') {
    $userPwd.type = 'text';
    $eyeIcon.src = '../../assets/icons/eye-half.svg';
  } else if ($userPwd.type === 'text') {
    $userPwd.type = 'password';
    $eyeIcon.src = '../../assets/icons/eye.svg';
  }
};

//이전 버튼을 눌렀을 때
const clickPreviousBtn = function () {
  printEmailResult('');

  $userEmail.value = '';
  $userPwd.value = '';

  //span 위치 강제
  $userEmail.dispatchEvent(new Event('blur'));
  $userPwd.dispatchEvent(new Event('blur'));

  $emailSection.classList.add('show');
  $emailSection.classList.remove('hidden');

  $pwdSection.classList.add('hidden');
  $pwdSection.classList.remove('show');
};

//로그인 버튼 눌렀을 때
const clickLoginBtn = function (event) {
  event.preventDefault();

  const pwdInput = $userPwd.value;

  //비밀번호를 입력 받지 못했을 때
  if (!pwdInput) {
    printPwdResult('비밀번호를 입력해주세요.');

    return;
  }

  getPwd($userEmail.value, pwdInput);
};

//비밀번호 입력
const getPwd = async function (userEmail, userPwd) {
  //비밀번호를 입력 받았을 때 로그인 시도를 함
  try {
    const response = await myAxios.post('/users/login', {
      email: userEmail,
      password: userPwd,
    });

    //로그인에 성공
    if (response.data.ok === 1) {
      //토큰을 받아오고 저장한다
      const accessToken = response.data.item.token.accessToken;
      const refreshToken = response.data.item.token.refreshToken;
      const userName = response.data.item.name;
      const currentPage = sessionStorage.getItem('currentPage');

      sessionStorage.setItem('accessToken', accessToken);
      sessionStorage.setItem('refreshToken', refreshToken);
      sessionStorage.setItem('name', userName);

      alert(`${userName} 님 환영합니다`);

      if (currentPage) {
        window.localStorage.href = currentPage;
      } else if (!currentPage) {
        window.location.href = '/index.html';
      } else {
        //로그인 실패
        printPwdResult('비밀번호가 일치하지 않습니다.');
      }
    }
  } catch (error) {
    //422 에러처리: 비밀번호가 유효하지 않을 때
    if (error.response && error.response.status === 422) {
      printPwdResult('비밀번호가 일치하지 않습니다.');
    } else if (error.response && error.response.status === 403) {
      printPwdResult('비밀번호가 일치하지 않습니다.');
    } else {
      //다른 error
      console.log('서버에서 에러가 발생하였습니다.', error);
      printPwdResult('서버에서 오류가 발생했습니다.');
    }
  }
};

$proceedBtn.addEventListener('click', clickProceedBtn);
$previousBtn.addEventListener('click', clickPreviousBtn);
$loginBtn.addEventListener('click', clickLoginBtn);
$eyeIcon.addEventListener('click', togglePwd);

$userEmail.addEventListener('focus', inputFocus);
$userEmail.addEventListener('blur', inputBlur);
$userPwd.addEventListener('focus', inputFocus);
$userPwd.addEventListener('blur', inputBlur);
