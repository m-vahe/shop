import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotFoundData } from "../../../../services/actions/not_found_page";

export default function MobileNotFound() {
  // const dispatch = useDispatch();
  // const { notFoundData } = useSelector((state) => state.notFoundReduser);
  // console.log('%c 🍼️ notFoundData: ', 'font-size:20px;background-color: #42b983;color:#fff;', notFoundData);

  // useEffect(() => {
  //   dispatch(getNotFoundData());
  // }, []);

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
