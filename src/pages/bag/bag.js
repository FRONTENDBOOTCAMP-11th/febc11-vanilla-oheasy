"use script";

import axios from 'axios';

  const get = function() {
    axios
      .get('https://11.fesp.shop/carts')
      .then(res => {
        console.log(res)
        const h1El = document.querySelector('h1')
        const imgEl = document.querySelector('img')
        h1El.textContent = res.data.Search[0].Title
        imgEl.src = res.data.Search[0].Poster
      })
  };

  console.log(get);

  