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

// const formatOptions = function (item) {
//   const colorNumber = item.extra.options;
// };

const $gridContainer = document.querySelector('.l_grid');

const getProduct = async function () {
  try {
    const res = await axios.get('https://11.fesp.shop/products', {
      headers: {
        'client-id': 'vanilla05',
      },
    });

    const data = res.data;
    const items = data.item; // array

    const lists = items
      .map(
        item =>
          `<li class="product">
                  <div class="product-cover">
                    <img src="../../../api/dbinit-sample/nike/uploadFiles/${item.mainImages[0].name}" />
                  </div>

                  <div class="product-card">
                   <div class="product-msg-info">
                    <p class="product-card__messaging">${item.extra.isNew ? '신제품' : '베스트셀러'}</p>
                    <div class="product-card__titles">
                      <p class="title">${item.name}</p>
                      <p class="subtitle">${item.extra.gender === 'men' ? '남성' : '여성'} 신발</p>
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
getProduct();

//////////////////////////////////////////////////////////////////
// <ul class="l_grid">
// <li class="product">
//   <div class="product-cover">
//     <img src="../../assets/images/products_shoes-1.png" />
//   </div>

//   <div class="product-card">
//     <div class="product-msg-info">
//       <p class="product-card__messaging">신제품</p>
//       <div class="product-card__titles">
//         <p class="title">테이텀 2PF</p>
//         <p class="subtitle">농구화</p>
//       </div>
//     </div>

//     <div class="product-card__count-wrapper">
//       <p class="count-item">1개 색상</p>
//     </div>

//     <div class="product-card__price-wrapper">
//       <p class="price">149,000 원</p>
//     </div>
//   </div>
// </li>

// <li class="product">
//   <div class="product-cover">
//     <img src="../../assets/images/products_shoes-2.png" />
//   </div>

//   <div class="product-card">
//     <div class="product-msg-info">
//       <p class="product-card__messaging">신제품</p>
//       <div class="product-card__titles">
//         <p class="title">나이키 줌 보메로 5</p>
//         <p class="subtitle">여성 신발</p>
//       </div>
//     </div>

//     <div class="product-card__count-wrapper">
//       <p class="count-item">1개 색상</p>
//     </div>

//     <div class="product-card__price-wrapper">
//       <p class="price">209,000 원</p>
//     </div>
//   </div>
// </li>

// <li class="product">
//   <div class="product-cover">
//     <img src="../../assets/images/products_shoes-3.png" />
//   </div>

//   <div class="product-card">
//     <div class="product-msg-info">
//       <p class="product-card__messaging">신제품</p>
//       <div class="product-card__titles">
//         <p class="title">나이키 줌 보메로 5</p>
//         <p class="subtitle">여성 신발</p>
//       </div>
//     </div>

//     <div class="product-card__count-wrapper">
//       <p class="count-item">1개 색상</p>
//     </div>

//     <div class="product-card__price-wrapper">
//       <p class="price">209,000 원</p>
//     </div>
//   </div>
// </li>

// <li class="product">
//   <div class="product-cover">
//     <img src="../../assets/images/products_shoes-4.png" />
//   </div>

//   <div class="product-card">
//     <div class="product-msg-info">
//       <p class="product-card__messaging">신제품</p>
//       <div class="product-card__titles">
//         <p class="title">나이키 에어맥스 SC 트렌드</p>
//         <p class="subtitle">여성 신발</p>
//       </div>
//     </div>

//     <div class="product-card__count-wrapper">
//       <p class="count-item">1개 색상</p>
//     </div>

//     <div class="product-card__price-wrapper">
//       <p class="price">119,000 원</p>
//     </div>
//   </div>
// </li>

// <li class="product">
//   <div class="product-cover">
//     <img src="../../assets/images/products_shoes-5.png" />
//   </div>

//   <div class="product-card">
//     <div class="product-msg-info">
//       <p class="product-card__messaging">신제품</p>
//       <div class="product-card__titles">
//         <p class="title">나이키 스우시 1</p>
//         <p class="subtitle">베이비 신발</p>
//       </div>
//     </div>

//     <div class="product-card__count-wrapper">
//       <p class="count-item">1개 색상</p>
//     </div>

//     <div class="product-card__price-wrapper">
//       <p class="price">69,000 원</p>
//     </div>
//   </div>
// </li>

// <li class="product">
//   <div class="product-cover">
//     <img src="../../assets/images/products_shoes-6.png" />
//   </div>

//   <div class="product-card">
//     <div class="product-msg-info">
//       <p class="product-card__messaging">신제품</p>
//       <div class="product-card__titles">
//         <p class="title">나이키 머큐리얼 베이퍼 16 프로</p>
//         <p class="subtitle">TF 로우 탑 축구화</p>
//       </div>
//     </div>

//     <div class="product-card__count-wrapper">
//       <p class="count-item">1개 색상</p>
//     </div>

//     <div class="product-card__price-wrapper">
//       <p class="price">149,000 원</p>
//     </div>
//   </div>
// </li>

// <li class="product">
//   <div class="product-cover">
//     <img src="../../assets/images/products_shoes-7.png" />
//   </div>

//   <div class="product-card">
//     <div class="product-msg-info">
//       <p class="product-card__messaging">신제품</p>
//       <div class="product-card__titles">
//         <p class="title">나이키 티엠포 레전드 10 프로</p>
//         <p class="subtitle">인조 잔디 로우 탑 축구화</p>
//       </div>
//     </div>

//     <div class="product-card__count-wrapper">
//       <p class="count-item">1개 색상</p>
//     </div>

//     <div class="product-card__price-wrapper">
//       <p class="price">159,000 원</p>
//     </div>
//   </div>
// </li>

// <li class="product">
//   <div class="product-cover">
//     <img src="../../assets/images/products_shoes-8.png" />
//   </div>

//   <div class="product-card">
//     <div class="product-msg-info">
//       <p class="product-card__messaging">신제품</p>
//       <div class="product-card__titles">
//         <p class="title">나이키 팬텀 GX 2 프로</p>
//         <p class="subtitle">TF 로우탑 축구화</p>
//       </div>
//     </div>

//     <div class="product-card__count-wrapper">
//       <p class="count-item">1개 색상</p>
//     </div>

//     <div class="product-card__price-wrapper">
//       <p class="price">159,000 원</p>
//     </div>
//   </div>
// </li>

// <li class="product">
//   <div class="product-image-wrapper">
//     <img src="../../assets/images/products_cap.png" />
//   </div>

//   <div class="product-card">
//     <div class="product-msg-info">
//       <p class="product-card__messaging">신제품</p>
//       <div class="product-card__titles">
//         <p class="title">나이키 클럽</p>
//         <p class="subtitle">언스트럭처 데님 캡</p>
//       </div>
//     </div>

//     <div class="product-card__count-wrapper">
//       <p class="count-item">1개 색상</p>
//     </div>

//     <div class="product-card__price-wrapper">
//       <p class="price">39,000 원</p>
//     </div>
//   </div>
// </li>

// <li class="product">
//   <div class="product-cover">
//     <img src="../../assets/images/products_hat.png" />
//   </div>

//   <div class="product-card">
//     <div class="product-msg-info">
//       <p class="product-card__messaging">신제품</p>
//       <div class="product-card__titles">
//         <p class="title">나이키 에이펙스</p>
//         <p class="subtitle">데님 버킷 햇</p>
//       </div>
//     </div>

//     <div class="product-card__count-wrapper">
//       <p class="count-item">1개 색상</p>
//     </div>

//     <div class="product-card__price-wrapper">
//       <p class="price">45,000 원</p>
//     </div>
//   </div>
// </li>
// </ul>
