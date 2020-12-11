import Image from "next/image";

const SecondSection = () =>{
    return(
        <>
            <div className={" second-section-home "}>
                <div className={"sec-sect-all d-flex flex-wrap"}>
                    <div className={"sec-sec-el col-lg-6"}>
                        <div style={{backgroundImage:"url(/aaa.png)"}} className={"sec-sec-img"}></div>
                        <div className={"sec-sec-el-text"}>
                            <p>
                                Gemütliches ambiente für ihr Zuhause
                            </p>
                            <h3>
                                Der Herbst liegt in der Luft
                            </h3>
                        </div>
                        <div className={"sec-sec-el-link"}>
                            <a href="#">
                                Kollektion shoppen
                            </a>
                        </div>
                    </div>
                    <div className={"sec-sec-el col-lg-6"}>
                        <div style={{backgroundImage:"url(/anzeige-final.png)"}} className={"sec-sec-img"}></div>
                        <div className={"sec-sec-el-text"}>
                            <p>
                                Mit dieser Kollektion bleibt der Sommer länger
                            </p>
                            <h3>
                                Summer isn’t over yet
                            </h3>
                        </div>
                        <div className={"sec-sec-el-link"}>
                            <a href="#">
                                Kollektion shoppen
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecondSection