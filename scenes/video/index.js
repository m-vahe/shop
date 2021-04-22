import ComponentHeader from '../../shareable/component-header/ComponentHeader';
import MediatekInfo from './components/mediatek-info/MediatekInfo';
import VideoPart from '../homepage/components/video/VideoPart'
import VideosContainer from './components/video-container/VideosContainer'
import Social from '../../shareable/social/Social';
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getUserDataFromLocalStorage} from "../../services/actions/auth";

const Video = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserDataFromLocalStorage());
    }, []);

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
