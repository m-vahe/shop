import Image from 'next/image';

const SingleProductBottom = () =>{
    return(
        <>
            <div className={"single-product-bottom"}>
                <div className={"single-product-bottom-element"}>
                    <div className="single-product-bottom-element-img">
                        <img style={{justifySelf:"center",marginBottom:"5rem"}} src={"/style_black.png"} />
                    </div>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eum, eveniet maxime pariatur placeat sunt.
                    </p>
                    <a href="#">Magazin Artikel Link</a>
                </div>
                <div className={"single-product-bottom-element"}>
                    <div className="single-product-bottom-element-img" >
                        <img style={{justifySelf:"center",marginBottom:"5rem"}} src={"/productdetailslogopink.png"} />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eum, eveniet maxime pariatur placeat sunt.
                    </p>
                    <a href="#">Magazin Artikel Link</a>
                </div>
                <div className={"single-product-bottom-element"}>
                    <div className="single-product-bottom-element-img">
                        <img style={{justifySelf:"center",marginBottom:"5rem"}} src={"/style_black.png"} />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eum, eveniet maxime pariatur placeat sunt.
                    </p>
                    <a href="#">Magazin Artikel Link</a>
                </div>
            </div>
        </>
    )
}

export default SingleProductBottom