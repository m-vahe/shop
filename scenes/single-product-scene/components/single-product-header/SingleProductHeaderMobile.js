import ShareableSelect from "../../../../shareable/select/ShareableSelect";
import {InputNumber} from "antd";

const SingleProductHeaderMobile = () =>{
    const onChange=(value)=> {
        console.log('changed', value);
    }
    return(
        <>
            <div className={"single-product-header-mobile"}>
                <div className={"left-side"}>
                    <p>Ylumi</p>
                    <h2>Coco Beauty</h2>
                    <a href="#">Kapseln</a>
                    <div className={"left-side-select"}>
                        <div className={"select-ml"}>
                            <div className={"select-ml-el"}>
                                <span>menge</span>
                                <InputNumber size="large" min={1} max={100000} defaultValue={3} onChange={onChange} />
                            </div>
                            <div className={"select-ml-el"}>
                                <span>inhalt</span>
                                <ShareableSelect defaultValue={"75 ML"} value={"large"}/>
                            </div>
                        </div>
                        <div className={"select-number"}>

                            <p>54,00 $</p>
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
                            <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512' className={"letter-svg heart-icon-item"}

                                 style={{stroke:"#7b7b7b"}}>
                                <path
                                    d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z'
                                    style={{fill:"none",strokeMiterlimit:"10",strokeWidth:"32px"}} />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProductHeaderMobile