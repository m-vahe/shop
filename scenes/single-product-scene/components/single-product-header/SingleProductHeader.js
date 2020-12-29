import ShareableSelect from "../../../../shareable/select/ShareableSelect";
import { InputNumber } from 'antd';
const SingleProductHeader = () =>{
   const onChange=(value)=> {
        console.log('changed', value);
    }
    return(
        <>
           <div className={"single-product-header"}>
               <div className={"left-side"}>
                   <p>Ylumi</p>
                   <h2>Coco Beauty</h2>
                   <a href="#">Kapseln</a>
                   <div className={"left-side-select"}>
                       <span>Inhalt</span>
                       <ShareableSelect defaultValue={"75 ML"} value={"large"}/>
                   </div>
               </div>
               <div className={"right-side"}>
                   <div>
                       <InputNumber size="large" min={1} max={100000} defaultValue={3} onChange={onChange} />
                       <p>in den warenkorb</p>
                       <p>54,00 $</p>
                   </div>
                   <div>
                       <span>$ 416,67 / 100ML</span>
                       <span>Versandkostenfrei*</span>
                   </div>
                   <p>auf meine wunchliste</p>
               </div>
           </div>
        </>
    )
}

export default SingleProductHeader