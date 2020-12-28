import {useState} from "react"
import { useRouter } from 'next/router'
import Social from "../../../../shareable/social/Social";

const LeftProductImages = () =>{
    const router = useRouter()
    const [image,setImage] = useState("/item.png")
    return(
        <>
              <div className={ "about-product-left-img-body-all"}>
                  <div className={"about-product-left-img-body"}>
                      <span className={"go-back"} onClick={()=>router.back()}>Zuruck</span>
                      <div className={"about-product-main-img-body"}>
                          <div className={"product-page-image-head"}>
                              <img src={image} alt="product" className={"main-pic"}/>
                              <p className={"new-icon"}>new</p>
                              <img src="/15-layers.png" alt="15 layers" className={"circled-txt"}/>
                          </div>
                          <p className={"headtxt-one"}>Clean Product</p>
                          <p className={"headtxt-two"}>Limited Edition</p>
                      </div>
                      <div className={"bottom_three-images-body"}>
                          <div className={"bottom-three-images"}>
                              <img  src="/item.png" alt="product" onClick={()=>(setImage("/item.png"))}/>
                          </div>
                          <div className={"bottom-three-images"}>
                              <img  src="/item.png" alt="product" onClick={()=>(setImage("/item.png"))}/>
                          </div>
                          <div className={"bottom-three-images"}>
                              <img  src="/item.png" alt="product" onClick={()=>(setImage("/item.png"))}/>
                          </div>
                      </div>
                  </div>
                  <Social page={"product-detail"}/>
              </div>
        </>
    )
}

export default LeftProductImages