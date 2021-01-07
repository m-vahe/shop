import Image from 'next/image';

const SingleProductBottom = () =>{
    return(
        <>
            <div className={"single-product-bottom"}>
                <div className={"single-product-bottom-element"}>
                    <img style={{justifySelf:"center"}} src={"/style_black.png"} />

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eum, eveniet maxime pariatur placeat sunt.
                    </p>
                    <a href="#">Magazin Artikel Link</a>
                </div>
                <div className={"single-product-bottom-element"}>
                    <img style={{justifySelf:"center"}} src={"/productdetailslogopink.png"} />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eum, eveniet maxime pariatur placeat sunt.
                    </p>
                    <a href="#">Magazin Artikel Link</a>
                </div>
                <div className={"single-product-bottom-element"}>
                    <img style={{justifySelf:"center"}} src={"/style_black.png"} />
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