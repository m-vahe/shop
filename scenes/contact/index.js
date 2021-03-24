import Header from "../../layouts/header/Header";
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import Footer from "../../layouts/footer/Footer";
import ContactHeader from "./components/contact-header/ContactHeader";
import ContactFormBody from "./components/contact-form/ContactFormBody";
import Services from "../../shareable/services/Services";
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";

const ContactScene = () => {
    return(
        <>
            <Header/>
            <MobileHeader/>
            <div className={"contact__scene__body"}>
                <ContactHeader/>
                <ContactFormBody/>
            </div>
            <Services/>
            <NewsletterRep/>
            <Footer/>
        </>
    )
}

export default ContactScene