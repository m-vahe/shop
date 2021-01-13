import Image from "next/image";
import {useState,useEffect} from "react"
const MagazinSecondSection = () =>{
    const size = useWindowSize();
    const [height,setHeight] = useState(800)
    function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
        });

        useEffect(() => {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }, []);

        return windowSize;
    }
    useEffect(()=>{
        if(size.width <= 1024){
            setHeight(600)
        }
    },[size])
    return(
        <div className={"magazin__second__section__container"}>
            <Image src={"/magazin/magaz2sect.png"} width={950} height={height} layout={"responsive"}/>
            <div className={"magazin__second__section__container__righttxt"}>
                <p className={"magazin__second__section__container__righttxt--date"}>07.11. 2020</p>
                <p className={"magazin__second__section__container__righttxt--coverstory"}>Coverstory </p>
                <h3 className={"magazin__second__section__container__righttxt--title"}>Düfte für</h3>
                <span className={"magazin__second__section__container__righttxt--txt"}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat.  sed diam voluptua. At vero eos et accusam et justo duo
                    dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                    dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </span>
                <a href="#" className={"magazin__second__section__container__righttxt--link"}>Lesen & shoppen</a>
            </div>
        </div>
    )
}

export default MagazinSecondSection