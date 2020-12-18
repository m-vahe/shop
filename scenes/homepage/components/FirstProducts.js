import {useState} from "react";
import ProductsWithLeftText from "../../../shareable/Products/PorductsWithLeftText";
const FirstProducts = () =>{
    const [heart,setHeart] = useState(false)
    const [heart1,setHeart1] = useState(false)
    const [heart2,setHeart2] = useState(false)
    const image1="/item.png"
    const image2="/item.png"
    const image3="/item.png"
    return(
        <>
            <ProductsWithLeftText
                heart={heart} heart1={heart1}
                heart2={heart2} setHeart={setHeart}
                setHeart1={setHeart1} setHeart2={setHeart2}
                image1={image1} image2={image2} image3={image3}
            />
        </>
    )
}

export default FirstProducts