import ComponentHeaderBody from "./components/component-header-body/ComponentHeaderBody";
import AddSection from "./components/add-section/AddSection";
import ProductsList from "./components/products-list-top/ProductsList";
import MagazinSecondSection from "./components/magazin-second-section/MagazinSecondSection";
import Social from "../../shareable/social/Social";
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";
import BeautyEssentials from "./components/beauty-esentials/BeautyEsentials";
import MagazinSecondSectionMobile from "./components/magazin-second-section/MagazinSecondSectionMobile";
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {getStairsAdd} from "../../services/actions/news";
const MagazinScene = () =>{

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getStairsAdd())
        console.log(addData1,1111111111,addData2,22222222222)
    },[])

    const adds = useSelector(state => state.news.stairAdd);
    const addData1 = adds.find(n => n.position === 'One');
    const addData2 = adds.find(n => n.position === 'Two');

    return(
        <div className={"magazin__all__elements"}>
            <ComponentHeaderBody/>
            <AddSection addData={addData1}/>
            <ProductsList/>
            <MagazinSecondSection/>
            <MagazinSecondSectionMobile/>
            <ProductsList/>
            <AddSection addData={addData2}/>
            <BeautyEssentials/>
            <Social/>
            <NewsletterRep/>
        </div>
    )
}

export default MagazinScene