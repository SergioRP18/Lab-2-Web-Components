class CardItem extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
    static get observedAttributes(){
        return ['img', 'type', 'tittle', 'link']
    }
    attributeChangedCallback(propName, oldValue, newValue){
        if(oldValue !== newValue){
            this[propName] = newValue;
            this.render();
        }
    }
    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/card/card.css">
        <section class="column">
            <div class ="content">
                <div class="card">
                    <img src="${this.img}" alt="">
                    <div class="card-text">
                        <h5>${this.type}</h5>
                        <h2>${this.tittle}</h2>
                        <p>Earn Points, Get Rewards <a>${this.link||undefined}</a></p>
                    </div>
                </div>
            </div>
        </section>
        `
    }
}
customElements.define('card-item', CardItem);
export default CardItem;