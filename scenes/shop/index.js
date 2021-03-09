import ShopHeader from './components/shop-header/ShopHeader'
import ShopHeaderMobile from './components/shop-header/ShopHeaderMobile'
import ShopBody from './components/shop-body/ShopBody'
// import ShopBodyFooter from "./components/shop-body/shop-body-footer/ShopBodyFooter";
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";
import {useLayoutEffect,useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import {getNewsReport,getShopLgText} from "../../services/actions/news";
import PageHeader from "../../layouts/header/Header"
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import Footer from "../../layouts/footer/Footer";
import {getNavbar} from "../../services/actions/homepage__stable";
import {Space, Spin} from "antd";
const ShopScene = () =>{
    const dispatch = useDispatch()
    useLayoutEffect(() => {
        dispatch(getNewsReport());
        dispatch(getShopLgText());
        dispatch(getNavbar());
    }, []);
    const headLoaded = useSelector(state=>state.news.newsReportLoading)
    const navlistloaded = useSelector((state) => state.navbar.navListLoaded)
    return (
      <>
          {
              !headLoaded && !navlistloaded ?
              <>
                  <PageHeader/>
                  <MobileHeader/>
                  <div className={"shop-all-elements"}>
                      <ShopHeader/>
                      <ShopHeaderMobile/>
                      <ShopBody/>
                      <NewsletterRep/>
                  </div>
                  <Footer/>
              </> :
                  <div className={"loader__body"}>
                      <Space size="middle">
                          <Spin size="large" />
                      </Space>
                  </div>
          }
      </>
  )
}

export default ShopScene

// < div
// className = "container" >
//     < div
// className = "round" >
//     < input
// type = "checkbox"
// id = "checkbox" / >
//     < label
// htmlFor = "checkbox" > < /label>
// </div>
// </div>

//     .round {
//     position: relative;
// }
//
// .round label {
//     background-color: #fff;
//     border: 1px solid #ccc;
//     border-radius: 50%;
//     cursor: pointer;
//     height: 28px;
//     left: 0;
//     position: absolute;
//     top: 0;
//     width: 28px;
// }
//
// .round label:after {
//     content: '';
//     display: inline-block;
//     width: 15px;
//     height: 15px;
//     -moz-border-radius: 7.5px;
//     -webkit-border-radius: 7.5px;
//     border-radius: 7.5px;
//     background-color: transparent;
// }
//
// .round input[type="checkbox"] {
//
//
//     visibility: hidden;
// }
//
// .round input[type="checkbox"]:checked + label {
// }
//
// .round input[type="checkbox"]:checked + label:after {
//     position:absolute;
//     left:4px;
//     top:4px;
//     content: '';
//     display: inline-block;
//     width: 20px;
//     height: 20px;
//     border-radius:50%;
//     background-color: black;
//     opacity: 1;
// }
