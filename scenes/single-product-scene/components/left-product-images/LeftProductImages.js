import {useState} from "react"
import { useRouter } from 'next/router'
import Social from "../../../../shareable/social/Social";
import moment from "moment";
import PictureModal from "../picture-modal/PictureModal";

const LeftProductImages = ({elem}) =>{
    const router = useRouter()
    const [image,setImage] = useState(elem?.images[0]?.url)
    const [isModalVisible, setIsModalVisible] = useState(false);

    return(
        <>
              <div className={ "about-product-left-img-body-all"}>
                  <div className={"about-product-left-img-body"}>
                      <span className={"go-back"} onClick={()=>router.back()}>Zuruck</span>
                      <div className={"about-product-main-img-body"}>
                          <div className={"product-page-image-head"}>
                              <img src={image} alt="product" className={"main-pic"} onClick={()=>{
                                  setIsModalVisible(true)
                              }}/>
                              <PictureModal setIsmodalVisible={setIsModalVisible} isModalVisible={isModalVisible} dataImages={elem?.images}/>
                              <p className={"new-icon"}
                                 style={
                                  elem?.New_Date_Limit <
                                  moment(new Date()).format("YYYY-MM-DD") ?
                                  {backgroundColor:"transparent"} :
                                  {backgroundColor:"black"}
                                 }
                              >new</p>
                              <img src="/15-layers.png" alt="15 layers" className={"circled-txt"}  onClick={()=>router.push("/aboutthree")}/>
                          </div>
                          <p className={"headtxt-one"}
                             style={
                              elem?.clean_product ?
                                  {opacity:"1"}
                                  : {opacity:"0"}
                                  }
                          >
                              Clean Product
                          </p>
                          <p className={"headtxt-two"}
                             style={
                                 elem?.limited_edition ?
                                     {opacity:"1"}
                                     : {opacity:"0"}
                             }
                          >
                              Limited Edition
                          </p>
                      </div>
                      <div className={"bottom_three-images-body"}>
                          {elem?.images?.map((e,i)=>{
                             return(
                                 <div className={"bottom-three-images"} key={i}>
                                     <img  src={`${e?.url}`} alt="product" onClick={()=>(setImage(e?.url))}/>
                                 </div>
                             )
                          })}
                      </div>
                  </div>
                  <Social page={"product-detail"}/>
              </div>
        </>
    )
}

export default LeftProductImages