import axios from "axios";
import {ADD_TO_BASKET,SET_ERROR} from "../action-types/basket";
import {SWITCH_TO_FAVOURITE} from "../action-types/products";

export const addToBasket = (product,variantId,quantity) =>{
    return (dispatch) => {
        return axios
            .post(
                `${process.env.NEXT_PUBLIC_API_URL}/addProductInTheShoppingBasket`,
                {product: product, variant: variantId,quantity:quantity},
                {
                    headers: {
                        Authorization: `Bearer ${
                            JSON.parse(localStorage.getItem("userData") || "{}").jwt || ""
                        }`,
                    },
                }
            )
            .then((res) => {
                const {data} = res;
                dispatch({
                    type: ADD_TO_BASKET,
                    payload: data

                });

                return product;
            })
            .catch((err) => dispatch({type: SET_ERROR, payload: err}));
    };
}