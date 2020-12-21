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

const HerrenScene = () =>{

    return(
        <>
            <div className={"harren-main-body"}>
                <HerrenHead/>
                <FirstProducts/>
                <SecondSection/>
                <ProductsWithFilterHarren/>
                <div className={"harreninsp"}>
                    <Inspiration/>
                    <InspirationBottomOne/>
                    <InspirationBottomTwo/>
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