import Image from "next/image";
import InspirationSection from "../../repeatable/Inspiration";
const Inspiration = () =>{
    const image = "/inspiration.png"
    return(
        <>
            <InspirationSection  image={image}/>
        </>
    )
}

export default Inspiration