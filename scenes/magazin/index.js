import ComponentHeaderBody from "./components/component-header-body/ComponentHeaderBody";
import AddSection from "./components/add-section/AddSection";
import ProductsList from "./components/products-list-top/ProductsList";

const MagazinScene = () =>{
    return(
        <>
            <ComponentHeaderBody/>
            <AddSection/>
            <ProductsList/>
        </>
    )
}

export default MagazinScene