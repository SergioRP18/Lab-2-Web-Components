class FeaturedSection extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/featured/featured.css">
        <section class="featured-section">
            <div class="banner">
                <img src="./src/assets/image 14.png" alt="Marvel Banner">
                <div class="banner-text">
                    <img src="https://cdn.marvel.com/content/u/open-html-assets/unlimited-sellpage/mu-logo-full-light.69458f73.png" alt="logo unlimited">
                    <h4>AVALIBLE NOW</h4>
                    <h1>NEW ON MARVEL UNLIMITED</h1>
                    <p>Read these plus 30,000+ digital comics for $9.99 a month!</p>
                    <div class="buttons">
                    <button id="get">GET MARVEL UNLIMITED</button>
                    </div>
                </div>
            </div>

            <product-card></product-card>
        </section>
        `
    }
}

customElements.define('featured-section', FeaturedSection);
export default FeaturedSection;