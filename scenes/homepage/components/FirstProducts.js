import {useState} from "react";
import ProductsWithLeftText from "../../repeatable/PorductsWithLeftText";
const FirstProducts = () =>{
    const [heart,setHeart] = useState(false)
    const [heart1,setHeart1] = useState(false)
    const [heart2,setHeart2] = useState(false)
    const image1="/item.jpg"
    const image2="/item.jpg"
    const image3="/item.jpg"
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