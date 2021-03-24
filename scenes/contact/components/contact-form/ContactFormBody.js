import ContactHeader from "./header/ContactHeader";
import ContactForm from "./form/ContactForm";

const ContactFormBody = () =>{
    return(
        <div className={"contact__form__body"}>
            <ContactHeader/>
            <ContactForm/>
        </div>
    )
}

export default ContactFormBody