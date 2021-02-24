import { 
  GET_PRODUCTS, 
  SET_PRODUCTS, 
  SET_ERROR, 
  SWITCH_TO_FAVOURITE,
  GET_FAVOURITES_PRODUCTS,
  SET_FAVOURITES_PRODUCTS
} from '../action-types/products';
import axios from 'axios';


export const getProducts = (limit = 3) => {
  return dispatch => {
    dispatch({ type: GET_PRODUCTS });

    axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/products?_limit=${limit}`,
      { headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('userData') || '{}').jwt || ''}` } }
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
    axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/AddFavoriteProductsTheUser`, 
      { product }, 
      { headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('userData') || '{}').jwt || ''}` } }
    )
      .then(res => {
        const { data } = res;
        
        dispatch({ type: SWITCH_TO_FAVOURITE, payload: { id: product, isFavourite: data.isFavorite } });
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
        console.log(res, 5555555);
        dispatch({ type: SET_FAVOURITES_PRODUCTS, payload: data });
      })
      .catch(err => dispatch({ type: SET_ERROR, payload: err }));
  };
};
