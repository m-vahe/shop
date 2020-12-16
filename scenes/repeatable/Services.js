import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTruck ,faHeart, faPercent, faFlask} from "@fortawesome/free-solid-svg-icons";
const ServicesRep = ({padding}) =>{
    return(
        <>
            <div className={"d-flex flex-wrap services-body"} style={{padding:padding}}>
                <div className={"col-lg-3 services-item"}>
                    <FontAwesomeIcon
                        style={{fontSize:"30px"}}
                        icon={faTruck}
                    />{" "}
                    <h2>
                        Kostenloser
                        Versand
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet,
                        consetetur sadipscing
                    </p>
                </div>
                <div className={"col-lg-3 services-item"}>
                    <FontAwesomeIcon
                        style={{fontSize:"30px"}}
                        icon={faHeart}
                    />{" "}
                    <h2>
                        Mit liebe
                        Handverpackt
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet,
                        consetetur sadipscing
                    </p>
                </div>
                <div className={"col-lg-3 services-item"}>
                    <FontAwesomeIcon
                        style={{fontSize:"30px"}}
                        icon={faPercent}
                    />{" "}
                    <h2>
                        Stammkunden
                        Rabatt
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet,
                        consetetur sadipscing
                    </p>
                </div>
                <div className={"col-lg-3 services-item"}>
                    <FontAwesomeIcon
                        style={{fontSize:"30px"}}
                        icon={faFlask}
                    />{" "}
                    <h2>
                        Inklusive
                        3 gratisproben
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet,
                        consetetur sadipscing
                    </p>
                </div>
            </div>
        </>
    )
}

export default ServicesRep