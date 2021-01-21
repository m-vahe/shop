import SmallVideoContainer from "../../../video/components/small-video-container/SmallVideoContainer";

const Lesezeichen = () =>{
    return(
        <div>
            <div className='videos__container__konto'>
                {Array.from(Array(4)).map((_,i) => (
                    <SmallVideoContainer key={i} />
                ))}
            </div>
        </div>
    )
}

export default Lesezeichen