import axios from "axios";
import {
    GET_COUNTRIES, SET_ERROR,
    SET_LOADED
} from "../action-types/registration";

export const getRegisterCountries = () => {
    return dispatch => {
        dispatch({ type: SET_LOADED });

        axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/country-data`,
        )
            .then(res => {
                const { data } = res;

                dispatch({
                    type: GET_COUNTRIES,
                    payload: data
                });
            })
            .catch(err => dispatch({ type: SET_ERROR, payload: err }));
    };
};