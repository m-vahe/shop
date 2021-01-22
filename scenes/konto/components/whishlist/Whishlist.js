import SingleProduct from "../../../../shareable/Products/SingleProduct";
import {useState} from "react";
import ModalWhishlist from "./components/Modal";

const WhishList = () =>{
    const [data,setData] = useState([
        {
            id: 0,
            productHead: 'Clean product',
            productHead2: 'Limited edition',
            productName: 'Ylumi',
            productTextFoot: 'Energy Kapseln',
            productTextFoot2: 'Kapseln',
            price: '28,00 €',
            new: true,
            approoved: true,
            imageHead: '/item.png',
            heart: false,
        },
        {
            id: 1,
            productHead: 'Clean product',
            productHead2: 'Limited edition',
            productName: 'Ylumi',
            productTextFoot: 'Energy Kapseln',
            productTextFoot2: 'Kapseln',
            price: '28,00 €',
            new: true,
            approoved: true,
            imageHead: '/item.png',
            heart: false,
        },
        {
            id: 2,
            productHead: 'Clean product',
            productHead2: 'Limited edition',
            productName: 'Ylumi',
            productTextFoot: 'Energy Kapseln',
            productTextFoot2: 'Kapseln',
            price: '28,00 €',
            new: true,
            approoved: true,
            imageHead: '/item.png',
            heart: false,
        },
        {
            id: 3,
            productHead: 'Clean product',
            productHead2: 'Limited edition',
            productName: 'Ylumi',
            productTextFoot: 'Energy Kapseln',
            productTextFoot2: 'Kapseln',
            price: '28,00 €',
            new: true,
            approoved: true,
            imageHead: '/item.png',
            heart: false,
        },
        {
            id: 4,
            productHead: 'Clean product',
            productHead2: 'Limited edition',
            productName: 'Ylumi',
            productTextFoot: 'Energy Kapseln',
            productTextFoot2: 'Kapseln',
            price: '28,00 €',
            new: true,
            approoved: true,
            imageHead: '/item.png',
            heart: false,
        },
        {
            id: 5,
            productHead: 'Clean product',
            productHead2: 'Limited edition',
            productName: 'Ylumi',
            productTextFoot: 'Energy Kapseln',
            productTextFoot2: 'Kapseln',
            price: '28,00 €',
            new: true,
            approoved: true,
            imageHead: '/item.png',
            heart: false,
        },

    ])
    const [show,setShow] = useState(false)
    const showModal = () =>{
        setShow(!show)
    }
    return(
        <div className={"whishlist__container"}>
            <div className={"whishlist__container__text"}>
                <h2>Deine wishlist</h2>
                <p className={"whishlist__container__text--el2"}>Deine Lieblingsprodukte alle auf einen blick</p>
                <p className={"whishlist__container__text--el3"}>
                    Klicke einfach auf das Herz neben den Produkten um
                    sie auf deine Liste hinzuzufügen. Viel Spaß beim Sammeln
                </p>
                <button onClick={showModal}>
                    Wishlist teilen
                </button>
                <ModalWhishlist show={show} setShow={setShow}/>
            </div>
            <div className={"whishlist__container__products"}>
                {data.map((e, i) => {
                    return (
                        <div key={i}>
                            <SingleProduct elem={e} products={data} setData={setData} />
                        </div>
                    );
                })}
            </div>
        </div>

    )
}

export default WhishList