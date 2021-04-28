import Image from "next/image";
import Link from "next/link";

export default function ProductOffers() {
  const cards = [
    {
      img: "/productbotleft.png",
      title: "NEUIGKEITEN",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
      category: "ZUR KATEGORIE",
    },
    {
      img: "/productbotleft.png",
      title: "NEUIGKEITEN",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
      category: "ZUR KATEGORIE",
    },
    {
      img: "/productbotleft.png",
      title: "NEUIGKEITEN",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
      category: "ZUR KATEGORIE",
    },
    {
      img: "/productbotleft.png",
      title: "NEUIGKEITEN",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
      category: "ZUR KATEGORIE",
    },
    {
      img: "/productbotleft.png",
      title: "NEUIGKEITEN",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
      category: "ZUR KATEGORIE",
    },
  ];

  return (
    <div className="offers__container">
      <div className="offers__container__title">
        <h2>IHRE SUCHE WAR NICHT ERFOLGREICH?</h2>
        <p>SCHAUEN SIE SICH GERNE IN UNSEREM SHOP UM!</p>
      </div>

      <div className="offers__container__cards">
        {cards.map((item, index) => {
          return (
            <div className="offers__container__cards__card" key={index}>
              <Image
                src={item.img}
                alt="Picture"
                width={488}
                height={305}
                objectFit="cover"
              />
              <h2>{item.title}</h2>
              <p>{item.description}</p>

              <Link href="/">
                <a>{item.category}</a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
