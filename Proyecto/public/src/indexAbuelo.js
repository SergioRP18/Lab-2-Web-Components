import * as components from './components/indexPadre.js';

import { bannerList } from './data/bannerList.js';
import { listProduct } from './data/listProduct.js';
import { cardList } from './data/cardList.js';

class App extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}
	connectedCallback() {
		this.render();
	}

	render() {
        this.shadowRoot.innerHTML = `
        <header>
            <app-nav></app-nav>
            <app-banner></app-banner>
        </header>
        `;

        const bannerProduct = document.createElement("banner-products");
        bannerProduct.className = "banner";
        bannerList.forEach((info) => {
            this.shadowRoot.innerHTML += `
                <banner-products
                    img= "${info.img}"
                    logo= "${info.logo}"
                    alt= "${info.alt}"
                    tittle = "${info.tittle}"
                    type = "${info.type}"
                    description = "${info.description}"
                    txtbutton = "${info.txtbutton}"
                ></banner-products>
                `
        })

        const product = document.createElement("product-card");
        product.className = "product";
        listProduct.forEach((info) => {
            this.shadowRoot.innerHTML += `
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
        cardList.forEach((info) => {
            this.shadowRoot.innerHTML += `
                <h1>THE LATEST</h1>
            <card-item 
                img = "${info.img}"
                type = "${info.type}"
                tittle = "${info.tittle}"
                link = "${info.link}">
            </card-item>
            `
        });

        divContent.append(section);
        
        const aside = document.createElement("app-aside");
        divContent.append(aside);

        const bannerProductBottom = document.createElement("banner-products");
        bannerProductBottom.className = "banner-bottom";
        bannerList.forEach((info) => {
            this.shadowRoot.innerHTML += `
                <banner-products
                    img= "${info.img}"
                    logo= "${info.logo}"
                    alt= "${info.alt}"
                    tittle = "${info.tittle}"
                    type = "${info.type}"
                    description = "${info.description}"
                    txtbutton = "${info.txtbutton}"
                ></banner-products>
                `
        })

        const productBannerBottom = document.createElement("product-card");
        productBannerBottom.className = "product-banner-bottom";
        listProduct.forEach((info) => {
            this.shadowRoot.innerHTML += `
                <product-card
                    img = "${info.img}"
                    tittle = "${info.tittle}"
                    year = "${info.year}"
                ></product-card>>
                `
            });
    
        const footer = document.createElement("app-footer");
        this.shadowRoot.append(footer);
    }
}
customElements.define('app-container', App);