import Image from "next/image";
const InspirationSection = () =>{
    return(
        <>
        <div className={"inspiration-body d-flex flex-wrap"}>
            <div className={"col-lg-8 inspiration-left"} style={{backgroundImage:"url(/inspiration.png)"}}>
                <p>INSPIRATION</p>
            </div>
            <div className={"col-lg-4 inspiration-right d-flex"}>
              <div className={"inspiration-right-head"}>
                  <p className={"inspiration-right-headtxt"}>
                      Gesichtspflege-serie
                  </p>
                  <h2>
                      Find your
                      Inner beauty
                  </h2>
              </div>
                <p className={"inspiration-right-bottxt"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, aliquam autem distinctio ipsum officia, quidem repudiandae sint sunt totam unde voluptas.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, aliquam autem distinctio ipsum officia, quidem repudiandae sint sunt totam unde voluptas.
                </p>
                <button>JETZT SHOPPEN</button>
            </div>
        </div>
        </>
    )
}

export default InspirationSection