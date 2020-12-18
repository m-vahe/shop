import { useState } from 'react';
import ReactPlayer from 'react-player';
import Image from 'next/image';

const VideosContainer = () => {
  const [play1, setPlay1] = useState(false);
  return (
<<<<<<< HEAD
    <div className='smallVideo__container'>
      <div className='smallVideo__container__content'>
=======
    <div className='col-lg-4 small-vid-bod'>
      <div className='video-small-body-only'>
>>>>>>> 04a3525be177e81093e8b739a25dc8befd9ccc60
        <ReactPlayer
          url='/video.webm'
          muted={true}
          width='100%'
          height='100%'
          playing={play1}
          id={'videoBG'}

          // light="https://i.stack.imgur.com/zw9Iz.png"
        />
        <img
          src='/play.png'
          alt='play'
          onClick={() => setPlay1(true)}
          style={play1 ? { display: 'none' } : null}
        />
        <svg
          version='1.1'
          id='Ebene_1'
          xmlns='http://www.w3.org/2000/svg'
          onClick={() => {
            setPlay1(false);
          }}
          xlink='http://www.w3.org/1999/xlink'
          x='0px'
          y='0px'
          viewBox='0 0 512 512'
          space='preserve'
          style={
            !play1
              ? {
                  fill: 'none',
                  stroke: 'white',
                  strokeWidth: '25',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeMiterlimit: '10',
                  position: 'absolute',
                  // width: "6rem",
                  display: 'none',
                }
              : {
                  fill: 'none',
                  stroke: 'white',
                  strokeWidth: '25',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeMiterlimit: '10',
                  position: 'absolute',
                  width: '3.5rem',
                  left: '42%',
                  top: '36%',
                  cursor: 'pointer',
                }
          }
        >
          <g>
            <line className='st0' x1='197.8' y1='430.8' x2='197.8' y2='81.2' />
            <line className='st0' x1='314.2' y1='430.8' x2='314.2' y2='81.2' />
          </g>
        </svg>
      </div>
<<<<<<< HEAD
      <div className='smallVideo__container__info'>
        <div className='smallVideo__container__info__option'>
          <p className='smallVideo__container__info__option--text'> Review </p>
          <Image src='/bookmark.png' alt='bookmark' width={50} height={18} />
=======
      <div className={'small-vid-text'}>
        <div className='d-flex justify-content-between align-items-end mb-2'>
          <p> Review </p>
          <Image src='/bookmark.png' alt='bookmark' width={18} height={18} />
>>>>>>> 04a3525be177e81093e8b739a25dc8befd9ccc60
        </div>
        <h2>Notorious Oud von D.S. & Durga</h2>
        <span>
          Lassen Sie sich von unserem Duftexperten Dr. Coucoulis den
          indonesischen Duft Notorious Oud von D.S. & Durga vorstellen.
          Formuliert in Bed-Stuy, Brooklyn mit nordafrikanischem Papyrus,
          afghanischem Safran und bulgarischer Rose.
        </span>
        <a href='#'>Produkt shoppen</a>
      </div>
    </div>
  );
};

export default VideosContainer;
