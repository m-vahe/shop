import AdressenTitle from "../../../../shareable/konto/AdressenTitle";
import AdressenElem from "../../../../shareable/konto/AdressenElem";

const Adressen = () =>{
    const titleOne = "Rechnungsadressen"
    const titleTwo = "Lieferadressen"
    const adressdataone = [
        {title:"Max Muster",titlesec:"Muster Firma AG",text1:"Musterstrasse 123",text2:"Musterstadt 12345",text3:"Musterland",link1:"Andern",link2:"Loschen"},
        {title:"Max Muster",titlesec:"Muster Firma AG",text1:"Musterstrasse 123",text2:"Musterstadt 12345",text3:"Musterland",link1:"Andern",link2:"Loschen"},
    ]
    const adressdatatwo = [
        {title:"Max Muster",titlesec:"Muster Firma AG",text1:"Musterstrasse 123",text2:"Musterstadt 12345",text3:"Musterland",link1:"Andern",link2:"Loschen"},
        {title:"Max Muster",titlesec:"Muster Firma AG",text1:"Musterstrasse 123",text2:"Musterstadt 12345",text3:"Musterland",link1:"Andern",link2:"Loschen"},
        {title:"Max Muster",titlesec:"Muster Firma AG",text1:"Musterstrasse 123",text2:"Musterstadt 12345",text3:"Musterland",link1:"Andern",link2:"Loschen"},
    ]

    return(
        <div className={"konto__adressen__container"}>
            <div className={"konto__adressen__container__top"}>
                <AdressenTitle title={titleOne} />
                <div className={"konto__adressen__container__top__container"}>
                    {adressdataone.map((e,i)=>{
                        return(
                            <div key={i}>
                                <AdressenElem e={e}/>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className={"konto__adressen__container__bottom"}>
                <AdressenTitle title={titleTwo} />
                <div className={"konto__adressen__container__top__containerbot"}>
                    {adressdatatwo.map((e,i)=>{
                        return(
                            <div key={i}>
                                <AdressenElem e={e}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Adressen