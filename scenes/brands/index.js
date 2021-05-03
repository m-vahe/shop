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
const BrandsScene = () =>{
    const dispatch = useDispatch()
    const prdcts = useSelector(state => state?.products?.products);
    const productsWithLeftText = useSelector(state => state?.products?.productsWithLeftText);
    const authData = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(getUserDataFromLocalStorage());
    }, []);
    useEffect(()=>{
        dispatch(getProducts());
    }, [authData?.isAuthenticated]);

    return(
        <>
            <Header/>
            <MobileHeader/>
            <div className={"brands__page__body"}>
                <BrandsHeader/>
                <SummaryAdds/>
                <Products
                    products = {prdcts}
                    addToWishList={addToWishList}
                    getFour={getProductsWithFilter}
                />
                <BrandPortrait/>
                <Products
                    products = {prdcts}
                    addToWishList={addToWishList}
                    getFour={getProductsWithFilter}
                />
                <ActiveIngredients/>
                <CareProducts/>
                <Products
                    products = {prdcts}
                    addToWishList={addToWishList}
                    getFour={getProductsWithFilter}
                />
                <Application/>
                <Points/>
                <Products
                    products = {prdcts}
                    addToWishList={addToWishList}
                    getFour={getProductsWithFilter}
                />
                <PressReviews/>
                <Partners/>
                <Products
                    products = {prdcts}
                    addToWishList={addToWishList}
                    getFour={getProductsWithFilter}
                />
                <NewsletterRep/>            </div>
            <Footer/>
        </>
    )
}

export default BrandsScene