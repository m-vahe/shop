import {useState} from "react";
import Link from 'next/link'
import {useRouter} from "next/router";

const Navbar = () =>{
    const route = useRouter()
    const [navList,setNavList] = useState([
        {name:"PARFUM",hovered:false,link:"/parfum/asd",hover:true}, {name:"Beauty",hovered:false,link:"/beauty",hover:true},{name:"Herren",hovered:false,link:"/herren",hover:true},
        {name:"interieur",hovered:false,link:"/interieur",hover:true},
        {name:"lifestyle",hovered:false,link:"/lifestyle",hover:true},{name:"Beauty food",hovered:false, link:"/beautyfood",hover:true},{name:"clean Beauty",hovered:false,link:"/cleanbeauty",hover:true},
        {name:"Marken",hovered:false,link:"/marken"},{name:"typentests",hovered:false, link:"/typentests"},{name:"video",hovered:false,link:"/video"},
        {name:"Shop",hovered:false,link: "/shop"},{name:"magazin",hovered:false,link: "/magazin"},{name:"kontakt",hovered:false,link: "/kontakt"}])
    console.log(route)
    return(
        <>
            <div className={"navbar-body"}>
                <div className={"navbar-all"}>
                    <nav>
                        <ul className={"main-nav"}>
                            {navList.map((e,i)=>{
                                return(
                                    <li key={i} className={"main-list"}  >
                                        <Link  href={e.link}>
                                            <a className={`hovered-top-link ${route.pathname === e.link ? "active-navbar":""}`} href={e.link} style={route.query.id === e.link ? {webkitTextStroke:"1px solid black"}: null}>{e.name}</a>
                                        </Link>
                                        <div className={"relative-nav"}>
                                            <div className={"absolute-white"}></div>
                                        </div>
                                        {e.hover ?
                                            <>
                                                <div className={"hovered "}>
                                                    <div className={" nav-hov-links "}>
                                                        <h2>Shop By</h2>
                                                        <Link href={"/a-z"}>a-z</Link>
                                                        <Link href={"/a-z"}>aproved by dpab</Link>
                                                        <Link href={"/a-z"}>Clean Products</Link>
                                                        <Link href={"/a-z"}>Limited Editions</Link>
                                                        <Link href={"/a-z"}>New</Link>
                                                        <Link href={"/a-z"}>Top 10</Link>
                                                        <Link href={"/a-z"}>Bestseller</Link>
                                                    </div>
                                                    <div className={"nav-hov-links"}>
                                                            <h2>Shop By</h2>
                                                            <Link href={"/a-z"}>a-z</Link>
                                                            <Link href={"/a-z"}>aproved by dpab</Link>
                                                            <Link href={"/a-z"}>Clean Products</Link>
                                                            <Link href={"/a-z"}>Limited Editions</Link>
                                                            <Link href={"/a-z"}>New</Link>
                                                            <Link href={"/a-z"}>Top 10</Link>
                                                            <Link href={"/a-z"}>Bestseller</Link>
                                                    </div>
                                                    <div className={"nav-hov-links"}>
                                                            <h2>Shop By</h2>
                                                            <Link href={"/a-z"}>a-z</Link>
                                                            <Link href={"/a-z"}>aproved by dpab</Link>
                                                            <Link href={"/a-z"}>Clean Products</Link>
                                                            <Link href={"/a-z"}>Limited Editions</Link>
                                                            <Link href={"/a-z"}>New</Link>
                                                            <Link href={"/a-z"}>Top 10</Link>
                                                            <Link href={"/a-z"}>Bestseller</Link>
                                                    </div>
                                                    <div className={"col-lg-3"}>

                                                    </div>
                                                </div>
                                            </>
                                            : null
                                        }
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar