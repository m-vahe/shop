import Image from 'next/image'

const ShopHeader = () => {
  return (
    <div className='shopHeader__container'>
      <div className='shopHeader__container__info'>
        <span className='shopHeader__container__info--label'>
          Exklusive nischenparfums für sie
        </span>
        <span className='shopHeader__container__info--title'>
          Entdecken Sie DamenParfums
        </span>
        <span className='shopHeader__container__info--description'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
          consequatur corporis culpa ex excepturi fugit iure iusto maiores odit
          rem temporibus totam, voluptate. Ab accusamus atque consequuntur culpa
          cum dolores eius harum illo ipsam, iusto, maiores natus omnis
          perspiciatis quas, quasi quos tempore totam voluptatibus.
        </span>
      </div>
      <div className='shopHeader__container__images'>
        <Image width={941} height={624} layout='intrinsic' src='/shoptop.png' />
      </div>
    </div>
  );
};

export default ShopHeader;
