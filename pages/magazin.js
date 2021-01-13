import PageHeader from "../layouts/header/Header";
import Footer from "../layouts/footer/Footer";
import MobileHeader from "../layouts/mobile-header/MobileHeader";
import MagazinScene from "../scenes/magazin";
export default function Magazin() {
    return (
        <>
            <PageHeader />
            <MobileHeader/>
                <MagazinScene/>
            <Footer/>
        </>
    );
}
