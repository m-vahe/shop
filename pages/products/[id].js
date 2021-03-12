import React from "react";
import SingleProductScene from "../../scenes/single-product-scene";
const ProductDetail = () => {
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


export async function getStaticPaths(params) {
    return {
        paths:[
            {params: {id: "11"}},
            {params: {id: "1"}},
        ],
        fallback:false

    };
}


export default ProductDetail;
