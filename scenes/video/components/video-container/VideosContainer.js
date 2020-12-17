import SmallVideoContainer from '../small-video-container/SmallVideoContainer';

const VideosContainer = () => {
  return (
    <div className='bottom-video-body d-flex flex-wrap'>
      {Array.from(Array(9)).map((_,i) => (
        <SmallVideoContainer key={i} />
      ))}
    </div>
  );
};

export default VideosContainer;
