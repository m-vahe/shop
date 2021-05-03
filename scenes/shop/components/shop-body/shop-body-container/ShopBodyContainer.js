import React, {useEffect, useRef, useState} from 'react';
import PagePagination from '../../../../../shareable/pagination/Pagination';
import InfoContainer from '../../../../../shareable/info-container/InfoContainer';
import ShopDescription from './shop-description/ShopDescription';
import {useDispatch, useSelector} from "react-redux";
import {addToWishList} from "../../../../../services/actions/products";
import {useRouter} from "next/router";
import ShopSingleProduct from "../../../../../shareable/Products/ShopSingleProduct";

const ShopBodyContainer = () => {
    const dispatch = useDispatch()
    const router = useRouter()

    const news = useSelector(({news}) => news);
    const shopHeadTwo = news.newsReports.find(n => n.position === 'ShopPageTwo');
    const shopHeadThree = news.newsReports.find(n => n.position === 'ShopPageThree');
    const productsData = useSelector(state => state.shop.shopProducts)
    const {isAuthenticated} = useSelector((state) => state.auth);
    const favouriteClickHandler = (id, variantId) => {
        if (!isAuthenticated) {
            return router.push("/login");
        }
        dispatch(addToWishList(id, variantId))
    };
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(21)
    const [current,setCurrent] = useState(1)
    const scrollToref = useRef()

    const handleChange = value => {
        setCurrent(value)
        if (value <= 1) {
            setMinValue(0)
            setMaxValue(21)
        } else {
            setMinValue((value - 1) * 21)
            setMaxValue(value*21)
        }
    };

    useEffect(()=>{
        scrollToref.current.scrollIntoView();
    },[current])

    return (
        <div className='shop-right-body' ref={scrollToref}>
            <div className='__products' >
                {productsData &&
                productsData.length > 0 &&
                productsData.slice(minValue, maxValue).map((e, i) => {
                    return (
                        <div key={i}>
                            <ShopSingleProduct elem={e} favouriteClickHandler={favouriteClickHandler}/>
                        </div>
                    );
                })}
                <InfoContainer
                    className='middleInfoContainer'
                    textData={shopHeadTwo}
                />
                <InfoContainer
                    className='bottomInfoContainer'
                    textData={shopHeadThree}
                />
            </div>
            <div className='shop-desc-body'>
                <PagePagination handleChange={handleChange} totalSize ={productsData.length} current={current}/>
                <ShopDescription/>
            </div>
        </div>
    );
};

export default ShopBodyContainer;
