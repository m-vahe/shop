import { GET_NEWS_REPORT, SET_NEWS_REPORT, SET_ERROR,SET_SHOP_LGTXT } from '../action-types/news';

const initialState = {
  newsReportLoading: false,
  newsReports: [],
  error: null,
  shopPageLg:"",
  shopLgLoaded:true
};

const newsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
      case GET_NEWS_REPORT:
          return {
              ...state,
              newsReportLoading: true
          };
      case SET_NEWS_REPORT:
          return {
              ...state,
              newsReportLoading: false,
              newsReports: payload
          };
      case SET_SHOP_LGTXT:
          return {
              ...state,
              shopLgLoaded: false,
              shopPageLg: payload
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