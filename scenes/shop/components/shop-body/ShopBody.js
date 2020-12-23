import Dashboard from './dashboard/Dashboard'
import ShopBodyContainer from "../shop-body-container/ShopBodyContainer";

const ShopBody = () => {
    return (
        <div className={"shop__body"}>
            <Dashboard />
            <ShopBodyContainer/>

        </div>
    )
}

export default ShopBody
