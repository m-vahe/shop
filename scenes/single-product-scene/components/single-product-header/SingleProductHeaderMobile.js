import ShareableSelect from "../../../../shareable/select/ShareableSelect";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const SingleProductHeaderMobile = () => {

  const { singleProduct } = useSelector(state => state.products);
    let defaultVariant = [];
  if (singleProduct.variants_of_a_products.length === 1) {
    defaultVariant = singleProduct.variants_of_a_products;
  } else {
    defaultVariant = singleProduct.variants_of_a_products.filter((item) => {
      return item.main === true;
    });
  }

  const [bottleId, setBottleId] = useState(
    singleProduct.variants_of_a_products.filter((item) => {
      return item.main === true;
    }).id
  );
  const [productPrice, setProductPrice] = useState(defaultVariant[0]?.price);
  const [productQuantity, setproductQuantity] = useState(defaultVariant[0]?.quantity);

  useEffect(() => {
    setProductPrice(
      singleProduct?.variants_of_a_products?.filter((item) => {
        return item.id === bottleId;
      })[0]?.price
    );

    setproductQuantity(singleProduct?.variants_of_a_products?.filter((item) => {
      return item.id === bottleId;
    })[0]?.quantity)
    setValue(1)

  }, [bottleId]);

  let [defaultProductVariant, setDefaultProductVariant] = useState(
    defaultVariant
  );

  useEffect(() => {
    setDefaultProductVariant(
      singleProduct.variants_of_a_products.filter((item) => {
        return item.main === true;
      })
    );
  }, []);



  const onChange = (value) => {
    console.log("changed", value);
  };
  const formatter = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  });
  const [value, setValue] = useState(1);
  const maxLimit =productQuantity || defaultVariant[0]?.quantity;
  const onIncHandler = () => {
    if (value < maxLimit) {
      setValue(value + 1);
    }
    console.log(value);
  };
  const onDecHandler = () => {
    if (value > 1) {
      setValue(value - 1);
    }
    console.log(value);
  };
  const onChanges = () => {};
  return (
    <>
      <div className={"single-product-header-mobile"}>
        <div className={"left-side"}>
          <p>{singleProduct?.brand}</p>
          <h2>{singleProduct?.name.toUpperCase()}</h2>
          <a href="#">{singleProduct?.kind}</a>
          <div className={"left-side-select"}>
            <div className={"select-ml"}>
              <div
                className={"cart__sidebar__product__body__text--quantityinp"}
              >
                <input
                  type="number"
                  min={"1"}
                  max={defaultVariant[0]?.quantity}
                  onChange={onChanges}
                  value={value < 10 ? `0${value}` : value}
                />
                <div>
                  <button className={"btnplus"} onClick={onIncHandler}>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                  <button className={"btnminus"} onClick={onDecHandler}>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                </div>
              </div>
              <div className={"select-ml-el"}>
                <span>inhalt</span>
                <ShareableSelect defaultValue={defaultProductVariant[0]?.bottle_sizes} value={"large"} data={singleProduct}
                setBottleId={setBottleId} />
              </div>
            </div>
            <div className={"select-number"}>
              <p>{formatter.format( value * productPrice || value * defaultVariant[0]?.price)}</p>
              <div className={"r-first"}>
                <span>Versandkostenfrei*</span>
                <span>$ 416,67 / 100ML</span>
              </div>
            </div>
          </div>
        </div>
        <div className={"right-side"}>
          <p>in den warenkorb</p>
          <div className={"bot-text-right"}>
            <div className={"r-second"}>
              <p>auf meine wunchliste</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="512"
                height="512"
                viewBox="0 0 512 512"
                className={"letter-svg heart-icon-item"}
                style={{ stroke: "#7b7b7b" }}
              >
                <path
                  d="M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z"
                  style={{
                    fill: "none",
                    strokeMiterlimit: "10",
                    strokeWidth: "32px",
                  }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductHeaderMobile;
