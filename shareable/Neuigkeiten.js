import Image from 'next/image';
import Link from 'next/link';

const Neuigkeiten = ({
  background,
  color,
  paddingTop,
  paddingBottom,
  btntext,
  width,
  padd,
  neuigkeiten
}) => {
  console.log(neuigkeiten, 555555555);
  return (
    <>
      <div
        className={'prodbotbodall'}
        style={{
          backgroundColor: background,
          paddingTop: paddingTop,
          paddingBottom: paddingBottom,
        }}
      >
        <div className={'d-flex flex-row flex-wrap first-product-bottom-body'}>
          <div className={'col-lg-6 product-bottom-left d-flex'}>
            <div className={'prod-bot-left-img'}>
              <h2 style={{ color: color }}>{neuigkeiten?.header}</h2>
              <Image
                src={neuigkeiten?.images?.url || '/productbotleft.png'}
                layout='responsive'
                width={840}
                height={840}
              />
            </div>
            <div className={'prod-bod-left-txt'}>
              <p style={{ color: color }}>Neuigkeiten im shop</p>
              <h2 style={{ color: color }}>{neuigkeiten?.title}</h2>
              <span style={{ color: color }}>
                {neuigkeiten?.text}
              </span>
              <Link href={neuigkeiten?.url || ''}>
                <a href='#'>{neuigkeiten?.link_text}</a>
              </Link>
            </div>
          </div>
          <div className={'col-lg-6 product-bottom-right'}>
            <p style={{ color: color }}>Neuigkeiten im shop</p>
            <h2 style={{ color: color }}>Parfum des Monats</h2>
            <span style={{ color: color }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat. sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
            </span>
            <div className={'prod-bot-right-img'}>
              <Image
                src='/productbotright.png'
                layout='responsive'
                width={981}
                height={669}
              />
            </div>
            <a href='#'>Mehr lesen</a>
          </div>
        </div>
        <button
          className={'filter-bot-btn'}
          style={{
            color: background,
            backgroundColor: color,
            width: width,
            padding: padd,
          }}
        >
          {btntext}{' '}
        </button>
      </div>
    </>
  );
};

export default Neuigkeiten;
