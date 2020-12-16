import Image from "next/image";
const Neuigkeiten = ({background,color}) =>{
    return(
        <>
            <div className={"prodbotbodall"} style={{backgroundColor:background}}>
                <div className={"d-flex flex-row flex-wrap first-product-bottom-body"}>
                    <div className={"col-lg-6 product-bottom-left d-flex"}>
                        <div style={{backgroundImage:"url(/productbotleft.png)"}} className={"prod-bot-left-img"}>
                            <h2 style={{color:color}} >Neuigkeiten</h2>
                        </div>
                        <div className={"prod-bod-left-txt"}>
                            <p style={{color:color}}>Neuigkeiten im shop</p>
                            <h2 style={{color:color}}>Parfum des Monats</h2>
                            <span style={{color:color}}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                                ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                magna aliquyam erat, sed diam voluptua.
                            </span>
                            <a href="#">
                                Mehr lesen
                            </a>
                        </div>
                    </div>
                    <div className={"col-lg-6 product-bottom-right"}>
                        <p style={{color:color}}>Neuigkeiten im shop</p>
                        <h2 style={{color:color}}>Parfum des Monats</h2>
                        <span style={{color:color}}>
                           Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                           sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                           Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                       </span>
                        <div style={{backgroundImage:"url(/productbotright.png)"}} className={"prod-bot-right-img"}></div>
                        <a href="#">Mehr lesen</a>
                    </div>
                </div>
                <button className={"filter-bot-btn"} style={{color:background,backgroundColor:color}}>MEHR Neuigkeiten </button>
            </div>
        </>
    )
}

export default Neuigkeiten