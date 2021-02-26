import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const formatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2
});

// console.log(JSON.parse(Cookies.get('userData')), 88888888);
const ProductsWithLeftText = ({ products, leftText, addToWishList }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(state => state.auth);

  const addToFavorites = id => {
    if (!isAuthenticated) {
      return router.push('/login'); 
    }

    dispatch(addToWishList(id));
  };

  const toProductPage = (e) => {
    if (router.pathname !== "/products") {
      router.push(`/products/${e}`);
    } else {
      router.push(e);
    }
  };
  const toApproved = () => {
    router.push("/magazinartikelone");
  };

  return (
    <>
      <div className="first-products-body ">
        <div className="firstprod-left-text">
          <div className="firstprod-left-text">
            <p>{leftText?.Header}</p>
            <Link href={leftText?.url || ''}>
              <h2>{leftText?.Title}</h2>
            </Link>
            <span>
              {leftText?.Text}
            </span>
          </div>
          <Link href={leftText?.url || ''}>
            <button>{leftText?.Button_text}</button>
          </Link>
        </div>

        <div className={"prod-items-bod"}>
          {products && products.map((e, i) => {
            return (
              <div className={" first-prod-items col-lg-3"} key={i}>
                <div className={"picture-body-prod"}>
                  {e?.images && (
                    <img
                      src={e?.images[0]?.url}
                      className={"item-picture"}
                      alt=""
                      onClick={() => toProductPage(e.id)}
                    />
                  )}

                  {!e.approoved && (
                    <Link href={`/products/${e.id}`}>
                      <img
                        src="/15-layers.png"
                        alt="15 layers"
                        className={"circled-txt"}
                        onClick={toApproved}
                      />
                    </Link>
                  )}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="512"
                    height="512"
                    viewBox="0 0 512 512"
                    className={"letter-svg heart-icon-item"}
                    onClick={() => addToFavorites(e.id)}
                    style={
                      e.favorit ? { stroke: "#000000" } : { stroke: "#7b7b7b" }
                    }
                  >
                    <path
                      d="M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z"
                      style={
                        e.favorit
                          ? {
                              fill: "#000000",
                              strokeMiterlimit: "10",
                              strokeWidth: "32px",
                            }
                          : {
                              fill: "none",
                              strokeMiterlimit: "10",
                              strokeWidth: "32px",
                            }
                      }
                    />
                  </svg>
                </div>
                {e.new ? (
                  <span className={"item-new"}>New</span>
                ) : (
                  <span className={"item-notNew"}>New</span>
                )}
                {e?.menu_item?.item_name ? (
                  <span className={"prod-txt-head2"}>{e?.menu_item?.item_name}</span>
                ) : (
                  <span className={"prod-txt-head2"} style={{opacity: '0'}}>item_name</span>
                )}
                {e?.category?.CategoryName ? (
                  <span className={"prod-txt-head"}>{e?.category?.CategoryName}</span>
                ) : (
                  <span className={"prod-txt-head"} style={{opacity: '0'}}>CategoryName</span>
                )}
                <Link href={`/products/${e.id}`}>
                  <h3 className={"prod-txt-name"}>{e.name}</h3>
                </Link>

                <Link href={`/products/${e.id}`}>
                  <span className={"prod-txt-foot"}>{e.brand}</span>
                </Link>

                <span className={"prod-txt-foot2"}>{e.name}</span>

                <h3 className={"prod-txt-price"}>{formatter.format(e.price)}</h3>

                <Link href={`/products/${e.id}`}>
                  <button>
                    <p>Quick shop</p>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      style={{
                        fill: "none",
                        strokeMiterlimit: "10",
                        strokeWidth: "32px",
                        width: "22px",
                        height: "22px",
                        stroke: "#7b7b7b",
                      }}
                      className={"letter-svg"}
                    >
                      <circle cx="176" cy="416" r="16" />
                      <circle cx="400" cy="416" r="16" />
                      <polyline points="48 80 112 80 160 352 416 352" />
                      <path d="M160,288H409.44a8,8,0,0,0,7.85-6.43l28.8-144a8,8,0,0,0-7.85-9.57H128" />
                    </svg>
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductsWithLeftText;
