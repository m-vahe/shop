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
import Services from "./components/services/Services";
import BottomVideo from "./components/bottom-videos/BottomVideos";
import FirstIntroMobile from "./components/mobile/firstIntro/FirstIntro";
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";


const Homepage = () =>{
    // const htmltext = "<div><h1 style='color:red'>Alohha Bitches</h1></div>"
    return(
        <>
            <div className={"homepage-body"}>
                <FirstIntro/>
                <FirstIntroMobile/>
                <FirstProducts/>
                <SecondSection/>
                <InspirationSection/>
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
        </>
    )
}

export default Homepage