import { GET_NEWS_REPORT, SET_NEWS_REPORT, SET_ERROR } from '../action-types/news';
import axios from 'axios';

export const getNewsReport = () => {
  return dispatch => {
    dispatch({ type: GET_NEWS_REPORT });

    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/news-reports`)
      .then(res => {
        const { data } = res;
        console.log(res, 444444);
        dispatch({ 
          type: SET_NEWS_REPORT, 
          payload: data 
        });
      })
      .catch(err => dispatch({ type: SET_ERROR, payload: err }));
  };
};