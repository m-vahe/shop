import { Select } from 'antd';

const ShareableSelect = () => {
    
const { Option } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
  }

    return (
        <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
        <Option value="jack">Jack</Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
    )
}

export default ShareableSelect