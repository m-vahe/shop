import {useState,useEffect} from "react";
import {getProdWLTxtOne} from "../../../../services/actions/homepage__stable";
import {useDispatch, useSelector} from "react-redux";
import ProductsWithLeftText from "../../../../shareable/Products/PorductsWithLeftText";
const FirstProducts = () =>{
    const dispatch = useDispatch()
    const [heart,setHeart] = useState(false)
    const [heart1,setHeart1] = useState(false)
    const [heart2,setHeart2] = useState(false)
    const image1="/item.png"
    const image2="/item.png"
    const image3="/item.png"
    const [products,setProducts] = useState(
        [
            {
                id:0,productHead:"Clean product",productHead2:"Limited edition",productName:"Ylumi", productTextFoot:"Energy Kapseln",
                productTextFoot2:"Kapseln",price:"28,00 €",new:false,approoved:false,imageHead:"/item.png",heart:false
            },
            {
                id:1,productHead:"Clean product",productHead2:"Limited edition",productName:"Ylumi", productTextFoot:"Energy Kapseln",
                productTextFoot2:"Kapseln",price:"28,00 €",new:true,approoved:true,imageHead:"/item.png",heart:false
            },
            {
                id:2,productHead:"Clean product",productHead2:"Limited edition",productName:"Ylumi", productTextFoot:"Energy Kapseln",
                productTextFoot2:"Kapseln",price:"28,00 €",new:false,approoved:false,imageHead:"/item.png",heart:false
            },
        ]
    )
    const prodTxt = useSelector(state => state.navbar.prodWLTxt);
    // const [prod]
    useEffect(()=>{
        dispatch(getProdWLTxtOne())
        console.log(prodTxt)
    },[])
    return(
        <>
            <ProductsWithLeftText
                products = {products}
                setProducts = {setProducts}
                heart={heart} heart1={heart1}
                heart2={heart2} setHeart={setHeart}
                setHeart1={setHeart1} setHeart2={setHeart2}
                image1={image1} image2={image2} image3={image3}
            />
        </>
    )
}

export default FirstProducts