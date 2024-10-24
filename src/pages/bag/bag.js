import axios from 'axios';

const cartList = document.getElementById('cart-list');

// 장바구니 정보 가져오기
axios
  .get('https://11.fesp.shop/carts', {
    headers: {
      'client-id': 'vanilla05', // dev의 토큰 정보
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsInR5cGUiOiJ1c2VyIiwibmFtZSI6IuygnOydtOyngCIsImVtYWlsIjoidTFAZ21haWwuY29tIiwiaW1hZ2UiOiIvZmlsZXMvdmFuaWxsYTA1L3VzZXItamF5Zy53ZWJwIiwibG9naW5UeXBlIjoiZW1haWwiLCJpYXQiOjE3Mjk2NzI2NzgsImV4cCI6MTcyOTc1OTA3OCwiaXNzIjoiRkVTUCJ9.CtdO_EFvyKv3HCAdB5LZJoK0n5bOeOx7jEZl7KNURgQ'
    },
  })
  .then(response => {
    // 장바구니 정보 확인
    console.log(response.data); // 데이터 확인
    const items = response.data.item; // 장바구니 아이템 배열
    
    // 장바구니에 아이템이 없을 경우 메시지 표시
    if (items.length === 0) {
      cartList.innerHTML = '<p>장바구니에 상품이 없습니다.</p>';
      return; // 함수 종료
    }

    // 각 아이템에 대한 HTML 생성
    let cartItemsHTML = '';
    

    items.forEach(cart => {
      // 장바구니 정보에서 필요한 데이터 추출
      const quantity = cart.quantity; // 수량
      const size = cart.size; // 사이즈
      const productName = cart.product.name; // 상품명
      const productPrice = cart.product.price; // 가격
      const productImage = cart.product.image.name; // 이미지 파일의 이름
      const productCategory = cart.product.category; // 카테고리 --> 없는것 같음


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
              <p>${productCategory}</p>
              <div class="size_count_text">
                <div class="size_text">
                  <p>사이즈</p>
                  <p>${size}</p>
                </div>
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
          <img onclick="wishAdd" class="button" src="/src/assets/icons/heart.svg" alt="Add to Wishlist">
          <img onclick="removeCart" class="move_icon button" src="/src/assets/icons/trash.svg" alt="Remove from Cart">
        </div>
      </div>
      `;
      // 버튼들의 기능도 추가해야함 (+, -, 하트, 쓰레기통)
      
    });

    cartList.innerHTML = cartItemsHTML;    // cartItemsHTML을 반환 한 cartList를 html에 삽입
  })
  .catch(error => {
    console.error('Error:', error);
    cartList.innerHTML = '<p>장바구니를 불러오는 데 실패했습니다.</p>';
  });



  const quantityPlus = function(){

  }
  
  const quantityMiuns = function(){
    
  }


  // 장바구니에 아무것도 없는 경우도 테스트 해보고 싶음