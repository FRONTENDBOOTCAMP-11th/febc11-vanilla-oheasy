'use strict';

import axios from 'axios';

// 동환님이 만들어 주신 함수 (가격에 , 표시)
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

const renderSpinner = function (parentEl) {
  const markup = `
                <div class="spinner">
                    <svg>
                      <use href="src/pages/products/loader.svg#icon-loader"></use>
                    </svg>
                </div>`;
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('beforebegin', markup);
};

const $gridContainer = document.querySelector('.l_grid');

const showProduct = async function () {
  try {
    // 1) Rendering spinner (in case connection of the internet is too slow)
    renderSpinner($gridContainer);

    // 2) Loading the list of products
    const res = await axios.get('https://11.fesp.shop/products', {
      headers: {
        'client-id': 'vanilla05',
      },
    });

    const data = res.data;
    const items = data.item; // array
    console.log(res, data, items);

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

    $gridContainer.insertAdjacentHTML('beforeend', lists);
  } catch (err) {
    console.error(err);
  }
};
showProduct();

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

    // heaer-mobile.js 코드 또한 추가해 메뉴버튼이 클릭될 수 있도록 활성화
    let headerBox = document.getElementById('header-box');
    let sideBar = document.querySelector('.side-bar');

    headerBox.addEventListener('click', function (event) {
      if (event.target.id === 'menuBtn') {
        sideBar.classList.toggle('active');
      }
    });

    document
      .querySelector('.side-bar-header-img img')
      .addEventListener('click', function () {
        sideBar.classList.remove('active');
      });

    // New / Men / Women / Kids 카테고리에 따른 상품리스트 조회
    linkNew.addEventListener('click', function (e) {
      e.preventDefault();
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
