import ComponentHeaderBody from "./components/component-header-body/ComponentHeaderBody";
import AddSection from "./components/add-section/AddSection";
import ProductsList from "./components/products-list-top/ProductsList";
import MagazinSecondSection from "./components/magazin-second-section/MagazinSecondSection";
import Social from "../../shareable/social/Social";
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";

const MagazinScene = () =>{
    return(
        <>
            <ComponentHeaderBody/>
            <AddSection/>
            <ProductsList/>
            <MagazinSecondSection/>
            <ProductsList/>
            <AddSection/>
            <Social/>
            <NewsletterRep/>
        </>
    )
}

export default MagazinScene