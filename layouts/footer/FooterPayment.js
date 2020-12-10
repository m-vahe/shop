import Image from "next/image";
const FooterPayment = () =>{
    return(
        <>
            <div className={"payment-section-all"}>
                <div className={"payment-section d-flex"}>
                    <div className={"payment-logos d-flex flex-wrap"}>
                        <img src="/zahlungstartenlogo.png" alt="Zahlungsarten"/>
                        <img src="/paypallogo.png" alt="PayPal"/>
                        <img src="/amazonlogo.png" alt="Amazon"/>
                        <img src="/visalogo.png" alt="Visa"/>
                        <img src="/mastercardlogo.png" alt="Mastercardlogo"/>
                        <img src="/vorkasselogo.png" alt="Vorkasse"/>
                    </div>
                    <div className={"d-flex shipping-logos flex-wrap"}>
                        <img src="/versandartenlogo.png" alt="Versandarten"/>
                        <img src="/dhllogo.png" alt="DHL"/>
                        <img src="/gorgeenlogo.png" alt="Gorgeen"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterPayment