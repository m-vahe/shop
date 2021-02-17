import {useState,useEffect} from "react";
import Link from 'next/link'
import {useRouter} from "next/router";
import {getNavbar} from "../../services/actions/homepage__stable";
import {useDispatch, useSelector} from "react-redux";
const Navbar = () =>{
    const navlist = useSelector(state => state.navbar.navList);
    const dispatch = useDispatch()
    const [navList,setNavList] = useState([])
    useEffect(() => {
       dispatch(getNavbar())
    }, []);
    useEffect(() => {
        setNavList(navlist)
        console.log(navList)
    }, [navlist]);

    const route = useRouter()
    return(
        <>
            <div className={"navbar-body"}>
                <div className={"navbar-all"}>
                    <nav>
                        <ul className={"main-nav"}>
                            {navList.map((e,i)=>{
                                return(
                                    <li key={i} className={`main-list ${e.categories.length > 0 ? "main-list-with-hover":""}`}  >
                                        <Link  href={e.item_name.toLowerCase()}>
                                            <a className={`hovered-top-link ${route.pathname === e.item_name.toLowerCase() ? "active-navbar":""}`} href={e.item_name.toLowerCase()} style={route.query.id === e.item_name.toLowerCase() ? {webkitTextStroke:"1px solid black"}: null}>{e.item_name}</a>
                                        </Link>
                                        <div className={"relative-nav"}>
                                            <div className={"absolute-white"}></div>
                                        </div>
                                        {e.categories.length > 0 ?
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