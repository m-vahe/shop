import Dashboard from './dashboard/Dashboard';
import MobileFilter from './mobile-filter/MobileFilter';
import ShopBodyContainer from './shop-body-container/ShopBodyContainer';
import ShopBodyHeader from './shop-body-header/ShopBodyHeader';

const ShopBody = () => {
  return (
    <div className='shop__body'>
      <ShopBodyHeader />
      <div className='shop__body__content'>
        <Dashboard />
        <MobileFilter />
        <ShopBodyContainer />
      </div>
    </div>
  );
};

export default ShopBody;
