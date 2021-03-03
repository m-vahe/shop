import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import {useState} from 'react'
const CartSidebarProduct = () =>{
    const formatter = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2
    });
    const [value,setValue] = useState(1)
    const maxLimit = 10
    const onIncHandler = () =>{
        if(value < maxLimit){
            setValue(value + 1)
        }
        console.log(value)
    }
    const onDecHandler = () =>{
        if(value > 1){
            setValue(value - 1)
        }
        console.log(value)
    }
    return(
        <div className={"cart__sidebar__product__body"}>
            <div className={"cart__sidebar__product__body__image"}>
                <img src="/item.png" alt=""/>
            </div>
            <div className={"cart__sidebar__product__body__text"}>
                <span className={"cart__sidebar__product__body__text--name"}>Ylumi</span>
                <span className={"cart__sidebar__product__body__text--type"}>Energy Kapseln</span>
                <span className={"cart__sidebar__product__body__text--quantity"}>{value} Packung</span>
                <span className={"cart__sidebar__product__body__text--price"}>{formatter.format(28.00 * value || 0)}</span>
                <div className={"cart__sidebar__product__body__text--quantityinp"}>
                    <button className={"btnplus"} onClick={onIncHandler}><FontAwesomeIcon icon={faPlus}/></button>
                    <input type="number"  min={"1"} max={"10"} value={value < 10 ? `0${value}` : value }/>
                    <button className={"btnminus"} onClick={onDecHandler}><FontAwesomeIcon icon={faMinus}/></button>
                </div>
                <span className={"cart__sidebar__product__body__text--delete"}>löschen</span>
            </div>
        </div>
    )
}

export default CartSidebarProduct