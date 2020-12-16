const ShopHead = () =>{
    return(
        <>
            <div>
                <div className={"shop-head-body d-flex flex-wrap"}>
                    <div className={"col-lg-6 shop-head-left"}>
                        <div className={"shop-head-left-body"}>
                            <p>Exklusive nischenparfums für sie</p>
                            <h2>
                                Entdecken Sie
                                DamenParfums
                            </h2>
                            <span>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                            </span>
                        </div>
                    </div>
                    <div className={"col-lg-6 shop-head-right"} style={{backgroundImage:"url(./shoptop.png)"}}>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopHead