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
            <banner-products></banner-products>
        </section>
        `;
    }
}

customElements.define('featured-section', FeaturedSection);
export default FeaturedSection;