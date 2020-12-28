import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";
import LeftProductImages from "./components/left-product-images/LeftProductImages";
import RightProductText from "./components/right-product-text/RightProductText";
import SingleProductBottom from "./components/single-product-bottom/SingleProductBottom";

const SingleProductScene = () =>{
    return(
        <>
            <Header/>
                <div className={"product__details__container"}>
                    <div className={"product__details__container__top"}>
                        <LeftProductImages/>
                        <RightProductText/>
                    </div>
                </div>
            <SingleProductBottom/>
            <Footer/>
        </>
    )
}
export default SingleProductScene