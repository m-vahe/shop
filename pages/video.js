import PageHeader from "../layouts/header/Header";
import Footer from "../layouts/footer/Footer";
import VideoScene from "../scenes/video";
import MobileHeader from "../layouts/mobile-header/MobileHeader";
export default function Video() {
    return (
        <>
            <PageHeader />
            <MobileHeader/>
               <VideoScene />
            <Footer/>
        </>
    );
}
