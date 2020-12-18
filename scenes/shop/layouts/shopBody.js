import Aside from "../components/Aside";
import AsideRight from "../components/AsideRight";

const ShopBody = () =>{
    return(
        <>
            <div className={"shop-body-head d-flex"}>
                <div className={"col-lg-2"}>
aaaaaa
                </div>
                <div className={"col-lg-5"}>
bbbbbb
                </div>
                <div className={"col-lg-5"}>
cccccc
                </div>
            </div>
            <div className={"d-flex shop-body"}>
                <div className={"col-lg-3"}>
                    <Aside/>
                </div>
                <div className={"d-flex col-lg-9"}>
                    <AsideRight/>
                </div>
            </div>
        </>
    )
}

export default ShopBody