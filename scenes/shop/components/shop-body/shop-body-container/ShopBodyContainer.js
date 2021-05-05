import React, {useEffect, useRef, useState} from 'react';
import PagePagination from '../../../../../shareable/pagination/Pagination';
import InfoContainer from '../../../../../shareable/info-container/InfoContainer';
import ShopDescription from './shop-description/ShopDescription';
import {useDispatch, useSelector} from "react-redux";
import {addToWishList} from "../../../../../services/actions/products";
import {useRouter} from "next/router";
import ShopSingleProduct from "../../../../../shareable/Products/ShopSingleProduct";
import moment from "moment";

const ShopBodyContainer = ({byName, byNew, byPrice}) => {
    const dispatch = useDispatch()
    const router = useRouter()
    const productsData = useSelector(state => state.shop.shopProducts)
    const news = useSelector(({news}) => news);

    const [data, setData] = useState([])
    console.log(data, "data")
    const shopHeadTwo = news.newsReports.find(n => n.position === 'ShopPageTwo');
    const shopHeadThree = news.newsReports.find(n => n.position === 'ShopPageThree');
    const {isAuthenticated} = useSelector((state) => state.auth);
    const favouriteClickHandler = (id, variantId) => {
        if (!isAuthenticated) {
            return router.push("/login");
        }
        dispatch(addToWishList(id, variantId))
    };
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(21)
    const [current, setCurrent] = useState(1)
    const scrollToref = useRef()

    const handleChange = value => {
        setCurrent(value)
        if (value <= 1) {
            setMinValue(0)
            setMaxValue(21)
        } else {
            setMinValue((value - 1) * 21)
            setMaxValue(value * 21)
        }
    };

    useEffect(() => {
        scrollToref.current.scrollIntoView();
    }, [current])

    useEffect(() => {
        setData([...productsData])
    }, [productsData])

    useEffect(() => {
        if (byPrice === "Ascending") {
            setData([...data.sort((a, b) => {
                return a.variants_of_a_products.find(item => item.main === true).price - b.variants_of_a_products.find(item => item.main === true).price
            })])
        } else if (byPrice === "Descending") {
            setData([...data.sort((a, b) => {
                return b.variants_of_a_products.find(item => item.main === true).price - a.variants_of_a_products.find(item => item.main === true).price
            })])
        }else if (byName === "A-Z") {
            setData([...data.sort((a, b) => {
                return a.name.localeCompare(b.name)
            })])
        } else if (byName === "Z-A") {
            setData([...data.sort((a, b) => {
                return b.name.localeCompare(a.name)
            })])
        } else if (byNew === "New") {
            setData([...data.sort((a, b) => {
                return moment(b.New_Date_Limit) - moment(a.New_Date_Limit)
            })])
        }else if (byNew === "Old") {
            setData([...data.sort((a, b) => {
                return moment(a.New_Date_Limit) - moment(b.New_Date_Limit)
            })])
        }else setData([...productsData])
    }, [byPrice, byNew, byName])
    return (
        <div className='shop-right-body' ref={scrollToref}>
            <div className='__products'>
                {data &&
                data.length > 0 &&
                data.slice(minValue, maxValue).map((e, i) => {
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
                <PagePagination handleChange={handleChange} totalSize={productsData.length} current={current}/>
                <ShopDescription/>
            </div>
        </div>
    );
};

export default ShopBodyContainer;
