import HerrenHead from "./components/Head";
import FirstProducts from "./components/FirstProducts";
import SecondSection from "./components/SecondSection";
import ProductsWithFilterHarren from "./components/ProductsWithFilter";
import Inspiration from "./components/Inspiration";
import InspirationBottomOne from "./components/InspirationBottomOne";
import InspirationBottomTwo from "./components/InspirationBottomTwo";
import ProductsWithFilterHarrenTwo from "./components/ProductsWithFilterHarrenTwo";
import SecondFilteredProdBottom from "./components/SecondFilteredProdBottom";
import Services from "./components/Services";
import Newsletter from "./components/Newsletter";
import FirstComponent from "./components/mobilecomponents/FirstComponent";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { getCollectionShops, getInspirations } from '../../services/actions/homepage__stable';

const HerrenScene = () => {
    const dispatch = useDispatch();

    const [firstData, setFirstData] = useState({});
    const [secondData, setSecondData] = useState({});
    const [inspiration1, setInspiration1] = useState({});
    const [inspiration2, setInspiration2] = useState({});
    const [inspiration3, setInspiration3] = useState({});

    useEffect(() => {
        dispatch(getCollectionShops())
            .then(res => {
                setFirstData(res?.find(elem => elem.position === 'HerrenPageLeft'));
                setSecondData(res?.find(elem => elem.position === 'HerrenPageRight'));
            });
        
        dispatch(getInspirations())
            .then(data => {
                setInspiration1(data.find(elem => elem.position === 'HerrenPageOne'));
                setInspiration2(data.find(elem => elem.position === 'HerrenPageTwo'));
                setInspiration3(data.find(elem => elem.position === 'HerrenPageThre'));
            });
    }, []);

    return(
        <>
            <div className={"harren-main-body"}>
                <HerrenHead/>
                <FirstComponent/>
                <FirstProducts/>
                <SecondSection 
                    firstData={firstData}
                    secondData={secondData}
                />
                <ProductsWithFilterHarren/>
                <div className={"harreninsp"}>
                    <Inspiration inspiration={inspiration1} />
                    <InspirationBottomOne inspiration={inspiration2} />
                    <InspirationBottomTwo inspiration={inspiration3} />
                </div>
                <ProductsWithFilterHarrenTwo/>
                <SecondFilteredProdBottom/>
                <Services/>
                <Newsletter/>

            </div>
        </>
    )
}

export default HerrenScene