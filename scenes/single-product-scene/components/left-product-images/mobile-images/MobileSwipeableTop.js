import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation,  Pagination } from 'swiper';
SwiperCore.use([Navigation,Pagination]);
import moment from "moment";
const MobileSwipeableCarousel = ({imagesData,elem}) =>{
    console.log(elem.New_Date_Limit > moment(new Date()).format("YYYY-MM-DD"))
    return(
        <>
            <div className={"swiper-mobile"}>
                <Swiper
                    spaceBetween={100}
                    slidesPerView={1}
                    // navigation
                    pagination={{ clickable: true }}
                >
                    {imagesData?.map((e,i)=>{
                        return(
                            <SwiperSlide key = {i} >
                                <div className={"swiper-element-main"}>
                                    <p className={"new-swiper-el"}
                                       style={elem?.New_Date_Limit <
                                             moment(new Date()).format("YYYY-MM-DD") ?
                                             {backgroundColor:"transparent"} :
                                             {backgroundColor:"black"}}
                                    >
                                        New
                                    </p>
                                    <p style={
                                        elem?.clean_product ?
                                            {opacity:"1"}
                                            : {opacity:"0"}
                                        }
                                    >
                                        Clean Product
                                    </p>
                                    <p className={"swiper-limited"}
                                       style={
                                        elem?.limited_edition ?
                                            {opacity:"1"}
                                            : {opacity:"0"}
                                       }
                                    >Limited Edition</p>
                                    <div className={"swiper-images-body"}>
                                        <img  src={`${e?.url}`} alt=""/>
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