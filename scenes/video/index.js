import ComponentHeader from '../../shareable/component-header/ComponentHeader';
import MediatekInfo from './components/mediatek-info/MediatekInfo';
import VideoPart from '../homepage/components/video/VideoPart'
import VideosContainer from './components/video-container/VideosContainer'
import Social from '../../shareable/social/Social';
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUserDataFromLocalStorage} from "../../services/actions/auth";
import {getVideos, getVideoText} from "../../services/actions/video";

const Video = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserDataFromLocalStorage());
        dispatch(getVideoText())
        dispatch(getVideos())
    }, []);

    const {videoText} = useSelector(state=>state.video)

  return (
    <div>
      <ComponentHeader
        info={videoText?.header}
        title={videoText?.title}
      />
      <MediatekInfo />
      <VideoPart text={videoText?.video_text} />
      <VideosContainer />
      <Social />
      <NewsletterRep />
    </div>
  );
};

export default Video;
