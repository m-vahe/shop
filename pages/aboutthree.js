import PageHeader from "../layouts/header/Header";
import Footer from "../layouts/footer/Footer";
import MobileHeader from "../layouts/mobile-header/MobileHeader";
import AboutThreeScene from "../scenes/aboutthree";
export default function AboutThree() {
    return (
        <>
            <PageHeader />
            <MobileHeader/>
                <AboutThreeScene/>
            <Footer/>
        </>
    );
}
