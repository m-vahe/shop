import {
  GET_PRODUCTS,
  SET_PRODUCTS,
  SET_ERROR,
  SWITCH_TO_FAVOURITE,
  GET_FAVOURITES_PRODUCTS,
  SET_FAVOURITES_PRODUCTS,
  GET_PRODUCTS_WITH_LEFT_TEXT,
  SET_PRODUCTS_WITH_LEFT_TEXT,
  GET_PRODUCTS_WITH_FILTER,
  GET_PRODUCTS_PAGE_DATA,
  GET_EIGHT_PRODUCTS_WITH_FILTER,
  GET_SINGLE_PRODUCT_DATA,
  SET_PRODUCT_SINGLE_LOADED,
} from "../action-types/products";

const initialState = {
  productLoading: false,
  favouriteProductsLoading: false,
  products: [],
  favouriteProducts: [],
  productsError: null,
  productsWithLeftTextLoading: false,
  productsWithLeftText: [],
  productsWithFilter: [],
  productsWithFilterLoaded: true,
  productsPageData: [],
  productsPageDataLoaded: true,
  singleProduct: {},
  singleProductLoaded: true,
};

const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_WITH_FILTER:
      return {
        ...state,
        productsWithFilterLoaded: false,
        productsWithFilter: payload,
      };
    case GET_SINGLE_PRODUCT_DATA:
      return {
        ...state,
        singleProductLoaded: false,
        singleProduct: payload,
      };
    case SET_PRODUCT_SINGLE_LOADED:
      return {
        ...state,
        singleProductLoaded: true,
      };
    case GET_EIGHT_PRODUCTS_WITH_FILTER:
      return {
        ...state,
        productsWithFilterLoaded: false,
        productsWithFilter: payload,
      };
      case GET_PRODUCTS:
      return {
        ...state,
        productLoading: true,
      };
    case SET_PRODUCTS:
      return {
        ...state,
        productLoading: false,
        products: payload,
      };
    case GET_PRODUCTS_PAGE_DATA:
      return {
        ...state,
        productsPageDataLoaded: false,
        productsPageData: payload,
      };
    case SET_ERROR:
      return {
        ...state,
        productLoading: false,
        productsError: payload,
      };
    case SWITCH_TO_FAVOURITE:
      return {
        ...state,
        products: state.products.map((p) => {
          if (p.id === payload.id) {
            // p.favorit = payload.isFavourite;
            p.variants_of_a_products.map((i) => {
              if (i.id === payload.variant_id) {
                i.favorite = payload.isFavourite;
              }
              return i;
            });
          }

          return p;
        }),
        productsWithFilter: state.productsWithFilter.map((p) => {
          if (p.id === payload.id) {
            p.favorit = payload.isFavourite;
          }

          return p;
        }),
        favouriteProducts: state.favouriteProducts.filter(
          (p) => p.id !== payload.id
        ),
      };
    case GET_FAVOURITES_PRODUCTS: {
      return {
        ...state,
        favouriteProductsLoading: true,
      };
    }
    case SET_FAVOURITES_PRODUCTS: {
      return {
        ...state,
        favouriteProductsLoading: false,
        favouriteProducts: payload,
      };
    }
    case GET_PRODUCTS_WITH_LEFT_TEXT: {
      return {
        ...state,
        productsWithLeftTextLoading: true,
      };
    }
    case SET_PRODUCTS_WITH_LEFT_TEXT: {
      return {
        ...state,
        productsWithLeftTextLoading: false,
        productsWithLeftText: payload,
      };
    }
    default:
      return state;
  }
};

export default productsReducer;
