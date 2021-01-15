import PageHeader from "../layouts/header/Header";
import Footer from "../layouts/footer/Footer";
import MobileHeader from "../layouts/mobile-header/MobileHeader";
import MagazinArtikelScene from "../scenes/magazin-artikel-scene";
export default function Magazin() {
    return (
        <>
            <PageHeader />
            <MobileHeader/>
            <MagazinArtikelScene/>
            <Footer/>
        </>
    );
}
