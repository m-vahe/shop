import PageHeader from "../layouts/header/Header";
import Footer from "../layouts/footer/Footer";
import MobileHeader from "../layouts/mobile-header/MobileHeader";
import LexikonScene from "../scenes/lexikon";
export default function Lexikon() {
    return (
        <>
            <PageHeader />
            <MobileHeader/>
            <LexikonScene/>
            <Footer/>
        </>
    );
}
