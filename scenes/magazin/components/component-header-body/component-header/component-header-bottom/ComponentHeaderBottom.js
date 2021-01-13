import Image from "next/image";
const ComponentHeaderBottom = () =>{
    return(
        <div className={"component__header__bottom__body"}>
            <div className={"component__header__bottom__body__white"}>
                <div className={"component__header__bottom__body__white__image"}>
                    <Image src={"/magazin/magazin2.png"} layout={"responsive"} width={1300} height={630}/>
                </div>
                <div className={"component__header__bottom__body__white__text"}>
                    <span className={"component__header__bottom__body__white__text--date"}>07.11. 2020</span>
                    <p className={"component__header__bottom__body__white__text--coverstory"}>Coverstory </p>
                    <h2 className={"component__header__bottom__body__white__text--title"}>
                        Düfte für
                        Morgen
                    </h2>
                    <span className={"component__header__bottom__body__white__text--txt"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At debitis dolores error impedit in 
                        maxime necessitatibus, nesciunt numquam odit rerum ut?
                    </span>
                    <a href="#" className={"component__header__bottom__body__white__text--link"}>Lessen & Shoppen</a>
                </div>
            </div>
        </div>
    )
}

export default ComponentHeaderBottom