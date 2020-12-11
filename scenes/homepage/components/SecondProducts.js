import Image from "next/image";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faShoppingCart,faHeart} from "@fortawesome/free-solid-svg-icons";
const SecondProducts = () =>{
    const [heart,setHeart] = useState(false)
    const [heart1,setHeart1] = useState(false)
    const [heart2,setHeart2] = useState(false)
    return(
        <>
            <div className={"first-products-body d-flex flex-wrap"}>
                <div className={"firstprod-left-text col-lg-3"}>
                    <div>
                        <p>Beauty: Gesichtspflege</p>
                        <h2>
                            Pflege für sie
                            Und ihn
                        </h2>
                        <span>
                             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cupiditate ea fuga illo illum laboriosam minima, odit, quae rerum ut voluptate.
                       </span>
                    </div>
                    <button>JETZT SHOPPEN</button>
                </div>
                <div className={"d-flex flex-wrap col-lg-9"}>
                    <div className={"col-lg-4 first-prod-items"}>
                        <div className={"picture-body-prod"}>
                            <img src="/item.jpg" className={"item-picture"} alt=""/>
                        </div>
                        <span className={'prod-txt-head'}>Clean product</span>
                        <span className={'prod-txt-head2'}>Limited edition</span>
                        <h3 className={'prod-txt-name'}>Ylumi</h3>
                        <span className={'prod-txt-foot'}>Energy Kapseln</span>
                        <span className={'prod-txt-foot2'}>Kapseln</span>
                        <h3 className={'prod-txt-price'}>28,00 €</h3>
                        <FontAwesomeIcon
                            icon={faHeart}
                            className={"heart-icon-item"}
                            style={ heart ? { fontSize: "20px" ,color:"#ea0026",cursor:"pointer"} : { fontSize: "20px" ,color:"#707070",cursor:"pointer"}}
                            onClick={()=>setHeart(!heart)}
                        />{" "}
                        <button>Quick shop     <FontAwesomeIcon
                            icon={faShoppingCart}
                            style={{ fontSize: "14px" ,color:"#707070",}}
                        />{" "}
                        </button>
                    </div>
                    <div className={"col-lg-4 first-prod-items"}>
                        <div className={"picture-body-prod"}>
                            <img src="/item.jpg" className={"item-picture"} alt=""/>
                            <span className={"item-new"}>New</span>
                            <img src="/15-layers.png" alt="15 layers" className={"circled-txt"}/>
                        </div>
                        <span className={'prod-txt-head'} style={{opacity:"0"}}>Clean product</span>

                        <span className={'prod-txt-head2'}>Limited edition</span>
                        <h3 className={'prod-txt-name'}>Ylumi</h3>
                        <span className={'prod-txt-foot'}>Energy Kapseln</span>
                        <span className={'prod-txt-foot2'}>Kapseln</span>
                        <h3 className={'prod-txt-price'}>28,00 €</h3>
                        <FontAwesomeIcon
                            icon={faHeart}
                            className={"heart-icon-item"}
                            style={ heart1 ? { fontSize: "20px" ,color:"#ea0026",cursor:"pointer"} : { fontSize: "20px" ,color:"#707070",cursor:"pointer"}}
                            onClick={()=>setHeart1(!heart1)}
                        />{" "}
                        <button>Quick shop     <FontAwesomeIcon
                            icon={faShoppingCart}
                            style={{ fontSize: "14px" ,color:"#707070",}}
                        />{" "}
                        </button>
                    </div>
                    <div className={"col-lg-4 first-prod-items"}>
                        <div className={"picture-body-prod"}>
                            <img src="/item.jpg" className={"item-picture"} alt=""/>
                        </div>
                        <span className={'prod-txt-head'}>Clean product</span>
                        <span className={'prod-txt-head2'}>Limited edition</span>
                        <h3 className={'prod-txt-name'}>Ylumi</h3>
                        <span className={'prod-txt-foot'}>Energy Kapseln</span>
                        <span className={'prod-txt-foot2'}>Kapseln</span>
                        <h3 className={'prod-txt-price'}>28,00 €</h3>
                        <FontAwesomeIcon
                            icon={faHeart}
                            className={"heart-icon-item"}
                            style={ heart2 ? { fontSize: "20px" ,color:"#ea0026",cursor:"pointer"} : { fontSize: "20px" ,color:"#707070",cursor:"pointer"}}
                            onClick={()=>setHeart2(!heart2)}
                        />{" "}
                        <button>Quick shop     <FontAwesomeIcon
                            icon={faShoppingCart}
                            style={{ fontSize: "14px" ,color:"#707070",}}
                        />{" "}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecondProducts