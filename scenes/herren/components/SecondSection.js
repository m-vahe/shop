import FirstAddSection from "../../repeatable/FirstAddSection";

const SecondSection = () =>{
    const background="black"
    const image1="/harren2section2.png"
    const image2="/harren2section1.png"
    const textcolor = "white"

    return(
        <>
            <FirstAddSection background={background} image1={image1} image2={image2} textcolor={textcolor}/>
        </>
    )
}

export default SecondSection