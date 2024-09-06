import listProduct from "./listProduct";
class CardProduct extends HTMLElement {
    static get observedAttributes(){
        return ['img', 'tittle', 'year']
    }
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
    connectedCallback(){
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue){
        if(oldValue !== newValue) {
            this[propName] = newValue;
            this.render();
        }
    }
    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/cardProducts/product.css">
        <div class="container">
            <div class="products">
                <div class="product-list">
                    <div class="card">
                        <img src=${this.img}>
                        <div class="information">
                            <h4>${this.title}</h4>
                            <p>${this.year}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}
customElements.define('product-card', CardProduct)
export default CardProduct;