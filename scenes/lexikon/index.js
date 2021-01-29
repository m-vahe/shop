import HeadTextLexikon from "./components/head-text/HeadTextLexikon";
import LexikonFilter from "./components/lexikon-filter/LexikonFilter";
import LexikonCollapse from "./components/collapse/LexikonCollapse";
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";

const LexikonScene = () =>{
    return(
        <div className={"lexikon__body__for__all"}>
            <HeadTextLexikon/>
            <LexikonFilter/>
            <LexikonCollapse/>
            <NewsletterRep/>
        </div>
    )
}

export default LexikonScene