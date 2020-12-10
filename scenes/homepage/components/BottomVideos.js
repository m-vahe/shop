import ReactPlayer from 'react-player'
import {useState} from "react";

const BottomVideo = () =>{
    const [play1,setPlay1] =useState(false)
    const [play2,setPlay2] =useState(false)
    const [play3,setPlay3] =useState(false)
    return(
        <>
            <div className={"bottom-video-body d-flex flex-wrap"}>

                <div className={"col-lg-4 small-vid-bod"}>
                    <div className={"video-small-body-only"}>
                        <ReactPlayer url='/video.webm'  muted={true}
                                     width='100%'
                                     height='100%'
                                     playing={play1}
                                     id={"videoBG"}


                            // light="https://i.stack.imgur.com/zw9Iz.png"
                        />
                        <img src="/play.png" alt="play" onClick={()=>setPlay1(true)} style={play1 ? {display:"none"} : null}/>
                        <button style={!play1 ? {display:"none"}:null} onClick={()=>setPlay1(false)}>Pause</button>
                    </div>
                    <div className={"small-vid-text"}>
                        <p> Review </p>
                        <h2>
                            Notorious Oud von D.S. & Durga
                        </h2>
                        <span>
                            Lassen Sie sich von unserem Duftexperten Dr. Coucoulis den
                            indonesischen Duft Notorious Oud von D.S. & Durga vorstellen. Formuliert in Bed-Stuy, Brooklyn mit
                            nordafrikanischem Papyrus, afghanischem Safran und bulgarischer Rose.
                        </span>
                        <a href="#">
                            Produkt shoppen
                        </a>
                    </div>
                </div>
                <div className={"col-lg-4 small-vid-bod"}>
                    <div className={"video-small-body-only"}>
                        <ReactPlayer url='/video.webm'  muted={true}
                                     width='100%'
                                     height='100%'
                                     playing={play2}
                                     id={"videoBG"}


                            // light="https://i.stack.imgur.com/zw9Iz.png"
                        />
                        <img src="/play.png" alt="play" onClick={()=>setPlay2(true)} style={play2 ? {display:"none"} : null}/>
                        <button style={!play2 ? {display:"none"}:null} onClick={()=>setPlay2(false)}>Pause</button>
                    </div>
                    <div className={"small-vid-text"}>
                        <p> Review </p>
                        <h2>
                            Notorious Oud von D.S. & Durga
                        </h2>
                        <span>
                            Lassen Sie sich von unserem Duftexperten Dr. Coucoulis den
                            indonesischen Duft Notorious Oud von D.S. & Durga vorstellen. Formuliert in Bed-Stuy, Brooklyn mit
                            nordafrikanischem Papyrus, afghanischem Safran und bulgarischer Rose.
                        </span>
                        <a href="#">
                            Produkt shoppen
                        </a>
                    </div>
                </div>
                <div className={"col-lg-4 small-vid-bod"}>
                    <div className={"video-small-body-only"}>
                        <ReactPlayer url='/video.webm'  muted={true}
                                     width='100%'
                                     height='100%'
                                     playing={play3}
                                     id={"videoBG"}


                            // light="https://i.stack.imgur.com/zw9Iz.png"
                        />
                        <img src="/play.png" alt="play" onClick={()=>setPlay3(true)} style={play3 ? {display:"none"} : null}/>
                        <button style={!play3 ? {display:"none"}:null} onClick={()=>setPlay3(false)}>Pause</button>
                    </div>
                    <div className={"small-vid-text"}>
                        <p> Review </p>
                        <h2>
                            Notorious Oud von D.S. & Durga
                        </h2>
                        <span>
                            Lassen Sie sich von unserem Duftexperten Dr. Coucoulis den
                            indonesischen Duft Notorious Oud von D.S. & Durga vorstellen. Formuliert in Bed-Stuy, Brooklyn mit
                            nordafrikanischem Papyrus, afghanischem Safran und bulgarischer Rose.
                        </span>
                        <a href="#">
                            Produkt shoppen
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BottomVideo