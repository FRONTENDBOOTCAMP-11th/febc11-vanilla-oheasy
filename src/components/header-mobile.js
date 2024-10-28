import { loadHTML } from '../utils/loadHTML.js';
import axios from 'axios';

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

// 📌 비동기적으로 해당 url에 맞는 상품 리스트 출력하는 함수 정의
const $productContainer = document.querySelector('.l_grid');
const $countSpace = document.querySelector('.results__count');

const getProductByMain = async function (code) {
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

    // 3) 메인 카테고리 클릭시, 그에 맞는 제품 결과 개수로 변경
    const productCount = items.length;
    $countSpace.textContent = productCount;

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

// 📌 유저에게 작업이 진행중임을 알리는 스피너 세팅 함수
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

// html 컴포넌트 파일을 불러와 콜백함수를 실행
loadHTML('/src/components/header-mobile.html', function (response) {
  document.getElementById('header-box').innerHTML = response;

  const $headerBox = document.getElementById('header-box');
  const $sideBar = document.querySelector('.side-bar');
  const $xbutton = document.querySelector('.sidebar-xbtn');

  $headerBox.addEventListener('click', function (event) {
    if (event.target.id === 'menuBtn') {
      $sideBar.classList.toggle('active');
    }
  });

  /* 닫기를 클릭했을 때 .side-bar에 active 클래스를 제거한다.*/
  $xbutton.addEventListener('click', function () {
    $sideBar.classList.remove('active');
  });

  // 📌 사이드바 내부에 있는 메인 카테고리 선택 시, 사이드바를 자동으로 닫히도록
  $sideBar.addEventListener('click', function (e) {
    if (e.target.closest('.side-bar')) {
      $sideBar.classList.remove('active');
    }
  });

  const linkMen = document.querySelector('.link--men');
  const linkWomen = document.querySelector('.link--women');
  const linkKids = document.querySelector('.link--kids');

  // 📌 showProduct()함수를 이용한 New / Men / Women / Kids 카테고리에 따른 상품리스트 조회
  linkMen.addEventListener('click', function (e) {
    e.preventDefault();
    getProductByMain('PC01');
  });

  linkWomen.addEventListener('click', function (e) {
    e.preventDefault();
    getProductByMain('PC02');
  });

  linkKids.addEventListener('click', function (e) {
    e.preventDefault();
    getProductByMain('PC03');
  });
});
