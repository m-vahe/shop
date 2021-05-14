import axios from "axios";
import {GET_VIDEO_TEXTS, SET_VIDEO_TEXTS, SET_ERROR, GET_VIDEOS, SET_VIDEOS} from "../action-types/video";

export const getVideoText = () => {
    return (dispatch) => {
        dispatch({type: GET_VIDEO_TEXTS});

        axios
            .get(
                `${process.env.NEXT_PUBLIC_API_URL}/video-page-data`,
            )
            .then((res) => {
                const {data} = res;

                dispatch({
                    type: SET_VIDEO_TEXTS,
                    payload: data,
                });
            })
            .catch((err) => dispatch({type: SET_ERROR, payload: err}));
    };
}

export const getVideos = () => {
    return (dispatch) => {
        dispatch({type: GET_VIDEOS});

        axios
            .get(
                `${process.env.NEXT_PUBLIC_API_URL}/videos`,
                {
                    headers: {
                        Authorization: `Bearer ${
                            JSON.parse(localStorage.getItem("userData") || "{}").jwt || ""
                        }`,
                    }
                }
            )
            .then((res) => {
                const {data} = res;

                dispatch({
                    type:SET_VIDEOS,
                    payload: data,
                });
            })
            .catch((err) => dispatch({type: SET_ERROR, payload: err}));
    };
}