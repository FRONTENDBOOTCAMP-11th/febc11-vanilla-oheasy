//체크 박스
const $checkAll = document.querySelector('.all'); //모두 동의
const $chkbox = document.querySelectorAll('.check:not(.all)'); //개별 요소 담기

//개별 체크 박스
const $chkbox2 = document.querySelector('#chkbox2');
const $chkbox3 = document.querySelector('#chkbox3');
const $chkbox4 = document.querySelector('#chkbox4');

//체크 박스 텍스트
const $label2 = document.querySelector('#chkbox2 ~ p');
const $label3 = document.querySelector('#chkbox3 ~ p');
const $label4 = document.querySelector('#chkbox4 ~ p');

//버튼
const $cancelBtn = document.querySelector('.button-box[data-theme="white"]');
const $proceedBtn = document.querySelector('.button-box[data-theme="black"]');

//결과
const $result = document.querySelector('.terms-result');

//모든 약관 동의를 클릭했을 때
const checkAll = function () {
  //모두 동의가 체크 되었다면, 하단 3개 체크 박스도 체크 처리 됨
  //.checked는 true, false를 반환함
  $chkbox.forEach(function (checkbox) {
    //모두 동의 를 개별 체크에 넣음
    checkbox.checked = $checkAll.checked;
  });
};

//개별 체크 박스가 모두 체크 되었을 때, 모든 약관 동의에 체크 / 하나라도 체크 해제되면 모든 약관 동의에 체크 풀림
const handleAllCheck = function () {
  //모두 동의가 체크 되어있는지 확인한다. (true or false)
  const allChecked = Array.from($chkbox).every(function (checkbox) {
    return checkbox.checked;
  });

  //결과가 true일때 모든 약관에 체크, false일 때는 해제
  $checkAll.checked = allChecked;
};

//개별 체크 박스 제어
const checkIndividualCheck = function () {
  //모든 체크박스가 체크 되었는지 확인하는 용도
  let allChecked = true;

  //모든 체크 박스가 체크 되었는지 확인한다.
  //체크 되지 않았다면 style 변경, 체크 되었다면 그대로
  //개별 체크박스 맨 위에서부터 2,3,4

  //체크박스2
  if (!$chkbox2.checked) {
    $label2.style.color = 'red';
    allChecked = false;
  } else {
    $label2.style.color = '';
  }

  //체크박스 3
  if (!$chkbox3.checked) {
    $label3.style.color = 'red';
    allChecked = false;
  } else {
    $label3.style.color = '';
  }

  //체크박스 4
  if (!$chkbox4.checked) {
    $label4.style.color = 'red';
    allChecked = false;
  } else {
    $label4.style.color = '';
  }

  //allChecked가 false인 경우
  if (!allChecked) {
    $result.textContent = '계속하려면 모든 확인란을 선택해야 합니다.';
    $result.style.color = 'red';
  } else {
    //allChecked가 true인 경우
    window.location.href = 'signUp_main.html';
  }
};

//계속 버튼을 눌렀을 때
const clickProceedBtn = function (event) {
  event.preventDefault();
  checkIndividualCheck();
};

const cancelBtn = function () {
  window.location.href = 'index.html';
};

$checkAll.addEventListener('change', checkAll);
$chkbox.forEach(checkbox => {
  checkbox.addEventListener('change', handleAllCheck);
});

$proceedBtn.addEventListener('click', clickProceedBtn);
$cancelBtn.addEventListener('click', cancelBtn);
