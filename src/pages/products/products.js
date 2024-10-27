'use strict';

import axios from 'axios';

// 📌 입력한 url에 맞는 상품 리스트를 비동기적으로 화면에 출력하는 함수 정의
const $productContainer = document.querySelector('.l_grid');
const $countSpace = document.querySelector('.results__count');

// FUNCTIONS
const formatPrice = function (price) {
  const arr = String(price).split('');
  let count = 0;
  for (let i = arr.length; i >= 0; i--) {
    if (i !== 0 && count !== 0 && count % 3 === 0) {
      arr[i] = ',' + arr[i];
    }
    count++;
  }
  return arr.join('') + '원';
};

const getCategory = function (category) {
  if (category === 'PC01') {
    return '남성';
  } else if (category === 'PC02') {
    return '여성';
  } else if (category === 'PC03') {
    return '주니어';
  }
};

const isItBest = function (answer) {
  if (answer) {
    return '베스트셀러';
  } else {
    return '';
  }
};

const displayProduct = function (items) {
  const lists = items
    .map(item => {
      return `<li class="product">
                <div class="product-cover">
                  <img src="https://11.fesp.shop/files/vanilla05/${item.mainImages[0].name}" />
                </div>

                <div class="product-card">
                 <div class="product-msg-info">
                  <p class="product-card__messaging">${item.extra.isNew ? '신제품' : isItBest(item.extra.isBest)}</p>
                  <div class="product-card__titles">
                    <p class="title">${item.name}</p>
                    <p class="subtitle">${getCategory(item.extra.category[0])} 신발</p>
                  </div>
                 </div>

                 <div class="product-card__count-wrapper">
                  <p class="count-item">${item.options === 0 ? 1 : item.options}개 색상</p>
                 </div>

                 <div class="product-card__price-wrapper">
                  <p class="price">${formatPrice(item.price)}</p>
                 </div>
                </div>
              </li>`;
    })
    .join('');

  $productContainer.innerHTML = '';
  $productContainer.insertAdjacentHTML('beforeend', lists);
};

// 📌 유저에게 요청한 작업이 진행중임을 알리는 spinner 로드/숨기는 함수 설정
const renderSpinner = async function (parentEl) {
  // 이전의 스피너가 있다면 제거 (스피너 겹침 방지)
  const existingSpinner = document.querySelector('.spinner');
  if (existingSpinner) existingSpinner.remove();

  const spinnerHTML = `
                  <div class="spinner">
                    <img src="./loader.svg" alt="spinner"/>
                  </div>`;
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('beforebegin', spinnerHTML);
};

const hideSpinner = async function () {
  document.querySelector('.spinner').style.display = 'none';
};

// 📌 필터링 없이, 전체 상품리스트 로드하는 함수
const showProductAll = async function () {
  try {
    // 1) Rendering spinner (In case the internet connection is slow.)
    renderSpinner($productContainer);

    // 2) Loading the list of products
    const res = await axios.get(`https://11.fesp.shop/products`, {
      headers: {
        'client-id': 'vanilla05',
      },
    });

    const data = res.data;
    const items = data.item;

    // 메인 카테고리 클릭시, 그에 맞는 제품 결과 개수로 변경
    const productCount = items.length;
    $countSpace.textContent = productCount;

    displayProduct(items);
  } catch (err) {
    alert(err);
  } finally {
    hideSpinner();
  }
};
showProductAll();

// 📌 메인 카테고리 기준으로 데이터를 분류하고, 비동기통신으로 가져온 데이터를 displayProduct()로 화면출력까지 담당하는 함수
const sortProductsByMain = async function (code) {
  try {
    // 1) Rendering spinner (In case the internet connection is slow.)
    renderSpinner($productContainer);

    // 2) Loading the list of products
    const res = await axios.get(
      `https://11.fesp.shop/products?custom={"extra.category.0":"${code}"}`,
      {
        headers: {
          'client-id': 'vanilla05',
        },
      },
    );

    const data = res.data;
    const items = data.item;

    // 메인 카테고리 클릭시, 그에 맞는 제품 결과 개수로 변경
    const productCount = items.length;
    $countSpace.textContent = productCount;

    displayProduct(items);
  } catch (err) {
    alert(err);
  } finally {
    hideSpinner();
  }
};

// 1️⃣ 메인 카테고리 클릭시 해당 리스트 출력
// 1) 헤더의 사이드바는 공통 컴포넌트화 되어 현재 document 상에 존재하지 않고, 헤더가 완전히 Dom에 삽입된 이후에야 js에서 접근 가능하기 떄문에, 비동기 요청을 통해 html을 동적으로 삽입하고, 해당 요소가 로드된 후 js코드에서 안전하게 접근해야 된다.
const loadComponentMain = async function () {
  try {
    const res = await axios.get('../../components/header-mobile.html');
    const html = await res.data;

    const parentEl = document.querySelector('#header-box');
    parentEl.innerHTML = html;

    // const linkNew = parentEl.querySelector('.link--new');
    const linkMen = parentEl.querySelector('.link--men');
    const linkWomen = parentEl.querySelector('.link--women');
    const linkKids = parentEl.querySelector('.link--kids');

    // 2) heaer-mobile.js 코드 또한 추가해 메뉴버튼이 클릭될 수 있도록 재활성화
    const $headerBox = document.getElementById('header-box');
    const $sideBar = document.querySelector('.side-bar');
    const $xbutton = document.querySelector('.sidebar-xbtn');

    $headerBox.addEventListener('click', function (event) {
      if (event.target.id === 'menuBtn') {
        $sideBar.classList.toggle('active');
      }
    });

    $xbutton.addEventListener('click', function () {
      $sideBar.classList.remove('active');
    });

    // 사이드바 내부에 있는 메인 카테고리 선택 시, 사이드바를 자동으로 닫히도록
    $sideBar.addEventListener('click', function (e) {
      if (e.target.closest('.side-bar')) {
        $sideBar.classList.remove('active');
      }
    });

    // 3) New / Men / Women / Kids 카테고리에 따른 상품리스트 조회
    linkMen.addEventListener('click', function (e) {
      e.preventDefault();
      sortProductsByMain('PC01');
    });

    linkWomen.addEventListener('click', function (e) {
      e.preventDefault();
      sortProductsByMain('PC02');
    });

    linkKids.addEventListener('click', function (e) {
      e.preventDefault();
      sortProductsByMain('PC03');
    });
  } catch (error) {
    console.error('Error loading component', error);
  }
};
loadComponentMain();

// 📌 성별을 기준으로 데이터를 필터링하여, 비동기통신으로 가져온 데이터를 displayProduct()로 화면출력까지 담당하는 함수
const filterProductsByGender = async function (filters) {
  try {
    // 1) Rendering spinner (In case the internet connection is slow.)
    renderSpinner($productContainer);

    // 2) Loading the list of products
    const baseUrl = 'https://11.fesp.shop/products';
    // const params = new URLSearchParams(); // custom query가 추가될 때마다 자동으로 & 추가하는 객체 이용

    // JSON.stringify()로 JSON 객체를 문자열로 변환했기 때문에 URLSearchParams에 추가된 각 값은 문자열이 맞지만, params 자체는 여전히 URLSearchParams 객체 자체로, 이 객체 자체를 그대로 URL로 사용할 수 없기 때문에 여전히 쿼리 문자열 "전체"를 하나의 "문자열로 변환할 필요"가 있다..
    // 따라서 각 문자열 값(✨객체 { "extra.gender": "men" }✨ => ✨문자열 {"extra.gender": "men"}✨ 로 변환)을 포함하는 쿼리 문자열 전체(=params)를 하나의 문자열로 변환하여 URL에 사용할 수 있도록 하기 위해 res 부분에 params상에 toString()을 호출했다.
    let customParams = filters
      .map(filter => `custom={"extra.gender": "${filter}"}`)
      .join('&');

    console.log(customParams); // custom={"extra.gender": "men"}
    // custom={"extra.gender": "men"}&custom={"extra.gender": "women"}

    const fullUrl = `${baseUrl}?${customParams}`;
    const res = await axios.get(fullUrl, {
      headers: {
        'client-id': 'vanilla05',
      },
    });
    const data = res.data;
    const items = data.item;

    console.log(fullUrl, res);
    // 💥 서버에서 두 개의 custom 쿼리 매개변수를 동시에 처리하도록 설계되어 있지 않을 수 있습니다. 이 경우, 하나의 필터만 요청할 때는 잘 작동하지만 여러 개의 필터를 요청하면 실패하는 것입니다.
    // 💥 서버의 API 문서나 개발자와 논의하여, 여러 개의 custom 매개변수를 지원하는지 확인해보세요.

    displayProduct(items);
  } catch (err) {
    alert(err);
  } finally {
    hideSpinner();
  }
};

// 2️⃣ 성별 체크박스 클릭시 해당 리스트 출력
const loadComponentFilter = async function () {
  try {
    // loadHTML 함수를 이용해 비동기통신(=axios.get)으로 button.html의 내용을 response(=html)라는 매개변수로 저장하고, 이를 buttonBox의 innerHTML로 적용했듯이, 여기서도 똑같이 적용
    const res = await axios.get('../../components/button.html');
    const html = res.data;

    const $filterArea = document.querySelector('.filter-section');
    const $productsArea = document.querySelector('.products-section');

    // filter-section의 X 버튼 눌렀을 때, hidden 클래스 조정
    const $xbutton = document.querySelector('.btn--x');
    $xbutton.addEventListener('click', function () {
      $filterArea.classList.add('hidden');
      $productsArea.classList.remove('hidden');
    });

    // products-section의 필터 버튼 눌렀을 때, hidden 클래스 조정
    const $btnFilter = document.querySelector('.btn--filters');
    $btnFilter.addEventListener('click', function () {
      $filterArea.classList.toggle('hidden');
      $productsArea.classList.toggle('hidden');
    });

    const $men = document.querySelector('#men');
    const $women = document.querySelector('#women');
    const $unisex = document.querySelector('#unisex');

    // const $btnSection = document.querySelector('.btn-section');
    const $applyFilter = document.querySelector('#apply-filter');
    const $cancelFilter = document.querySelector('#cancel-filter');

    const buttonBoxes = [...document.querySelectorAll('.button-box')];

    buttonBoxes.forEach(buttonBox => {
      const contents = buttonBox.innerHTML; // 가장 첫번째로 개인에 의해 작성된 Inner HTML을 저장 (="지우기", "적용")

      buttonBox.innerHTML = html; // 일단 button-box안에 button.html 내용을 넣어 button box(일종의 버튼 컨테이너)안에 버튼 요소 추가
      const $button = buttonBox.querySelector('.btn'); // button box 자식 중 button을 선택해 버튼 자체를 스타일링

      $button.innerHTML = contents; // 지정해준 텍스트를 버튼 자체의 html에 집어넣어 적용되도록..

      const buttonTheme = buttonBox.dataset.theme;

      // color theme
      if (buttonTheme === 'black') {
        $button.style.color = '#fff';
        $button.style.backgroundColor = '#111';
      } else {
        $button.style.color = '#111';
        $button.style.backgroundColor = '#fff';
        $button.style.border = '1px solid #cacacb';
      }
      // size
      $button.style.width = buttonBox.dataset.width;
      $button.style.height = buttonBox.dataset.height;

      if (buttonBox.dataset.fontweight)
        $button.style.fontWeight = +buttonBox.dataset.fontweight;
    });

    // men 인풋을 선택하고(checked 속성 추가) 난 뒤에, 적용버튼을 눌렀을 때 필터링 되도록.
    $applyFilter.addEventListener('click', async function (e) {
      e.preventDefault();

      const selectedFilters = [];

      if ($men.checked) selectedFilters.push('men');
      if ($women.checked) selectedFilters.push('women');
      if ($unisex.checked) selectedFilters.push('unisex');

      if (selectedFilters.length > 0) {
        console.log('필터가 체크됐습니다');
        await filterProductsByGender(selectedFilters);
      }

      $filterArea.classList.add('hidden');
      $productsArea.classList.remove('hidden');
    });

    // 만약, 취소버튼을 누르면 필터링 되지 않고 원래 그대로 상품리스트 유지.
    $cancelFilter.addEventListener('click', function (e) {
      e.preventDefault();
      console.log('체크박스가 해제됐습니다.');
      $filterArea.classList.add('hidden');
      $productsArea.classList.remove('hidden');
    });
  } catch (err) {
    alert(err);
  }
};
loadComponentFilter();

// const getImage = async function (name) {
//   try {
//     const res = await axios.get(
//       `https://11.fesp.shop/products/files/vanilla05/${name}`,
//       {
//         headers: {
//           'client-id': 'vanilla05',
//         },
//       },
//     );
//     console.log(res, res.data);
//   } catch (err) {
//     console.error(err);
//   }
// };
