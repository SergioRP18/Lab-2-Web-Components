class BannerProducts extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
    connectedCallback(){
        this.render();
    }
    render(){
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./src/components/featured/bannerProducts/bannerProducts.css">

            <div class="banner">
                <img src="./src/assets/image 14.png" alt="Marvel Banner">
                <div class="banner-text">
                    <img src="https://cdn.marvel.com/content/u/open-html-assets/unlimited-sellpage/mu-logo-full-light.69458f73.png" alt="logo unlimited">
                    <h4>AVALIBLE NOW</h4>
                    <h1>NEW ON MARVEL UNLIMITED</h1>
                    <p>Explore the epic world of Marvel heroes and adventures. Dive into comics, movies, and more!</p>
                    <div class="buttons">
                    <button id="get">GET MARVEL UNLIMITED</button>
                    </div>
                </div>
            </div>
            <product-card></product-card>
        `
    }
};
customElements.define('banner-products', BannerProducts);
export default BannerProducts;