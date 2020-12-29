import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";
import LeftProductImages from "./components/left-product-images/LeftProductImages";
import RightProductText from "./components/right-product-text/RightProductText";
import SingleProductBottom from "./components/single-product-bottom/SingleProductBottom";
import ProductsWithFilter from "../../shareable/ProductsWithFilter";
import {useState} from "react";

const SingleProductScene = () =>{
    const headtext = "Männerpflege"
    const [products,setProducts] = useState(
        [
            {
                id:0,productHead:"Clean product",productHead2:"Limited edition",productName:"Ylumi", productTextFoot:"Energy Kapseln",
                productTextFoot2:"Kapseln",price:"28,00 €",new:true,approoved:true,imageHead:"/item.png",heart:false
            },
            {
                id:1,productHead:"Clean product",productHead2:"Limited edition",productName:"Ylumi", productTextFoot:"Energy Kapseln",
                productTextFoot2:"Kapseln",price:"28,00 €",new:false,approoved:true,imageHead:"/item.png",heart:false
            },
            {
                id:2,productHead:"Clean product",productHead2:"Limited edition",productName:"Ylumi", productTextFoot:"Energy Kapseln",
                productTextFoot2:"Kapseln",price:"28,00 €",new:false,approoved:true,imageHead:"/item.png",heart:false
            },
            {
                id:3,productHead:"Clean product",productHead2:"Limited edition",productName:"Ylumi", productTextFoot:"Energy Kapseln",
                productTextFoot2:"Kapseln",price:"28,00 €",new:false,approoved:true,imageHead:"/item.png",heart:false
            },
        ]
    )
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
           <div className={"product-bottom-prod-w-filter"}>
               <ProductsWithFilter headtext={headtext} products={products} setProducts={setProducts}/>
           </div>
            <Footer/>
        </>
    )
}
export default SingleProductScene