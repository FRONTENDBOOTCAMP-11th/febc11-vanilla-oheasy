import axios from 'axios';

const $received_email = document.querySelector('.received_email');
const $userPwd = document.querySelector('.userPwd');
const $result = document.querySelector('.result');

//버튼
const $previousBtn = document.querySelector('.button-box[data-theme="white"]');
const $loginBtn = document.querySelector('.button-box[data-theme="black"]');

const userEmail = sessionStorage.getItem('email');

//이메일 전달받기
window.addEventListener('load', function() {

    console.log(userEmail);

    //전달 받은 이메일이 있다면 출력
    if (userEmail) {
        $received_email.textContent = userEmail;
    } else {
        //전달 받은 이메일이 없다면 출력
        $received_email.textContent = '전달받은 이메일이 없습니다.';
    }
});

//이전 버튼을 눌렀을 때 -> signIn_main (기존) or signUp_main (신규)
$previousBtn.addEventListener('click', function () {
    //이전 페이지 url을 가져온다. (.reffer)
    const previousPage = document.referrer;

    if(previousPage.includes('signIn_main.html')) {
        window.location.href = 'signIn_main.html';
    } else if (previousPage.includes('signUp_main.html')) {
        window.location.href = 'signUp_main.html';
    }
});

//로그인 버튼을 눌렀을 때
$loginBtn.addEventListener('click', async function(event) {
    event.preventDefault();


    const pwdInput = $userPwd.value;

    //비밀번호를 입력 받지 못했을 때
    if (!pwdInput) {
        $result.textContent = '비밀번호를 입력해주세요.';
        $result.style.color = 'red';

        return;
    }

    //입력 받았을 때
    const getPwd = async function (userEmail, userPwd) {
        try {
            const response = await axios.post('https://11.fesp.shop/users/login', {
                email: userEmail,
                password: userPwd,
            }, { 
                headers: {
                    'client-id': 'vanilla05'
                }
            });

            //로그인에 성공
            if (response.data.ok === 1) {
                //토큰을 받아오고 저장한다.
                const accessToken = response.data.item.token.accessToken;
                const refreshToken = response.data.item.token.refreshToken;

                sessionStorage.setItem('accessToken', accessToken);
                sessionStorage.setItem('refreshToken', refreshToken);

                //home으로 이동한다.
                window.location.href = '/index.html';
            } else {
                //로그인 실패
                $result.textContent = '비밀번호가 일치하지 않습니다.';
                $result.style.color = 'red';
            }
        }

        catch (error) {
            console.log('서버에서 에러가 발생하였습니다.');
            $result.textContent = '비밀번호가 일치하지 않습니다.';
            $result.style.color = 'red';

        }
    
    }

    getPwd(userEmail, pwdInput);

})

