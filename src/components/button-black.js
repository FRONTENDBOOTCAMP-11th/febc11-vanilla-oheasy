class ButtonBlack extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
          <style>
            button {
                all: unset;
            }
            button {
                width: 100%;
                height: 64px;
                text-align: center;
                border-radius: 30px;
                font-weight: 500;
                cursor: pointer;

                
                background-color: var(--color-black);
                color: var(--color-white);
            }
          </style>
  
          <button>
            <slot/>
          </button>
        `;
  }
}

customElements.define('button-black', ButtonBlack);
