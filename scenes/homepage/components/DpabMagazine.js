import Image from 'next/image'

const DpabMagazine = () =>{
    return(
        <>
            <div className={"dpab-magazin-all"}>
                <div className={"dpab-magazin-body"}>
                    <h2 className={"dpab-magazin-title"}>DPAB MAGAZIN</h2>
                    <div className={"dpab-top-section"}>
                        <div className={"dpab-top-section-img"} >
                        <Image src='/dpab1.png' width={1720} height={695} layout='responsive'/>
                        </div>
                        <div className={"dpab-top-section-txt"}>
                            <h2>Home sweet home</h2>
                            <p>Gemütliches Ambiente für Zuhause </p>
                            <span>
                                Es gibt wohl kaum etwas schöneres, als nach einem langen Tag nach Hause zu kommen und die lang ersehnte Entspannung in seinem eigenen Heim genießen zu können.
                                Es gibt unzählige Möglichkeiten seine geliebten vier Wände in einem Design einzurichten, mit dem man sich absolut wohl fühlt. Egal ob im Landhausstil, modern,
                                minimalistisch oder im skandinavischen Stil. Beim Einrichten können Sie Ihrer
                             </span>
                            <a href="#">Mehr lesen</a>
                        </div>
                    </div>
                    <div className={"dpab-bottom-section d-flex flex-wrap"}>
                        <div className={"col-lg-6 dpab-bottom-section-left d-flex"}>
                            <div className={"dpab-bottom-section-left-img-bod"}>
                                <div className={"dpab-bottom-section-left-img"}>
                                    <Image  src='/dpab2.png' width={837} height={635} layout='responsive'/>
                                </div>
                            </div>
                            <div className={"dpab-bottom-section-left-txt"}>
                                <h2>SANA JARDIN</h2>
                                <p>Mehr als ein parfum</p>
                                <span>
                                    Sana Jardin ist eine faszinierende und außergewöhnliche Marke. Dass das Team von das Parfum and Beauty besonders durch ihre spannende Geschichte
                                    und einzigartige Philosophie beeindruckt.
                                </span>
                                <a href="#">Mehr lesen</a>
                            </div>
                        </div>
                        <div className={"dpab-bottom-section-right"} style={{paddingLeft:"25px"}} >
                            <div className={" dpab-bottom-section-right"}>
                                <h2>DIANA VREELAND</h2>
                                <p>Modedesignerin und Chefredakteurin Vogue</p>
                                <span>
                                Zur Vorstellung einer unserer Duftkollektionen stellen wir, von Das Parfum & Beauty Ihnen seine berühmte Namensgeberin vor – Diana Vreeland.
                                Dianas hedonistische Mutter machte ihrer Tochter relativ früh einprägsam bewusst, dass sie hässlich sei.
                            </span>
                                <div className={"dpab-bottom-section-right-img"}>
                                <Image  src='/dpab3.png' width={760} height={627} layout='responsive'/>
                                </div>
                                <a href="#">Mehr lesen</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DpabMagazine