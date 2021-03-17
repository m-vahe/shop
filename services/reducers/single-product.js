import {
    GET_SINGLEPRODUCT_STYLE_TEXT,
    SET_DATA_LOADED,
    SET_ERROR
} from "../action-types/single-product";

const initialState = {
    styles:[],
    stylesLoaded:true,
    error:""
};

const singleProductPageReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_SINGLEPRODUCT_STYLE_TEXT:
            return {
                ...state,
                stylesLoaded: false,
                styles: payload
            };
        case SET_DATA_LOADED:
            return {
                ...state,
                stylesLoaded: true
            }
        case SET_ERROR:
            return {
                ...state,
                error: payload,
                stylesLoaded: false
            }
        default:
            return state;
    }
};

export default singleProductPageReducer;