const MagazinAddSection = () =>{
    return(
        <div className={"magazin__add__section__container"}>
            <div className={"magazin__add__section__container__item item1"}>
                <div className={"magazin__add__section__container__item--img"} style={{backgroundImage:"url(/magazin/addsection/image1.png)"}}></div>
                <div className={"magazin__add__section__container__item--text"}>
                    <p>Interieur</p>
                    <h3>
                        Herb und maskulin in den winter
                    </h3>
                    <span>07.11. 2020</span>
                </div>
            </div>
            <div className={"magazin__add__section__container__item item2"}>
                <div className={"magazin__add__section__container__item--img"} style={{backgroundImage:"url(/magazin/addsection/image2.png)"}}></div>
                <div className={"magazin__add__section__container__item--text"}>
                    <p>Leben</p>
                    <h3>
                        Entdecken sie die färben der saison
                    </h3>
                    <span>07.11. 2020</span>
                </div>
            </div>
            <div className={"magazin__add__section__container__item item3"}>
                <div className={"magazin__add__section__container__item--img"} style={{backgroundImage:"url(/magazin/addsection/image3.png)"}}></div>
                <div className={"magazin__add__section__container__item--text"}>
                    <p>
                        Pflege
                    </p>
                    <h3>
                        Tipps für die perfekte Rasur
                    </h3>
                    <span>07.11. 2020</span>
                </div>
            </div>
        </div>
    )
}

export default MagazinAddSection