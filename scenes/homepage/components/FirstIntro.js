import Image from "next/image";
const FirstIntro = () =>{
    return(
        <>
            <div className={"first-intro "}>
                <div className={"first-intro-body flex-wrap"}>
                    <div className={"first-intro-bod-left col-lg-6 col-xl-6"}>
                       <div>
                           <p className={"intro-small-txt"}>Entdecken Sie perfekte Pflege und Düfte für Ihren Stil</p>
                           <h2 className={"intro-big-txt"}>Machen Sie
                               Den Typen-Test</h2>
                       </div>
                        <button>JETZT SHOPPEN</button>
                    </div>
                    <div className={"first-intro-bod-right col-lg-6 col-xl-6"} style={{backgroundImage:"url(/first1.jpg)"}}>

                    </div>
                </div>
            </div>
        </>
    )
}
export default FirstIntro