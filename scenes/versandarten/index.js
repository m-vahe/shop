import Header from "../../layouts/header/Header";
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import Footer from "../../layouts/footer/Footer";
import HeadImg from "./components/head-img/HeadImg";
import TextBoxOne from "./components/text-box-one/TextBoxOne";
import TextBoxTwo from "./components/text-box-two/TextBoxTwo";
import Services from "../../shareable/services/Services";
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";

const VersandartenScene = () => {
    return (
        <>
            <Header/>
            <MobileHeader/>
            <div className={"versandarten__scene__body"}>
                <HeadImg/>
                <TextBoxOne/>
                <TextBoxTwo/>
                <Services/>
                <div className={"versandarten__scene__body__newsletter"}>
                    <NewsletterRep/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default VersandartenScene