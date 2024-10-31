import myAxios from '../../utils/myAxios';
import heart from '../../assets/icons/heart.svg';
import trash from '../../assets/icons/trash.svg';
import plus from '../../assets/icons/plus.svg';
import minus from '../../assets/icons/minus.svg';
import question from '../../assets/icons/question.svg';

document.addEventListener('DOMContentLoaded', () => {
  const $cartList = document.getElementById('cart-list');
  const $baginfo = document.getElementById('bag-info');
  const $pay = document.getElementById('pay');
  const $leftRight = document.getElementsByClassName('left_right');
  const $scrollContainer = document.getElementById(
    'recommended-products-container',
  );

  const fetchCart = async () => {
    // html 변수 불러오기
    try {
      const response = await myAxios.get('carts');
      const items = response.data.item;

      if (items.length === 0) {
        $cartList.innerHTML =
          '<p style="font-size: 14px;">장바구니에 상품이 없습니다.</p>';
        $baginfo.innerHTML = '<p style="color: gray;"> 0 개의 제품 | ㅡ </p>';
        $pay.innerHTML = '';
        return;
      }

      let cartItemsHTML = '';
      let totalQuantity = 0;
      let totalPrice = 0;

      items.forEach(cart => {
        const quantity = cart.quantity;
        const size = cart.size;
        const productName = cart.product.name;
        const productPrice = cart.product.price;
        const productImage = cart.product.image.name;

        totalQuantity += quantity;
        totalPrice += productPrice * quantity;

        cartItemsHTML += `
        <div>
          <div class="product_item_section">
            <div>
              <a href="/src/pages/details/details.html?productId=${cart.product._id}">
                <img class="img_size" src="https://11.fesp.shop/files/vanilla05/${productImage}" alt="${productName}">
              </a>
            </div>
            <div class="product_text_section">
              <div class="black_text">
                <a href="/src/pages/details/details.html?productId=${cart.product._id}">
                  <p id="product_name">${productName}</p>
                </a>
                <p id="product_price">${(productPrice * quantity).toLocaleString()} 원</p> 
              </div>  
              <div class="gray_text">
                <p>사이즈: ${size}</p>
                <div class="size_count_text">
                  <div class="count_text">
                    <p>수량</p>
                    <div class="count_number">
                      <img class="button minus" src="${minus}" alt="Decrease" data-cart-id="${cart._id}">
                      <p>${quantity}</p>
                      <img class="button plus" src="${plus}" alt="Increase" data-cart-id="${cart._id}">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="product_icon_section">
            <img class="button" src="${heart}" alt="Add to Wishlist">
            <img class="move_icon button remove" src="${trash}" alt="Remove from Cart" data-cart-id="${cart._id}">
          </div>
                    <div class="product_delivery_section">
            <p class="product_delivery_text_title">무료 배송</p>
            <p class="product_delivery_text">도착 예정일: 7월 26일 (토)배송 지역: 04628</p>
          </div>
        </div>
        `;
      });

      $cartList.innerHTML = cartItemsHTML;
      $baginfo.innerHTML = `<p>${totalQuantity} 개의 제품 | ${totalPrice.toLocaleString()} 원</p>`;
      $pay.innerHTML = `
          <div class="oder_list_section">
            <h1 class="oder_list_title_text">주문 내역</h1>
            <div class="oder_list_text">
              <div class="oder_list_text_icon">
                <p>상품 금액</p>
                <img class="question_icon" src="${question}" alt="">
              </div>
              <p>${totalPrice.toLocaleString()} 원</p>
            </div>
            <div class="oder_list_text">
              <p class="oder_list_delivery_text_price">배송비</p>
              <p>무료</p>
            </div>
            <div class="oder_list_text">
              <p>총 결제 금액</p>
              <b><p>${totalPrice.toLocaleString()} 원</p></b>
            </div>
          </div>`;
    } catch (error) {
      console.error('Error:', error);
      $cartList.innerHTML =
        '<p style="font-size:14px">장바구니를 불러오는 데 실패했습니다.</p>';
      $baginfo.innerHTML = '';
      $pay.innerHTML = '';
    }
  };

  fetchCart(); // 최초 html 변수 호출

  const updateQuantity = async (cartId, quantity) => {
    //  상품 수령 변경 요청
    try {
      await myAxios.patch(`carts/${cartId}`, { quantity });
    } catch (error) {
      console.error('수량 변경 실패:', error);
      alert('수량 변경에 실패했습니다.');
    }
  };

  const deleteProduct = async cartId => {
    // 장바구니에서 상품 제거 요청
    try {
      await myAxios.delete(`carts/${cartId}`);
    } catch (error) {
      console.error('상품 삭제 실패:', error);
    }
  };

  $cartList.addEventListener('click', async event => {
    // 클릭시 장바구니에서 상품 제거
    const target = event.target;

    if (target.matches('.move_icon.button.remove')) {
      const cartId = target.getAttribute('data-cart-id'); // data-cart-id 속성에서 cartId 가져오기

      // 서버에 장바구니에서 상품 삭제 요청
      await deleteProduct(cartId);
    }
    fetchCart(); // html 변수 다시 불러오기
  });

  $cartList.addEventListener('click', async event => {
    // 클릭시 상품 수량 증감
    const target = event.target;
    // 수량 증가 버튼 클릭
    if (target.matches('.button.plus')) {
      const quantityElement = target.parentElement.querySelector('p'); // 수량 요소 선택
      const cartId = target.getAttribute('data-cart-id'); // data-cart-id 속성에서 cartId 가져오기
      let quantity = parseInt(quantityElement.innerText);
      quantity++;
      quantityElement.innerText = quantity;

      // 서버에 수량 업데이트 요청
      await updateQuantity(cartId, quantity);
    }

    // 수량 감소 버튼 클릭
    if (target.matches('.button.minus')) {
      const quantityElement = target.parentElement.querySelector('p'); // 수량 요소 선택
      const cartId = target.getAttribute('data-cart-id'); // data-cart-id 속성에서 cartId 가져오기
      let quantity = parseInt(quantityElement.innerText);

      if (quantity > 1) {
        quantity--;
        quantityElement.innerText = quantity;

        // 서버에 수량 업데이트 요청
        await updateQuantity(cartId, quantity);
      }
    }
    fetchCart(); // html 변수 다시 불러오기
  });
  Array.from($leftRight).forEach(button => {
    button.addEventListener('click', event => {
      const target = event.target;

      if (target.matches('.moveleft')) {
        // 왼쪽으로 스크롤
        $scrollContainer.scrollBy({
          top: 0,
          left: -200, // 원하는 스크롤 거리
          behavior: 'smooth', // 부드러운 스크롤
        });
      } else if (target.matches('.moveright')) {
        // 오른쪽으로 스크롤
        $scrollContainer.scrollBy({
          top: 0,
          left: 200, // 원하는 스크롤 거리
          behavior: 'smooth', // 부드러운 스크롤
        });
      }
    });
  });
});
