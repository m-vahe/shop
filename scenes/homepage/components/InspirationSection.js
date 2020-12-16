import Image from "next/image";
import InspirationSection from "../../../shareable/Inspiration";
const Inspiration = () =>{
    const image = "/inspiration.png"
    return(
        <>
            <InspirationSection  image={image}/>
        </>
    )
}

export default Inspiration