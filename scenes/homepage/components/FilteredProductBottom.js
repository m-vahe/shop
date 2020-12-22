import Image from "next/image";
import Neuigkeiten from "../../../shareable/Neuigkeiten";
const FilteredProductBottom = () =>{
    const btntext = "mehr neuigkeiten"
    return(
        <>
            <Neuigkeiten btntext={btntext}/>
        </>
    )
}

export default FilteredProductBottom