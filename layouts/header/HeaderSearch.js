import {
  faEnvelopeSquare,
  faPhoneAlt,
    faSearch,
    faUser,
    faHeart, faShoppingCart
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
const HeaderSearch = () => {
  return (
    <>
      <div className="header-search-section">
        <div className="left-side-search">
          <div>
            <span className={"more-right"}>
              {" "}
              <FontAwesomeIcon
                icon={faEnvelopeSquare}
                style={{ fontSize: "14px" ,marginRight:"10px"}}
              />{" "}
              shop@dasparfum-beauty.de
            </span>

            <span>
              {" "}
              <FontAwesomeIcon
                icon={faPhoneAlt}
                style={{ fontSize: "14px" ,marginRight:"10px"}}
              />{" "}
              +49 (0)6173 9938000
            </span>
          </div>
          <div className="logo-div">
            <Image src="/logo.png" alt="me" width="318" height="76" />
          </div>
          <div className={"header-search-bar"}>
            <div className={"search-bar"}>
               <div className={"search-icon"}>
                 <FontAwesomeIcon
                     icon={faSearch}
                     style={{ fontSize: "14px" ,color:"#707070"}}
                 />{" "}
               </div>
              <input type="text" placeholder={"SUCHE"}/>
            </div>
            <div className={"lang-btns"}>
              <button>de</button>
              |
              <button>en</button>
              |
              <button>FR</button>
            </div>
            <div className={"user-circle"}>
              <FontAwesomeIcon
                  icon={faUser}
                  style={{ fontSize: "10px" ,color:"#707070",position:"absolute",top:"15%",left:"20%"}}
              />{" "}
            </div>
            <FontAwesomeIcon
                icon={faHeart}
                style={{ fontSize: "14px" ,color:"#707070",}}
            />{" "} <FontAwesomeIcon
              icon={faShoppingCart}
              style={{ fontSize: "14px" ,color:"#707070",}}
          />{" "}
          </div>

        </div>
      </div>
    </>
  );
};
export default HeaderSearch;
