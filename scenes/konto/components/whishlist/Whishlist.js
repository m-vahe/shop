import SingleProduct from "../../../../shareable/Products/SingleProduct";
import { useState, useEffect } from "react";
import { getUserWishlist, addToWishList } from '../../../../services/actions/products';
import { useDispatch, useSelector } from 'react-redux';
import ModalWhishlist from "./components/Modal";

const WhishList = () => {
    const dispatch = useDispatch();
    const { favouriteProducts } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getUserWishlist());
    }, []);

    const [show, setShow] = useState(false)
    const showModal = () =>{
        setShow(!show);
    };

    const favouriteClickHandler = id => {
        dispatch(addToWishList(id,variantId));
    };

    return(
        <div className={"whishlist__container"}>
            <div className={"whishlist__container__text"}>
                <h2>Deine wishlist</h2>
                <p className={"whishlist__container__text--el2"}>Deine Lieblingsprodukte alle auf einen blick</p>
                <p className={"whishlist__container__text--el3"}>
                    Klicke einfach auf das Herz neben den Produkten um
                    sie auf deine Liste hinzuzufügen. Viel Spaß beim Sammeln
                </p>
                <button onClick={showModal}>
                    Wishlist teilen
                </button>
                <ModalWhishlist show={show} setShow={setShow}/>
            </div>
            <div className={"whishlist__container__products"}>
                {favouriteProducts.map((e, i) => {
                    return (
                        <div key={i}>
                            <SingleProduct 
                                elem={e}
                                favouriteClickHandler={favouriteClickHandler}
                             />
                        </div>
                    );
                })}
            </div>
        </div>

    )
}

export default WhishList