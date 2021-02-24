import { 
    GET_PRODUCTS, 
    SET_PRODUCTS, 
    SET_ERROR, 
    SWITCH_TO_FAVOURITE,
    GET_FAVOURITES_PRODUCTS,
    SET_FAVOURITES_PRODUCTS
} from '../action-types/products';

const initialState = {
  productLoading: false,
  favouriteProductsLoading: false,
  products: [],
  favouriteProducts: [],
  productsError: null
};

const productsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_PRODUCTS:
            return {
                ...state,
                productLoading: true
            };
        case SET_PRODUCTS:
            return {
                ...state,
                productLoading: false,
                products: payload
            };
        case SET_ERROR:
            return {
                ...state,
                productLoading: false,
                productsError: payload
            }
        case SWITCH_TO_FAVOURITE:
            return {
                ...state,
                products: state.products.map(p => {
                    if (p.id === payload.id) {
                        p.favorit = payload.isFavourite;
                    }

                    return p;
                }),
                favouriteProducts: state.favouriteProducts.filter(p => p.id !== payload.id)
            }
        case GET_FAVOURITES_PRODUCTS: {
            return {
                ...state,
                favouriteProductsLoading: true
            }
        }
        case SET_FAVOURITES_PRODUCTS: {
            return {
                ...state,
                favouriteProductsLoading: false,
                favouriteProducts: payload
            }
        }
        default:
            return state;
    }
};

export default productsReducer;