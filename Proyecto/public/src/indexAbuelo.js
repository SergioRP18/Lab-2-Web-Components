import * as components from './components/indexPadre.js'

class App extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
        // <app-header></app-header>
        const header = document.createElement("app-header");
        this.shadowRoot.append(header);

        const main = document.createElement("main");

        // <featured-section></featured-section>
        const featured = document.createElement("featured-section");
        main.append(featured);

        const divContent = document.createElement('div');
        divContent.style = 'display: flex; flex-direction: row; flex-wrap: nowrap;';

        const section = document.createElement('section');
        section.classList.add('content');

        // <card-item></card-item>
        const cardItem = document.createElement('card-item');
        section.append(cardItem);

        divContent.append(section);

        // TODO: Componente aparte
        const aside = document.createElement('aside');
        divContent.append(aside);

        main.append(divContent)

        this.shadowRoot.append(main);

        // <app-footer></app-footer>
        const footer = document.createElement('app-footer');
        this.shadowRoot.append(footer);
	}
}

customElements.define('app-container', App);