import Image from "next/image";

const SecondSection = () =>{
    return(
        <>
            <div className={"d-flex second-section-home flex-wrap"}>
                <div className={"col-lg-6 add-part"}>
                    <div style={{backgroundImage:"url(/aaa.png)"}}></div>
                    <p>Gemütliches ambiente für ihr Zuhause </p>
                    <h3>Der Herbst liegt in der Luft</h3>
                    <a href="#">Kollektion shoppen</a>
                </div>
                <div className={"col-lg-6 add-part"}>
                    <div style={{backgroundImage:"url(/anzeige-final.png)"}}></div>
                    <p>Mit dieser Kollektion bleibt der Sommer länger</p>
                    <h3>Summer isn’t over yet</h3>
                    <a href="#">Kollektion shoppen</a>
                </div>
            </div>
        </>
    )
}

export default SecondSection