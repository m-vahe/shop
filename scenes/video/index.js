import ComponentHeader from '../../shareable/component-header/ComponentHeader';
import MediatekInfo from './components/mediatek-info/MediatekInfo';
import VideoPart from '../homepage/components/VideoPart'
import VideosContainer from './components/video-container/VideosContainer'
import Newsletter from '../homepage/components/Newsletter';
import Social from '../../shareable/social/Social';

const Video = () => {
  return (
    <div>
      <ComponentHeader
        info='ENTDECKEN SIE TIPPS, ANLEITUNGEN UND EXKLUSIVE  VIDEOS'
        title='MEDIATHEK'
      />
      <MediatekInfo />
      <VideoPart />
      <VideosContainer />
      <Social />
      <Newsletter />
    </div>
  );
};

export default Video;
