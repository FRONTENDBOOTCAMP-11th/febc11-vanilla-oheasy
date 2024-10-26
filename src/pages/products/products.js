'use strict';
import axios from 'axios';
import { doc } from 'prettier';
// import icons from './loader.svg?url';
// console.log(icons); // /src/pages/products/loader.svg

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

const renderSpinner = async function (parentEl) {
  // 이전의 스피너가 있다면 제거
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

// 비동기적으로 해당 url에 맞는 상품 리스트 출력하는 함수 정의
const $productContainer = document.querySelector('.l_grid');

const showProduct = async function (code) {
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

    const lists = items
      .map(
        item =>
          `<li class="product">
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
                </li>`,
      )
      .join('');

    $productContainer.insertAdjacentHTML('beforeend', lists);
  } catch (err) {
    alert(err);
  } finally {
    hideSpinner();
  }
};

// 메인 카테고리 클릭시 리스트 출력
// 1) 헤더의 사이드바는 공통 컴포넌트화 되어 현재 document 상에 존재하지 않고, 헤더가 완전히 Dom에 삽입된 이후에야 js에서 접근 가능하기 떄문에, 비동기 요청을 통해 html을 동적으로 삽입하고, 해당 요소가 로드된 후 js코드에서 안전하게 접근해야 된다.
const loadComponent = async function () {
  try {
    const res = await axios.get('../../components/header-mobile.html');
    const html = await res.data;

    const parentEl = document.querySelector('#header-box');
    parentEl.innerHTML = html;

    const linkNew = parentEl.querySelector('.link--new');
    const linkMen = parentEl.querySelector('.link--men');
    const linkWomen = parentEl.querySelector('.link--women');
    const linkKids = parentEl.querySelector('.link--kids');
    console.log(linkNew, linkMen, linkWomen, linkKids);

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

    // 3) showProduct()함수를 이용한 New / Men / Women / Kids 카테고리에 따른 상품리스트 조회
    linkMen.addEventListener('click', function (e) {
      e.preventDefault();
      showProduct('PC01');
    });

    linkWomen.addEventListener('click', function (e) {
      e.preventDefault();
      showProduct('PC02');
    });

    linkKids.addEventListener('click', function (e) {
      e.preventDefault();
      showProduct('PC03');
    });
  } catch (error) {
    console.error('Error loading component', error);
  }
};
loadComponent();

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
