class AppNav extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
    connectedCallback(){
        this.render();
    }
    render(){
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./src/components/header/nav/nav.css">

            <nav class="top">
                <div class="right"><a>LOG IN | JOIN</a></div>
                <div class="logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKWvTBRoPPPWRqEhiP3PK_fvawaL2_3MI1Cg&s" alt="Logo de Marvel">
                </div>
                <div class="left"><a>MARVEL ULIMITED</a></div>
            </nav>

            <nav>
            <div class="nav-input"></div>
                <ul>
                    <li><a>NEWS</a></li>
                    <li><a>COMICS</a></li>
                    <li><a>CHARACTERS</a></li>
                    <li><a>MOVIES</a></li>
                    <li><a>TV SHOWS</a></li>
                    <li><a>GAMES</a></li>
                    <li><a>VIDEO</a></li>
                    <li><a>MORE</a></li>
                </ul>
                <div class="icons">
                </div>
            </nav>
        `
    }
}
customElements.define('app-nav',AppNav);
export default AppNav;