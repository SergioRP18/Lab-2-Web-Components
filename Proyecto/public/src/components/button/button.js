class PageButton extends HTMLElement {
    static get observedAttributes(){

    }
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }
    attributeChangedCallback(){

    }
    connectedCallback(){
        this.render();
    }
    render(){
        this.shadowRoot.innerHTML = `
        <button></button>
        `;
    }
}
customElements.define('button-page', PageButton);
export default PageButton;