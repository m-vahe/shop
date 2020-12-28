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
      <div className={`${className}__content`}>
        <span className={`${className}__content--title`}>{title}</span>
        <span className={`${className}__content--text`}>{text}</span>
        <span div className={`${className}__content--description`}>
          {desc}
        </span>
      </div>
      <div className={`${className}__image`}>
        <Image width={width} height={height} layout={layout} src={src} />
      </div>
    </div>
  );
};

export default InfoContainer;
