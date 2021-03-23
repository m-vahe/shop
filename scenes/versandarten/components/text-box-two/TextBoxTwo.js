const TextBoxTwo = () =>{
    return(
        <div className={"text__box__two__container"}>
            <h2 className={"text__box__two__container__header"}>Zahlung</h2>
            <div className={"text__box__two__container__body"}>
                <div className={"text__box__two__container__body__left"}>
                    <h3>Zahlungsmöglichkeiten</h3>
                    <p>
                        -  Vorkasse per Überweisung
                    </p>
                    <p>
                        -  Nachnahme
                    </p>
                    <p>
                        -  Zahlung per Kreditkarte über unseren Zahlungsanbieter Concardis
                    </p>
                    <p>
                        -  Amazon Pay
                    </p>
                    <p>
                        -  Sofortüberweisung
                    </p>
                    <p>
                        -  Zahlung per PayPal Plus (PayPal, Kreditkarte, Lastschrift)
                    </p>
                </div>
                <div className={"text__box__two__container__body__right"}>
                    <h3>Unsere Bankverbindung</h3>
                    <div className={"text__box__two__container__body__right__item"}>
                        <div>
                            <p>Inhaber</p>
                            <p>Kto-Nr.</p>
                            <p>BLZ</p>
                            <p>Institut</p>
                            <p>BIC/SWIFT</p>
                            <p>IBAN</p>
                        </div>
                        <div>
                            <p>Das Parfum and Beauty Distribution 1912 GmbH</p>
                            <p>0512752700</p>
                            <p>51040038</p>
                            <p>Commerzbank</p>
                            <p>COBADEFF</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextBoxTwo