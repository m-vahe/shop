import Image from "next/image";
const FirstIntroMobile = () =>{
    return(
        <>
            <div className={"mobile__firstintro__body"}>
                <div className={"text-body"}>
                    <p className={"small-text"}>Entdecken Sie perfekte Pflege und Düfte für Ihren Stil</p>
                    <h2 className={"big-text"}>Machen Sie</h2>
                    <h2 className={"big-text1"}> Den Typen-Test</h2>
                </div>
                <div className={"image-body"} >
                    <Image src="/first1.jpg" width={941} height={625} layout="responsive" />
                </div>
                <div className={"button-body"}>
                    <button>
                        JETZT SHOPPEN
                    </button>
                </div>
            </div>
        </>
    )
}

export default FirstIntroMobile