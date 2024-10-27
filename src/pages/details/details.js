import axios from 'axios';

window.addEventListener('load', async function () {
  // item-info
  const $name = document.querySelector('.item-info .name');
  const $category = document.querySelector('.item-info .category');
  const $onSale = document.querySelector('.price .on-sale');
  const $original = document.querySelector('.price .original');
  const $discount = document.querySelector('.price .discount');

  const product = await getProduct();
  console.log(product);

  const category1 = await getCategory(product, 1);
  const category2 = await getCategory(
    product,
    2,
    product.item.extra.category[0],
  );

  $name.textContent = product.item.name;
  $category.textContent = `${category1} ${category2}`;
  $onSale.textContent = formatPrice(product.item.price);
  $original.textContent = formatPrice(product.item.extra.primeCost);
  $discount.textContent = getDiscountRate(
    product.item.extra.primeCost,
    product.item.price,
  );

  // item-cover & item-size
  // thumbnail이 클릭되었을 때 바뀌어야 하는 요소
  const $coverThumbnails = document.querySelector('.item-cover-thumbnails');

  console.log(product.item.options);
  product.item.options.map(
    e =>
      ($coverThumbnails.innerHTML += `<img class='thumbnail' src='/api/dbinit-sample/nike/uploadFiles/${e.mainImages[0].name}' />`),
  );

  let currentOption = 0;
  let size = null;
  renderImage(product, currentOption);
  renderSize(product, currentOption, size);

  const thumbnails = [...$coverThumbnails.querySelectorAll('.thumbnail')];
  thumbnails.forEach((e, i) => {
    e.addEventListener('click', function (e) {
      thumbnails.forEach(e => {
        e.classList.remove('clicked');
      });

      renderImage(product, i);
      currentOption = i;
      e.target.classList.add('clicked');

      renderSize(product, i);
    });
  });

  // const $bagBtn = document.querySelector('.button-box:first-child');
  // console.log($bagBtn);
  // $bagBtn.addEventListener('click', function () {
  //   console.log('li');
  //   console.log('장바구니에 담은 상품: ' + product.item.name + size);
  // });
});

const renderImage = function (product, currentOption) {
  const $coverMain = document.querySelector('.item-cover-main');

  $coverMain.innerHTML = '';
  product.item.options[currentOption].mainImages.map(
    e =>
      ($coverMain.innerHTML += `<img src='/api/dbinit-sample/nike/uploadFiles/${e.name}' />`),
  );
};

// 상품의 사이즈 목록을 렌더한 후
// 사이즈 클릭 시 해당 값을 출력하게 하는 함수
const renderSize = function (product, currentOption, size) {
  const $grid = document.querySelector('.size-grid');
  $grid.innerHTML = '';

  product.item.options[currentOption].extra.size.map(e => {
    $grid.innerHTML += `<span>${e}</span>`;
  });

  const sizes = [...$grid.querySelectorAll('span')];
  sizes.forEach(e => {
    e.addEventListener('click', function (e) {
      size = +e.target.textContent;
    });
  });
};

// 할인률을 계산해 문자열을 리턴하는 함수
const getDiscountRate = function (original, onSale) {
  return Math.trunc(((original - onSale) / original) * 100) + '% 할인';
};

// 가격에 콤마와 원을 붙인 문자열을 리턴하는 함수
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

// 상품 객체를 리턴하는 함수
const getProduct = async function () {
  try {
    const response = await axios.get('https://11.fesp.shop/products/1', {
      headers: {
        'client-id': 'vanilla05',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

// 카테고리 문자열을 리턴하는 함수
// depth가 1인 경우 대분류를,
// depth가 2이고 parent가 대분류 문자열인 경우 소분류를 리턴
const getCategory = async function (product, depth, parent = null) {
  try {
    const response = await axios.get(
      `https://11.fesp.shop//codes/productCategory?depth=${depth}${parent ? '&parent=' + parent : ''}`,
      {
        headers: {
          'client-id': 'vanilla05',
        },
      },
    );

    let category = '';
    const c = response.data.item.codes.filter(item => {
      return item.code === product.item.extra.category[depth - 1];
    });

    // db에 desc가 지정되어있지 않기 때문에 직접 문자열 추가
    switch (c[0].value) {
      case 'Men':
        category += '남성';
        break;
      case 'Women':
        category += '여성';
        break;
      case 'Kid':
        category += '주니어';
        break;
      default:
        category += c[0].value;
    }
    return category;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};
