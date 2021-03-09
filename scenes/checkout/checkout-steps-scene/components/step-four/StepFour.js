import StepOneSingleProduct from "../../../../../shareable/Products/checkout-ptoducts/step-one/StepOneSingleProduct";
import StepOneModal from "../step-one/modal/StepOneModal";

const StepFour = ({next}) => {
    const data = [1,2,3]
    return(
        <div className={"checkout__stepfour__container"}>
           <div className={"checkout__stepfour__container__title"}>
               <p>Vielen Dank für deine Bestellung!</p>
               <p>Drucken </p>
           </div>
            <div className={"checkout__stepfour__container__products"}>
                {data.map((e,i)=>{
                    return(
                        <StepOneSingleProduct key={i}/>
                    )
                })}
            </div>
            <div className={"checkout__stepone__container__bottom"}>
                <p className={"checkout__stepone__container__bottom--title"}>Bestellübersicht</p>
                <div className={"checkout__stepone__container__bottom__item"}>
                    <p className={"checkout__stepone__container__bottom__item--text"}>
                        Zwischensumme
                    </p>
                    <p className={"checkout__stepone__container__bottom__item--price"}>
                        € 23,33
                    </p>
                </div>
                <div className={"checkout__stepone__container__bottom__item"}>
                    <p className={"checkout__stepone__container__bottom__item--text"}>
                        MwST.
                    </p>
                    <p className={"checkout__stepone__container__bottom__item--price"}>
                        € 4,67
                    </p>
                </div>
                <div className={"checkout__stepone__container__bottom__item"}>
                    <p className={"checkout__stepone__container__bottom__item--text last-checkout-one-step-txt"}>
                        Gesamtsumme
                    </p>
                    <p className={"checkout__stepone__container__bottom__item--price last-checkout-one-step-price"}>
                        € 28,00
                    </p>
                </div>

            </div>
            <div className={"checkout__steptwo__container__address"}>
                <div className={"checkout__steptwo__container__address__item"}>
                    <p className={"checkout__steptwo__container__address__item--title"}>
                        Lieferadresse
                    </p>
                    <div className={"checkout__steptwo__container__address__item__body"}>
                        <div className={"checkout__steptwo__container__address__item__body__top"}>
                            <p className={"first__child"}>
                                Max Muster
                            </p>
                            <p>
                                Muster Firma AG
                            </p>
                        </div>
                        <div className={"checkout__steptwo__container__address__item__body__mid"}>
                            <p>
                                Musterstrasse 123
                            </p>
                            <p>
                                Musterstadt 12345
                            </p>
                            <p>
                                Musterland
                            </p>
                        </div>
                    </div>
                </div>
                <div className={"checkout__steptwo__container__address__item"}>
                    <p className={"checkout__steptwo__container__address__item--title"}>
                        Rechnungsadresse
                    </p>
                    <div className={"checkout__steptwo__container__address__item__body"}>
                        <div className={"checkout__steptwo__container__address__item__body__top"}>
                            <p className={"first__child"}>
                                Max Muster
                            </p>
                            <p>
                                Muster Firma AG
                            </p>
                        </div>
                        <div className={"checkout__steptwo__container__address__item__body__mid"}>
                            <p>
                                Musterstrasse 123
                            </p>
                            <p>
                                Musterstadt 12345
                            </p>
                            <p>
                                Musterland
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StepFour