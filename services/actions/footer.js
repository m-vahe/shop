import {GET_FOOTER_DATA,SET_FOOTER_DATA,SET_ERROR} from "../action-types/footer";
import axios from "axios";

export const getFooterData = data => {
    return dispatch => {
        dispatch({ type: GET_FOOTER_DATA })
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/getfooter`)
            .then(res => {
                const { data } = res;

                dispatch({
                    type: SET_FOOTER_DATA,
                    payload: data
                });
            })
            .catch(err => dispatch({ type: SET_ERROR, payload: err }));
    };
};