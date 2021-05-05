import {Select} from 'antd';
import React, {useEffect,useState} from 'react';
import ShareableShopSelect from "../../../../../shareable/select/ShareableShopSelect";
import {useDispatch, useSelector} from "react-redux";
import {getProductsCount} from "../../../../../services/actions/shop";

const {Option} = Select;
const priceData = ["PRIES","Ascending", 'Descending'];
const nameData = ["NAME","A-Z","Z-A"]
const newData = ["All","New","Old"]
const ShopBodyHeader = ({ setByName, setByNew, setByPrice}) => {
    const [price,setPrice] = useState(priceData[0])
    const [name,setName] = useState(nameData[0])
    const [nor,setNor] = useState(newData[0])
    const handlePriceChange = value => {
        setByPrice(value)
        setPrice(value)
        setByName("NAME")
        setByNew("blank")
        setName(nameData[0])
        setNor(newData[0])
    };

    const onNameChange = value => {
        setByName(value)
        setName(value)
        setByPrice("PRIES")
        setByNew("blank")
        setPrice(priceData[0])
        setNor(newData[0])
    };

    const onNewChange = value => {
        setByNew(value)
        setNor(value)
        setByName("NAME")
        setByPrice("PRIES")
        setName(nameData[0])
        setPrice(priceData[0])
    };
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
                <Select  size={"large"} defaultValue={priceData[0]} value={price} style={{ width: 120 }} onChange={handlePriceChange}>
                    {priceData.map(province => (
                        <Option key={province}>{province}</Option>
                    ))}
                </Select>
                <Select  size={"large"} style={{ width: 120 }} value={name} onChange={onNameChange}>
                    {nameData.map(city => (
                        <Option key={city}>{city}</Option>
                    ))}
                </Select>
                <Select  size={"large"} style={{ width: 120 }} value={nor} onChange={onNewChange}>
                    {newData.map(city => (
                        <Option key={city}>{city}</Option>
                    ))}
                </Select>
            </div>
        </div>
    );
};

export default ShopBodyHeader;
