import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotFoundData } from "../../../../services/actions/not_found_page";

export default function NotFound() {

  const dispatch = useDispatch();
  const {notFoundData,loading}  = useSelector((state) => state.notFoundReduser);
  
  useEffect(() => {
    dispatch(getNotFoundData());
  }, []);
  console.log('%c 🌮 loading: ', 'font-size:20px;background-color: #7F2B82;color:#fff;', loading);

  return (
    <div className="container">
      <div className="container__notFound__text">
        <h2>{notFoundData?.section1.title}</h2>
        <span>404</span>
        <p>
          {notFoundData?.section1.description}
        </p>

        <div>
          <FontAwesomeIcon icon={faSearch} className={"search-icon"} />
          <input type="text" placeholder="SUCHBEGRIFF EINGEBEN" />
        </div>
        <button>SUCHEN</button>
      </div>

      <div>
        <Image
          src={notFoundData?.section1.images.url}
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
