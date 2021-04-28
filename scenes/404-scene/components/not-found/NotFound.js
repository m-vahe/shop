import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="container">
      <div className="container__notFound__text">
        <h2>SEITE NICHT GEFUNDEN</h2>
        <span>404</span>
        <p>
          DIE SEITE ZU DIESEM LINK EXISTIERT NICHT, WURDE UMGEZOGEN ODER
          GELÖSCHT. ÜBERPRÜFEN SIE IHRE EINGABE ODER NUTZEN SIE UNSERE
          SEITENINTERNE SUCHFUNKTION. GERNE KÖNNEN SIE AUCH KONTAKT MIT UNS
          AUFNEHMEN.
        </p>

        <div>
          <FontAwesomeIcon icon={faSearch} className={"search-icon"} />
          <input type="text" placeholder="SUCHBEGRIFF EINGEBEN" />
        </div>
        <button>SUCHEN</button>
      </div>

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
    </div>
  );
}
