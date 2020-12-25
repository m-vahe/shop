import Image from 'next/image';

const InfoContainer = ({
  title,
  text,
  desc,
  src,
  className,
  width,
  height,
  layout,
}) => {
  return (
    <div className={className}>
      <div className='infoContainer__content'>
        <p className='infoContainer__content--title'>{title}</p>
        <p className='infoContainer__content--text'>{text}</p>
        <p div className='infoContainer__content--description'>
          {desc}
        </p>
      </div>
      <div className='infoContainer__image'>
        <Image width={width} height={height} layout={layout} src={src} />
      </div>
    </div>
  );
};

export default InfoContainer;
