import PageHeader from "../layouts/header/Header";
import Footer from "../layouts/footer/Footer";
import HerrenScene from "../scenes/herren";
import MobileHeader from "../layouts/mobile-header/MobileHeader";
export default function Herren() {
    return (
        <>
            <PageHeader />
            <MobileHeader/>
                <HerrenScene/>
            <Footer/>
        </>
    );
}
