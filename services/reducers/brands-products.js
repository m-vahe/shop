import {SWITCH_TO_FAVOURITE} from "../action-types/products";

const initialState = {
    productOne:[],
    productOneLoaded:true,
    productTwo:[],
    productTwoLoaded:true,
    productThree:[],
    productThreeLoaded:true,
    productFour:[],
    productFourLoaded:true,
};

const brandsProductsReducer = (state = initialState, {type, payload}) => {
    switch (type) {


        case GET_PRODUCTS:
            return {
                ...state,
                productLoading: true,
            };
        case SET_PRODUCTS:
            return {
                ...state,
                productLoading: false,
                products: payload,

            };


        case SET_ERROR:
            return {
                ...state,
                productLoading: false,
                productsError: payload,
            };
        case SWITCH_TO_FAVOURITE:
            return {

                ...state,
                productOneLoaded: false,
                productOne: state.productOne.map((p) => {
                    if (p.id === payload.id) {
                        p = payload.data;
                    }
                    return p;
                }),
                productTwoLoaded: false,
                productTwo: state.productTwo.map((p) => {
                    if (p.id === payload.id) {
                        p = payload.data;
                    }
                    return p;
                }),
                productThreeLoaded: false,
                productThree: state.productThree.map((p) => {
                    if (p.id === payload.id) {
                        p = payload.data;
                    }
                    return p;
                }),
                productFourLoaded: false,
                productFour: state.productFour.map((p) => {
                    if (p.id === payload.id) {
                        p = payload.data;
                    }
                    return p;
                }),
            };
        default:
            return state;
    }
};

export default brandsProductsReducer;
