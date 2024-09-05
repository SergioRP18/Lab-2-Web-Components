class AppHeader extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <header>
            <app-nav></app-nav>
            <app-banner></app-banner>
        </header>
        `
    }
}

customElements.define('app-header', AppHeader);
export default AppHeader;