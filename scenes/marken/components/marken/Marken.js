import {useEffect, useState} from "react";

const Marken = () => {
    const data = [
        {
            title: "A",
            content: ["A4 cosmetics", "aether", "Agent Nateur", "Amol", "Anya smells", "Augustinus bader", "Axiology"]
        },
        {
            title: "B",
            content: ["A4 cosmetics", "aether", "Agent Nateur", "Amol", "Anya smells", "Augustinus bader", "Axiology"]
        },
        {
            title: "C",
            content: ["A4 cosmetics", "aether", "Agent Nateur", "Amol", "Anya smells", "Augustinus bader", "Axiology"]
        },
        {
            title: "D",
            content: ["A4 cosmetics", "aether", "Agent Nateur", "Amol", "Anya smells", "Augustinus bader", "Axiology"]
        },
        {
            title: "E",
            content: ["A4 cosmetics", "aether", "Agent Nateur", "Amol", "Anya smells", "Augustinus bader", "Axiology"]
        },
        {
            title: "F",
            content: ["A4 cosmetics", "aether", "Agent Nateur", "Amol", "Anya smells", "Augustinus bader", "Axiology"]
        },
        {
            title: "G",
            content: ["A4 cosmetics", "aether", "Agent Nateur", "Amol", "Anya smells", "Augustinus bader", "Axiology"]
        },
        {
            title: "H",
            content: ["A4 cosmetics", "aether", "Agent Nateur", "Amol", "Anya smells", "Augustinus bader", "Axiology"]
        },
        {
            title: "I",
            content: ["A4 cosmetics", "aether", "Agent Nateur", "Amol", "Anya smells", "Augustinus bader", "Axiology"]
        },
        {
            title: "G",
            content: ["A4 cosmetics", "aether", "Agent Nateur", "Amol", "Anya smells", "Augustinus bader", "Axiology"]
        },
        {
            title: "K",
            content: ["A4 cosmetics", "aether", "Agent Nateur", "Amol", "Anya smells", "Augustinus bader", "Axiology"]
        },
        {
            title: "L",
            content: ["A4 cosmetics", "aether", "Agent Nateur", "Amol", "Anya smells", "Augustinus bader", "Axiology"]
        }, {
            title: "M",
            content: ["A4 cosmetics", "aether", "Agent Nateur", "Amol", "Anya smells", "Augustinus bader", "Axiology"]
        },
        {
            title: "N",
            content: ["A4 cosmetics", "aether", "Agent Nateur", "Amol", "Anya smells", "Augustinus bader", "Axiology"]
        },
        {
            title: "O",
            content: ["A4 cosmetics", "aether", "Agent Nateur", "Amol", "Anya smells", "Augustinus bader", "Axiology"]
        },
        {
            title: "P",
            content: ["A4 cosmetics", "aether", "Agent Nateur", "Amol", "Anya smells", "Augustinus bader", "Axiology"]
        },
        {
            title: "Q",
            content: ["A4 cosmetics", "aether", "Agent Nateur", "Amol", "Anya smells", "Augustinus bader", "Axiology"]
        },
        {
            title: "R",
            content: ["A4 cosmetics", "aether", "Agent Nateur", "Amol", "Anya smells", "Augustinus bader", "Axiology"]
        },
        {
            title: "S",
            content: ["A4 cosmetics", "aether", "Agent Nateur", "Amol", "Anya smells", "Augustinus bader", "Axiology"]
        }, {
            title: "T",
            content: ["A4 cosmetics", "aether", "Agent Nateur", "Amol", "Anya smells", "Augustinus bader", "Axiology"]
        },
        {
            title: "U",
            content: ["A4 cosmetics", "aether", "Agent Nateur", "Amol", "Anya smells", "Augustinus bader", "Axiology"]
        },
        {
            title: "V",
            content: ["A4 cosmetics", "aether", "Agent Nateur", "Amol", "Anya smells", "Augustinus bader", "Axiology"]
        },
        {
            title: "W",
            content: ["A4 cosmetics", "aether", "Agent Nateur", "Amol", "Anya smells", "Augustinus bader", "Axiology"]
        },
        {
            title: "X",
            content: ["A4 cosmetics", "aether", "Agent Nateur", "Amol", "Anya smells", "Augustinus bader", "Axiology"]
        },
        {
            title: "Y",
            content: ["A4 cosmetics", "aether", "Agent Nateur", "Amol", "Anya smells", "Augustinus bader", "Axiology"]
        },
        {
            title: "Z",
            content: ["-"]
        },
    ]

    // const a1 = data.reduce((a,b)=>{
    //     const lastIndex = a.length - 1
    //     if (a[lastIndex].length === 4) {
    //         return [...a, [b]]
    //     } else {
    //         return a[lastIndex].push(b)
    //     }
    // }, [[]])

    // var splitArray = function (arr, size) {
    //
    //     var arr2 = arr.slice(0),
    //         arrays = [];
    //
    //     while (arr2.length > 0) {
    //         arrays.push(arr2.splice(0, size));
    //     }
    //     console.log(arrays)
    //     return arrays;
    // }

    const [newArray, setNewArray] = useState([])


    var splitArray = function (arr, size) {

        var arr2 = arr.slice(0),
            arrays = [];

        while (arr2.length > 0) {
            arrays.push(arr2.splice(0, size));
        }
        setNewArray([...arrays])

    }


    useEffect(() => {
        splitArray(data, 4);
    }, [])
    useEffect(() => {
        console.log(newArray)
    }, [newArray])
    return (
        <div className={"marken__container"}>
            <div className={"marken__container__header"}>
                <h1 className={"marken__container__header--title"}>Marken</h1>
                <p className={"marken__container__header--subtitle"}>
                    Entdecken sie die auswahl exklusiver marken, denen wir
                    vertrauen
                </p>
            </div>
            {newArray.map((e) => {
                return (
                    <div className={"marken__container__content"}>
                        {
                            e.map((item, index) => {
                                return (
                                    <div className={"marken__container__content__item"}>
                                        <h4 className={"marken__container__content__item--title"}>{item.title}</h4>
                                        {
                                            item.content.map(contentItem => {
                                                return (
                                                    <p className={"marken__container__content__item--content"}>
                                                        {contentItem}
                                                    </p>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            })}

        </div>
    )
}


export default Marken;