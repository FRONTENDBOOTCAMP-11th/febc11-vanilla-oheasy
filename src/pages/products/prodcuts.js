import formatPrice from '../../utils/formatPrice';
import myAxios from '../../utils/myAxios';

// 📌 카테고리 변경 시, url도 함께 업데이트하는 함수 - URLSearchParams 객체의 set 함수 활용
const updateCategoryUrl = function (categoryId) {
  const urlSearch = new URLSearchParams(location.search);
  urlSearch.set('category', categoryId);

  const newUrl = `${location.pathname}?${urlSearch.toString()}`;
  history.pushState({}, '', newUrl);
};

// 📌 url의 category 쿼리값에 맞는 상품리스트 출력하는 함수 - URLSearchParams 객체의 get 함수 활용
const loadProductsFromUrlParams = function () {
  const urlParams = new URLSearchParams(location.search);
  // > 쿼리 파라미터로서 category가 존재하면 그에 대한 값을 채택하고, category 쿼리가 존재하지 않으면 디폴트로 ALL을 설정해 모든 상품리스트 보여주기
  const categoryParam = urlParams.get('category') || 'ALL';

  if (categoryParam === 'NEW') {
    getProductsNew();
  } else if (categoryParam === 'ALL') {
    showProductsAll();
  } else {
    getProductsByMain(categoryParam);
  }

  // > 'category' 파라미터가 없는 경우, url 설정의 기본값으로 ALL 설정
  if (!window.location.search.includes('category')) {
    history.replaceState(null, '', '?category=ALL');
  }
};
window.addEventListener('load', loadProductsFromUrlParams);

// 📌 뒤로 가기/앞으로 가기 버튼 클릭 시 URL에 따라 화면 업데이트
window.addEventListener('popstate', loadProductsFromUrlParams);

const getCategory = async function () {
  try {
    renderSpinner($productContainer);

    const res = await myAxios.get(`/codes/productCategory`, {
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
const $productsTitle = document.querySelector('.wall-header__title');

// 📌 데이터를 배열 형태로 받아 위에 정의한 여러 함수를 이용해 데이터를 화면에 출력하는 함수
const displayProduct = async function (items) {
  //   2️⃣ 동환님 방법
  const category = await getCategory();
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
        return `<a href="/src/pages/details/details.html?productId=${item._id}"><li class="product">
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
                        <p class="subtitle">${c1[0].desc} ${c2[0] ? c2[0].value : ''}</p>
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
                  </li></a>`;
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
  const existingSpinner = document.querySelector('.spinner');
  if (existingSpinner) existingSpinner.remove();

  const spinnerHTML = `
                    <div class="spinner">
                      <img src="../../assets/images/loader.svg" alt="spinner"/>
                    </div>`;
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('beforebegin', spinnerHTML);
};

const hideSpinner = async function () {
  document.querySelector('.spinner').style.display = 'none';
};

// 📌 필터링 없이, 전체 상품리스트 로드하는 함수
const showProductsAll = async function () {
  try {
    $productsTitle.textContent = '모든 제품';

    // 1) Rendering spinner (In case the internet connection is slow.)
    renderSpinner($productContainer);

    // 2) Loading the list of products
    const res = await myAxios.get(`/products`, {
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
    $productsTitle.textContent = '모든 제품';
  } catch (err) {
    alert(err);
  } finally {
    hideSpinner();
  }
};

const getProductsNew = async function () {
  try {
    renderSpinner($productContainer);

    const res = await myAxios.get(`products?custom={"extra.isNew": true}`, {
      headers: {
        'client-id': 'vanilla05',
      },
    });
    const items = res.data.item;
    console.log(items);

    const productCount = items.length;
    $countSpace.textContent = productCount;
    $productsTitle.textContent = '신제품';

    displayProduct(items);
  } catch (err) {
    alert(err);
  } finally {
    hideSpinner();
  }
};

// 📌 메인 카테고리 기준으로 데이터를 분류하고, 비동기통신으로 가져온 데이터를 displayProduct()로 화면출력까지 담당하는 함수
const getProductsByMain = async function (code) {
  try {
    switch (code) {
      case 'PC01':
        $productsTitle.textContent = '남성 신발';
        break;

      case 'PC02':
        $productsTitle.textContent = '여성 신발';
        break;

      case 'PC03':
        $productsTitle.textContent = '주니어 신발';
        break;
    }

    // 1) Rendering spinner (In case the internet connection is slow.)
    renderSpinner($productContainer);

    // 2) Loading the list of products
    const res = await myAxios.get(
      `products?custom={"extra.category.0":"${code}"}`,
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

      const $sidebarMenu = document.querySelector('.side-bar-menu');

      // 📌 이벤트 위임과 closest()을 이용한 New / Men / Women / Kids 카테고리에 따른 상품리스트 조회
      $sidebarMenu.addEventListener('click', function (e) {
        e.preventDefault();

        if (e.target.closest('.link--new')) {
          getProductsNew();

          const categoryId = e.target.closest('.item__new').dataset.category; // new
          updateCategoryUrl(categoryId);
          //   $productsTitle.textContent = '신제품';
        }

        if (e.target.closest('.link--men')) {
          getProductsByMain('PC01');

          const categoryId = e.target.closest('.item__men').dataset.category; // PC01
          updateCategoryUrl(categoryId);
          //   $productsTitle.textContent = '남성 신발';
        }

        if (e.target.closest('.link--women')) {
          getProductsByMain('PC02');

          const categoryId = e.target.closest('.item__women').dataset.category; // PC02
          updateCategoryUrl(categoryId);
          //   $productsTitle.textContent = '여성 신발';
        }

        if (e.target.closest('.link--kids')) {
          getProductsByMain('PC03');

          const categoryId = e.target.closest('.item__kids').dataset.category; // PC03
          updateCategoryUrl(categoryId);
          $productsTitle.textContent = '주니어 신발';
        }
      });

      observer.disconnect();
    });
    observer.observe(parentEl, { childList: true, subtree: true });
  } catch (err) {
    alert(err);
  }
};
loadComponentMain();
