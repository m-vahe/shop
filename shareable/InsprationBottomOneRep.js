const InspirationBottomOneRep = ({background,color})=>{
    return(
        <>
            <div style={{backgroundColor:background}}>
                <div className={"d-flex flex-wrap inspiration-bottom"} >
                    <div className={"col-lg-6 inspiration-bottom-text"}>
                        <div className={"inspiration-bottom-head-txt"}>
                            <p style={{color:color}}>Damendüfte</p>
                            <h2 style={{color:color}}>
                                Die Duft-sensation
                                Aus Frankreich
                            </h2>
                        </div>
                        <span style={{color:color}}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                        Sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor. invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </span>
                        <button className={"inspiration-bottom-btn"} style={{color:background,backgroundColor:color}}>JETZT SHOPPEN</button>
                    </div>
                    <div className={"col-lg-6 inspiration-bottom-image"} style={{backgroundImage:"url(/inspirationbot1.png)"}}>
                        <div className={"inspiration-bottom-imagetxt"}>
                            <p className={"insp-bot-sm"}>Saison highlight</p>
                            <p className={"insp-bot-lg"}>
                                Entdecken sie die
                            </p>
                            <p className={"insp-bot-lg"}>
                                Düfte des winters
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InspirationBottomOneRep