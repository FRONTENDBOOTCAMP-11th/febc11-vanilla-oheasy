import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'), // 메인 홈
        signIn_main: resolve(__dirname, 'src/pages/auth/signIn_main.html'), // 로그인
        signIn_pwd: resolve(__dirname, 'src/pages/auth/signIn_pwd.html'), // 로그인
        signUp_main: resolve(__dirname, 'src/pages/auth/signUp_main.html'), // 회원가입
        signUp_terms: resolve(__dirname, 'src/pages/auth/signUp_terms.html'), // 회원가입
        bag: resolve(__dirname, 'src/pages/bag/bag.html'), // 장바구니
        products: resolve(__dirname, 'src/pages/products/products.html'), // 상품 리스트
        details: resolve(__dirname, 'src/pages/details/details.html'), // 상품 디테일
        button: resolve(__dirname, 'src/components/button.html'), // 버튼 컴포넌트
        footer: resolve(__dirname, 'src/components/footer-mobile.html'), // footer 컴포넌트
        header: resolve(__dirname, 'src/components/header-mobile.html'), // header 컴포넌트

        // 필요한 다른 HTML 파일을 여기에 추가
      },
    },
  },
});
