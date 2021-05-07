import AdressenTitle from "../../../../shareable/konto/AdressenTitle";
import AdressenElem from "../../../../shareable/konto/AdressenElem";
import AddressenForm from "./form/AddressenForm";
import {useState} from "react";
import {useRouter} from "next/router";

const Adressen = () => {
    const titleOne = "Rechnungsadressen"
    const titleTwo = "Lieferadressen"
    const adressdataone = [
        {
            title: "Max Muster",
            titlesec: "Muster Firma AG",
            text1: "Musterstrasse 123",
            text2: "Musterstadt 12345",
            text3: "Musterland",
            link1: "Andern",
            link2: "Loschen"
        },
        {
            title: "Max Muster",
            titlesec: "Muster Firma AG",
            text1: "Musterstrasse 123",
            text2: "Musterstadt 12345",
            text3: "Musterland",
            link1: "Andern",
            link2: "Loschen"
        },
    ]
    const adressdatatwo = [
        {
            title: "Max Muster",
            titlesec: "Muster Firma AG",
            text1: "Musterstrasse 123",
            text2: "Musterstadt 12345",
            text3: "Musterland",
            link1: "Andern",
            link2: "Loschen"
        },
        {
            title: "Max Muster",
            titlesec: "Muster Firma AG",
            text1: "Musterstrasse 123",
            text2: "Musterstadt 12345",
            text3: "Musterland",
            link1: "Andern",
            link2: "Loschen"
        },
        {
            title: "Max Muster",
            titlesec: "Muster Firma AG",
            text1: "Musterstrasse 123",
            text2: "Musterstadt 12345",
            text3: "Musterland",
            link1: "Andern",
            link2: "Loschen"
        },
    ]

    const [showLiferadressen, setShowLiferadressen] = useState(false)
    const [showRechungadressen, setShowRechungadressen] = useState(false)
    const [showForm, setShowForm] = useState(false)

    const handleShow = () => {
        setShowForm(true)
    }

    const handleClose = () => {
        setShowForm(false)
    }
    const router = useRouter()
    return (
        <div className={"konto__adressen__container"}>
            <p className={"page_name"}>Adressen</p>
            {!showForm ?
                <>
                    <div className={"konto__adressen__container__top"}>
                        <AdressenTitle title={titleOne}/>
                        <div className={"konto__adressen__container__top__add"}>
                            <div className={"konto__adressen__container__top__add__elem"} onClick={handleShow}>
                                <p>+</p>
                            </div>
                            <p className={"konto__adressen__container__top__add__link"}
                               onClick={handleShow}>hinzufügen</p>
                        </div>
                        {/*<div className={"konto__adressen__container__top__container"}>*/}
                        {/*    {adressdataone.map((e,i)=>{*/}
                        {/*        return(*/}
                        {/*            <div key={i}>*/}
                        {/*                <AdressenElem e={e}/>*/}
                        {/*            </div>*/}
                        {/*        )*/}
                        {/*    })}*/}
                        {/*</div>*/}
                    </div>

                    <div className={"konto__adressen__container__bottom"}>
                        <AdressenTitle title={titleTwo}/>
                        <div className={"konto__adressen__container__top__add"}>
                            <div className={"konto__adressen__container__top__add__elem"} onClick={handleShow}>
                                <p>+</p>
                            </div>
                            <p className={"konto__adressen__container__top__add__link"}
                               onClick={handleShow}>hinzufügen</p>
                        </div>
                        {/*<div className={"konto__adressen__container__top__containerbot"}>*/}
                        {/*    {adressdatatwo.map((e,i)=>{*/}
                        {/*        return(*/}
                        {/*            <div key={i}>*/}
                        {/*                <AdressenElem e={e}/>*/}
                        {/*            </div>*/}
                        {/*        )*/}
                        {/*    })}*/}
                        {/*</div>*/}
                    </div>
                    <div className={"zuruck_back_body"}>
                        <button className={"zuruck_back"} onClick={()=>router.push("/konto/main")}>zurück zur übersicht</button>
                    </div>
                </>
                : <AddressenForm back={handleClose}/>
            }
        </div>
    )
}

export default Adressen