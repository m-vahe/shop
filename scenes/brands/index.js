import Header from "../../layouts/header/Header";
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import Footer from "../../layouts/footer/Footer";
import BrandsHeader from "./components/header/Header";
import SummaryAdds from "./components/summary-adds/SummaryAdds";
import {useDispatch, useSelector} from "react-redux";
import {
    addToWishList,
    getProducts,
    getProductsWithFilter,
} from "../../services/actions/products";
import {useEffect} from "react"
import Products from "./components/products/Products";
import BrandPortrait from "./components/brand-portrait/BrandPortrait";
import ActiveIngredients from "./components/active-ingredients/ActiveIngredients";
import CareProducts from "./components/care-products/CareProducts";
import Application from "./components/application/Application";
import Points from "./components/points/Points"
import PressReviews from "./components/press-reviews/PressReviews";
import Partners from "./components/partners/Partners";
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";
import {getUserDataFromLocalStorage} from "../../services/actions/auth";
import {
    getBrandsPageData,
    getBrandsProductsFive,
    getBrandsProductsFour,
    getBrandsProductsOne,
    getBrandsProductsThree,
    getBrandsProductsTwo
} from "../../services/actions/brands";
import {useRouter} from "next/router";
import {Space, Spin} from "antd";

const BrandsScene = ({id}) => {
    const dispatch = useDispatch()
    const productOne = useSelector(state => state?.brand.productOne);
    const productTwo = useSelector(state => state?.brand.productTwo);
    const productThree = useSelector(state => state?.brand.productThree);
    const productFour = useSelector(state => state?.brand.productFour);
    const productFive = useSelector(state => state?.brand.productFive);
    useEffect(() => {
        dispatch(getUserDataFromLocalStorage());
        dispatch(getBrandsProductsOne());
        dispatch(getBrandsProductsTwo());
        dispatch(getBrandsProductsThree());
        dispatch(getBrandsProductsFour());
        dispatch(getBrandsProductsFive())
    }, []);
    useEffect(() => {
        if (id) {
            dispatch(getBrandsPageData(id.header_title_in))
        }
    }, [id]);
    const data = useSelector(state => state.brand.brandPageData)
    const loader = useSelector(state => state.brand.brandPageDataLoaded)
    console.log(data)
    return (
        <>
            {loader ?
                <div className={"loader__body"}>
                    <Space size="middle">
                        <Spin size="large"/>
                    </Space>
                </div> :
                <>
                    <Header/>
                    <MobileHeader/>
                    <div className={"brands__page__body"}>
                        <BrandsHeader
                            data={{
                                title: data?.header_title,
                                text: data?.header_text,
                                link: data?.header_link,
                                img: data?.header_img,
                                btnTxt: data?.header_btn,
                                head: data?.header_head
                            }}
                        />
                        <SummaryAdds
                            data={
                                {
                                    title: data?.summary_title,
                                    text: data?.summary_text,
                                    link: data?.summary_link,
                                    img: data?.summary_img,
                                    btnTxt: data?.summary_linktxt,
                                    head: data?.summary_head,
                                    head2: data?.summary_head2
                                }
                            }
                        />
                        <Products
                            products={productOne}
                            addToWishList={addToWishList}
                            getFour={getProductsWithFilter}
                        />
                        <BrandPortrait/>
                        <Products
                            products={productTwo}
                            addToWishList={addToWishList}
                            getFour={getProductsWithFilter}
                        />
                        <ActiveIngredients/>
                        <CareProducts/>
                        <Products
                            products={productThree}
                            addToWishList={addToWishList}
                            getFour={getProductsWithFilter}
                        />
                        <Application/>
                        <Points/>
                        <Products
                            products={productFour}
                            addToWishList={addToWishList}
                            getFour={getProductsWithFilter}
                        />
                        <PressReviews/>
                        <Partners/>
                        <Products
                            products={productFive}
                            addToWishList={addToWishList}
                            getFour={getProductsWithFilter}
                        />
                        <NewsletterRep/>
                    </div>
                    <Footer/>
                </>
            }

        </>
    )
}

export default BrandsScene