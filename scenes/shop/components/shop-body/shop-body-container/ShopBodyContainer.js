import React, { useState } from 'react';
import SingleProduct from '../../../../../shareable/Products/SingleProduct';
import PagePagination from '../../../../../shareable/pagination/Pagination';
import InfoContainer from '../../../../../shareable/info-container/InfoContainer';
import ShopDescription from './shop-description/ShopDescription';
import {useSelector} from "react-redux";

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
  const news = useSelector(({ news }) => news);
  const  shopHeadTwo = news.newsReports.find(n => n.position === 'ShopPageTwo');
  const  shopHeadThree = news.newsReports.find(n => n.position === 'ShopPageThree');
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
          textData = {shopHeadTwo}
        />
        <InfoContainer
          className='bottomInfoContainer'
          textData ={shopHeadThree}
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
