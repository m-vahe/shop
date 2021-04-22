import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";
import NotFound from "./components/not-found/NotFound";
import ErrorPageProducts from "./components/products-with-filter/ErrorPageProducts";
import Services from "../../shareable/services/Services";
import ProductOffers from "./components/product-offers/ProductOffers";
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import MobileNotFound from "./components/mobile-not-found/MobileNotFound";
import {getUserDataFromLocalStorage} from "../../services/actions/auth"
import {useDispatch} from "react-redux";
import {useEffect} from "react";
const ErrorScene = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserDataFromLocalStorage());
    }, []);
  return (
    <>
      <Header />
      <MobileHeader />
      <NotFound />
      <MobileNotFound />
      <ProductOffers />
      <ErrorPageProducts />
      <Services />
      <NewsletterRep padding={"20px"}/>
      <Footer />
    </>
  );
};

export default ErrorScene;
