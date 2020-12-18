import SmallVideoContainer from '../small-video-container/SmallVideoContainer';

const VideosContainer = () => {
  return (
    <div className='videos__container'>
      {Array.from(Array(9)).map((_,i) => (
        <SmallVideoContainer key={i} />
      ))}
    </div>
  );
};

export default VideosContainer;
