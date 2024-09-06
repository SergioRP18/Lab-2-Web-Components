import * as components from './components/indexPadre.js'
import bannerList from './components/featured/bannerProducts/bannerList.js';
import listProduct from './components/cardProducts/listProduct.js';
import cardList from './components/card/cardList.js';

class App extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}
    attributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.render();
    }
	connectedCallback() {
		this.render();
	}

	render() {

        //<app-header></app-header>
        const header = document.createElement("app-header");
        this.shadowRoot.append(header);

        const main = document.createElement("main");

        //<featured-section></featured-section>
        const featured = document.createElement("featured-section");
        main.append(featured);

        const productBanner = document.createElement("banner-products");
        productBanner.className = "productBanner";
        bannerList.forEach(info => {
            `<banner-products
                img = "${info.img}"
                logo = "${info.logo}"
                alt = "${info.alt}"
                tittle = "${info.tittle}"
                type = "${info.type}"
                description = "${info.description}"
                txtbutton = "${info.txtbutton}"
            ></banner-products>`

        });
        const product = document.createElement("product-card");
        product.className = "product";
        listProduct.forEach((info) => {`
                <product-card
                    img = "${info.img}"
                    tittle = "${info.tittle}"
                    year = "${info.year}"
                ></product-card>
                `
            });
        
        const divContent = document.createElement("div");
        divContent.style = "display: flex; flex-direction: row; flex-wrap: nowrap;";

        const section = document.createElement("section");
        section.classList.add("content");

        //<card-item></card-item>
        const cardItem = document.createElement("card-item")
        cardItem.className = "cardItem";
        cardList.forEach((info) => {
            `
            <card-item
                img = "${info.img}"
                type = "${info.type}"
                tittle = "${info.tittle}"
                link = "${info.link}"
            ></card-item>
            `
        })
    }
}
customElements.define('app-container', App);