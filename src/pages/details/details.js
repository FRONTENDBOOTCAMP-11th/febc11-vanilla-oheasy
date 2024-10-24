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

  $name.textContent = product.item.name;
  $category.textContent = product.item.extra.category;
  $onSale.textContent = formatPrice(product.item.price);
  $original.textContent = formatPrice(product.item.extra.primeCost);
  $discount.textContent = getDiscountRate(
    product.item.extra.primeCost,
    product.item.price,
  );

  // item-cover & item-size
  // thumbnail이 클릭되었을 때 바뀌어야 하는 요소
  const $coverThumbnails = document.querySelector('.item-cover-thumbnails');

  product.item.options.map(
    e =>
      ($coverThumbnails.innerHTML += `<img class='thumbnail' src='/api/dbinit-sample/nike/uploadFiles/${e.mainImages[0].name}' />`),
  );

  let currentOption = 0;
  renderImage(product, currentOption);
  renderSize(product, currentOption);

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
});

const renderImage = function (product, currentOption) {
  const $coverMain = document.querySelector('.item-cover-main');

  $coverMain.innerHTML = '';
  product.item.options[currentOption].mainImages.map(
    e =>
      ($coverMain.innerHTML += `<img src='/api/dbinit-sample/nike/uploadFiles/${e.name}' />`),
  );
};

const renderSize = function (product, currentOption) {
  const $size = document.querySelector('.size-grid');
  $size.innerHTML = '';

  product.item.options[currentOption].extra.size.map(e => {
    $size.innerHTML += `<span>${e}</span>`;
  });
};

const getDiscountRate = function (original, onSale) {
  return Math.trunc(((original - onSale) / original) * 100) + '% 할인';
};

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
