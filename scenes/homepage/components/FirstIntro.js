import Image from "next/image";
const FirstIntro = () =>{
    return(
        <>
            <div className={"first-intro "}>
                <div className={"first-intro-body "}>
                    <div className={"first-intro-bod-left"}>
                       <div>
                           <p className={"intro-small-txt"}>Entdecken Sie perfekte Pflege und Düfte für Ihren Stil</p>
                           <h2 className={"intro-big-txt"}>Machen Sie
                              </h2>
                           <h2 className={"intro-big-txt1"}> Den Typen-Test</h2>
                       </div>
                        <button>JETZT SHOPPEN</button>
                    </div>
                    <div className={"first-intro-bod-right "} >
                        <Image src="/first1.jpg" width={941} height={625} layout="responsive"/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FirstIntro