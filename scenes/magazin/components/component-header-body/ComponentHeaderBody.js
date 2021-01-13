import MagazinComponentHeader from "./component-header/ComponentHeader";
import ComponentHeaderBottom from "./component-header/component-header-bottom/ComponentHeaderBottom";

const ComponentHeaderBody = () =>{
    return(
        <div className={"component__header__body__all"} style={{backgroundImage:"url(/magazin/magazinbackground.png)"}}>
            <MagazinComponentHeader/>
            <ComponentHeaderBottom/>
        </div>
    )
}

export default ComponentHeaderBody