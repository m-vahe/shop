import {getHomePageSctOne} from "../../../../services/actions/homepage__stable";
import { useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Link from "next/link";
const FirstIntro = () =>{
    const dispatch = useDispatch()
    const HPFS = useSelector(state => state.navbar.homePageSctOne);

    useEffect(() => {
        dispatch(getHomePageSctOne())
        console.log("akhbdesagh")
    }, []);

    return(
        <>
            <div className={"first-intro "}>
                <div className={"first-intro-body "}>
                    <div className={"first-intro-bod-left"}>
                        <div>
                            <p className={"intro-small-txt"}>{HPFS[0]?.header}</p>
                            <h2 className={"intro-big-txt"}>{HPFS[0]?.title}</h2>
                        </div>
                        <Link href={`${HPFS[0]?.url}`}><button>{HPFS[0]?.button_text}</button></Link>
                    </div>
                    <div className={"first-intro-bod-right "} >
                        <img src={`${HPFS[0]?.images.url}`} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FirstIntro