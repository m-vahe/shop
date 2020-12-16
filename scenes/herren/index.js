import HerrenHead from "./components/Head";
import FirstProducts from "./components/FirstProducts";
import SecondSection from "./components/SecondSection";
import ProductsWithFilterHarren from "./components/ProductsWithFilter";
import Inspiration from "./components/Inspiration";
import InspirationBottomOne from "./components/InspirationBottomOne";
import InspirationBottomTwo from "./components/InspirationBottomTwo";
import ProductsWithFilterHarrenTwo from "./components/ProductsWithFilterHarrenTwo";

const HerrenScene = () =>{

    return(
        <>
            <div>
                <HerrenHead/>
                <FirstProducts/>
                <SecondSection/>
                <ProductsWithFilterHarren/>
                <Inspiration/>
                <InspirationBottomOne/>
                <InspirationBottomTwo/>
                <ProductsWithFilterHarrenTwo/>
            </div>
        </>
    )
}

export default HerrenScene