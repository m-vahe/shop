const AdressenElem = ({e}) =>{
    return(
            <div className={"konto__adressen__container__top__container__elem"}>
                <div className={"konto__adressen__container__top__container__elem__item"}>
                    <h5 className={"konto__adressen__container__top__container__elem__item--title"}>{e.title}</h5>
                    <p className={"konto__adressen__container__top__container__elem__item--titlebot"}>{e.titlesec}</p>
                    <p>{e.text1}</p>
                    <p>{e.text2}</p>
                    <p>{e.text3}</p>
                    <a href="#">{e.link1}</a>
                    <a href="#">{e.link2}</a>
                </div>
            </div>
    )
}

export default AdressenElem