import Image from "next/image";
const InspirationSection = ({background,color,image}) =>{
    return(
        <>
           <div style={{backgroundColor:background,padding:"10vh 0"}}>
               <div className={"inspiration-body d-flex flex-wrap"} >
                   <div className={"col-lg-9 col-xl-9 inspiration-left"} style={{backgroundImage:`url(${image})`}}>
                       <p style={{color:color}}>INSPIRATION</p>
                   </div>
                   <div className={"col-lg-3 col-xl-3 inspiration-right d-flex"}>
                       <div className={"inspiration-right-head"}>
                           <p className={"inspiration-right-headtxt"} style={{color:color}}>
                               Gesichtspflege-serie
                           </p>
                           <h2 style={{color:color}}>
                               Find your
                               Inner beauty
                           </h2>
                       </div>
                       <p className={"inspiration-right-bottxt"} style={{color:color}}>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, aliquam autem distinctio ipsum officia, quidem repudiandae sint sunt totam unde voluptas.
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, aliquam autem distinctio ipsum officia, quidem repudiandae sint sunt totam unde voluptas.
                       </p>
                       <button style={{color:background,backgroundColor:color}}>JETZT SHOPPEN</button>
                   </div>
               </div>
           </div>
        </>
    )
}

export default InspirationSection