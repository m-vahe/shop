import {useState, useEffect} from "react";
import ProductsWithLeftText from "../../../../shareable/Products/PorductsWithLeftText";
import { getProducts, addToWishList } from '../../../../services/actions/products';
import {useDispatch, useSelector} from "react-redux";

const SecondProducts = ({getFour}) =>{
    const dispatch = useDispatch();

    const prdcts = useSelector(state => state?.products?.products);
    const productsWithLeftText = useSelector(state => state?.products?.productsWithLeftText);
    const [leftText, setLeftText] = useState({});
    useEffect(()=>{
        dispatch(getProducts(3));
    }, []);

    useEffect(() => {
        setLeftText(productsWithLeftText.find(pr => pr.position === 'HomePageTwo'));
    }, [productsWithLeftText]);

    return(
        <>
            <ProductsWithLeftText
                products = {prdcts}
                leftText={leftText}
                addToWishList={addToWishList}
                getFour={getFour}
            />
        </>
    )
}

export default SecondProducts