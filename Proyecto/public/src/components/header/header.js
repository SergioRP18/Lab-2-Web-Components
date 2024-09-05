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
        <link rel="stylesheet" href="./src/components/header/header.css">
        <header>
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

            <div class="banner">
                <img src="./src/assets/-............................................... 1.png" alt="Marvel Banner" >
                <div class="banner-text">
                    <h1>Welcome to Marvel Universe</h1>
                    <p>Explore the epic world of Marvel heroes and adventures. Dive into comics, movies, and more!</p>
                    <div class="buttons">
                    <button id="explore">EXPLORE NOW</button>
                    <button id="shop">SHOP MERCHANDISE</button>
                    </div>
                </div>
            </div>

            <nav class="nav-bottom">
                <ul>
                    <li><a>Celebrating 85 Years Of Marvel</a></li>
                    <li><a>Marvel At D23 2024</a></li>
                    <li><a>The Official Marvel Podcast</a></li>
                    <li><a>This Week's New Comics</a></li>
                    <li><a>2024 Marvel Ulimited Plus Member Kit</a></li>
                </ul>
            </nav>

            <nav class="social-media">
                <ul>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#666666" d="M20.9 2H3.1A1.1 1.1 0 0 0 2 3.1v17.8A1.1 1.1 0 0 0 3.1 22h9.58v-7.75h-2.6v-3h2.6V9a3.64 3.64 0 0 1 3.88-4a20 20 0 0 1 2.33.12v2.7H17.3c-1.26 0-1.5.6-1.5 1.47v1.93h3l-.39 3H15.8V22h5.1a1.1 1.1 0 0 0 1.1-1.1V3.1A1.1 1.1 0 0 0 20.9 2"/></svg></li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#666666" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/></svg></li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="#666666" d="M14.5 0h-13C.675 0 0 .675 0 1.5v13c0 .825.675 1.5 1.5 1.5h13c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5M11 2.5c0-.275.225-.5.5-.5h2c.275 0 .5.225.5.5v2c0 .275-.225.5-.5.5h-2a.5.5 0 0 1-.5-.5zM8 5a3.001 3.001 0 0 1 0 6a3.001 3.001 0 0 1 0-6m6 8.5c0 .275-.225.5-.5.5h-11a.5.5 0 0 1-.5-.5V7h1.1A5 5 0 0 0 8 13a5 5 0 0 0 4.9-6H14z"/></svg></li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#666666" d="M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29l-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43Z"/></svg></li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path fill="#666666" fill-rule="evenodd" d="M530.014 112.667c43.666-.667 86.997-.334 130.328-.667c2.667 51 21 102.999 58.33 138.998c37.332 37 89.997 54 141.328 59.666v134.332c-47.998-1.667-96.33-11.667-139.994-32.333c-19-8.667-36.665-19.667-53.998-31c-.333 97.332.334 194.665-.666 291.663c-2.667 46.666-18 93-44.998 131.332c-43.665 64-119.328 105.665-196.992 106.999c-47.664 2.666-95.329-10.334-135.994-34.333c-67.33-39.666-114.662-112.332-121.661-190.331c-.667-16.667-1-33.333-.334-49.666c6-63.333 37.332-123.999 85.997-165.332c55.33-47.999 132.66-70.999 204.99-57.332c.667 49.333-1.332 98.665-1.332 147.998c-33-10.667-71.664-7.667-100.663 12.333c-20.999 13.667-36.998 34.666-45.331 58.333c-7 17-5 35.666-4.667 53.666c8 54.666 60.664 100.665 116.662 95.665c37.332-.333 72.997-22 92.33-53.666c6.332-11 13.332-22.333 13.665-35.333c3.334-59.666 2-118.998 2.334-178.664c.333-134.332-.334-268.33.666-402.328"/></svg></li>
                </ul>
            </nav>
        </header>
        `
    }
}

customElements.define('app-header', AppHeader);
export default AppHeader;