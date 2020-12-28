import { Collapse } from 'antd';
import SingleProductHeader from "../single-product-header/SingleProductHeader";

const RightProductText = () =>{
    const { Panel } = Collapse;
    const dataofCollapse = [
        {type:"text"},
        {type:"list"},
        {type:"list"},
        {type:"text"},
        {type:"video"},
        {type:"carousel"},
    ]
    return(
        <>
            <div style={{display:"flex",flexDirection:"column"}}>
                <SingleProductHeader/>
                <div >
                    {dataofCollapse.map((e,i)=>{
                        return(
                            <Collapse
                                key={i}
                                expandIconPosition='right'
                                ghost='true'
                            >
                                <Panel header={"alllaas"} key={i} >
                                    {/*stugel yst typei kanchel componentner*/}
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad aliquid asperiores dignissimos
                                        dolor doloremque dolorum eaque eius exercitationem hic incidunt iste nam natus nihil odit quam,
                                        soluta sunt tempora.
                                    </p>
                                </Panel>
                            </Collapse>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default RightProductText