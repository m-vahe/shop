const MagazinProducts = ({elem}) =>{
    console.log(elem)
    return(
        <div className={"magazin__single__item__body"}>
            <div className={"magazin__single__item__body__image"}>
                <img src={elem.image} alt="item"/>
            </div>
            <div className={"magazin__single__item__body__text"}>
                <div className={"magazin__single__item__body__text--nohover"}>
                    <h3>{elem.nohovertext1}</h3>
                    <p>{elem.nohovertext2}</p>
                </div>
            </div>
        </div>
    )
}

export default MagazinProducts