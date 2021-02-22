import {
    GET_NAVBAR_SETTINGS,
    GET_HOMEPAGE_SECTIONONE,
    GET_HOMEPAGE_PRODWLTXT_ONE,
    GET_HEADER_CONTACTS,
    SET_HOMEPAGE_HEADERTXTS
} from "../action-types/homepage__stable";

const initialState = {
    navList: [],
    homePageSctOne:[],
    prodWLTxt:[],
    headerContacts:[],
    headerText1: '',
    headerText2: '',
};

const homeRedcucer = (state= initialState, action) =>{
    switch (action.type){
        case "GET_NAVBAR_SETTINGS":
            return {
                ...state,
                navList: action.payload
            }
        case "GET_HOMEPAGE_SECTIONONE":
            return {
                ...state,
                homePageSctOne: action.payload
            }
        case "GET_HEADER_CONTACTS":
            return {
                ...state,
                headerContacts: action.payload
            }
        case "GET_HOMEPAGE_PRODWLTXT_ONE":
            return {
                ...state,
                prodWLTxt: action.payload
            }
        case SET_HOMEPAGE_HEADERTXTS: 
            return {
                ...state,
                headerText1: action.payload[0],
                headerText2: action.payload[1]
            }
    }
    return state
}
export default homeRedcucer