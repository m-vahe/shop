import Image from 'next/image';
const InspirationSection = ({ background, color, image, padding }) => {
  return (
    <>
      <div style={{ backgroundColor: background, paddingTop: padding }}>
        <div className='inspiration-body d-flex flex-wrap'>
          <div className='col-lg-9 col-xl-9 inspiration-left'>
            <p style={{ color: color }}>INSPIRATION</p>
            <Image width={1278} height={630} layout='responsive' src={image} />
          </div>
          <div className={'col-lg-3 col-xl-3 inspiration-right d-flex'}>
            <div className={'inspiration-right-head'}>
              <p
                className={'inspiration-right-headtxt'}
                style={{ color: color }}
              >
                Gesichtspflege-serie
              </p>
              <h2 style={{ color: color }}>Find your Inner beauty</h2>
            </div>
            <p className={'inspiration-right-bottxt'} style={{ color: color }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur debitis dicta in modi pariatur! Accusantium,
              consequuntur cum doloribus molestiae possimus saepe.
            </p>
            <button style={{ color: background, backgroundColor: color }}>
              JETZT SHOPPEN
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InspirationSection;
