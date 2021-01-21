import PageHeader from "../layouts/header/Header";
import Footer from "../layouts/footer/Footer";
import MobileHeader from "../layouts/mobile-header/MobileHeader";
import MagazinArtikelSceneTwo from "../scenes/magazin-artikel-scene-two";
export default function MagazinTwo() {
    return (
        <>
            <PageHeader />
            <MobileHeader/>
                <MagazinArtikelSceneTwo/>
            <Footer/>
        </>
    );
}
