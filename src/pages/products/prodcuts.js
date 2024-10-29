import axios from 'axios';

// 📌 Functions for data formatting
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
a;

const getCategory = async function () {
  try {
    // 1) Rendering spinner (In case the internet connection is slow.)
    renderSpinner($productContainer);

    const res = await axios.get(`https://11.fesp.shop/codes/productCategory`, {
      headers: {
        'client-id': 'vanilla05',
      },
    });

    // 1️⃣ Promise.all() 사용 방법
    // const [target] = res.data.item.productCategory.codes.filter(
    //   cat => cat.code === category,
    // );
    // console.log(target);
    // return target.value; // Men, Women, Kids

    // 2️⃣ 동환님 방법
    console.log(res);
    return res.data.item.productCategory.codes;
  } catch (err) {
    alert(err);
  } finally {
    hideSpinner();
  }
};

const isItBest = function (answer) {
  if (answer) {
    return '베스트셀러';
  } else {
    return '';
  }
};

const $productContainer = document.querySelector('.l_grid');
const $countSpace = document.querySelector('.results__count');

// 📌 데이터를 배열 형태로 받아 위에 정의한 여러 함수를 이용해 데이터를 화면에 출력하는 함수
const displayProduct = async function (items) {
  //   2️⃣ 동환님 방법
  const category = await getCategory();
  console.log(category); // array
  try {
    const lists = items
      .map(item => {
        //   1️⃣ Promise.all() 사용 방법
        // lists = await Promise.all() 아래의 코드를 감싼다. (마지막 두 코드 제외)
        // const categoryName = await getCategory(item.extra.category[0]);

        //   2️⃣ 동환님 방법
        const c1 = category.filter(c => {
          // console.log(c.code, item.extra.category[0]);
          return c.code === item.extra.category[0];
        });

        const c2 = c1[0].sub.filter(c => {
          //   console.log(c.code, item.extra.category[1].slice(0, 6));
          return c.code === item.extra.category[1].slice(0, 6);
        });

        // 👉 {categoryName} 대신에
        //   ${c1[0].value} ${c2[0] ? c2[0].value : ''}
        return `<li class="product">
                    <div class="product-cover">
                      <img src="https://11.fesp.shop/files/vanilla05/${
                        item.mainImages[0].name
                      }" />
                    </div>
    
                    <div class="product-card">
                     <div class="product-msg-info">
                      <p class="product-card__messaging">${
                        item.extra.isNew
                          ? '신제품'
                          : isItBest(item.extra.isBest)
                      }</p>
                      <div class="product-card__titles">
                        <p class="title">${item.name}</p>
                        <p class="subtitle">${c1[0].value} ${c2[0] ? c2[0].value : ''}</p>
                      </div>
                     </div>
    
                     <div class="product-card__count-wrapper">
                      <p class="count-item">${
                        item.options === 0 ? 1 : item.options
                      }개 색상</p>
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
const getProductsByMain = async function (code) {
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

const loadComponentMain = async function () {
  try {
    const parentEl = document.querySelector('#header-box');

    const observer = new MutationObserver(() => {
      // 사이드바 내부에 있는 메인 카테고리 선택 시, 사이드바를 자동으로 닫히도록
      const $sideBar = document.querySelector('.side-bar');
      const $overlay = document.querySelector('.overlay');

      $sideBar.addEventListener('click', function (e) {
        if (e.target.closest('.side-bar')) {
          $sideBar.classList.remove('active');
          $overlay.classList.remove('active');
        }
      });

      const linkMen = document.querySelector('#header-box .link--men');
      const linkWomen = document.querySelector('#header-box  .link--women');
      const linkKids = document.querySelector('#header-box .link--kids');
      console.log(linkMen, linkWomen, linkKids);

      // New / Men / Women / Kids 카테고리에 따른 상품리스트 조회
      if (linkMen && linkWomen && linkKids) {
        linkMen.addEventListener('click', function (e) {
          e.preventDefault();
          getProductsByMain('PC01');

          const categoryId = e.target.dataset.category; // PC01
          console.log(categoryId);
          updateCategoryUrl(categoryId);
        });

        linkWomen.addEventListener('click', function (e) {
          e.preventDefault();
          getProductsByMain('PC02');

          const categoryId = e.target.dataset.category; // PC02
          updateCategoryUrl(categoryId);
        });

        linkKids.addEventListener('click', function (e) {
          e.preventDefault();
          getProductsByMain('PC03');

          const categoryId = e.target.dataset.category; // PC03
          updateCategoryUrl(categoryId);
        });

        observer.disconnect();
      }
    });
    observer.observe(parentEl, { childList: true, subtree: true });
  } catch (err) {
    alert(err);
  }
};
loadComponentMain();

const updateCategoryUrl = function (categoryId) {
  const urlSearch = new URLSearchParams(location.search);
  // urlSearch.set ... custom = {"extra.category.0": "PC01"}
  urlSearch.set('category', categoryId);
  console.log(categoryId);
  console.log(urlSearch);

  const newUrl = `${location.pathname}?${urlSearch.toString()}`;
  history.pushState({}, '', newUrl);
};
