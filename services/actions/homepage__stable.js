import {
    GET_NAVBAR_SETTINGS,
    GET_HOMEPAGE_SECTIONONE,
    GET_HOMEPAGE_PRODWLTXT_ONE,
    GET_HEADER_CONTACTS,
    SET_ERROR,
    GET_HOMEPAGE_HEADERTXTS,
    SET_HOMEPAGE_HEADERTXTS,
} from "../action-types/homepage__stable"
import axios from "axios";

export const getNavbar = () => {
    return function (dispatch){
        axios.get('http://207.154.241.233:1337/navbaritems')
            .then(response => dispatch({type: GET_NAVBAR_SETTINGS,payload: response.data}) )
            .catch(err => dispatch({type: SET_ERROR}));
    }
}

export const getHomePageSctOne = () => {
    return function (dispatch){
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/section-under-navbars`)
            .then(response => dispatch({type: GET_HOMEPAGE_SECTIONONE,payload: response.data}) )
            .catch(err => dispatch({type: SET_ERROR}));
    }
}

export const getProdWLTxtOne = () =>{
    return function (dispatch){
        axios.get('http://207.154.241.233:1337/home-page-section-2-s')
            .then(response => dispatch({type: GET_HOMEPAGE_PRODWLTXT_ONE,payload: response.data}) )
            .catch(err => dispatch({type: SET_ERROR}));
    }
}
export const getHeaderContacts = () => {
    return function (dispatch){
        axios.get('http://207.154.241.233:1337/contact-details')
            .then(response => dispatch({type: GET_HEADER_CONTACTS,payload: response.data}) )
            .catch(err => dispatch({type: SET_ERROR}));
    }
}

export const getHeaderTexts = () => {
    return dispatch => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/page-headers`)
            .then(res => {
                const { data } = res;
                const firstIndx = data.findIndex(elem => elem?.position === 'black');
                
                dispatch({ 
                    type: SET_HOMEPAGE_HEADERTXTS, 
                    payload: [data[firstIndx]?.describe_HTML_CSS, data[1 - firstIndx]?.describe_HTML_CSS] 
                });
            })
            .catch(err => dispatch({ type: SET_ERROR }));
    }
};
