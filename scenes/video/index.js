import ComponentHeader from '../../shareable/component-header/ComponentHeader';
import MediatekInfo from './components/mediatek-info/MediatekInfo';
import VideoPart from '../homepage/components/video/VideoPart'
import VideosContainer from './components/video-container/VideosContainer'
import Social from '../../shareable/social/Social';
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";

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
      <NewsletterRep />
    </div>
  );
};

export default Video;
