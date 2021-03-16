import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";
import LeftProductImages from "./components/left-product-images/LeftProductImages";
import RightProductText from "./components/right-product-text/RightProductText";
import SingleProductBottom from "./components/single-product-bottom/SingleProductBottom";
import ProductsWithFilter from "../../shareable/ProductsWithFilter";
import {useState,useEffect} from "react";
import MobileSwipeableCarousel from "./components/left-product-images/mobile-images/MobileSwipeableTop";
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import {getProductsWithFilter} from "../../services/actions/products";
import {useDispatch} from "react-redux"
import {getUserDataFromLocalStorage} from "../../services/actions/auth"
const SingleProductScene = () =>{
    const headtext = "Männerpflege"
    const dispatch = useDispatch()
   
    useEffect(() => {
        dispatch(getUserDataFromLocalStorage());
      }, []);
   
    return(
        <>
            <Header/>
            <MobileHeader/>
              <div className={"product-single-details-body"}>
                  <div className={"product__details__container"}>
                      <div className={"product__details__container__top"}>
                          <MobileSwipeableCarousel/>
                          <LeftProductImages/>
                          <RightProductText/>
                      </div>
                  </div>
                  <SingleProductBottom/>
                  <div className={"product-bottom-prod-w-filter"}>
                      <ProductsWithFilter headtext={headtext}
                       position={"ProductPage"}
                       getProductsWithFilter={getProductsWithFilter}

                      />
                  </div>
              </div>
            <Footer/>
        </>
    )
}
export default SingleProductScene