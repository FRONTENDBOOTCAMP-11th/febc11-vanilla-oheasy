import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'), // 메인 홈
        signIn: resolve(__dirname, 'src/pages/auth/signIn.html'), // 로그인
        bag: resolve(__dirname, 'src/pages/board/bag.html'), // 장바구니
        products: resolve(__dirname, 'src/pages/auth/products.html'), // 상품 리스트
        details: resolve(__dirname, 'src/pages/board/details.html'), // 상품 디테일
        // 필요한 다른 HTML 파일을 여기에 추가
      },
    },
  },
});
