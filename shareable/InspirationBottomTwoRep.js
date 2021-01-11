const InspirationBottomTwoRep = ({background,color,padding})=>{
    return(
        <>
            <div style={{backgroundColor:background,paddingBottom:padding}}>
                <div className={"d-flex flex-wrap inspiration-bottom  inspiration-bottom-left"}>

                    <div className={"col-lg-6 inspiration-bottom-image"} style={{backgroundImage:"url(/inspirationbot2.png)"}}>
                        <div className={"inspiration-bottom-imagetxt-two"}>
                            {/*<p className={"insp-bot-sm"}>Saison highlight</p>*/}
                            <p className={"insp-bot-lg"}>
                                Mach dir
                            </p>
                            <p className={"insp-bot-lg"}>
                                dein Zuhause
                            </p>
                        </div>
                    </div>
                    <div className={"col-lg-6 inspiration-bottom-text2"}>
                        <div className={"inspiration-bottom-head-txt"}>
                            <p style={{color:color}}>Duftserie für zuhause</p>
                            <h2 style={{color:color}}>
                                Your home deserves
                                To be spoiled
                            </h2>
                        </div>
                        <span style={{color:color}}>
                           Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                           Sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                           Lorem ipsum dolor sit amet, consetetur sadipscing
                         </span>
                        <button className={"inspiration-bottom-btn"} style={{color:background,backgroundColor:color}}>JETZT SHOPPEN</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InspirationBottomTwoRep