import Image from "next/image";
const FirstShareableIntro = ({smalltxt,bigtext1,bigtext2,btntext,bg,color,padding}) =>{
    return(
        <div style={{backgroundColor:bg}}>
            <div className={`mobile__firstintro__body ${padding}`} >
                <div className={"text-body"}>
                    <p className={"small-text"} style={{color:color}}>{smalltxt}</p>
                    <h2 className={"big-text"} style={{color:color}} >{bigtext1}</h2>
                    <h2 className={"big-text1"}style={{color:color}} >{bigtext2}</h2>
                </div>
                <div className={"image-body"} >
                    <Image src="/first1.jpg" width={941} height={625} layout="responsive" />
                </div>
                <div className={"button-body"}>
                    <button style={{color:bg,backgroundColor:color}}>
                        {btntext}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FirstShareableIntro