import { Select } from "antd";
import { useDispatch } from "react-redux";
import { getSingleProductVariantId } from '../../services/actions/single-product';


const ShareableSelect = ({ defaultValue, value, data, setBottleId }) => {
  const { Option } = Select;
  const dispatch = useDispatch();

  function handleChange(value) {
    dispatch(getSingleProductVariantId(value));

    setBottleId(value);
    console.log("value,", value);
    console.log(`selected ${value}`);
  }

  return (
    <Select
      defaultValue={defaultValue}
      size={value}
      style={{ width: 120 }}
      onChange={handleChange}
    >
      {data?.variants_of_a_products.map((e, i) => {
        return (
          <Option key={i} value={e?.id}>
            {e?.bottle_sizes}
          </Option>
        );
      })}
    </Select>
  );
};

export default ShareableSelect;
