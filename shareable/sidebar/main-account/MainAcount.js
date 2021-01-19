import React from 'react';
import Link from 'next/link'
const MainAcount = () => {
  return (
    <div className='mainAccount__container'>
      <ul className='mainAccount__container__list'>
      <Link href='/konto/main'><li className='mainAccount__container__list--item'>MEIN ACCOUNT</li></Link>
      <Link href='/konto/asd'><li className='mainAccount__container__list--item'>ADRESSEN</li></Link>
      <Link href='/konto/asdf'><li className='mainAccount__container__list--item'>NUTZERDATEN</li></Link>
        {/* <li className='mainAccount__container__list--item'>NUTZERDATEN</li> */}
        <li className='mainAccount__container__list--item'>BESTELLUNGEN</li>
        <li className='mainAccount__container__list--item'>WHISHLIST</li>
        <li className='mainAccount__container__list--item'>NEWSLETTER</li>
        <li className='mainAccount__container__list--item'>
          MEINE LESEZEICHEN
        </li>
      </ul>
    </div>
  );
};

export default MainAcount;
