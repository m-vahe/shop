const CartSidebarProduct = () =>{
    return(
        <div className={"cart__sidebar__product__body"}>
            <div className={"cart__sidebar__product__body__image"}>
                <img src="/item.png" alt=""/>
            </div>
            <div className={"cart__sidebar__product__body__text"}>
                <span className={"cart__sidebar__product__body__text--name"}>Ylumi</span>
                <span className={"cart__sidebar__product__body__text--type"}>Energy Kapseln</span>
                <span className={"cart__sidebar__product__body__text--quantity"}>1 Packung</span>
                <span className={"cart__sidebar__product__body__text--price"}>28,00 €</span>
                <span className={"cart__sidebar__product__body__text--delete"}>löschen</span>
            </div>
        </div>
    )
}

export default CartSidebarProduct