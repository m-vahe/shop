import Link from "next/link";

const CareProducts = () => {
    const careData = [
        {
            position: "left",
            img: "/careproducts.png",
            text: "Aloe Vera Gel ist aufgrund seiner beruhigenden und wohltuenden Wirkung insbesondere bei trockener" +
                " und unreiner Haut sehr beliebt. Die in den Wüsten der arabischen Halbinsel und dem Sudan beheimatete" +
                " Heilpflanze wird schon seit Jahrtausenden wegen ihrer pflegenden Eigenschaften gerne in" +
                " Kosmetikprodukten eingesetzt. Reichhaltige Vitamine, Proteine, Enzyme und Mineralien tragen zu den " +
                "kühlenden und extrem feuchtigkeitsspendenden Fähigkeiten bei. Bei allen Hauttypen verträglich, kann " +
                "das Gel der Heilpflanze gegen Juckreiz, Sonnenbrand, Entzündungen und Trockenheit eingesetzt werden. " +
                "Und ein Benefit on top: Aloe Vera regt die Kollagenproduktion an und führt zu straffer, praller Haut.",
            link: "/contact",
            linkText: "Aloe Bardensis Leaf Juice = Aloe Vera Gel"
        },
        {
            position: "right",
            img: "/careproducts.png",
            text: "Aloe Vera Gel ist aufgrund seiner beruhigenden und wohltuenden Wirkung insbesondere bei trockener" +
                " und unreiner Haut sehr beliebt. Die in den Wüsten der arabischen Halbinsel und dem Sudan beheimatete" +
                " Heilpflanze wird schon seit Jahrtausenden wegen ihrer pflegenden Eigenschaften gerne in" +
                " Kosmetikprodukten eingesetzt. Reichhaltige Vitamine, Proteine, Enzyme und Mineralien tragen zu den " +
                "kühlenden und extrem feuchtigkeitsspendenden Fähigkeiten bei. Bei allen Hauttypen verträglich, kann " +
                "das Gel der Heilpflanze gegen Juckreiz, Sonnenbrand, Entzündungen und Trockenheit eingesetzt werden. " +
                "Und ein Benefit on top: Aloe Vera regt die Kollagenproduktion an und führt zu straffer, praller Haut.",
            link: "/contact",
            linkText: "Aloe Bardensis Leaf Juice = Aloe Vera Gel"
        },
        {
            position: "left",
            img: "/careproducts.png",
            text: "Aloe Vera Gel ist aufgrund seiner beruhigenden und wohltuenden Wirkung insbesondere bei trockener" +
                " und unreiner Haut sehr beliebt. Die in den Wüsten der arabischen Halbinsel und dem Sudan beheimatete" +
                " Heilpflanze wird schon seit Jahrtausenden wegen ihrer pflegenden Eigenschaften gerne in" +
                " Kosmetikprodukten eingesetzt. Reichhaltige Vitamine, Proteine, Enzyme und Mineralien tragen zu den " +
                "kühlenden und extrem feuchtigkeitsspendenden Fähigkeiten bei. Bei allen Hauttypen verträglich, kann " +
                "das Gel der Heilpflanze gegen Juckreiz, Sonnenbrand, Entzündungen und Trockenheit eingesetzt werden. " +
                "Und ein Benefit on top: Aloe Vera regt die Kollagenproduktion an und führt zu straffer, praller Haut.",
            link: "/contact",
            linkText: "Aloe Bardensis Leaf Juice = Aloe Vera Gel"
        },
        {
            position: "right",
            img: "/careproducts.png",
            text: "Aloe Vera Gel ist aufgrund seiner beruhigenden und wohltuenden Wirkung insbesondere bei trockener" +
                " und unreiner Haut sehr beliebt. Die in den Wüsten der arabischen Halbinsel und dem Sudan beheimatete" +
                " Heilpflanze wird schon seit Jahrtausenden wegen ihrer pflegenden Eigenschaften gerne in" +
                " Kosmetikprodukten eingesetzt. Reichhaltige Vitamine, Proteine, Enzyme und Mineralien tragen zu den " +
                "kühlenden und extrem feuchtigkeitsspendenden Fähigkeiten bei. Bei allen Hauttypen verträglich, kann " +
                "das Gel der Heilpflanze gegen Juckreiz, Sonnenbrand, Entzündungen und Trockenheit eingesetzt werden. " +
                "Und ein Benefit on top: Aloe Vera regt die Kollagenproduktion an und führt zu straffer, praller Haut.",
            link: "/contact",
            linkText: "Aloe Bardensis Leaf Juice = Aloe Vera Gel"
        },
        {
            position: "left",
            img: "/careproducts.png",
            text: "Aloe Vera Gel ist aufgrund seiner beruhigenden und wohltuenden Wirkung insbesondere bei trockener" +
                " und unreiner Haut sehr beliebt. Die in den Wüsten der arabischen Halbinsel und dem Sudan beheimatete" +
                " Heilpflanze wird schon seit Jahrtausenden wegen ihrer pflegenden Eigenschaften gerne in" +
                " Kosmetikprodukten eingesetzt. Reichhaltige Vitamine, Proteine, Enzyme und Mineralien tragen zu den " +
                "kühlenden und extrem feuchtigkeitsspendenden Fähigkeiten bei. Bei allen Hauttypen verträglich, kann " +
                "das Gel der Heilpflanze gegen Juckreiz, Sonnenbrand, Entzündungen und Trockenheit eingesetzt werden. " +
                "Und ein Benefit on top: Aloe Vera regt die Kollagenproduktion an und führt zu straffer, praller Haut.",
            link: "/contact",
            linkText: "Aloe Bardensis Leaf Juice = Aloe Vera Gel"
        },
    ]
    return (
        <div className={"care__products"}>
            <div className={"care__products__items"}>
                {careData.map((e, i) => {
                    return (
                        <div className={"care__products__items__element"}>
                            {e.position === "left" ?
                                <div className={"care__products__items__element__itemleft"} key={i}>
                                    <img src={e.img} alt={e.img}/>
                                    <div className={"care__products__items__element__itemleft--text"}>
                                        <Link href={e.link}>
                                            <a href="#">{e.linkText}</a>
                                        </Link>
                                        <p>{e.text}</p>
                                    </div>
                                </div>
                                : null}
                            {e.position === "right" ?
                                <div className={"care__products__items__element__itemright"} key={i}>
                                    <div className={"care__products__items__element__itemleft--text"}>
                                        <Link href={e.link}>
                                            <a href="#">{e.linkText}</a>
                                        </Link>
                                        <p>{e.text}</p>
                                    </div>
                                    <img src={e.img} alt={e.img}/>
                                </div>
                                : null}
                        </div>
                    )
                })}
            </div>
            <p className={"care__products__description"}>
                Das waren nur ein paar der vielen Multitalente, die sich hinter komplizierten Namen in den renommierten
                Pflegeprodukten von BYNACHT verstecken. Mit voller Kraft der Natur überzeugen die „Clean
                Beauty“-Kraftpakete mit enormen Regenerationsstützen, die zu einem makellosen und gesunden Teint führen.
            </p>
        </div>
    )
}

export default CareProducts