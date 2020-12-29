import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);
const SwipeableCarousel = () =>{
    const swiperData = [
        {image:"/item.png",text:"clean product"},
        {image:"/item.png",text:"clean product"},
        {image:"/item.png",text:"clean product"},
        {image:"/item.png",text:"clean product"},
        {image:"/item.png",text:"clean product"},
        {image:"/item.png",text:"clean product"},
        {image:"/item.png",text:"clean product"},
        {image:"/item.png",text:"clean product"},
        {image:"/item.png",text:"clean product"},
        {image:"/item.png",text:"clean product"},
        {image:"/item.png",text:"clean product"},
    ]
    return(
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={4}
                navigation
            >
                {swiperData.map((e,i)=>{
                    return(
                        <SwiperSlide key = {i} >
                            <div className={"swiper-element-main"}>
                                <div className={"swiper-images-body"}>
                                    <img  src="/item.png" alt=""/>
                                </div>
                                <p>{e.text}</p>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}

export default SwipeableCarousel