import ComponentHeaderBody from "./components/component-header-body/ComponentHeaderBody";
import AddSection from "./components/add-section/AddSection";
import ProductsList from "./components/products-list-top/ProductsList";
import MagazinSecondSection from "./components/magazin-second-section/MagazinSecondSection";
import Social from "../../shareable/social/Social";
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";
import BeautyEssentials from "./components/beauty-esentials/BeautyEsentials";
import MagazinSecondSectionMobile from "./components/magazin-second-section/MagazinSecondSectionMobile";

const MagazinScene = () =>{
    return(
        <div className={"magazin__all__elements"}>
            <ComponentHeaderBody/>
            <AddSection/>
            <ProductsList/>
            <MagazinSecondSection/>
            <MagazinSecondSectionMobile/>
            <ProductsList/>
            <AddSection/>
            <BeautyEssentials/>
            <Social/>
            <NewsletterRep/>
        </div>
    )
}

export default MagazinScene