import {useDispatch} from "react-redux";
import {deleteAddress} from "../../services/actions/address";

const AdressenElem = ({e,appointment}) =>{
    const dispatch = useDispatch()
    const onDeleteHandler = (e) =>{
        dispatch(deleteAddress(e.id,appointment))
    }
    return(
            <div className={"konto__adressen__container__top__container__elem"}>
                <div className={"konto__adressen__container__top__container__elem__item"}>
                    <h5 className={"konto__adressen__container__top__container__elem__item--title"}>{e.first_name} {e.surname}</h5>
                    <p className={"konto__adressen__container__top__container__elem__item--titlebot"}>{e.address_line}</p>
                    <p>{e.road}</p>
                    <p>{e.place}</p>
                    <p>{e.country}</p>
                    <p className={"konto__adressen__container__top__container__elem__item--edit"} >andern</p>
                    <p className={"konto__adressen__container__top__container__elem__item--delete"} onClick={()=>onDeleteHandler(e)}>loshchen</p>
                </div>
            </div>
    )
}

export default AdressenElem