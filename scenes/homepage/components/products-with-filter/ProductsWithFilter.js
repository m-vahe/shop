import { useState, useEffect } from 'react';
import ProductsWithFilter from '../../../../shareable/ProductsWithFilter';
const ProductsWithFilterHomepage = () => {
  const headtext = 'Männerpflege';
  const [products, setProducts] = useState([
    {
      id: 0,
      productHead: 'Clean product',
      productHead2: 'Limited edition',
      productName: 'Ylumi',
      productTextFoot: 'Energy Kapseln',
      productTextFoot2: 'Kapseln',
      price: '28,00 €',
      new: true,
      approoved: true,
      imageHead: '/item.png',
      heart: false,
    },
    {
      id: 1,
      productHead: 'Clean product',
      productHead2: 'Limited edition',
      productName: 'Ylumi',
      productTextFoot: 'Energy Kapseln',
      productTextFoot2: 'Kapseln',
      price: '28,00 €',
      new: false,
      approoved: true,
      imageHead: '/item.png',
      heart: false,
    },
    {
      id: 2,
      productHead: 'Clean product',
      productHead2: 'Limited edition',
      productName: 'Ylumi',
      productTextFoot: 'Energy Kapseln',
      productTextFoot2: 'Kapseln',
      price: '28,00 €',
      new: false,
      approoved: true,
      imageHead: '/item.png',
      heart: false,
    },
    {
      id: 3,
      productHead: 'Clean product',
      productHead2: 'Limited edition',
      productName: 'Ylumi',
      productTextFoot: 'Energy Kapseln',
      productTextFoot2: 'Kapseln',
      price: '28,00 €',
      new: false,
      approoved: true,
      imageHead: '/item.png',
      heart: false,
    },
  ]);

  return (
    <div className='product__with__filter'>
      <ProductsWithFilter
        headtext={headtext}
        products={products}
        setProducts={setProducts}
      />
    </div>
  );
};

export default ProductsWithFilterHomepage;
