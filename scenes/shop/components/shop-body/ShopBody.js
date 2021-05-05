import Dashboard from './dashboard/Dashboard';
import MobileFilter from './mobile-filter/MobileFilter';
import ShopBodyContainer from './shop-body-container/ShopBodyContainer';
import ShopBodyHeader from './shop-body-header/ShopBodyHeader';
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

const ShopBody = () => {

    const [sortByPrice, setSortByPrice] = useState("PRIES")
    const [sortByName, setSortByName] = useState("NAME")
    const [sortByNew, setSortByNew] = useState("blank")
    useEffect(()=>{
        setSortByName("NAME")
        setSortByNew("blank")
    },[sortByPrice])

    useEffect(()=>{
        setSortByPrice("PRIES")
        setSortByNew("blank")
    },[sortByName])

    return (
        <div className='shop__body'>
            <ShopBodyHeader
                setByPrice={setSortByPrice}
                setByName={setSortByName}
                setByNew={setSortByNew}
            />
            <div className='shop__body__content'>
                <Dashboard/>
                <MobileFilter/>
                <ShopBodyContainer
                    byPrice={sortByPrice}
                    byName={sortByName}
                    byNew={sortByNew}
                    setByPrice={setSortByPrice}
                    setByName={setSortByName}
                    setByNew={setSortByNew}
                />
            </div>
        </div>
    );
};

export default ShopBody;


