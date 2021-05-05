import {Select} from 'antd';
import React, {useEffect} from 'react';
import ShareableShopSelect from "../../../../../shareable/select/ShareableShopSelect";
import {useDispatch, useSelector} from "react-redux";
import {getProductsCount} from "../../../../../services/actions/shop";

const {Option} = Select;
const ShopBodyHeader = ({ setByName, setByNew, setByPrice}) => {

    const dispatch = useDispatch()
    const count = useSelector(state => state.shop.count);
    useEffect(() => {
        dispatch(getProductsCount())
    }, [])

    return (
        <div className='shopBodyHeader__container'>
            <div className='shopBodyHeader__container--count'>{count} TREFFER</div>
            <div className='shopBodyHeader__container__multiple'>

            </div>
            <div className='shopBodyHeader__container__selects'>
                <ShareableShopSelect
                    defaultValue={'PRIES'}
                    valuesData={["PRIES","Ascending", "Descending"]}
                    setByPrice={setByPrice}

                />
                <ShareableShopSelect
                    defaultValue={'NAME'}
                    valuesData={['NAME',"A-Z", "Z-A"]}
                    setByName={setByName}
                />
                <ShareableShopSelect
                    defaultValue={'NEU'}
                    valuesData={["NEU", "ALL"]}
                    setByNew={setByNew}
                />
            </div>
        </div>
    );
};

export default ShopBodyHeader;
