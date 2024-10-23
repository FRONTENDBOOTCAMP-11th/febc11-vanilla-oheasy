import axios from 'axios';


const $btn = document.querySelector('.button-box');
const $result = document.querySelector('.result');
const $userEmail = document.querySelector('.userEmail');

//계속 버튼을 눌렀을 때 이벤트
$btn.addEventListener('click', async (event) => {
    event.preventDefault();

    //이메일 확인 

    //이메일 입력x
    if (!$userEmail.value) {
        $result.textContent = '이메일을 입력해주세요.'
        $result.style.color = 'red';

        return;
    } 
    //이메일 형식에 맞는지 확인
    if (!validateEmail ($userEmail.value)) {
        $result.textContent = '이메일 형식으로 작성해주세요.'
        $result.style.color = 'red';
        return;
    } 


    //이메일 형식이 맞고 입력을 받았다면 서버에 존재하는 이메일인지 확인한다.
    const getEmail = async function (userEmail) {
        try {
            //이메일 중복 체크로 회원가입으로 갈지, 비밀번호 입력 페이지로 갈지 정한다.
            const response = await axios.get('https://11.fesp.shop/users/email', {
                params: {
                    email: userEmail,
                },
                headers: {
                    'client-id': 'vanilla05'
                }
            });


            //test용 이메일 -> 등록o: u1@gmail.com, 등록x: dd@gmail.com
            
            //ok: 1 (신규) 0 (기존)
            //이메일 중복x -> signUp_terms 로 이동
            if (response.data.ok === 1) {
                sessionStorage.setItem('email', userEmail);
                window.location.href = 'signUp_terms.html'; 
            } else if (response.data.ok === 0){
                //이메일 중복o 
                sessionStorage.setItem('email', userEmail);
                window.location.href = 'signIn_pwd.html'; // 로그인 페이지로 이동
            }
        }

        //409 error 발생: 이메일이 중복 되었을 때 발생함 -> signIn_pwd로 이동한다.
        catch (error) {
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
    }

    getEmail($userEmail.value);


    // getUserEmail($userEmail.value);


    // const response = await axios.get('https://11.fesp.shop/users/email', {
    //     params: {
    //         'email': userEmail,
    //     }
    // });
    // try {
    //     const response = await axios.get('https://11.fesp.shop/users/email', {
    //         headers: {
    //             'client-id': 'vanilla05',
    //             'email': userEmail
    //         }
    //     });
    // }
});

    //이메일 유효성 검증
    const validateEmail = function (email) {
        //email 조건
        const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        //전달받은 email을 소문자로 변경하고 email 조건과 맞는지 확인
        let result = String(email).toLowerCase().match(emailReg);
        return(result);
    } 



// const $emailResult = document.querySelector('.emailResult');

// const getUserEmail = async function () {
//     try {
//         const response = await axios.post('https://11.fesp.shop/users/login', {
//             "email": "u1@gmail.com",
//             "password": "11111111"
//         }, {
//             headers: {
//                 'client-id': 'vanilla05'
//             },
//         });
//         console.log(response.data);
//         $emailResult.innerHTML = response.data.item.email;
//     } 
//     catch (error) {
//         console.error('Error:', error);
//     }
// }

// getUserEmail();