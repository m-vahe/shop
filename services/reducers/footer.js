import {GET_FOOTER_DATA,SET_FOOTER_DATA,SET_ERROR} from "../action-types/footer";

const initialState = {
    footerDataLoading:true,
    footerData: [],
    error: null
};

const newsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_FOOTER_DATA:
            return {
                ...state,
                footerDataLoading: false,
                footerData: payload
            }
        case SET_ERROR:
            return {
                ...state,
                newsReportLoading: false,
                error: payload
            }
        default:
            return state;
    }
};

export default newsReducer;