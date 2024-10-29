import axios from 'axios';

const cartList = document.getElementById('cart-list');
const baginfo = document.getElementById('bag-info');
const payment = document.getElementById('pay');
axios
  .get('https://11.fesp.shop/carts', { // 장바구니 정보 가져오기
    headers: {
      'client-id': 'vanilla05',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsInR5cGUiOiJ1c2VyIiwibmFtZSI6IuygnOydtOyngCIsImVtYWlsIjoidTFAZ21haWwuY29tIiwiaW1hZ2UiOiIvZmlsZXMvdmFuaWxsYTA1L3VzZXItamF5Zy53ZWJwIiwibG9naW5UeXBlIjoiZW1haWwiLCJpYXQiOjE3MzAwNzQ0ODMsImV4cCI6MTczMDE2MDg4MywiaXNzIjoiRkVTUCJ9.-WFqisZ0vAbwaWyryapt5zAnME_EiznoF5-8lCSyeek'
    },
  })

  .then(response => { //HTML에 출력될 메시지
    const items = response.data.item; // 장바구니 아이템 배열

    // 장바구니에 아이템이 없을 경우 메시지 표시
    if (items.length === 0) {
      cartList.innerHTML = '<p>장바구니에 상품이 없습니다.</p>';
      baginfo.innerHTML = '';
      payment.innerHTML = '';
      return; // 함수 종료
    }

    // 각 아이템에 대한 HTML 생성
    let cartItemsHTML = '';
    let totalQuantity = 0; // 총 제품 수
    let totalPrice = 0; // 총 가격

    items.forEach(cart => {
      const quantity = cart.quantity; // 수량
      const size = cart.size; // 사이즈
      const productName = cart.product.name; // 상품명
      const productPrice = cart.product.price; // 가격
      const productImage = cart.product.image.name; // 이미지 파일의 이름

      totalQuantity += quantity; // 총 수량 증가
      totalPrice += productPrice * quantity; // 총 가격 증가

      // HTML 구조 생성
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
                    <img onclick="quantityMiuns()" class="button" src="/src/assets/icons/minus.svg" alt="Decrease">
                    <p>${quantity}</p>
                    <img onclick="quantityPlus()" class="button" src="/src/assets/icons/plus.svg" alt="Increase">
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

    cartList.innerHTML = cartItemsHTML; // cartItemsHTML을 cartList에 삽입
    baginfo.innerHTML = `<p>${totalQuantity} 개의 제품 | ${totalPrice.toLocaleString()} 원</p>`; // 총 제품 수와 가격 표시
    payment.innerHTML = `
        <div class="oder_list_section">
          <h1 class="oder_list_title_text">주문 내역</h1>
          <div class="oder_list_text">
            <div class="oder_list_text_icon">
              <p>상품 금액</p>
              <img class="question_icon" src="/src/assets/icons/question.svg" alt=""> <!-- 클릭시 추가 설명띄우기-->
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
  })
  
  
  (error => { //오류 메시지
    console.error('Error:', error);
    cartList.innerHTML = '<p>장바구니를 불러오는 데 실패했습니다.</p>';
    baginfo.innerHTML = '';
    payment.innerHTML = '<p>장바구니를 불러오는 데 실패했습니다.</p>'
  });

const quantityPlus = function() { // 수량 증가 기능 구현
  
}

const quantityMiuns = function() { // 수량 감소 기능 구현
  
}
