import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function MobileNotFound() {
  return (
    <div className="mobile__container">
      <div className="mobile__container__notFound__text">
        <span>404</span>

        <div>
          <Image
            src="/productbotleft.png"
            alt="Picture"
            width={940}
            height={624.7}
            className="image"
            objectFit="cover"

          />
        </div>
        <p>
          Die Seite zu diesem Link existiert nicht, wurde umgezogen oder
          gelöscht. Überprüfen sie Ihre eingabe oder nutzen sie unsere
          seiteninterne Suchfunktion. Gerne können sie auch Kontakt mit uns
          aufnehmen.
        </p>
        <div>
          <div>
            <FontAwesomeIcon icon={faSearch} className={"mobile-search-icon"} />
            <input type="text" placeholder="SUCHBEGRIFF EINGEBEN" />
          </div>
          <button>ABSENDEN</button>
        </div>
      </div>
    </div>
  );
}
