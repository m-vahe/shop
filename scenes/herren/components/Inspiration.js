import InspirationSection from "../../../shareable/Inspiration";

const Inspiration = ({ inspiration }) =>{
    const background = "black"
    const color = "white"
    const image = "/inspirharren.png"
    const padding = "10px"
    return(
        <InspirationSection inspiration={inspiration} background={background} color={color} image={image} padding={padding}/>
    )
}
export default Inspiration