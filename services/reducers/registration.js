import {
    GET_SINGLEPRODUCT_STYLE_TEXT,
    SET_DATA_LOADED,
    SET_ERROR
} from "../action-types/single-product";
import {GET_COUNTRIES, SET_LOADED} from "../action-types/registration";

const initialState = {
    countries: [],
    countriesLoaded: true,
    error: ""
};

const RegistrationReducer = (state = initialState, {type, payload}) => {
    switch (type) {

        case GET_COUNTRIES:
            return {
                ...state,
                countries: payload,
                countriesLoaded: false
            }
        case SET_LOADED:
            return {
                ...state,
                countriesLoaded: true
            }
        case SET_ERROR:
            return {
                ...state,
                error: payload,
                countriesLoaded: false
            }
        default:
            return state;
    }
};

export default RegistrationReducer;