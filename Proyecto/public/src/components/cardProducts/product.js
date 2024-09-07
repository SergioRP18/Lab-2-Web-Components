class CardProduct extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
    static get observedAttributes(){
        return ['img', 'tittle', 'year']
    }
    attributeChangedCallback(propName, oldValue, newValue){
        if(oldValue !== newValue) {
            this[propName] = newValue;
            this.render();
        }
    }
    connectedCallback(){
        this.render();
    }
    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/cardProducts/product.css">
        
        <div class="container">
            <div class="products">
                    <div class="card">
                        <img src=${this.img}>
                        <div class="information">
                            <h4>${this.tittle}</h4>
                            <p>${this.year}</p>
                        </div>
                    </div>
            </div>
        </div>
        `
    }
}
customElements.define('product-card', CardProduct)
export default CardProduct;