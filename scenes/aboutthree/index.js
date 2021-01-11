import HeadTextThree from "./components/headtext/HeadText";
import SecondAboutSectionThree from "./components/secondsection/SecondSection";
import Social from "../../shareable/social/Social";
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";

const AboutThreeScene = () =>{
    return(
        <>
            <div className={"about-three-body"}>
                <HeadTextThree/>
                <SecondAboutSectionThree/>
                <Social/>
                <NewsletterRep/>
            </div>
        </>
    )
}

export default AboutThreeScene