import {Select} from "antd";
import {useDispatch} from "react-redux";


const ShareableShopSelect = ({defaultValue}) => {
    const {Option} = Select;
    const handleChange = (value) => {
        console.log(value)
    }
    return (
        <Select
            defaultValue={defaultValue}
            value={defaultValue}
            size={"large"}
            style={{width: 120}}
            onChange={handleChange}
        >
                    <Option key={"price"} value={"price"}>
                       Price
                    </Option>
        </Select>
    );
};

export default ShareableShopSelect;
