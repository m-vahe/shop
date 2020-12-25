import React, { useState } from 'react';
import MiddleElementOne from '../productmiidlelements/MiddleElementOne';
import MiddleElementTwo from '../productmiidlelements/MiddleElementTwo';
import SingleProduct from '../../../../../shareable/Products/SingleProduct';
import ShopBodyHeader from '../shop-body-header/ShopBodyHeader'

const ShopBodyContainer = () => {
  const [data, setData] = useState([
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
      new: true,
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
      new: true,
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
      new: true,
      approoved: true,
      imageHead: '/item.png',
      heart: false,
    },
    {
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
      id: 11,
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
      id: 12,
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
      id: 13,
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
      id: 14,
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
      id: 15,
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
      id: 16,
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
      id: 17,
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
      id: 18,
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
      id: 19,
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
      id: 20,
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
  ]);
  return (
      <div className='shop-right-body'>
        <div className={'__products'}>
          {data.map((e, i) => {
            return (
              <div key={i}>
                <SingleProduct elem={e} products={data} setData={setData} />
              </div>
            );
          })}
          {/* <MiddleElementTwo />
          <MiddleElementOne /> */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            }}
          >
            <figure>
              '
              <img
                src='/inspirationbot2.png'
                alt=''
                style={{ maxWidth: '100%' }}
              />
            </figure>
            <div className={'col-lg-6 inspiration-bottom-text'}>
              <div className={'inspiration-bottom-head-txt'}>
                <p>Duft sensation aus frankreich</p>
                <h2>Damen Parfums</h2>
              </div>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                consequuntur debitis eum quos sed similique sunt veniam
                voluptates.
              </span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ShopBodyContainer;
