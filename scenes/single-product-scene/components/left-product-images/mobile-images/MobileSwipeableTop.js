import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation,  Pagination } from 'swiper';
SwiperCore.use([Navigation,Pagination]);
const MobileSwipeableCarousel = () =>{
    const swiperData = [
        {image:"/item.png",text:"clean product",text2:"limited edition",new:true},
        {image:"/item.png",text:"clean product"},
        {image:"/item.png",text:"clean product"},
        {image:"/item.png",text:"clean product"},
    ]
    return(
        <>
           <div className={"swiper-mobile"}>
               <Swiper
                   spaceBetween={100}
                   slidesPerView={1}
                   // navigation
                   pagination={{ clickable: true }}
               >
                   {swiperData.map((e,i)=>{
                       return(
                           <SwiperSlide key = {i} >
                               <div className={"swiper-element-main"}>
                                   <p className={"new-swiper-el"} style={!e.new ? {backgroundColor:"transparent"} : {backgroundColor:"black"}}>{e.new && "New"}</p>
                                   <p>{e.text}</p>
                                   <p className={"swiper-limited"}>{e.text2}</p>
                                   <div className={"swiper-images-body"}>
                                       <img  src="/item.png" alt=""/>
                                   </div>

                               </div>
                           </SwiperSlide>
                       )
                   })}
               </Swiper>
           </div>
        </>
    )
}

export default MobileSwipeableCarousel