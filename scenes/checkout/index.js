import CheckoutProducts from "./components/checkout-products/CheckoutProducts";
import CheckoutProductsData from "./components/checkout-products-data/CheckoutProductsData";

const CheckoutScene = () =>{
    return(
        <div className={"checkout__scene__container"}>
            <div className={"checkout__scene__container--title"}>
                <h2>Warenkorb</h2>
            </div>
            <div className={"checkout__scene__container__body"}>
                <CheckoutProducts/>
                <CheckoutProductsData/>
            </div>
        </div>
    )
}

export default CheckoutScene