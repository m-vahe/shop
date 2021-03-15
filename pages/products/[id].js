import React,{useEffect} from "react";
import SingleProductScene from "../../scenes/single-product-scene";
import {useDispatch, useSelector} from "react-redux";
import {getProductsPageData} from "../../services/actions/products";
const ProductDetail = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getProductsPageData())
    },[])
    const data = useSelector(state=>state.products.productsPageData)
    console.log(data,7777)
  return (
    <>
      <SingleProductScene/>
    </>
  );
};
export async function getStaticProps() {
    return {
        props:{}
    };
}

const transformFnc = item => {
    return {
        params: { id: `${item?.id}` }
    }
}


export async function getStaticPaths(params) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`,

    )
    const data = await res.json()
    console.log(data,7777)
    return {
        paths: data.map(transformFnc),
        fallback:false

    };
}


export default ProductDetail;
