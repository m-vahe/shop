import {useState, useEffect} from "react"

const PressReviews = () => {
    const [leftText, setLeftText] = useState(
        "Die Beauty-Welt berichtet: Das sagt die Welt über die einzigartigen Nachtpflegeprodukte von BYNACHT.\n" + "\n" +
        "Schön im Schlaf verspricht die deutsche Marke unter der Leitung von Jessica Hoyer. Doch was sagt die Beauty-Welt dazu? Wie kommt das Konzept der Pflegewunder von BYNACHT an?\n" +
        "\n" +
        "Wir haben hier ein paar Eindrücke und Meinungen für Sie zusammengetragen:\n" +
        "\n" +
        "„Wie ein regenerierender, intensiver Schönheitsschlaf zum Auftragen.“ Das sind die Worte vom Your Beauty Professional Network, der Plattform mit Beauty-Expertise zu den exklusiven Nachtpflegeprodukten von BYNACHT. Sie sind genauso begeistert vom Konzept der Gründerin Jessica Hoyer wie wir. Selbst Mutter, Gründerin einer Pflegelinie und Liebhaberin von Schönheit und Beauty, hat die BYNACHT-Entwicklerin einen mächtig vollen Tag. Doch genau dafür hat sie laut YBPN die Lösung: „Die Produkte von Bynacht sind maßgeschneiderter Luxus für den hektischen Alltag vieler moderner Frauen, in dem wenig Zeit für ausgedehnte Schönheitspflege und manchmal auch für den Schönheitsschlaf bleibt.“( https://www.ybpn.de/luxury-secrets/bynacht-hauterneuerung-im-schoenheitsschlaf/ )\n" +
        "\n" +
        "Die Bloggerin GLAM UP YOUR LIFESTYLE hat die Nocturnal Signature Anti-Aging Cream getestet und belässt es nicht nur bei der Probe: „Ich muss ein Pflegeprodukt mindestens zwei, drei Wochen testen, um zu sehen, ob es was für mich und meiner Haut tut. Diese Nachtcreme von BYNACHT hat mich bereits nach der ersten Anwendung überzeugt. Mein Töpfchen ist bald leer – es gibt definitiv ein Nachkauf!“ (https://www.glamupyourlifestyle.com/2019/04/wie-gelingt-der-perfekte-lidstrich.html )"
    )
    const [rightText,setRightText] = useState(
        "„Alleinstellungsmerkmal: Im Gegensatz zu anderen Brands spielt hier nachts die Musik.“, sagt das Schweizer Lifestyle-Portal Bellevue NZZ im Artikel „Fünf Beauty-Marken, die sich mit ihrem Konzept von anderen abheben“. (https://bellevue.nzz.ch/mode-beauty/5-beauty-labels-mit-besonderen-konzepten-wie-all-tigers-ld.1580094 ) \n" +
        "Und nicht nur in der Beauty-Welt setzt sich BYNACHT mit dem besonderen Fokus auf effektive Nachtpflege durch, sondern erobert neben dem deutschen Pflegemarkt auch die Herzen von internationalen Fans. Guter Schlaf betrifft nämlich jeden.\n" +
        "\n" +
        "Der europäische Beauty-Markt war keine Herausforderung für die beliebten Produkte von BYNACHT. Beauty Independent spricht zum Launch eines innovativen Produkts Ende 2020 mit der Gründerin, die anstrebt, ihre Produkte in Asien zu vertreiben: „Nachdem ByNacht inzwischen ins Ausland expandiert ist, und in Kürze auch auf dem asiatischen Markt Einzug halten will, steht aktuell ein innovativer Produktlaunch an: ein Serum, das auch zur Reparatur und Wundheilung nach dermatologisch-kosmetischen eingriffen eingesetzt werden kann.“ Jessica Hoyer sind in ihrem kreativen Schaffen keine Grenzen gesetzt. Wir können uns also noch auf viele weitere großartige Produkte der Marke BYNACHT freuen, die unseren Schönheitsschlaf optimieren.  \n" +
        "(https://www.beautyindependent.de/bynacht-beauty-und-schlaf/ )\n" +
        "\n"

    )
    useEffect(()=>{
        setLeftText(leftText.replace(/\n/g, "<br />"))
        setRightText(rightText.replace(/\n/g, "<br />"))
    })
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
    return (
        <div className={"press__reviews"}>
            <div className={"press__reviews__text"}>
                <h3>Pressestimmen</h3>
                <p className={"press__reviews__text--header"}>
                    BYNACHT im Scheinwerferlicht:
                    Wie schneidet die Luxus-Nachtpflege ab?
                </p>
                <p className={"press__reviews__text--txt"} dangerouslySetInnerHTML={LeftTextFunction()}></p>
            </div>
            <div className={"press__reviews__img"}>
                <img src="/brandsHeader.png" alt="/brandsHeader.png"/>
                <p dangerouslySetInnerHTML={RightTextFunction()}></p>
            </div>
        </div>
    )
}

export default PressReviews