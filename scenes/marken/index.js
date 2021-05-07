import Header from "../../layouts/header/Header";
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import Footer from "../../layouts/footer/Footer";
import ContactHeader from "../../shareable/contact-header/ContactHeader";
import Marken from "./components/marken/Marken";

const MarkenScene = () =>{
    return(
        <>
            <Header/>
            <MobileHeader/>
            <ContactHeader/>
            <Marken/>
            <Footer/>
        </>
    )
}

export default MarkenScene