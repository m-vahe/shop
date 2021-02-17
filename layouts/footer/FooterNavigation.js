import {useState} from "react";
import Link from "next/link";
const FooterNavigation = () =>{
    const [navList,setNavList] = useState([
        {name:"PARFUM",hovered:false,link:"/parfum"}, {name:"Beauty",hovered:false,link:"/beauty"},{name:"Herren",hovered:false,link:"/herren"},{name:"interieur",hovered:false,link:"/interieur"},
        {name:"Accessoires",hovered:false,link:"/accessoires"},{name:"Shop",hovered:false, link:"/shop"},{name:"typentests",hovered:false, link:"/typentests"},
        {name:"shop",hovered:false,link:"/shop"},{name:"magazin",hovered:false,link: "/magazin"},{name:"suche",hovered:false,link: "/suche"},
        {name:"kontakt",hovered:false,link: "/kontakt"}])
    const kontakt = [
        " Das Parfum and Beauty Distribution 1912 GmbH"," Geschäftsführung: Liljana Turbic-Jasarovska","Friedrich-Ebert-Straße 13 61476 Kronberg",
        "Telefon: +49 (0) 6173 . 963 08 53"," Email: shop@dasparfum-beauty.de"
    ]
    const dpab = ["Friedrich-Ebert-Straße 13 61476 Kronberg","Öffnungszeiten: Mo-fr 09-18 Uhr Sa 12-16 Uhr"]
    const konto =  [
        {name:"Registrieren",hovered:false,link:"/registrieren"},{name:"Login",hovered:false,link:"/login"},
        {name:"Nutzerdaten",hovered:false,link:"/konto/nutzerdaten"},{name:"warenkorb",hovered:false,link:"/parfum"},
        {name:"Zur Kasse",hovered:false,link:"/zurkasse"},{name:"Wishlist",hovered:false,link:"/konto/whishlist"},
        {name:"Newsletter",hovered:false,link:"/newsletter"},{name:"Meine Lesezeichen",hovered:false,link:"/konto/lesezeichen"},
    ]
    return(
        <div className={"footer__navigation__container"}>
           <div className={"footer__navigation__container__body"}>
               <div className={"footer__navigation__container__body__item"}>
                   <h2>Kontakt</h2>
                   {kontakt.map((e,i)=>{
                       return(
                           <p key={i}>{e}</p>
                       )
                   })}
               </div>
               <div className={"footer__navigation__container__body__item1"}>
                   <h2>Dpab Store</h2>
                   {dpab.map((e,i)=>{
                       return(
                           <p key={i}>{e}</p>
                       )
                   })}
               </div>
               <div className={"footer__navigation__container__body__item2"}>
                   <h2>Online Shop</h2>
                   {navList.map((e,i)=>{
                       return(
                           <li key={i}   ><Link exact href={e.link}>{e.name}</Link></li>
                       )
                   })}
               </div>
               <div className={"footer__navigation__container__body__item3"}>
                   <h2>Mein Konto</h2>
                   {konto.map((e,i)=>{
                       return(
                           <li key={i}   ><Link exact href={e.link}>{e.name}</Link></li>
                       )
                   })}
               </div>
           </div>
        </div>
    )
}

export default FooterNavigation