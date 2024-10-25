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
    console.log(items);
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
getProduct();

const getImage = async function (name) {
  try {
    const res = await axios.get(
      `https://11.fesp.shop/products/files/vanilla05/${name}`,
      {
        headers: {
          'client-id': 'vanilla05',
        },
      },
    );
    console.log(res, res.data);
  } catch (err) {
    console.error(err);
  }
};
