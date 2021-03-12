import {
    GET_PRODUCTS,
    SET_PRODUCTS,
    SET_ERROR,
    SWITCH_TO_FAVOURITE,
    GET_FAVOURITES_PRODUCTS,
    SET_FAVOURITES_PRODUCTS,
    GET_PRODUCTS_WITH_LEFT_TEXT,
    SET_PRODUCTS_WITH_LEFT_TEXT, GET_PRODUCTS_WITH_FILTER
} from '../action-types/products';
import axios from 'axios';


export const getProducts = (limit = 3) => {
  return dispatch => {
    dispatch({ type: GET_PRODUCTS });

    axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/products?_limit=${limit}`,
      { headers: { Authorization: JSON.parse(localStorage.getItem('userData') || '{}').jwt ? `Bearer ${JSON.parse(localStorage.getItem('userData') || '{}').jwt || ''}` : '' } }
      )
        .then(res => {
          const { data } = res;

          dispatch({ 
            type: SET_PRODUCTS, 
            payload: data 
          });
        })
        .catch(err => dispatch({ type: SET_ERROR, payload: err }));
  };
};

export const addToWishList = product => {
  return dispatch => {
    return axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/AddFavoriteProductsTheUser`, 
      { product }, 
      { headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('userData') || '{}').jwt || ''}` } }
    )
      .then(res => {
        const { data } = res;
        
        dispatch({ type: SWITCH_TO_FAVOURITE, payload: { id: product, isFavourite: data.isFavorite } });

        return product;
      })
      .catch(err => dispatch({ type: SET_ERROR, payload: err }));
  };
};

export const getUserWishlist = () => {
  return dispatch => {
    dispatch({ type: GET_FAVOURITES_PRODUCTS });

    axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/theUsersAllFavoriteProducts`,
      { headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('userData') || '{}').jwt || ''}` } }
    )
      .then(res => {
        const { data } = res;
        dispatch({ type: SET_FAVOURITES_PRODUCTS, payload: data });
      })
      .catch(err => dispatch({ type: SET_ERROR, payload: err }));
  };
};

export const getProductsWithLeftText = () => {
  return dispatch => {
    dispatch({ type: GET_PRODUCTS_WITH_LEFT_TEXT });

    axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/product-with-left-texts`,
      // { headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('userData') || '{}').jwt || ''}` } }
      )
        .then(res => {
          const { data } = res;

          dispatch({ 
            type: SET_PRODUCTS_WITH_LEFT_TEXT, 
            payload: data 
          });
        })
        .catch(err => dispatch({ type: SET_ERROR, payload: err }));
  };
};


export const getProductsWithFilter = () => {
    return dispatch => {
        return axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/four-products`,
            { headers: { Authorization: JSON.parse(localStorage.getItem('userData') || '{}').jwt ? `Bearer ${JSON.parse(localStorage.getItem('userData') || '{}').jwt || ''}` : '' } }
        )
            .then(res => {
                const { data } = res;

                dispatch({
                    type: GET_PRODUCTS_WITH_FILTER,
                    payload: data
                });

                return data;
            })
            .catch(err => dispatch({ type: SET_ERROR, payload: err }));
    };
};