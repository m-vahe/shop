import Social from "../../../../../shareable/social/Social";

const ModalWhishlist = ({show,setShow}) =>{
    return(
        <div style={show ? {display:"block"}:{display:"none"}} className={"whishlist__modal__container"}>
            <div className={"whishlist__modal__container__body"}>
                <h2>Teile deine wishlist</h2>
                <p>Kopiere einfach den link und sende ihn an deine freunde.</p>
                <div className={"whishlist__modal__container__body__copy"}>
                    <input type="text" defaultValue={"https://dpab.de/user123456789/wishlist/65328986"}/>
                    <button>Link kopieren</button>
                </div>
                <Social/>
                <p className={"close"} onClick={()=>setShow(false)}></p>
            </div>
        </div>
    )
}

export default ModalWhishlist