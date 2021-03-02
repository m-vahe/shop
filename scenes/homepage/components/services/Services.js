import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTruck ,faHeart, faPercent, faFlask} from "@fortawesome/free-solid-svg-icons";
const Services = () =>{
    return(
        <>
            <div className={"services-body"}>
                <div className={"services-item"}>
                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="175" height="160" viewBox="0 0 175 160">
                        <defs>
                            <clipPath id="clip-truck">
                                <rect width="175" height="160"/>
                            </clipPath>
                        </defs>
                        <g id="truck" clipPath="url(#clip-truck)">
                            <rect width="175" height="160" fill="#fff"/>
                            <path id="Path_7219" data-name="Path 7219" d="M308.356,210.584h-6.277V176.838l-.538-.59L277.8,150.335l-7.122-7.773a2,2,0,0,0-1.474-.648H250.251v-14.7A11.214,11.214,0,0,0,239.037,116H149.714A11.247,11.247,0,0,0,138.5,127.214v80.578a11.247,11.247,0,0,0,11.214,11.214h6.245a21.577,21.577,0,0,0-.29,3.849,22.027,22.027,0,1,0,43.766-3.849h39.6a11.2,11.2,0,0,0,2.1-.2,2.129,2.129,0,0,0,.9.2h7.917a23.226,23.226,0,0,0,.245,9.154,20.992,20.992,0,0,0,12.843,15.12c15.709,6.038,30.621-5.463,30.621-20.387a21.963,21.963,0,0,0-.343-3.887h15.043a2.144,2.144,0,0,0,2.144-2.144v-4.133A2.144,2.144,0,0,0,308.356,210.584Zm-41.213-59.425,22.983,25.09H250.251V150.335h15.021A2.536,2.536,0,0,1,267.143,151.159Zm-75.2,71.41A14.258,14.258,0,1,1,170,210.584a14.2,14.2,0,0,1,15.393,0,14.176,14.176,0,0,1,6.556,11.985Zm4.224-11.985a22.019,22.019,0,0,0-36.952,0h-9.5a2.8,2.8,0,0,1-2.792-2.792V127.214a2.8,2.8,0,0,1,2.792-2.792h89.317a2.8,2.8,0,0,1,2.8,2.792v80.578a2.8,2.8,0,0,1-2.8,2.792Zm89.712,12.309a14.252,14.252,0,0,1-28.5,0,14.015,14.015,0,0,1,.544-3.887,14.25,14.25,0,0,1,27.416,0A14.015,14.015,0,0,1,285.882,222.893Zm4.01-12.309a22.019,22.019,0,0,0-36.525,0h-3.483a11.158,11.158,0,0,0,.367-2.792V184.67h43.4v25.913Z" transform="translate(-135.5 -100.07)"/>
                        </g>
                    </svg>
                    <h2>
                        Kostenloser
                        Versand
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet,
                        consetetur sadipscing
                    </p>
                </div>
                <div className={"col-lg-3 services-item"}>

                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="175" height="160" viewBox="0 0 175 160">
                        <defs>
                            <clipPath id="clip-heart">
                                <rect width="175" height="160"/>
                            </clipPath>
                        </defs>
                        <g id="heart" clipPath="url(#clip-heart)">
                            <rect width="175" height="160" fill="#fff"/>
                            <path id="heart_1_" data-name="heart (1)" d="M81,148.843a9.327,9.327,0,0,1-6.263-2.43c-6.545-5.91-12.854-11.463-18.421-16.362l-.028-.026c-16.321-14.363-30.415-26.767-40.221-38.986C5.106,77.379,0,64.427,0,50.278,0,36.532,4.565,23.849,12.852,14.566A42.937,42.937,0,0,1,45.257,0,39.934,39.934,0,0,1,70.711,9.074,53.068,53.068,0,0,1,81,20.171a53.072,53.072,0,0,1,10.292-11.1A39.934,39.934,0,0,1,116.747,0a42.939,42.939,0,0,1,32.4,14.566C157.44,23.849,162,36.532,162,50.278c0,14.149-5.1,27.1-16.067,40.759-9.806,12.22-23.9,24.623-40.217,38.985-5.577,4.906-11.9,10.469-18.456,16.393A9.334,9.334,0,0,1,81,148.843ZM45.257,9.8A33.685,33.685,0,0,0,19.828,21.209C13.161,28.677,9.489,39,9.489,50.279c0,11.9,4.283,22.542,13.885,34.507,9.281,11.565,23.086,23.714,39.07,37.781l.03.026c5.588,4.918,11.922,10.493,18.515,16.446,6.632-5.965,12.977-11.549,18.576-16.474,15.982-14.067,29.786-26.213,39.067-37.779,9.6-11.965,13.884-22.607,13.884-34.507,0-11.278-3.672-21.6-10.339-29.07A33.683,33.683,0,0,0,116.747,9.8,30.846,30.846,0,0,0,97.1,16.826,47.184,47.184,0,0,0,86.147,29.911a5.895,5.895,0,0,1-10.291,0A47.14,47.14,0,0,0,64.905,16.826,30.845,30.845,0,0,0,45.257,9.8Zm0,0" transform="translate(6 5.157)"/>
                        </g>
                    </svg>
                    <h2>
                        Mit liebe
                        Handverpackt
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet,
                        consetetur sadipscing
                    </p>
                </div>
                <div className={"col-lg-3 services-item"}>
                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="175" height="160" viewBox="0 0 175 160">
                        <defs>
                            <clipPath id="clip-precent">
                                <rect width="175" height="160"/>
                            </clipPath>
                        </defs>
                        <g id="precent" clipPath="url(#clip-precent)">
                            <rect width="175" height="160" fill="#fff"/>
                            <g id="percent" transform="translate(27 7.37)">
                                <path id="Path_7217" data-name="Path 7217" d="M0,139.216,106.384,3.73h14.51L14.121,139.216Z" transform="translate(0 0.487)" fill="#1e1e1e"/>
                                <g id="Ellipse_619" data-name="Ellipse 619" transform="translate(58.947 82.739)">
                                    <circle id="Ellipse_622" data-name="Ellipse 622" cx="29.445" cy="29.445" r="29.445" transform="translate(0 0)" fill="none"/>
                                    <g id="Group_3919" data-name="Group 3919" transform="translate(0)">
                                        <path id="Path_7223" data-name="Path 7223" d="M63.478,107.955A29.445,29.445,0,1,1,92.923,78.51,29.478,29.478,0,0,1,63.478,107.955Zm0-48.5A19.053,19.053,0,1,0,82.53,78.51,19.075,19.075,0,0,0,63.478,59.457Z" transform="translate(-34.033 -49.065)" fill="#1e1e1e"/>
                                    </g>
                                </g>
                                <g id="Ellipse_620" data-name="Ellipse 620" transform="translate(0.057 3.065)">
                                    <circle id="Ellipse_623" data-name="Ellipse 623" cx="29.445" cy="29.445" r="29.445" transform="translate(0 0)" fill="none"/>
                                    <g id="Group_3920" data-name="Group 3920" transform="translate(0)">
                                        <path id="Path_7224" data-name="Path 7224" d="M29.478,61.955A29.445,29.445,0,1,1,58.923,32.51,29.478,29.478,0,0,1,29.478,61.955Zm0-48.5A19.053,19.053,0,1,0,48.53,32.51,19.075,19.075,0,0,0,29.478,13.457Z" transform="translate(-0.033 -3.065)" fill="#1e1e1e"/>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <h2>
                        Stammkunden
                        Rabatt
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet,
                        consetetur sadipscing
                    </p>
                </div>
                <div className={"col-lg-3 services-item"}>
                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="175" height="160" viewBox="0 0 175 160">
                        <defs>
                            <clipPath id="clip-duxi">
                                <rect width="175" height="160"/>
                            </clipPath>
                        </defs>
                        <g id="duxi" clipPath="url(#clip-duxi)">
                            <rect width="175" height="160" fill="#fff"/>
                            <path id="Path_7226" data-name="Path 7226" d="M0,39H116.112v76.61a33.517,33.517,0,0,1-33.517,33.517H33.517A33.517,33.517,0,0,1,0,115.61V39Z" transform="translate(29 9.873)" fill="none"/>
                            <rect id="Rectangle_796" data-name="Rectangle 796" width="56" height="23" rx="3" transform="translate(59 33)" fill="none"/>
                            <rect id="Rectangle_797" data-name="Rectangle 797" width="38" height="38" rx="3" transform="translate(69 2)" fill="none"/>
                            <g id="Group_3921" data-name="Group 3921">
                                <circle id="Ellipse_624" data-name="Ellipse 624" cx="5" cy="5" r="5" transform="translate(82 16)"/>
                                <path id="Path_7225" data-name="Path 7225" d="M6,68.178a152.827,152.827,0,0,1,28.534,0c15.2,1.5,16.686,6.327,36.19,6.327s41.821-6.327,41.821-6.327v8.189a187.748,187.748,0,0,1-41.821,5.447c-21.118,0-27.295-4.127-42.647-5.447S6,76.367,6,76.367Z" transform="translate(28.975 15.491)"/>
                                <path id="Path_7227" data-name="Path 7227" d="M82.595,149.126H33.517A33.555,33.555,0,0,1,0,115.61V46.182A7.189,7.189,0,0,1,7.182,39H108.929a7.189,7.189,0,0,1,7.182,7.182V115.61A33.555,33.555,0,0,1,82.595,149.126ZM7.182,46.182h0l0,69.428a26.364,26.364,0,0,0,26.335,26.335H82.595a26.364,26.364,0,0,0,26.335-26.335V46.182Z" transform="translate(29 9.873)"/>
                                <path id="Path_7228" data-name="Path 7228" d="M81.26,48.744H25V26H81.26ZM32.182,41.561h41.9V33.182h-41.9Z" transform="translate(34 7.313)"/>
                                <path id="Path_7229" data-name="Path 7229" d="M71.3,38.3H33V0H71.3ZM40.182,31.123H64.123V7.182H40.182Z" transform="translate(35 2.189)"/>
                            </g>
                        </g>
                    </svg>
                    <h2>
                        Inklusive
                        3 gratisproben
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet,
                        consetetur sadipscing
                    </p>
                </div>
            </div>
        </>
    )
}

export default Services