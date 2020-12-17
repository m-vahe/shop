import ShopHead from "./components/ShopHead";
import Aside from "./components/Aside";
import AsideRight from "./layouts/AsideRight";

const ShopScene = () =>{
  return (
      <>
        <ShopHead/>
        <div className={"shop-body-head"}>

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

export default ShopScene