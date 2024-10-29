import axios from 'axios';

let myToken =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsInR5cGUiOiJ1c2VyIiwibmFtZSI6IuygnOydtOyngCIsImVtYWlsIjoidTFAZ21haWwuY29tIiwiaW1hZ2UiOiIvZmlsZXMvdmFuaWxsYTA1L3VzZXItamF5Zy53ZWJwIiwibG9naW5UeXBlIjoiZW1haWwiLCJpYXQiOjE3MzAxODAzMTIsImV4cCI6MTczMDI2NjcxMiwiaXNzIjoiRkVTUCJ9.3JdLOSR7LXT2iYu4b1AcmRC-u8IqYbEYj9lBL07WBP0'; // 생략된 토큰

document.addEventListener('DOMContentLoaded', () => {
  const cartList = document.getElementById('cart-list');
  const baginfo = document.getElementById('bag-info');
  const pay = document.getElementById('pay');

  const fetchCart = async () => {
    try {
      const response = await axios.get('https://11.fesp.shop/carts', {
        headers: {
          'client-id': 'vanilla05',
          Authorization: myToken,
        },
      });

      const items = response.data.item;

      if (items.length === 0) {
        cartList.innerHTML = '<p>장바구니에 상품이 없습니다.</p>';
        baginfo.innerHTML = '';
        pay.innerHTML = '';
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
              <a href="/src/pages/details/details.html">
                <img class="img_size" src="/api/dbinit-sample/nike/uploadFiles/${productImage}" alt="${productName}">
              </a>
            </div>
            <div class="product_text_section">
              <div class="black_text">
                <a href="/src/pages/details/details.html">
                  <p id="product_name">${productName}</p>
                </a>
                <p id="product_price">${productPrice.toLocaleString()} 원</p> 
              </div>  
              <div class="gray_text">
                <p>사이즈: ${size}</p>
                <div class="size_count_text">
                  <div class="count_text">
                    <p>수량</p>
                    <div class="count_number">
                      <img class="button minus" src="/src/assets/icons/minus.svg" alt="Decrease" data-cart-id="${cart._id}">
                      <p>${quantity}</p>
                      <img class="button plus" src="/src/assets/icons/plus.svg" alt="Increase" data-cart-id="${cart._id}">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="product_icon_section">
            <img onclick="wishAdd()" class="button" src="/src/assets/icons/heart.svg" alt="Add to Wishlist">
            <img onclick="removeCart()" class="move_icon button" src="/src/assets/icons/trash.svg" alt="Remove from Cart">
          </div>
        </div>
        `;
      });

      cartList.innerHTML = cartItemsHTML;
      baginfo.innerHTML = `<p>${totalQuantity} 개의 제품 | ${totalPrice.toLocaleString()} 원</p>`;
      pay.innerHTML = `
          <div class="oder_list_section">
            <h1 class="oder_list_title_text">주문 내역</h1>
            <div class="oder_list_text">
              <div class="oder_list_text_icon">
                <p>상품 금액</p>
                <img class="question_icon" src="/src/assets/icons/question.svg" alt="">
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
      cartList.innerHTML = '<p>장바구니를 불러오는 데 실패했습니다.</p>';
      baginfo.innerHTML = '';
      pay.innerHTML = '<p>장바구니를 불러오는 데 실패했습니다.</p>';
    }
  };

  // 함수 호출
  fetchCart();

  const updateQuantity = async (cartId, quantity) => {
    try {
      await axios.patch(
        `https://11.fesp.shop/carts/${cartId}`,
        { quantity },
        {
          headers: {
            'client-id': 'vanilla05',
            Authorization: myToken,
          },
        },
      );
    } catch (error) {
      console.error('수량 변경 실패:', error);
      alert('수량 변경에 실패했습니다.');
    }
  };

  cartList.addEventListener('click', async event => {
    const target = event.target;
    // 수량 증감 버튼 클릭
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
    fetchCart();
  });
});
