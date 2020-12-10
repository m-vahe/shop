import {useState} from "react";
import Link from "next/link";

const FooterNav = () =>{
    const [navList,setNavList] = useState([
        {name:"PARFUM",hovered:false,link:"/parfum"}, {name:"Beauty",hovered:false,link:"/beauty"},{name:"Herren",hovered:false,link:"/herren"},{name:"interieur",hovered:false,link:"/interieur"},
        {name:"Accessoires",hovered:false,link:"/accessoires"},{name:"Shop",hovered:false, link:"/shop"},{name:"typentests",hovered:false, link:"/typentests"},
        {name:"showroom",hovered:false,link:"/showroom"},{name:"magazin",hovered:false,link: "/magazin"},{name:"suche",hovered:false,link: "/suche"},
        {name:"kontakt",hovered:false,link: "/kontakt"}])
    return(
        <>
            <div className={"nav-footer-body"}>
                <div className={"footer-nav-all d-flex"}>
                    <div className={"d-flex footer-circled-bod"}>
                        <div className={"nav-top-items d-flex col-lg-3"}>
                            <div className={"footer-circled-persons"}></div>
                            <p>
                                Gratis Rücklieferungen
                                Senden Sie Ihre Lieferung innerhalb
                                von 14 Tagen problemlos zurück
                            </p>
                        </div>
                        <div className={"nav-top-items d-flex col-lg-3"}>
                            <div className={"footer-circled-persons"}></div>
                            <p>
                                Sie erreichen uns direkt
                                Rufen Sie uns an, wir helfen Ihnen gerne weiter
                                +49 (0)6173 9938000
                            </p>
                        </div>
                        <div className={"nav-top-items d-flex col-lg-3"}>
                            <div className={"footer-circled-persons"}></div>
                            <p>
                                Sie erreichen uns per WhatsApp
                                Bei Fragen kontaktieren Sie Frau Laila Scivoletto
                                +49 (0) 170 231 86 97
                            </p>
                        </div>
                    </div>
                    <div className={"footer-navigation-all"}>
                        <div className={"footer-navbar-all"}>
                            <nav>
                                <ul className={"footer-main-nav"}>
                                    {navList.map((e,i)=>{
                                        return(
                                            <li key={i} className={"main-list"}  ><Link exact href={e.link}>{e.name}</Link></li>
                                        )
                                    })}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterNav