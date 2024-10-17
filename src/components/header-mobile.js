class HeaderMobile extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
          <style>
              .header {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  padding-left: 14px;
                  padding-right: 24px;
              }
  
              .header-controls {
                  display: flex;
                  gap: 4px;
              }
  
              .header-controls img {
                  padding: 6px;
              }
          </style>
  
          <header class="header">
              <img src="./icons/logo.svg" alt="nike logo" />
              <div class="header-controls">
                  <img src="../../assets/icons/search.svg" alt="search" />
                  <img src="../../assets/icons/user.svg" alt="user" />
                  <img src="../../assets/icons/bag.svg" alt="bag" />
                  <img src="../../assets/icons/menu.svg" alt="menu" />
              </div>
          </header>
        `;
  }
}

customElements.define('header-mobile', HeaderMobile);
