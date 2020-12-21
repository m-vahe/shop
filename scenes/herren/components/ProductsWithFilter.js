import ProductsWithFilter from "../../../shareable/ProductsWithFilter";
import {useState} from "react";


const ProductsWithFilterHarren = () =>{
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
            {
                id:4,productHead:"Clean product",productHead2:"Limited edition",productName:"Ylumi", productTextFoot:"Energy Kapseln",
                productTextFoot2:"Kapseln",price:"28,00 €",new:true,approoved:true,imageHead:"/item.png",heart:false
            },
            {
                id:5,productHead:"Clean product",productHead2:"Limited edition",productName:"Ylumi", productTextFoot:"Energy Kapseln",
                productTextFoot2:"Kapseln",price:"28,00 €",new:false,approoved:true,imageHead:"/item.png",heart:false
            },
            {
                id:6,productHead:"Clean product",productHead2:"Limited edition",productName:"Ylumi", productTextFoot:"Energy Kapseln",
                productTextFoot2:"Kapseln",price:"28,00 €",new:false,approoved:true,imageHead:"/item.png",heart:false
            },
            {
                id:7,productHead:"Clean product",productHead2:"Limited edition",productName:"Ylumi", productTextFoot:"Energy Kapseln",
                productTextFoot2:"Kapseln",price:"28,00 €",new:false,approoved:true,imageHead:"/item.png",heart:false
            },
            ]
    )
    const gridTemplateColumns = " repeat(auto-fit, minmax(40rem, 1fr))"
    const autoflow = "unset"
    const gap="30px"
    return(
        <>
            <ProductsWithFilter headtext={headtext} products={products} setProducts={setProducts} gridTemplateColumns={gridTemplateColumns} autoFlow ={autoflow} gap = {gap}/>
        </>
    )
}
export default ProductsWithFilterHarren