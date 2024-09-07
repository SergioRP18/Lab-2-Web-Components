class BannerProducts extends HTMLElement {
    static get observedAttributes(){
        return ['img','logo', 'alt', 'tittle', 'type', 'description', 'txtbutton']
    }
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
    connectedCallback(){
        this.render();
    }
    attributeChangedCallback(propName, OldValue, newValue){
        if(OldValue !== newValue) {
            this[propName] = newValue;
            this.render();
        }
    }
    render(){
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./src/components/featured/bannerProducts/bannerProducts.css">
            
            <div class="banner">
                <img src=${this.img} alt=${this.alt}>
                <div class="banner-text">
                    <img src="${this.logo||undefined}" alt="${this.alt ||undefined}">
                    <h4>${this.type}</h4>
                    <h1>${this.tittle}</h1>
                    <p>${this.description}</p>
                    <div class="buttons">
                    <button id="get">${this.txtbutton}</button>
                    </div>
                </div>
            </div>
        `
    }
};
customElements.define('banner-products', BannerProducts);
export default BannerProducts;