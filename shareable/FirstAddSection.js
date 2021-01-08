import Image from 'next/image'

const FirstAddSection = ({background,image1,image2,textcolor,padding}) =>{
    return(
        <>
            <div className={"second-section-home "} style={{backgroundColor:background,paddingTop:padding,paddingBottom:padding}}>
                <div className={"sec-sect-all d-flex flex-wrap"}>
                    <div className={"sec-sec-el col-lg-6"}>
                        <div>
                            <Image src={image1} layout='responsive' width={840} height={630}/>
                        </div>
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
                        <div>
                        <Image src={image2} layout='responsive' width={840} height={630}/>
                        </div>
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