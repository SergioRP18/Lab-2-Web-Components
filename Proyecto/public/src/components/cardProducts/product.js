/*import {default as Banner} from './banner.js';*/

class CardProduct extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        /*const banner = document.createElement('banner');
        banner.img = 'algo';
        banner.text = 'otra cosa';

        button.cssClass = 'red-white-text';

        this.shadowRoot.append(banner)*/

        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/cardProducts/product.css">
        <div class="container">
            <div class="products">
                <div class="product-list">
                    <div class="card">
                        <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/c/f0/664b9dec5dd37/portrait_uncanny.jpg">
                        <div class="information">
                            <h4>Hellverine (2024) #1</h4>
                            <p>2024</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/4/80/66797752bd6c7/portrait_uncanny.jpg">
                        <div class="information">
                            <h4>Hellverine (2024) #1</h4>
                            <p>2024</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/b/e0/663e5c1bd16ab/portrait_uncanny.jpg">
                        <div class="information">
                            <h4>Hellverine (2024) #1</h4>
                            <p>2024</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/6/b0/663e5c43c4b86/portrait_uncanny.jpg">
                        <div class="information">
                            <h4>Hellverine (2024) #1</h4>
                            <p>2024</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/f/03/663e5c5906239/portrait_uncanny.jpg">
                        <div class="information">
                            <h4>Hellverine (2024) #1</h4>
                            <p>2024</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/9/d0/663e5c178de2e/portrait_uncanny.jpg">
                        <div class="information">
                            <h4>Hellverine (2024) #1</h4>
                            <p>2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}
customElements.define('product-card', CardProduct)
export default CardProduct