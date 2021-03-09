import { Radio, Input } from 'antd';
import {useState} from "react";
const StepThree = ({next}) => {
    const radio = [
        {name:"Cart",value:1},
        {name:"Auf Rechnung ",value:2},
        {name:"Amazon Pay",value:3},
        {name:"Direkt Zu Paypal",value:4},
        {name:"Neue Zahlunsart",value:5}
    ]

    const [value,setValue] = useState()

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value)
    };

    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
        color:"black"
    };
    return(
        <div className={"checkout__stepthree__container"}>
            <div className={"checkout__stepthree__container__title"}>
                <p>Zahlungsinformation </p>
                <p>Secure</p>
            </div>
            <div className={"checkout__stepthree__container__radios"}>
                <Radio.Group onChange={onChange} value={value}>
                    {radio.map((e,i)=>{
                        return(
                            <Radio style={radioStyle} value={e.value} key={i}>
                                <span className={"radio__text"}>{e.name}</span>
                            </Radio>
                        )
                    })}
                </Radio.Group>
            </div>
            <button className={"checkout__stepthree__container__btn"} onClick={next}>Jetzt bezahlen</button>
        </div>
    )
}

export default StepThree