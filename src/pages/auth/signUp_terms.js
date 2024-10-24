//체크 박스
const $checkAll = document.querySelector('.all'); //모두 동의
const $chkbox = document.querySelectorAll('.check:not(.all)'); //개별 요소 담기

//개별 체크 박스
// const $chkbox2 = document.querySelector('#chkbox2');
// const $chkbox3 = document.querySelector('#chkbox3');
// const $chkbox4 = document.querySelector('#chkbox4');

//체크 박스 내용
// const $label2 = document.querySelector('#chkbox2 ~ p');
// const $label3 = document.querySelector('#chkbox3 ~ p');
// const $label4 = document.querySelector('#chkbox4 ~ p');

//이메일
const userEmail = sessionStorage.getItem('email');

//버튼
const $cancelBtn = document.querySelector('.button-box[data-theme="white"]');
const $proceedBtn = document.querySelector('.button-box[data-theme="black"]');

//결과
const $result = document.querySelector('.result');

//이메일 전달받기 확인
window.addEventListener('load', function () {
  console.log(userEmail);
});

//모두 동의 제어
$checkAll.addEventListener('change', function () {
  //모두 동의가 체크 되었다면, 하단 3개 체크 박스도 체크 처리 됨
  //.checked는 true, false를 반환함
  $chkbox.forEach(checkbox => {
    //모두 동의 를 개별 체크에 넣음
    checkbox.checked = $checkAll.checked;
  });
});

//개별 체크 제어 (모두 동의 제외)
$chkbox.forEach(checkbox => {
  checkbox.addEventListener('change', function () {
    //모두 동의가 체크 되어있는지 확인한다. (true or false)
    const allChecked = Array.from($chkbox).every(checkbox => checkbox.checked);

    // console.log(allChecked);
    $checkAll.checked = allChecked;
  });
});

//계속 버튼을 눌렀을 때
$proceedBtn.addEventListener('click', function (event) {
  event.preventDefault();

  //모든 체크박스가 체크 되었는지 확인하는 용도
  let allChecked = true;

  $chkbox.forEach(checkbox => {
    //체크박스가 체크 되지 않았다면
    if (!checkbox.checked) {
      allChecked = false;
    }
  });

  //모든 체크 박스가 체크 되었는지 확인한다.
  // if (!$chkbox2.checked) {
  //     $label2.style.color = 'red';
  //     $result.textContent = '오류: 계속하려면 모든 확인란을 선택해야 합니다.';
  //     $result.style.color = 'red';
  // } else {
  //     $label2.style.color = '';
  //     $result.textContent = '오류: 계속하려면 모든 확인란을 선택해야 합니다.';
  //     $result.style.color = 'red';
  // }

  // if (!$chkbox3.checked) {
  //     $label3.style.color = 'red';
  //     $result.textContent = '오류: 계속하려면 모든 확인란을 선택해야 합니다.';
  //     $result.style.color = 'red';
  // } else {
  //     $label3.style.color = '';
  // }

  // if (!$chkbox4.checked) {
  //     $label4.style.color = 'red';
  //     $result.textContent = '오류: 계속하려면 모든 확인란을 선택해야 합니다.';
  //     $result.style.color = 'red';
  // } else {
  //     $label4.style.color = '';
  // }

  // if(allChecked) {
  //     window.location.href = 'signUp_main.html';
  // }
});
