import FirstIntro from "./components/FirstIntro";
import FirstProducts from "./components/FirstProducts";
import SecondSection from "./components/SecondSection";
import InspirationSection from "./components/InspirationSection";
import InspirationBottomOne from "./components/inspirationBottomOne";
import InspirationBottomTwo from "./components/InspirationBottomTwo";
import SecondProducts from "./components/SecondProducts";
import ProductsWithFilterHomepage from "./components/ProductsWithFilter";
import FilteredProductBottom from "./components/FilteredProductBottom";
import VideoPart from "./components/VideoPart";
import DpabMagazine from "./components/DpabMagazine";
import DpabBottom from "./components/DpabBottom";
import Services from "./components/Services";
import Newsletter from "./components/Newsletter";
import BottomVideo from "./components/BottomVideos";

const Homepage = () =>{
    return(
        <>
            <div className={"homepage-body"}>
                <FirstIntro/>
                <FirstProducts/>
                {/*<SecondSection/>*/}
                {/*<InspirationSection/>*/}
                {/*<InspirationBottomOne/>*/}
                {/*<InspirationBottomTwo/>*/}
                {/*<SecondProducts/>*/}
                {/*<ProductsWithFilterHomepage/>*/}
                {/*<FilteredProductBottom/>*/}
                {/*<VideoPart/>*/}
                {/*<BottomVideo/>*/}
                {/*<DpabMagazine/>*/}
                {/*<DpabBottom/>*/}
                {/*<Services/>*/}
                {/*<Newsletter/>*/}
            </div>
        </>
    )
}

export default Homepage