import PageHeader from "../layouts/header/Header";
import Footer from "../layouts/footer/Footer";
import MobileHeader from "../layouts/mobile-header/MobileHeader";
import AboutTwoScene from "../scenes/abouttwo";
export default function AboutTwo() {
    return (
        <>
            <PageHeader />
            <MobileHeader/>
                <AboutTwoScene/>
            <Footer/>
        </>
    );
}
