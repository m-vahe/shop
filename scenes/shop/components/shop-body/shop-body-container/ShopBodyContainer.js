import React, { useState } from 'react';
import SingleProduct from '../../../../../shareable/Products/SingleProduct';
import PagePagination from '../../../../../shareable/pagination/Pagination';
import InfoContainer from '../../../../../shareable/info-container/InfoContainer';
import ShopDescription from './shop-description/ShopDescription';

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
      images: [{url:'/item.png'}],
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
      images: [{url:'/item.png'}],
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
      images: [{url:'/item.png'}],
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
      images: [{url:'/item.png'}],
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
      images: [{url:'/item.png'}],
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
      images: [{url:'/item.png'}],
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
      images: [{url:'/item.png'}],
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
      images: [{url:'/item.png'}],
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
      images: [{url:'/item.png'}],
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
      images: [{url:'/item.png'}],
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
      images: [{url:'/item.png'}],
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
      images: [{url:'/item.png'}],
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
      images: [{url:'/item.png'}],
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
      images: [{url:'/item.png'}],
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
      images: [{url:'/item.png'}],
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
      images: [{url:'/item.png'}],
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
      images: [{url:'/item.png'}],
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
      images: [{url:'/item.png'}],
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
      images: [{url:'/item.png'}],
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
      images: [{url:'/item.png'}],
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
      images: [{url:'/item.png'}],
      heart: false,
    },
  ]);
  return (
    <div className='shop-right-body'>
      <div className='__products'>
        {data.map((e, i) => {
          return (
            <div key={i}>
              <SingleProduct elem={e} products={data} setData={setData} />
            </div>
          );
        })}
        <InfoContainer
          className='middleInfoContainer'
          title='Duftserie für zuhause'
          text='Spoil your home'
          desc='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. Sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
          src='/inspirationbot2.png'
          width='840'
          height='629'
          layout='intrinsic'
        />
        <InfoContainer
          className='bottomInfoContainer'
          title='Duftserie für zuhause'
          text='Spoil your home'
          desc='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. Sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
          src='/inspirationbot1.png'
          width='840'
          height='628'
          layout='intrinsic'
        />
      </div>
        <div className='shop-desc-body'>
          <PagePagination />
          <ShopDescription />
        </div>
    </div>
  );
};

export default ShopBodyContainer;
