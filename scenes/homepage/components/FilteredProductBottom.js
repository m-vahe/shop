import Image from "next/image";
const FilteredProductBottom = () =>{
    return(
        <>
            <div className={"prodbotbodall"}>
                <div className={"d-flex flex-row flex-wrap first-product-bottom-body"}>
                    <div className={"col-lg-6 product-bottom-left d-flex"}>
                        <div style={{backgroundImage:"url(/productbotleft.png)"}} className={"prod-bot-left-img"}>
                            <h2>Neuigkeiten</h2>
                        </div>
                        <div className={"prod-bod-left-txt"}>
                            <p>Neuigkeiten im shop</p>
                            <h2>Parfum des Monats</h2>
                            <span>
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
                        <p>Neuigkeiten im shop</p>
                        <h2>Parfum des Monats</h2>
                        <span>
                           Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                           sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                           Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                       </span>
                        <div style={{backgroundImage:"url(/productbotright.png)"}} className={"prod-bot-right-img"}></div>
                        <a href="#">Mehr lesen</a>
                    </div>
                </div>
                <button className={"filter-bot-btn"}>MEHR Neuigkeiten </button>
            </div>
        </>
    )
}

export default FilteredProductBottom