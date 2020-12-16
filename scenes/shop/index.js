import ShopHead from "./components/ShopHead";
import Aside from "./components/Aside";

const ShopScene = () =>{
  return (
      <>
        <ShopHead/>
        <div className={"d-flex shop-body"}>
            <div className={"col-lg-3"}>
                <Aside/>
            </div>
            <div className={"d-flex col-lg-9"}>

            </div>
        </div>
      </>
  )
}

export default ShopScene