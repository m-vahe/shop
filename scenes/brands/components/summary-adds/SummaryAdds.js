import Link from "next/link";

const SummaryAdds = () => {
    return (
        <div className={"summary__adds"}>
            <div className={"summary__adds__img"}>
                <img src="/brandsHeader.png" alt="/brandsHeader.png"/>
            </div>
            <div className={"summary__adds__text"}>
                <h3>Zusammenfassung</h3>
                <p className={"summary__adds__text__smheader"}>
                    Die exklusive Nachtpflege für den schönsten Luxus der Welt:
                    Erholten Schlaf
                </p>
                <p className={"summary__adds__text__smhbot"}>
                    Ein deutsches aufstrebendes Unternehmen hat es sich zum Ziel gesetzt, den Schönheitsschlaf und die
                    damit verbundene Skincare-Routine zu perfektionieren: BYNACHT.
                </p>
                <span>
                    Ein deutsches aufstrebendes Unternehmen hat es sich zum Ziel gesetzt, den Schönheitsschlaf
                    und die damit verbundene Skincare-Routine zu perfektionieren: BYNACHT. Die Marke aus Hamburg rund
                    um die sympathische Gründerin Jessica Hoyer entwickelt Produkte, die Einschlafprobleme verschwinden
                    lassen und speziell auf die nächtliche Hautphysiologie ausgerichtet sind. Denn während der Nacht
                    läuft unser Organismus auf Hochtouren. Im Zuge einer umfassenden Regeneration werden neue Zellen
                    sowie körpereigenes Kollagen gebildet. Nachts verläuft der Erneuerungsprozess etwa achtmal so
                    schnell wie am Tag. Daher ist nachts die beste Zeit für die Pflege mit hochwirksamen
                    Inhaltsstoffen – eine qualitativ hochwertige Nachtpflege, die ideal auf die eigenen Hautbedürfnisse
                    abgestimmt ist. Basierend auf den neusten Erkenntnissen der Schlafforschung bietet BYNACHT ein
                    großes Sortiment von intensiv pflegenden Cremes, luxuriösen Ölen und effizienten Seren.
                    Alle Produkte haben gemeinsam, dass sie beruhigend wirken und Ihren Schönheitsschlaf optimal fördern.

                </span>
                <Link href={"/"}>
                    <a href="#">
                        Mehr lesen
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default SummaryAdds