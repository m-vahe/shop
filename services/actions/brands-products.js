import axios from "axios";
import {
    GET_BRANDS_PRODUCTS_FOUR,
    GET_BRANDS_PRODUCTS_ONE, GET_BRANDS_PRODUCTS_THREE, GET_BRANDS_PRODUCTS_TWO, SET_BRANDS_PRODUCTS_FOUR,
    SET_BRANDS_PRODUCTS_ONE, SET_BRANDS_PRODUCTS_THREE,
    SET_BRANDS_PRODUCTS_TWO,
    SET_ERROR
} from "../action-types/brands-products";


export const getBrandsProductsOne = () => {
    return (dispatch) => {
        dispatch({type: GET_BRANDS_PRODUCTS_ONE});

        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/findByLimit/3`, {
                headers: {
                    Authorization: JSON.parse(localStorage.getItem("userData") || "{}")
                        .jwt
                        ? `Bearer ${
                            JSON.parse(localStorage.getItem("userData") || "{}").jwt || ""
                        }`
                        : "",
                },
            })
            .then((res) => {
                const {data} = res;

                dispatch({
                    type: SET_BRANDS_PRODUCTS_ONE,
                    payload: data,
                });
            })
            .catch((err) => dispatch({type: SET_ERROR, payload: err}));
    };
};

export const getBrandsProductsTwo = () => {
    return (dispatch) => {
        dispatch({type: GET_BRANDS_PRODUCTS_TWO});

        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/findByLimit/3`, {
                headers: {
                    Authorization: JSON.parse(localStorage.getItem("userData") || "{}")
                        .jwt
                        ? `Bearer ${
                            JSON.parse(localStorage.getItem("userData") || "{}").jwt || ""
                        }`
                        : "",
                },
            })
            .then((res) => {
                const {data} = res;

                dispatch({
                    type: SET_BRANDS_PRODUCTS_TWO,
                    payload: data,
                });
            })
            .catch((err) => dispatch({type: SET_ERROR, payload: err}));
    };
};

export const getBrandsProductsThree = () => {
    return (dispatch) => {
        dispatch({type: GET_BRANDS_PRODUCTS_THREE});

        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/findByLimit/3`, {
                headers: {
                    Authorization: JSON.parse(localStorage.getItem("userData") || "{}")
                        .jwt
                        ? `Bearer ${
                            JSON.parse(localStorage.getItem("userData") || "{}").jwt || ""
                        }`
                        : "",
                },
            })
            .then((res) => {
                const {data} = res;

                dispatch({
                    type: SET_BRANDS_PRODUCTS_THREE,
                    payload: data,
                });
            })
            .catch((err) => dispatch({type: SET_ERROR, payload: err}));
    };
};

export const getBrandsProductsFour = () => {
    return (dispatch) => {
        dispatch({type: GET_BRANDS_PRODUCTS_FOUR});

        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/findByLimit/3`, {
                headers: {
                    Authorization: JSON.parse(localStorage.getItem("userData") || "{}")
                        .jwt
                        ? `Bearer ${
                            JSON.parse(localStorage.getItem("userData") || "{}").jwt || ""
                        }`
                        : "",
                },
            })
            .then((res) => {
                const {data} = res;

                dispatch({
                    type: SET_BRANDS_PRODUCTS_FOUR,
                    payload: data,
                });
            })
            .catch((err) => dispatch({type: SET_ERROR, payload: err}));
    };
};