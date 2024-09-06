class CardItem extends HTMLElement {
    static get observedAttributes(){
        return ['img', 'type', 'tittle', 'link']
    }
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/card/card.css">
        <section class="column">
            <div class ="content">
                <h1>THE LATEST</h1>
                <div class="card">
                    <img src="${this.img}" alt="">
                    <div class="card-text">
                        <h5>${this.type}</h5>
                        <h2>${this.tittle}</h2>
                        <p>Earn Points, Get Rewards<a>${this.link||undefined}</a></p>
                    </div>
                </div>
            </div>
        </section>

        <banner-product></banner-product>
        `
    }
}
customElements.define('card-item', CardItem);
export default CardItem;