import {GET_VIDEO_TEXTS, SET_ERROR, SET_VIDEO_TEXTS} from "../action-types/video";

const initialState = {
    videoTextLoaded:true,
    videoText: {},
    error:null
};

const videoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_VIDEO_TEXTS:
            return {
                ...state,
                videoTextLoaded: true
            }
        case SET_VIDEO_TEXTS:
            return {
                ...state,
                videoTextLoaded: false,
                videoText: payload
            }
        case SET_ERROR:
            return {
                ...state,
                error:payload
            }
        default:
            return state;
    }
};

export default videoReducer;