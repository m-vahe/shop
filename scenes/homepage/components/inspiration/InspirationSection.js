import InspirationSection from "../../../../shareable/Inspiration";

const Inspiration = ({ inspiration }) => {

    const image = "/inspiration.png"
    return(
        <>
            <InspirationSection inspiration={inspiration} image={image} />
        </>
    )
}

export default Inspiration