import {useEffect, useState} from "react"

const BrandPortrait = () => {
    const [imgBottomString, setImgBottomString] = useState(
        "Hoyer wusste: Schönheit und Schlaf hängen fest zusammen. Das Thema ließ sie nicht mehr los. Eine umfassende Recherche und Gespräche mit anerkannten Schlafforschern aus New York, darunter auch die renommierte Schlafdoktorin Dr. Rebecca Robbins sowie Dermatologen und weiteren Aromatherapeuten ließen die BYNACHT-Gründerin immer tiefer in die Materie einsteigen. „Unsere Nächte entscheiden über unsere Tage“, meint die Gründerin der Marke und denkt dabei sowohl an die Leistungsfähigkeit als auch an die Erscheinung. In Zusammenarbeit mit einem Team aus internationalen Experten erschuf Jessica Hoyer schlussendlich ihre Marke BYNACHT mit den regenerierenden Nachtpflegewundern der Aromatherapie. \n" +
        "\n" +
        "Mit BYNACHT bleibt der Luxus von gutem Schlaf nicht nur ein Traum.\n"
    )

    const [leftInnerText,setLeftInnerText] = useState(
        "Das Wort Schönheitsschlaf kommt nicht von ungefähr. Das hat auch BYNACHT-Gründerin Jessica Hoyer festgestellt und die Schönheitspflege für die Nacht zu ihrem Fokus gemacht.\n" +
        "\n" +
        "Lange Arbeitstage und viel zu kurze Nächte bestimmten ihre Zeit als Leiterin ihrer eigenen Werbeagentur. Schlaf war nur noch ein viel zu seltener Luxus, ein unerreichbarer Traum. Der Blick in den Spiegel verriet ihr, dass dieser Tag-/Nachtrhythmus sich auf Dauer nicht gut auf ihre Erscheinung und Gesundheit auswirken würde.\n" +
        "\n" +
        "Ihre Mutter absolvierte zu dieser Zeit eine Ausbildung zur Aromatherapeutin und stellte ihrer übernächtigten Tochter ein Schlafbalsam zusammen. Die Formulierung allein aus ätherischen Ölen brachte Jessica den langersehnten tiefen Schlaf zurück und ließ sie ihre bisherigen Werte überdenken.\n"
    )

    function imageBottomText() {
        return {
            __html: imgBottomString
        };
    }
    function leftInnerTextFunction() {
        return {
            __html: leftInnerText
        };
    }

    useEffect(() => {
        setImgBottomString(imgBottomString.replace(/\n/g, "<br />"))
        setLeftInnerText(leftInnerText.replace(/\n/g, "<br />"))
    }, [])
    return (
        <div className={"brand__portrait"}>
            <div className={"brand__portrait__text"}>
                <h3>
                    Markenportrait
                </h3>
                <p className={"brand__portrait__text__header"}>
                    Schlaflose Nächte ade! BYNACHT erfüllt den Traum
                    von schönem Schlaf
                </p>
                <p className={"brand__portrait__text__desc"}>
                    Von schlaflosen Nächten zu erholsamem Schlaf. Erfahren Sie hier alles über die Entstehungsgeschichte
                    der führenden Marke für Nachtpflege BYNACHT.
                </p>
                <p dangerouslySetInnerHTML={leftInnerTextFunction()} className={"brand__portrait__text__txt"}></p>
                <p className={"brand__portrait__text__quote"}>
                    „Ich wollte eine Hautpflege, deren Resultate man am nächsten Morgen nicht nur sieht, sondern auch fühlt.“
                    – Jessica Hoyer
                </p>
            </div>
            <div className={"brand__portrait__img"}>
                <img src="/brandsHeader.png" alt="/brandsHeader.png"/>
                <div className={"brand__portrait__img__text"}>
                    <p dangerouslySetInnerHTML={imageBottomText()}></p>
                </div>
            </div>
        </div>
    )
}

export default BrandPortrait