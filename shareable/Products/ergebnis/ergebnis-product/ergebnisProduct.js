import React from "react";
import Image from "next/image";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ErgebnisProduct() {
  const parfumTypes = [
    "UNISEX",
    "WÜRZIG",
    "ELEGANT",
    "FRISCH",
    "BÜRO",
    "EAU DE PARFUM",
  ];

  const parfumData = [
    {
      img: "/productbotleft.png",
      title: "HISTOIRES DE PARFUMS",
      create: "1804 - George Sand",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
      parfum: "Eau de Parfum",
      price: "95,00 €",
    },
    {
      img: "/productbotleft.png",
      title: "HISTOIRES DE PARFUMS",
      create: "1804 - George Sand",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
      parfum: "Eau de Parfum",
      price: "95,00 €",
    },
    {
      img: "/productbotleft.png",
      title: "HISTOIRES DE PARFUMS",
      create: "1804 - George Sand",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
      parfum: "Eau de Parfum",
      price: "95,00 €",
    },
  ];

  return (
    <div className="ergebnis__product">
      <div className="ergebnis__product__title">
        <p className="mobile__text">
          AUF BASIS IHRER ERGEBNISSE, HABEN WIR DIESE DÜFTE FÜR SIE AUSGEWÄHLT
        </p>
        <h2>IHRE PERSÖNLICHE</h2>
        <p className="text">
          AUF BASIS IHRER ERGEBNISSE, HABEN WIR DIESE DÜFTE FÜR SIE AUSGEWÄHLT
        </p>

        <div className="ergebnis__product__title--parfumTypes">
          {parfumTypes.map((item, index) => {
            return <span key={index + item}>{item}</span>;
          })}
        </div>
      </div>
      {parfumData.map((item, index) => {
        return (
          <div className="ergebnis__product__parfum" key={index}>
            <Image src={item.img} alt="Picture" width={1720} height={900} />
            <div
              className={`ergebnis__product__parfum__card ${
                index % 2 === 0 ? "product__card__left" : "product__card__right"
              }`}
            >
              <h4>{item.title}</h4>
              <span>{item.create}</span>
              <p>{item.description}</p>
              <span>{item.parfum}</span>
              <h5>{item.price}</h5>
              <button>QUICK SHOP
              <FontAwesomeIcon icon={faShoppingBag} />

              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
