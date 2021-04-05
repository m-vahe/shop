const Points = () => {
    const pointsData = [
        {
            number: "1.",
            text: "Für den optimalen Synergie-Effekt und eine gesteigerte Wirksamkeit empfiehlt Jessica Hoyer die " +
                "kombinierte Anwendung der BYNACHT-Produkte. Sie selbst verwendet alle Produkte ihrer Pflegelinie" +
                " und kombiniert sie untereinander, um das Layering-Prinzip, auf dem alle BYNACHT-Produkte basieren, " +
                "voll auszukosten. So werden die einzelnen Wirkkomplexe verstärkt." +
                "Das Iconic Reborn Radiant Serum vollführt zusammen mit der Nocturnal Signature Anti-Age Cream" +
                " beispielsweise wahre Wunder in puncto Anti-Age-Pflege. Die beiden Powerpakete sind schon allein eine" +
                " exzellente Verjüngungskur … Dann stellen Sie sich erst mal die doppelte Wirkung vor!"

        },
        {
            number: "2.",
            text: "Die Schlafbalms sind wahre „Sleep Perfectors“. Die praktischen Einschlafhilfen sind für alle" +
                " Hauttypen verträglich und lassen Sie mit balsamischen Texturen und entspannenden Düften " +
                "sanft in den Schlaf finden. Aufgetragen auf Pulspunkte sowie Brust, Nacken und Fußsohlen entfalten " +
                "die Entspannungshelfer ihre volle Wirkung. Die BYNACHT-Gründerin trägt den Schlafbalm jeden Abend auf die Fußsohlen auf. Laut ihr nimmt der " +
                "Körper den Balsam dort am besten auf und bereitet einen angenehmen Schlaf. Wussten Sie schon? Warme" +
                " Füße sind der Insider-Tipp zum Einschlafen! Die Sleeping Balms regen die Durchblutung an, der Körper" +
                " beginnt sich zu entspannen und ist ideal auf einen guten Schlaf vorbereitet."

        },
        {
            number: "3.",
            text: "Und zuletzt ein etwas allgemeinerer Tipp, der aber nicht weniger wichtig ist. Neben pflegenden" +
                " Produkten betont Jessica Hoyer, dass es mindestens genauso essenziell ist, sich gute Routinen vor" +
                " dem Zubettgehen anzugewöhnen. Elektrische Geräte wie Handy, Tablet und Co. Sind zwar gerade im Bett" +
                " besonders beliebt, stören aber unser Einschlafen gewaltig. Die blauen Wellenlängen, die unsere " +
                "Elektrogeräte absondern, wirken quasi wie ein Koffeinshot, der alles andere als förderlich ist. Also " +
                "Tipp der BYNACHT-Gründerin: Handy beiseite und lieber zu einem guten Buch greifen. Das lässt das " +
                "lästige Gedankenkarussell erlahmen und den Körper zur Ruhe kommen. Achten Sie außerdem darauf, " +
                "mindestens sieben Stunden Schlaf zu bekommen. Ihr Körper wird es Ihnen danken."

        },
    ]
    return (
        <div className={"brands__points"}>
            {pointsData.map((e,i)=>{
                return(
                    <div className={"brands__points__item"}>
                        <h3>{e.number}</h3>
                        <span>{e.text}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Points