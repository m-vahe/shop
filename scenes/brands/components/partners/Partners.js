const Partners = () =>{
    const partnersData = [
        {img:"/Beautypunk.png",linkText:"mehr lassen",link:"https://www.beautypunk.com/"},
        {img:"/BeautyIn(logo).png",linkText:"mehr lassen",link:"https://www.beautypunk.com/"},
        {img:"/Femt(logo).png",linkText:"mehr lassen",link:"https://www.beautypunk.com/"},
    ]
    return(
        <div className={"partners"}>
            {partnersData.map((e,i)=>{
                return(
                    <div className={"partners__items"}>
                        <img src={e.img} alt={e.img}/>
                        <a href={e.link} target="_blank" >{e.linkText}</a>
                    </div>
                )
            })}
        </div>
    )
}

export default Partners