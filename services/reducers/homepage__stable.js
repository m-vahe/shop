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
    SET_HOMEPAGE_SECTIONONE, SET_FOUR_ICONS, SET_MIDFOOT, SET_NEWSLETTER_TEXT
} from "../action-types/homepage__stable";

const initialState = {
    navList: [],
    navListLoaded:true,
    homePageSctOne:[],
    homePageSctOneLoaded:true,
    prodWLTxt:[],
    headerContacts:[],
    headerContactsLoaded:true,
    headerText1: '',
    headerText2: '',
    collectionShopsLoading: true,
    collectionShops: [],
    inspirationsLoading: false,
    inspirations: [],
    loaded:false,
    fourIcons:[],
    fourIconsLoaded:true,
    midfoot:[],
    midfootLoaded:true,
    newsletterText:[],
    newsletterTextLoaded:true
};

const homeRedcucer = (state= initialState, action) =>{
    switch (action.type){
        case SET_NEWSLETTER_TEXT:
            return {
                ...state,
                newsletterText: action.payload,
                newsletterTextLoaded: false
            }
        case SET_MIDFOOT:
            return {
                ...state,
                midfoot: action.payload,
                midfootLoaded: false
            }
        case SET_HOMEPAGE_SECTIONONE:
            return {
                ...state,
                homePageSctOne: action.payload,
                homePageSctOneLoaded: false
            }

        case SET_NAVBAR_SETTINGS:
            return {
                ...state,
                navListLoaded: false,
                navList: action.payload,

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
        case SET_FOUR_ICONS:
            return {
                ...state,
                fourIcons: action.payload,
                fourIconsLoaded: false
            }
    }
    return state
}
export default homeRedcucer