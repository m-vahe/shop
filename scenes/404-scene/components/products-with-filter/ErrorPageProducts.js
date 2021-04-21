import ProductsWithFilter from '../../../../shareable/ProductsWithFilter';
import {getProductsWithFilter} from "../../../../services/actions/products";

const ErrorPageProducts = () => {
  const headtext = 'Männerpflege';


  return (
    <div className='product__with__filter'>
      <ProductsWithFilter
        headtext={headtext}
        position={"HomePage"}
        getProductsWithFilter={getProductsWithFilter}
      />
    </div>
  );
};

export default ErrorPageProducts;
