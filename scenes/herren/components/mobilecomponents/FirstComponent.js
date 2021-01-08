import FirstShareableIntro from "../../../../shareable/firstIntro/FirstShareableIntro";

const FirstHerrenComponent = () =>{
    const smalltxt = "Bart und Gesichtspflege"
    const bigtext1 = "Ihre neue "
    const bigtext2 = "Grooming routine"
    const btntext = "JETZT SHOPPEN"
    const color = "white"
    const bg="black"
    const padding="10px 0 27px 0"

    return(
        <>
            <FirstShareableIntro smalltxt={smalltxt} bigtext1={bigtext1} bigtext2={bigtext2} btntext={btntext} color={color} bg={bg} padding={padding}/>
        </>
    )
}

export default FirstHerrenComponent