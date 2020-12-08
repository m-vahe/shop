import {useState} from "react";
import Link from 'next/link'
const Navbar = () =>{
    const [navList,setNavList] = useState([
        {name:"PARFUM",hovered:false,link:"/"}, {name:"Beauty",hovered:false,link:"beauty"},{name:"Herren",hovered:false,link:"herren"},{name:"interieur",hovered:false,link:"interieur"},
        {name:"lifestyle",hovered:false,link:"lifestyle"},{name:"Beauty food",hovered:false, link:"beautyfood"},{name:"clean Beauty",hovered:false,link:"cleanbeauty"},
        {name:"Marken",hovered:false,link:"marken"},{name:"typentests",hovered:false, link:"typentests"},{name:"video",hovered:false,link:"video"},
        {name:"Showroom",hovered:false,link: "showroom"},{name:"magazin",hovered:false,link: "magazin"},{name:"kontakt",hovered:false,link: "kontakt"}])
const [hovered,setHovered] = useState("no-hover")
    const [hoveredLink,setHoveredLink] = useState("")
    return(
        <>
        <div className={"navbar-all"}>
            <nav>
                <ul className={"main-nav"}>
                    {navList.map((e,i)=>{
                        return(
                            <li key={i} className={"main-list"} onMouseOver={()=> {
                                setHovered("hovered-link");
                                e.hovered = true
                            }} onMouseLeave={()=>setHovered("no-hover")} ><Link exact href={e.link}>{e.name}</Link>
                                {/*<ul className={hovered} onMouseOver={()=>setHovered("hovered-link")} onMouseLeave={()=>setHovered("no-hover")}>*/}
                                {/*    <li>some text</li>*/}
                                {/*</ul>*/}
                            </li>
                        )

                    })}

                </ul>
            </nav>

        </div>
        </>
    )
}

export default Navbar