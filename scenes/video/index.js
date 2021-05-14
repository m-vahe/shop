import ComponentHeader from '../../shareable/component-header/ComponentHeader';
import MediatekInfo from './components/mediatek-info/MediatekInfo';
import VideoPart from '../homepage/components/video/VideoPart'
import VideosContainer from './components/video-container/VideosContainer'
import Social from '../../shareable/social/Social';
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getUserDataFromLocalStorage} from "../../services/actions/auth";
import {getVideos, getVideoText} from "../../services/actions/video";

const Video = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserDataFromLocalStorage());
        dispatch(getVideoText())
        dispatch(getVideos())
    }, []);

    const {videoText} = useSelector(state => state.video)
    const {videos} = useSelector(state => state.video)
    const {videosForSelect} = useSelector(state => state.video)
    const {videosLoaded} = useSelector(state => state.video)

    const [activeIndex, setActiveIndex] = useState()

    useEffect(()=>{
        setActiveIndex(videos[0]?.id)
    },[videosLoaded])

    useEffect(()=>{
        console.log(activeIndex)
    },[activeIndex])

    const info = videos.map(e=>{
        return e.type
    })
    return (
        <div>
            <ComponentHeader
                info={videoText?.header}
                title={videoText?.title}
            />
            <MediatekInfo info={info}/>
            <VideoPart text={videoText?.video_text} video={videos.find(item=>item.id === activeIndex)}/>
            <VideosContainer videos={videos} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
            <Social/>
            <NewsletterRep/>
        </div>
    );
};

export default Video;
