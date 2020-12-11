import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {useState,useEffect} from "react";

const ProductsWithFilter = () =>{
    const [heart,setHeart] = useState(false)
    const [heart1,setHeart1] = useState(false)
    const [heart2,setHeart2] = useState(false)
    const [heart3,setHeart3] = useState(false)
    const [parfum,setParfum] = useState(true)
    const [beauty,setBeauty] = useState(false)
    const [interiour,setInteriour] = useState(false)

    return(
        <>
            <div className={"filtered-products-body d-flex flex-wrap"}>
                <div className={"products-filter-head-home"}>
                    <h2>Von uns für Sie</h2>
                    <div className={"d-flex filter-btns"}>
                        <button className={`col-lg-4 ${parfum ? "active-filter" : null}`} onClick={()=> {
                            setParfum(true);
                            setBeauty(false);
                            setInteriour(false)
                        }}>PARFUM</button>
                        <button className={`col-lg-4 ${beauty ? "active-filter" : null}`} onClick={()=> {
                            setBeauty(true)
                            setParfum(false)
                            setInteriour(false)
                        }}>beauty</button>
                        <button className={`col-lg-4 ${interiour ? "active-filter" : null}`} onClick={()=>{
                            setInteriour(true)
                            setBeauty(false)
                            setParfum(false)
                        }}>Interieur</button>
                    </div>
                </div>
                <div className={"d-flex flex-wrap"}>
                    <div className={"col-lg-3 col-xl-6 first-prod-items"}>
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
                    <div className={"col-lg-3 col-xl-6 first-prod-items"}>
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
                    <div className={"col-lg-3 col-xl-6 first-prod-items"}>
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
                    <div className={"col-lg-3 col-xl-6 first-prod-items forth"}>
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

export default ProductsWithFilter