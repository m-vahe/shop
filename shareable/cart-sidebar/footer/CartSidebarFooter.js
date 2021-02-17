import Link from "next/link";
const CartSidebarFooter = () =>{
    return(
        <div className={"cart__sidebar__footer"}>
           <div className={"cart__sidebar__footer__top"}>
                <div className={"cart__sidebar__footer__top__first"}>
                    <p>Versand:</p>
                    <p>€ 0,00</p>
                </div>
                <div className={"cart__sidebar__footer__top__second"}>
                    <p>
                        Gesamtpreis
                        <br/>
                        <span>inkl. MwST.</span>
                    </p>
                    <p>€ 56,00</p>
                </div>
           </div>
           <div className={"cart__sidebar__footer__bottom"}>
               <Link href={"/checkout"}><p className={"cart__sidebar__footer__bottom__link"}>CHECKOUT</p></Link>
           </div>
        </div>
    )
}

export default CartSidebarFooter