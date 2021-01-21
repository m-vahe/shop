import MagazinArtikelHeader from "./components/component-header/MagazinArtikelHeader";
import Social from "../../shareable/social/Social";
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";
import SecondArtikelFirstSection from "./components/sec-artikel-first-section/ArtikelFirstSection";
import MagazSticky from "./components/magazine-sticky-text-part/MagazSticky";

const MagazinArtikelSceneTwo = () =>{
    return(
        <div>
            <MagazinArtikelHeader/>
            <SecondArtikelFirstSection/>
            <MagazSticky/>
            <Social/>
            <NewsletterRep/>
        </div>
    )
}

export default MagazinArtikelSceneTwo