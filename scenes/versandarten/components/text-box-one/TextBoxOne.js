const TextBoxOne = () =>{
    return(
        <div className={"text__box__one__container"}>
            <div className={"text__box__one__container__header"}>
                <h2>
                    versand
                </h2>
                <p>Es gelten folgende Bedingungen:</p>
            </div>
            <div className={"text__box__one__container__body"}>
                <div className={"text__box__one__container__body__itemOne"}>
                    <div className={"text__box__one__container__body__itemOne__item1"}>
                        <h4>
                            Versandbedingungen
                        </h4>
                        <p>
                            Versandkosten (inklusive gesetzliche Mehrwertsteuer)
                        </p>
                    </div>
                    <div className={"text__box__one__container__body__itemOne__item2"}>
                        <h4>Deutschland</h4>
                        <p>
                            Wir berechnen die Versandkosten pauschal mit 5,99 € pro Bestellung.
                            <br/>
                            Ab einem Bestellwert von 25 € liefern wir versandkostenfrei.
                        </p>
                    </div>
                    <div className={"text__box__one__container__body__itemOne__item2"}>
                        <h4> Österreich</h4>
                        <p>
                            Wir berechnen die Versandkosten pauschal mit 10 € pro Bestellung.
                            Ab einem Bestellwert von 50 € liefern wir versandkostenfrei.
                        </p>
                    </div>
                    <div className={"text__box__one__container__body__itemOne__item2"}>
                        <h4>Schweiz</h4>
                        <p>
                            Bei der Versendung sperriger Güter (Speditionsversand) berechnen wir wie folgt: auf Anfrage.
                            Sperrige Güter sind als solche in der Artikelbeschreibung gekennzeichnet.
                        </p>
                    </div>

                </div>
                <div className={"text__box__one__container__body__itemTwo"}>
                    <h4>
                        Lieferfristen
                    </h4>
                    <p>
                        Soweit im jeweiligen Angebot keine andere Frist angegeben ist, erfolgt die Lieferung der Ware
                        in Deutschland innerhalb von 2 - 4 Tagen nach Vertragsschluss (bei vereinbarter Vorauszahlung
                        nach dem Zeitpunkt Ihrer Zahlungsanweisung). Beachte bitte, dass an Sonn- und Feiertagen keine
                        Zustellung erfolgt. Hast du Artikel mit unterschiedlichen Lieferzeiten bestellt, versenden wir
                        die Ware in einer gemeinsamen Sendung, sofern wir keine abweichenden Vereinbarungen mit Dir
                        getroffen haben. Die Lieferzeit bestimmt sich in diesem Fall nach dem Artikel mit der längsten
                        Lieferzeit die Du bestellt hast. Bei Selbstabholung informieren wir Dich per E-Mail über die
                        Bereitstellung der Ware und die Abholmöglichkeiten. In diesem Fall werden keine Versandkosten
                        berechnet.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TextBoxOne