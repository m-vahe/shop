import {
    GET_NAVBAR_SETTINGS,
    SET_NAVBAR_SETTINGS,
    GET_HOMEPAGE_SECTIONONE,
    GET_HOMEPAGE_PRODWLTXT_ONE,
    GET_HEADER_CONTACTS,
    SET_HEADER_CONTACTS,
    SET_HOMEPAGE_HEADERTXTS,
    GET_COLLECTION_SHOPS,
    SET_COLLECTION_SHOPS,
    GET_INSPIRATIONS,
    SET_INSPIRATIONS,
    SET_LOADED,
    SET_HOMEPAGE_SECTIONONE
} from "../action-types/homepage__stable";

const initialState = {
    navList: [],
    navListLoaded:false,
    homePageSctOne:[],
    homePageSctOneLoaded:false,
    prodWLTxt:[],
    headerContacts:[],
    headerContactsLoaded:false,
    headerText1: '',
    headerText2: '',
    collectionShopsLoading: false,
    collectionShops: [],
    inspirationsLoading: false,
    inspirations: [],
    loaded:false
};

const homeRedcucer = (state= initialState, action) =>{
    switch (action.type){
        case GET_HOMEPAGE_SECTIONONE:
            return {
                ...state,
                homePageSctOneLoaded: true
            }
        case SET_HOMEPAGE_SECTIONONE:
            return {
                ...state,
                homePageSctOne: action.payload,
                homePageSctOneLoaded: false
            }
        case GET_NAVBAR_SETTINGS:
            return {
                ...state,
                navListLoaded: true
            }
        case SET_NAVBAR_SETTINGS:
            return {
                ...state,
                navList: action.payload,
                navListLoaded: false
            }
        case GET_HEADER_CONTACTS:
            return {
                ...state,
                headerContactsLoaded: true
            }
        case SET_HEADER_CONTACTS:
            return {
                ...state,
                headerContacts: action.payload,
                headerContactsLoaded: false
            }
        case "GET_HOMEPAGE_PRODWLTXT_ONE":
            return {
                ...state,
                prodWLTxt: action.payload,
                loaded: false
            }
        case SET_HOMEPAGE_HEADERTXTS: 
            return {
                ...state,
                headerText1: action.payload[0],
                headerText2: action.payload[1],
                loaded: false
            }
        case GET_COLLECTION_SHOPS:
            return {
                ...state,
                collectionShopsLoading: true,
                loaded: false
            }
        case SET_COLLECTION_SHOPS:
            return {
                ...state,
                collectionShopsLoading: false,
                collectionShops: action.payload,
                loaded: false
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
                inspirations: action.payload,
                loaded: false
            }
    }
    return state
}
export default homeRedcucer