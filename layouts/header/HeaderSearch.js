import {
  faEnvelopeSquare,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
const HeaderSearch = () => {
  return (
    <>
      <div className="header-search-section">
        <div className="left-side-search">
          <div>
            <span>
              {" "}
              <FontAwesomeIcon
                icon={faEnvelopeSquare}
                style={{ fontSize: "14px" }}
              />{" "}
              shop@dasparfum-beauty.de
            </span>
            <span>
              {" "}
              <FontAwesomeIcon
                icon={faPhoneAlt}
                style={{ fontSize: "14px" }}
              />{" "}
              +49 (0)6173 9938000
            </span>
          </div>
          <div>
            <Image src="/logo.png" alt="me" width="392" height="144" />
          </div>
          <div>
            <span>
              {" "}
              <FontAwesomeIcon
                icon={faEnvelopeSquare}
                style={{ fontSize: "14px" }}
              />{" "}
              shop@dasparfum-beauty.de
            </span>
            <span>
              {" "}
              <FontAwesomeIcon
                icon={faPhoneAlt}
                style={{ fontSize: "14px" }}
              />{" "}
              +49 (0)6173 9938000
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeaderSearch;
