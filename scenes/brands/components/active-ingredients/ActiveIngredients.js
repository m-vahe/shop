import {useState, useEffect} from "react"

const ActiveIngredients = () => {
    const [leftText,setLeftText] = useState("<b>Absolut clean – frei von Parabenen, Silikonen, PEGs und Mineralöl</b>\n" +
        "Die Gründerin Jessica Hoyer lehnte bewusst die Verwendung von künstlichen Zusätzen wie Silikonen oder Mineralölen ab. Zwar sind sie allgemeinverträglich und scheinen der Haut im ersten Moment einen tollen Nutzen zu erweisen, doch die langfristige Wirkung ist Hoyer wichtiger. Mit synthetischen Zusätzen sei der Haut nicht geholfen. Die natürlich ausgewählten Inhaltsstoffe von höchster Qualität beruhigen mit der Kraft der Natur und unterstützen hauteigene Regenerationsprozesse. Für einen erholenden Schönheitsschlaf und ein strahlendes Erwachen.\n" +
        "\n" +
        "<b>Die Top Inhaltsstoffe in den BYNACHT-Produkten</b>>\n" +
        "Was sind die Wirkstoffe, die in der Nacht Ihre Haut mit pflegenden Inhaltsstoffen verwöhnen und sich am nächsten Tag wie ein neuer Mensch fühlen lassen?\n" +
        "\n" +
        "Wir haben einzelne für Sie unter die Lupe genommen:")
    const [firstText, setFirstText] = useState("Was ist das Pflegegeheimnis hinter den innovativen Nachtpflegeprodukten von BYNACHT? Hier erfahren\n" +
        "                    Sie mehr über die einzigartigen Formulierungen und Inhaltsstoffe./n"+"/n"+"Es hört sich an, wie der einfachste und komfortabelste Weg zur Schönheit: tief schlafen und verjüngt wieder wach werden. Ganz so einfach ist es allerdings nicht. Fakt ist aber, dass der Körper während der Nacht einen umfassenden Regenerationsprozess durchläuft und die Aufnahmefähigkeit für Wirkstoffe deutlich höher ist als am Tag.\n" +
        "\n" +
        "Die richtige Zusammensetzung aus effektiven und zielführenden Inhaltsstoffen ist bei einer Nachtpflege also noch entscheidender.\n" +
        "\n" +
        "Die Experten hinter den Pflegeprodukten von BYNACHT haben deshalb jeden einzelnen Inhaltsstoff auf seine Wirksamkeit geprüft, um die bestmögliche Unterstützung der hauteigenen Regenerationsprozesse in der Nacht zu gewährleisten.\n"+"\n" +
        "<b>Hohe Wirkstoffkonzentrationen & organische Bioprodukte</b>\n" +
        "In der Aromatherapie kommt es auf die richtige Kombination der Inhaltsstoffe an. Wenige effektive Inhaltsstoffe, die richtige Dosierung für eine große Wirkung.\n" +
        "\n" +
        "Beruhigende Klassiker wie Vanille, Lavendel, Hopfen, aber auch Bergamotte und Ylang Ylang machen die Nachtpflegeprodukte von BYNACHT zu einer besonders reinen Formulierung. Die Qualität der ätherischen Öle darf dabei nicht vernachlässigt werden. BYNACHT achtet bei den Inhaltsstoffen ihrer Pflegeprodukte stets darauf, 100 % reine ätherische Öle zu nutzen, die zwar kostenintensiver sind, aber mit überzeugender Wirkung brillieren."
    )

    function firstTextFunction() {
        return {
            __html: firstText
        };
    }
    function leftTextFunction() {
        return{
            __html: leftText
        }
    }

    useEffect(() => {
        setFirstText(firstText.replace(/\n/g, "<br />"))
        setLeftText(leftText.replace(/\n/g, "<br />"))
    }, [])
    return (
        <div className={"active__ingredients"}>
            <div className={"active__ingredients__img"}>
                <img src="/brandsHeader.png" alt="/brandsHeader.png"/>
                <div className={"active__ingredients__img__text"}>
                        <p dangerouslySetInnerHTML={leftTextFunction()}></p>
                </div>
            </div>
            <div className={"active__ingredients__text"}>
                <h3>
                    Wirkstoffe
                </h3>
                <p className={"active__ingredients__text__header"}>
                    Die Formel für den Schönheitsschlaf –
                    ätherische Öle & natürliche Kräuter mit Sofort-Effekt
                </p>
                <p dangerouslySetInnerHTML={firstTextFunction()} className={"active__ingredients__text__txt"}></p>
            </div>
        </div>
    )
}

export default ActiveIngredients