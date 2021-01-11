import HeadText from "./components/headtext/HeadText";
import SecondAboutSection from "./components/secondSection/SecondSection";
import ThirdSection from "./components/thirdsection/ThirdSection";
import Social from "../../shareable/social/Social";
import Newsletter from "../homepage/components/Newsletter";

const AboutTwoScene = () =>{
    return(
        <div className="about-two-main-body">
            <HeadText/>
            <SecondAboutSection/>
            <ThirdSection/>
            <Social/>
            <Newsletter/>
        </div>
    )
}

export default AboutTwoScene