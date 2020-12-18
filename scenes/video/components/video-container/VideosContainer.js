import SmallVideoContainer from '../small-video-container/SmallVideoContainer';

const VideosContainer = () => {
  return (
<<<<<<< HEAD
    <div className='videos__container'>
=======
    <div className='bottom-video-body d-flex flex-wrap'>
>>>>>>> 04a3525be177e81093e8b739a25dc8befd9ccc60
      {Array.from(Array(9)).map((_,i) => (
        <SmallVideoContainer key={i} />
      ))}
    </div>
  );
};

export default VideosContainer;
