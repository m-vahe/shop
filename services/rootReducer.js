import {combineReducers} from "redux";
import homeReducer from "../services/reducers/homepage__stable"
import newsletterReducer from "../services/reducers/newsletter"
import authReducer from '../services/reducers/auth';
import productsReducer from '../services/reducers/products';
import newsReportReducer from './reducers/news';
import footerReducer from "./reducers/footer"
import singleProductPageReducer from "./reducers/single-product";
import kontoPageReducer from "./reducers/konto";
import RegistrationReducer from "./reducers/registration";
import versandartenReducer from "./reducers/versandarten";
import ContactReducer from "./reducers/contact";
import notFoundReducer from './reducers/not_found_page';

const rootReducer = combineReducers({
    navbar: homeReducer,
    newsletter: newsletterReducer,
    auth: authReducer,
    products: productsReducer,
    news: newsReportReducer,
    footer: footerReducer,
    singleProdPage: singleProductPageReducer,
    konto: kontoPageReducer,
    registration: RegistrationReducer,
    versandarten: versandartenReducer,
    contact: ContactReducer,
    notFoundReducer : notFoundReducer
});

export default rootReducer;