class AppBanner extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        this.render();
    }
    render(){
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./src/components/header/banner/banner.css">

            
        `
    }
};
customElements.define('app-banner', AppBanner);
export default AppBanner;