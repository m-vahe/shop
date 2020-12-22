import Image from "next/image";

const ShopHeader = () => {
  return (
    <div className='shopHeader__container'>
      <div className='shopHeader__container__info'>
        <span className='shopHeader__container__info--label'>Exklusive nischenparfums für sie</span>
        <span className='shopHeader__container__info--title'>Entdecken Sie DamenParfums</span>
        <span className='shopHeader__container__info--description'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet. consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua.
        </span>
      </div>
      <div className='shopHeader__container__images'>
        <img className='shopHeader__container__images--item' src='/shoptop.png' />
      </div>
    </div>
  );
};

export default ShopHeader;
