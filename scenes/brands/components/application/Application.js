import {useState, useEffect} from "react"

const Application = () => {
    const [leftText, setLeftText] = useState("<b>Fruchtsäurepeeling:</b>\n" +
        "Nach der abendlichen Reinigung eine kleine Menge des Produkts auf das Gesicht auftragen und dabei die Augen- und Mundpartie aussparen. Nach 10 Minuten Einwirkzeit kann das Peeling-Gel mit lauwarmem Wasser abgewaschen werden. Wundern Sie sich nicht über ein leichtes Kribbeln und/oder Rötungen, da das Anzeichen für die Wirksamkeit des Produkts sein können.\n")
    const [rightText,setRightText] = useState("Mit den Nachtpflegeprodukten von BYNACHT die Regenerationskraft des eigenen Körpers voll auskosten. Mit diesen Anwendungstipps der Gründerin machen Sie alles richtig.\n"+"\n"+
    "Wer kennt die Produkte von BYNACHT besser als die Gründerin persönlich? Niemand. Deshalb wollen wir Ihnen auch nicht ihre Tipps & Tricks zur richtigen Anwendung der regenerierenden Nachtpflegeprodukte vorenthalten.\n"+"\n"+
    "<b>Cremes/ Seren/ Öle:</b>\n" +
        "Nach der Reinigung werden die Cremes und Seren auf das Gesicht aufgetragen und sanft einmassiert.\n" +
        "\n" +
        "<b>Cleanser:</b>\n" +
        "Sanft in die angefeuchtete Haut einmassieren und mit lauwarmem Wasser abspülen. Die anschließende Verwendung des Toners von BYNACHT ist für eine umfassende Pflege empfehlenswert.")
    function LeftTextFunction() {
        return {
            __html: leftText
        };
    }
    function RightTextFunction() {
        return {
            __html: rightText
        };
    }
    useEffect(()=>{
            setLeftText(leftText.replace(/\n/g, "<br />"))
            setRightText(rightText.replace(/\n/g, "<br />"))
    },[])
    return (
        <div className={"application"}>
            <div className={"application__img"}>
                <img src="/brandsHeader.png" alt="/brandsHeader.png"/>
                <p dangerouslySetInnerHTML={LeftTextFunction()}></p>
            </div>
            <div className={"application__text"}>
                <h3>Anwendung</h3>
                <p className={"application__text__header"}>
                    So gelingt der Schönheitsschlaf mit BYNACHT:
                    Tipps & Tricks von der Gründerin höchstpersönlich
                </p>
                <p className={"application__text__text"} dangerouslySetInnerHTML={RightTextFunction()}></p>
            </div>
        </div>
    )
}

export default Application