import formatPrice from '../../utils/formatPrice';
import myAxios from '../../utils/myAxios';

// url로부터 product id 획득
const urlSearch = new URLSearchParams(location.search);
const productId = urlSearch.get('productId');

// 옵션 객체
const currentOption = { option: 0, size: null };

// 상품 객체를 리턴하는 함수
const getProduct = async function (productId) {
  try {
    const response = await myAxios.get(`/products/${productId}`);
    const data = response.data;

    // depth가 1인 product

    // depth가 2인 product
    if (data.item.extra.depth === 2) {
      productId = data.item.extra.parent;
      currentOption.option = data.item._id - data.item.extra.parent - 1;
      // currentOption.option만 바꾼 후 부모 product로 getProduct 재귀 호출
      return getProduct(productId);
    }
    return data;
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
    const response = await myAxios.get(
      `/codes/productCategory?depth=${depth}${parent ? '&parent=' + parent : ''}`,
    );

    let category = '';
    const c = response.data.item.codes.filter(item => {
      return item.code === product.item.extra.category[depth - 1];
    });

    // db에 desc가 지정되어있지 않기 때문에 직접 문자열 추가
    switch (c[0].value) {
      case 'Men':
        category += c[0].desc;
        break;
      case 'Women':
        category += c[0].desc;
        break;
      case 'Kid':
        category += c[0].desc;
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

const renderImage = function () {
  const $coverMain = document.querySelector('.item-cover-main');
  $coverMain.innerHTML = '';
  if (product.item.options.length === 0) {
    product.item.mainImages.map(
      e =>
        ($coverMain.innerHTML += `<img src='https://11.fesp.shop/files/vanilla05/${e.name}
      ' />`),
    );
  } else {
    product.item.options[currentOption.option].mainImages.map(
      e =>
        ($coverMain.innerHTML += `<img src='https://11.fesp.shop/files/vanilla05/${e.name}
' />`),
    );
  }
};

// 상품의 사이즈 목록을 렌더한 후
// 사이즈 클릭 시 해당 값을 출력하게 하는 함수
const renderSize = function () {
  const $grid = document.querySelector('.size-grid');
  $grid.innerHTML = '';

  // 옵션이 하나밖에 없을 때
  if (product.item.options.length === 0) {
    product.item.extra.size.map(e => {
      $grid.innerHTML += `<span>${e}</span>`;
    });
  } else {
    product.item.options[currentOption.option].extra.size.map(e => {
      $grid.innerHTML += `<span>${e}</span>`;
    });
  }

  const sizes = [...$grid.querySelectorAll('span')];
  sizes.forEach(e => {
    e.addEventListener('click', function (e) {
      currentOption.size = e.target.textContent;

      [...$grid.querySelectorAll('span')].map(e => {
        e.classList.remove('size-clicked');
      });
      e.target.classList.add('size-clicked');
    });
  });
};

const renderDesc = function () {
  const $description = document.querySelector('.description');
  $description.querySelector('p').textContent = product.item.content;
  $description.querySelector('.list li:first-child').textContent =
    product.item.options.length > 0
      ? product.item.options[currentOption.option].extra.color
      : product.item.extra.color;
  $description.querySelector('.list li:nth-child(2)').textContent =
    product.item.options.length > 0
      ? `스타일 번호: 
    ${product.item.options[currentOption.option].extra.styleNo}`
      : `스타일 번호: 
    ${product.item.extra.styleNo}`;
};
// 할인률을 계산해 문자열을 리턴하는 함수
const getDiscountRate = function (original, onSale) {
  return Math.trunc(((original - onSale) / original) * 100) + '% 할인';
};

// item-info
const $name = document.querySelector('.item-info .name');
const $category = document.querySelector('.item-info .category');
const $onSale = document.querySelector('.price .on-sale');
const $original = document.querySelector('.price .original');
const $discount = document.querySelector('.price .discount');

const product = await getProduct(productId);

const category1 = await getCategory(product, 1);
const category2 = await getCategory(product, 2, product.item.extra.category[0]);

$name.textContent = product.item.name;
$category.textContent = `${category1} ${category2}`;
$onSale.textContent = formatPrice(product.item.price);

// 원가와 할인가가 다를때만 할인율 표시
if (product.item.extra.primeCost !== product.item.price) {
  $original.textContent = formatPrice(product.item.extra.primeCost);
  $discount.textContent = getDiscountRate(
    product.item.extra.primeCost,
    product.item.price,
  );
}

// item-cover & item-size
// thumbnail이 클릭되었을 때 바뀌어야 하는 요소
const $coverThumbnails = document.querySelector('.item-cover-thumbnails');

product.item.options.map(
  e =>
    ($coverThumbnails.innerHTML += `<img class='thumbnail' src='${import.meta.env.VITE_BASE_URL}/files/${import.meta.env.VITE_CLIENT_ID}/${e.mainImages[0].name}' />`),
);

renderImage(product, currentOption);
renderSize(product, currentOption);
renderDesc(product, currentOption);

const thumbnails = [...$coverThumbnails.querySelectorAll('.thumbnail')];

if (product.item.options.length !== 0) {
  thumbnails[currentOption.option].classList.add('clicked');
}
thumbnails.forEach((e, i) => {
  e.addEventListener('click', function (e) {
    thumbnails.forEach(e => {
      e.classList.remove('clicked');
    });

    currentOption.option = i;
    currentOption.size = null;
    renderImage(product, currentOption);
    e.target.classList.add('clicked');

    renderSize(product, currentOption);
    renderDesc(product, currentOption);
  });
});

// item-btn
const $bagBtn = document.querySelector(
  '.item-buttons .button-box:first-child button',
);
$bagBtn.addEventListener('click', async function () {
  if (currentOption.size === null) {
    window.alert('사이즈를 선택해 주세요.');
  } else {
    try {
      const product_id =
        product.item.options.length === 0
          ? +productId
          : +productId + currentOption.option + 1;
      const response = await myAxios.post('/carts', {
        product_id,
        quantity: 1,
        size: currentOption.size,
      });

      if (sessionStorage.getItem('accessToken')) {
        alert(
          `product id: ${product_id}, size: ${currentOption.size} 상품 1개 장바구니에 추가되었습니다.`,
        );
      }
    } catch (error) {
      console.log(error);
    }
  }
});
