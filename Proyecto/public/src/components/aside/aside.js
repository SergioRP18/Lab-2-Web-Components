class AsideContent extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'})
    }

    connectedCallback(){
        this.render
    }

    render(){
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./src/components/aside/aside.css">
                <h2>The Hype Box</h2>
                <p>Can’t-miss news and updates from across the Marvel Universe!</p>

        `;
    }
};
customElements.define('app-aside', AsideContent);
export default AsideContent;