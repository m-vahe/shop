import ShareableSelect from "../../../../shareable/select/ShareableSelect";

const LexikonFilter = () =>{
    return(
        <div className={"lexikon__filter__container"}>
            <div className={"lexikon__filter__container__search"}>
                <input type="text" placeholder={"SUCHE"}/>
            </div>
            <ShareableSelect defaultValue='A-Z'/>
        </div>
    )
}

export default LexikonFilter