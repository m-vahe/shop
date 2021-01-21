import Social from "../../../../../shareable/social/Social";

const ModalWhishlist = ({show}) =>{
    return(
        <div style={show ? {display:"block"}:{display:"none"}} className={"whishlist__modal__container"}>
            <div className={"whishlist__modal__container__body"}>
                <h2>Teile deine wishlist</h2>
                <p>Kopiere einfach den link und sende ihn an deine freunde.</p>
                <div>
                    <input type="text" defaultValue={"https://dpab.de/user123456789/wishlist/65328986"}/>
                    <button>Link kopieren</button>
                </div>
                <Social/>
            </div>
        </div>
    )
}

export default ModalWhishlist