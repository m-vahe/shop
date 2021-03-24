import FormBody from "./form-body/FormBody";

const ContactForm = () =>{
    return(
        <div className={"contact__Form__form"}>
            <div className={"contact__Form__form__header"}>
                <h3>
                    Sie haben eine Frage oder ein Anliegen?
                </h3>
                <p>
                    Dann nehmen Sie mit uns Kontakt auf. Füllen Sie einfach das Formular aus
                    und wir werden Ihre Anfrage schnellstmöglich bearbeiten.
                </p>
            </div>
            <FormBody/>
        </div>
    )
}

export default ContactForm