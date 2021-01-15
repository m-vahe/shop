import MagazinArtikelHeader from "./components/component-header/MagazinArtikelHeader";
import ArtikelFirstSection from "./components/artikel-first-section/ArtikelFirstSection";
import ArtikelFirstSecBottom from "./components/artikel-first-sec-bottom/ArtikelFirstSecBottom";
import MagazSticky from "./components/magazine-sticky-text-part/MagazSticky";
import ArtikelCenteredSection from "./components/artikel-centered-text/ArtikelCenteredTextSection";

const MagazinArtikelScene = () =>{
    return(
        <div>
            <MagazinArtikelHeader/>
            <ArtikelFirstSection/>
            <ArtikelFirstSecBottom/>
            <MagazSticky/>
            <ArtikelCenteredSection/>
        </div>
    )
}

export default MagazinArtikelScene