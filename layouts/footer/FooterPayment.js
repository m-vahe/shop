import Image from "next/image";
const FooterPayment = () =>{
    return(
        <>
            <div className={"payment-section-all"}>
                <div className={"payment-section"}>
                    <img src="/payment_icons/zahlungsarten.png" alt="zahlungstarten"/>
                    <img src="/payment_icons/Paypal.png" alt="Paypal"/>
                    <img src="/payment_icons/Amazon_pay.png" alt="AmazonPay"/>
                    <img src="/payment_icons/Visa.png" alt="Visa"/>
                    <img src="/payment_icons/mastercard.png" alt="Mastercard"/>
                    <img src="/payment_icons/Vorkasse.png" alt="Vorkasse"/>
                    <img src="/payment_icons/versandarten.png" alt="Versandarten"/>
                    <img src="/payment_icons/DHL.png" alt="DHL"/>
                    <img src="/payment_icons/gogreen.png" alt="gogreen"/>
                </div>
            </div>
        </>
    )
}

export default FooterPayment