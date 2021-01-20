import MagazinArtikelHeader from "./components/component-header/MagazinArtikelHeader";
import ArtikelFirstSection from "./components/artikel-first-section/ArtikelFirstSection";
import ArtikelFirstSecBottom from "./components/artikel-first-sec-bottom/ArtikelFirstSecBottom";
import MagazSticky from "./components/magazine-sticky-text-part/MagazSticky";
import ArtikelCenteredSection from "./components/artikel-centered-text/ArtikelCenteredTextSection";
import ArtikelTwoImages from "./components/artikel-two-images/ArtikelTwoImages";
import ArtikelProductsList from "./components/artikel-products-list/ArtikelProductsList";
import Social from "../../shareable/social/Social";
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";

const MagazinArtikelScene = () =>{
    return(
        <div>
            <MagazinArtikelHeader/>
            <ArtikelFirstSection/>
            <ArtikelFirstSecBottom/>
            <MagazSticky/>
            <ArtikelCenteredSection/>
            <ArtikelTwoImages/>
            <ArtikelProductsList/>
            <Social/>
            <NewsletterRep/>
        </div>
    )
}

export default MagazinArtikelScene