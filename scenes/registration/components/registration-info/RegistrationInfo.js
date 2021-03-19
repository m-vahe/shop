
const RegistrationInfo = () => {
    return (
        <div className={"registration__info__container"}>
            <h2 className={"registration__info__container--title"}>Vorteile Registrierter kunden</h2>
            <div className={"registration__info__container--img"}>
                <img src="/anzeige-final.jpg" alt="/anzeige-final.jpg"/>
            </div>
            <div className={"registration__info__container__textitems"}>
                <div  className={"registration__info__container__textitems--item"}>
                    <img src="/registrationicons/calendar.png" alt="/registrationicons/calendar.png"/>
                    <p>14 Tage Gratis Rückversand</p>
                </div>
                <div className={"registration__info__container__textitems--item"}>
                    <img src="/registrationicons/bus.png" alt="/registrationicons/bus.png"/>
                    <p>Gratis Express-Versand</p>
                </div>
                <div className={"registration__info__container__textitems--item"}>
                    <img src="/registrationicons/box.png" alt="/registrationicons/box.png"/>
                    <p>
                        Versandkostenfreie Lieferung ab 25 EUR in Deutschland, ab 50 EUR in Österreich.
                    </p>
                </div>
                <div className={"registration__info__container__textitems--item"}>
                    <img src="/registrationicons/card.png" alt="/registrationicons/card.png"/>
                    <p>
                        Alle gängigen Zahlungsmethoden (PayPal, Kreditkarte, Vorkasse, Nachnahme, Amazon Pay, Lastschrift)
                    </p>
                </div>
                <div className={"registration__info__container__textitems--item"}>
                    <img src="/registrationicons/pfone.png" alt="/registrationicons/pfone.png"/>
                    <p>
                        Persönlicher Support per Telefon, E-Mail und WhatsApp für individuelle Wünsche, Anmerkungen, etc.
                    </p>
                </div>
                <div className={"registration__info__container__textitems--item"}>
                    <img src="/registrationicons/gift.png" alt="/registrationicons/gift.png"/>
                    <p>
                        Verpackungsservice: Produkte handverpackt als Geschenk, auf Wunsch mit handgeschriebener Grußkarte
                    </p>
                </div>
                <div className={"registration__info__container__textitems--item"}>
                    <img src="/registrationicons/connections.png" alt="/registrationicons/connections.png"/>
                    <p>
                        Individuelle Beratung und Selbstabholung in unserem Showroom
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RegistrationInfo