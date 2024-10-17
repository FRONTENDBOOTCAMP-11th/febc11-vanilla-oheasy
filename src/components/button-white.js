class ButtonWhite extends HTMLElement {
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
  
                    
                    
                  background-color: var(--color-white);
                  border: 1px solid var(--color-grey-50);
                }
              </style>
      
              <button>
                <slot/>
              </button>
            `;
  }
}

customElements.define('button-white', ButtonWhite);
