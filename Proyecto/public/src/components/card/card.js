class CardItem extends HTMLElement {
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
                    <img src="https://cdn.marvel.com/content/1x/hollywoodbowl1_0.jpg" alt="">
                    <div class="card-text">
                        <h5>CULTURE & LISFESTYLE</h5>
                        <h2>Marvel Studios’ Infinity Saga Concert Experience Debuts at the Hollywood Bowl</h2>
                    </div>
                </div>
                <div class="card">
                    <img src="https://cdn.marvel.com/content/1x/30s_marvel_comics_1939_1_art_by_frank_paul.jpg" alt="">
                    <div class="card-text">
                        <h5>COMICS</h5>
                        <h2>Marvel's 85th Anniversary: Marvel Comics Through the Decades</h2>
                        <h5>3 DAYS AGO</h5>
                        <p>Earn Points, Get Rewards <a href="#">Join Now</a></p>
                    </div>
                </div>
                <div class="card">
                    <img src="https://cdn.marvel.com/content/1x/40s_captain_america_comics_1941_1_art_by_jack_kirby_and_joe_simon.jpg" alt="">
                    <div class="card-text">
                        <h5>COMICS</h5>
                        <h2>'Deadpool' #7 First Look Debuts the New Deadpool</h2>
                        <h5>3 DAYS AGO</h5>
                    </div>
                </div>
                <div class="card">
                    <img src="https://cdn.marvel.com/content/1x/50s_young_men_1950_24_art_by_carl_burgos.jpg" alt="">
                    <div class="card-text">
                        <h5>CULTURE & LISFESTYLE</h5>
                        <h2>An Exclusive First Look Into 'Marvel Studios' Deadpool & Wolverine: The Art of the Movie'</h2>
                        <h5>4 DAYS AGO</h5>
                        <p>Earn Points, Get Rewards <a href="#">Join Now</a></p>
                    </div>
                </div>
                <div class="card">
                    <img src="https://cdn.marvel.com/content/1x/img_3283.jpg" alt="">
                    <div class="card-text">
                        <h5>COMICS</h5>
                        <h2>Celebrate the Art of the Marvel Cinematic Universe with New Marvel Studios Variant Covers by Ryan Meinerding</h2>
                        <h5>4 DAYS AGO</h5>
                        <p>Earn Points, Get Rewards <a href="#">Join Now</a></p>
                    </div>
                </div>
                <div class="card">
                    <img src="https://cdn.marvel.com/content/1x/70s_giant-size_x-men_1975_1_art_by_gil_kane_dave_cockrum_and_danny_crespi.jpg" alt="">
                    <div class="card-text">
                        <h5>COMICS</h5>
                        <h2>The Final Battle of the Galactic Civil War is Told Across Three New 'Star Wars' Comic Series</h2>
                        <h5>4 DAYS AGO</h5>
                    </div>
                </div>
                <div class="card">
                    <img src="https://cdn.marvel.com/content/1x/90s_new_mutants_1983_98_art_by_rob_liefeld_fabain_nicieza_and_steve_buccellato.jpg" alt="">
                    <div class="card-text">
                        <h5>COMICS</h5>
                        <h2>Meet Laura Kinney, the Torchbearer of Wolverine's Legacy</h2>
                        <h5>5 DAYS AGO</h5>
                    </div>
                </div>
                <div class="card">
                    <img src="https://cdn.marvel.com/content/1x/70s_giant-size_x-men_1975_1_art_by_gil_kane_dave_cockrum_and_danny_crespi.jpg" alt="">
                    <div class="card-text">
                        <h5>GEAR</h5>
                        <h2>Shop Marvel Must Haves: Celebrating 85 Years of Marvel</h2>
                        <h5>5 DAYS AGO</h5>
                        <p>Earn Points, Get Rewards <a href="#">Join Now</a></p>
                    </div>
                </div>
            </div>
        </section>

        <banner-products></banner-products>
        `
        const banner = document.createElement('featured-section');
        banner.append()
    }
}

customElements.define('card-item', CardItem);
export default CardItem;