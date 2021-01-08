import Image from "next/image";
import FirstShareableIntro from "../../../../../shareable/firstIntro/FirstShareableIntro";
const FirstIntroMobile = () =>{
    const smalltxt = "Entdecken Sie perfekte Pflege und Düfte für Ihren Stil"
    const bigtext1 = "Machen Sie"
    const bigtext2 = "Den Typen-Test"
    const btntext = "JETZT SHOPPEN"
    return(
        <>
            <FirstShareableIntro smalltxt = {smalltxt} bigtext1={bigtext1} bigtext2 = {bigtext2} btntext={btntext}/>
        </>
    )
}

export default FirstIntroMobile