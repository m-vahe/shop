import FirstIntro from "./components/first-intro/FirstIntro";
import FirstProducts from "./components/first-products/FirstProducts";
import SecondSection from "./components/second-section/SecondSection";
import InspirationSection from "./components/inspiration/InspirationSection";
import InspirationBottomOne from "./components/inpiration-bottom-one/inspirationBottomOne";
import InspirationBottomTwo from "./components/inspiration-bottom-two/InspirationBottomTwo";
import SecondProducts from "./components/second-products/SecondProducts";
import ProductsWithFilterHomepage from "./components/products-with-filter/ProductsWithFilter";
import FilteredProductBottom from "./components/filtered-product-bottom/FilteredProductBottom";
import VideoPart from "./components/video/VideoPart";
import DpabMagazine from "./components/dpab-magazine/DpabMagazine";
import DpabBottom from "./components/dpab-bottom/DpabBottom";
// import Services from "./components/services/Services";
import BottomVideo from "./components/bottom-videos/BottomVideos";
import FirstIntroMobile from "./components/mobile/firstIntro/FirstIntro";
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";
import { useDispatch ,useSelector} from 'react-redux';
import {getCollectionShops, getHomePageSctOne, getInspirations} from '../../services/actions/homepage__stable';
import { getProductsWithLeftText } from '../../services/actions/products';
import { getNewsReport } from '../../services/actions/news';
import { useEffect, useLayoutEffect, useState } from "react";
import Loader from "../../layouts/loader/Loader";
import Header from "../../layouts/header/Header";
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import Footer from "../../layouts/footer/Footer";
import { Spin, Space } from 'antd';
import Services from "../../shareable/services/Services";

const Homepage = () =>{
    // const htmltext = "<div><h1 style='color:red'>Alohha Bitches</h1></div>"
    const dispatch = useDispatch();
    const loaded = useSelector((state) => state.navbar.homePageSctOneLoaded);
    const navlistloaded = useSelector((state) => state.navbar.navListLoaded)
    const headerloaded = useSelector((state) => state.navbar.headerContactsLoaded)
    const [firstData, setFirstData] = useState({});
    const [secondData, setSecondData] = useState({});
    const [inspiration, setInspiration] = useState({});
    const HPFS = useSelector(state => state.navbar.homePageSctOne);
    const homepageIntro = HPFS.find(p => p.position === 'HomePage');

    useLayoutEffect(() => {
        dispatch(getCollectionShops())
            .then(res => {
                setFirstData(res?.find(elem => elem.position === 'HomePageLeft'));
                setSecondData(res?.find(elem => elem.position === 'HomePageRight'));
            });

        dispatch(getInspirations())
            .then(data => {
                setInspiration(data.find(elem => elem.position === 'HomePageOne'));
            });

        dispatch(getProductsWithLeftText());
        dispatch(getNewsReport());
        dispatch(getHomePageSctOne());
    }, []);


    return(
        <>
            {
                loaded && navlistloaded && headerloaded && !homepageIntro?.images.url &&
                    <div className={"loader__body"}>
                           <Space size="middle">
                               <Spin size="large" />
                           </Space>
                    </div>
            }
                    <>
                        <Header/>
                        <MobileHeader/>
                        <div className={"homepage-body"}>
                            <FirstIntro/>
                            <FirstIntroMobile/>
                            <FirstProducts/>
                            <SecondSection
                                firstData={firstData}
                                secondData={secondData}
                            />
                            <InspirationSection
                                inspiration={inspiration}
                            />
                            <InspirationBottomOne/>
                            <InspirationBottomTwo/>
                            <SecondProducts/>
                            <ProductsWithFilterHomepage/>
                            <FilteredProductBottom/>
                            <VideoPart/>
                            <BottomVideo/>
                            <DpabMagazine/>
                            <DpabBottom/>
                            <Services/>
                            <NewsletterRep/>
                            {/*<div dangerouslySetInnerHTML={{__html:htmltext}}></div>*/}
                        </div>
                        <Footer/>
                    </>
        </>
    )
}

export default Homepage