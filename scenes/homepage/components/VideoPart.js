import  {useState} from 'react'
import ReactPlayer from 'react-player'
import Image from "next/image";

const VideoPart = () =>{
    const [play,setPlay] = useState(false)
    const [show,setShow] = useState(false)
    return(
        <>
            {/*<h1 style={{padding:"45vh 0",textAlign:"center"}}>Videos Part in progress . . . </h1>*/}
            <div className={"video-body"} >
                <ReactPlayer url='/video.webm'  muted={true}
                             width='100%'
                             height='110vh'
                             playing={play}
                             id={"videoBG"}
                             style={{position:"absolute",top:"-20vh",left:"0"}}

                             // light="https://i.stack.imgur.com/zw9Iz.png"
                />
                <img style={play ? {display:"none"}:null} className={"playvideohome"} src="/play.png" alt="play" onClick={()=>{
                    setPlay(true)
                }}/>
                {/*<button  style={play ? {display:"none"}:null} >Play</button>*/}
                <button className={"pausevideohome"} style={!play ? {display:"none"}:null} onClick={()=>{
                    setPlay(false)
                }}>Pause</button>
                <p >Entdecken sie unseren showroom</p>
            </div>
        </>
    )
}

export default VideoPart