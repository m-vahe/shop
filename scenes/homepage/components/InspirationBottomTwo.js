const InspirationBottomTwo = ()=>{
    return(
        <>
            <div className={"d-flex flex-wrap inspiration-bottom"}>

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
                <div className={"col-lg-6 inspiration-bottom-text"}>
                    <div className={"inspiration-bottom-head-txt"}>
                        <p>Duftserie für zuhause</p>
                        <h2>
                            Your home deserves
                            To be spoiled
                        </h2>
                    </div>
                    <span>
                       Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                       Sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                       Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor. invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </span>
                    <button className={"inspiration-bottom-btn"}>JETZT SHOPPEN</button>
                </div>
            </div>
        </>
    )
}

export default InspirationBottomTwo