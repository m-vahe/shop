const FirstAddSection = ({background,image1,image2,textcolor}) =>{
    return(
        <>
            <div className={"second-section-home "} style={{backgroundColor:background}}>
                <div className={"sec-sect-all d-flex flex-wrap"}>
                    <div className={"sec-sec-el col-lg-6"}>
                        <div style={{backgroundImage:`url(${image1})`}} className={"sec-sec-img"}></div>
                        <div className={"sec-sec-el-text"}>
                            <p style={{color:textcolor}}>
                                Gemütliches ambiente für ihr Zuhause
                            </p>
                            <h3 style={{color:textcolor}}>
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
                        <div style={{backgroundImage:`url(${image2})`}} className={"sec-sec-img"}></div>
                        <div className={"sec-sec-el-text"}>
                            <p style={{color:textcolor}}>
                                Mit dieser Kollektion bleibt der Sommer länger
                            </p>
                            <h3 style={{color:textcolor}}>
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

export default FirstAddSection