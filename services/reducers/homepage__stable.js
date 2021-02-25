import {
    GET_NAVBAR_SETTINGS,
    GET_HOMEPAGE_SECTIONONE,
    GET_HOMEPAGE_PRODWLTXT_ONE,
    GET_HEADER_CONTACTS,
    SET_HOMEPAGE_HEADERTXTS,
    GET_COLLECTION_SHOPS,
    SET_COLLECTION_SHOPS,
    GET_INSPIRATIONS,
    SET_INSPIRATIONS
} from "../action-types/homepage__stable";

const initialState = {
    navList: [],
    homePageSctOne:[],
    prodWLTxt:[],
    headerContacts:[],
    headerText1: '',
    headerText2: '',
    collectionShopsLoading: false,
    collectionShops: [],
    inspirationsLoading: false,
    inspirations: []
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
        case GET_COLLECTION_SHOPS:
            return {
                ...state,
                collectionShopsLoading: true
            }
        case SET_COLLECTION_SHOPS:
            return {
                ...state,
                collectionShopsLoading: false,
                collectionShops: action.payload
            }
        case GET_INSPIRATIONS:
            return {
                ...state,
                inspirationsLoading: true
            }
        case SET_INSPIRATIONS:
            return {
                ...state,
                inspirationsLoading: false,
                inspirations: action.payload
            }
    }
    return state
}
export default homeRedcucer