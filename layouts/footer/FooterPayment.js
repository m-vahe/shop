import Image from 'next/image';
const FooterPayment = () => {
  return (
    <div className='payment__section__container'>
      <div className='payment__section__container__content'>
        <Image src='/payment_icons/zahlungsarten.png' width={182} height={20} />
        <Image src='/payment_icons/Paypal.png' width={102} height={40} />
        <Image src='/payment_icons/Amazon_pay.png' width={82} height={40} />
        <Image src='/payment_icons/Visa.png' width={82} height={40} />
        <Image src='/payment_icons/mastercard.png' width={72} height={40} />
        <Image src='/payment_icons/Vorkasse.png' width={122} height={40} />
      </div>
      <div className='payment__section__container__content'>
        <Image src='/payment_icons/versandarten.png' width={182} height={20} />
        <Image src='/payment_icons/DHL.png' width={82} height={40} />
        <Image src='/payment_icons/gogreen.png' width={82} height={40} />
      </div>
    </div>
  );
};

export default FooterPayment;
