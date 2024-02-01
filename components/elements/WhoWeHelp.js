import React, { useState } from "react";
import Link from "next/link";

const WhoWeHelp = () => {
    const [show, setShow] = useState(false);

    const showOverlay = () => {
        setShow(true);
    };

    const hideOverlay = () => {
        setShow(false);
    };

    return (
        <>
            <div className="container">
                <div className="row mt-50">

                    <div className="col-xl-4 col-lg-4 col-md-7 col-sm-12 col-12">
                        <div className="card-image-top hover-up">
                            <Link legacyBehavior href="/">
                                <a>
                                    <div className="image" style={{ backgroundImage: "url(assets/imgs/page/homepage1/who-we-help/1.jpg)" }}>
                                        <span className="lbl-hot btn btn-tag color-1">Entrepreneurs</span>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-7 col-sm-12 col-12">
                        <div className="card-image-top hover-up">
                            <Link legacyBehavior href="/">
                                <a>
                                    <div className="image" onMouseOver={showOverlay} onMouseLeave={hideOverlay} style={{ backgroundImage: "url(assets/imgs/page/homepage1/who-we-help/2.jpg)" }}>
                                            {/* {!show && (
                                                <> */}
                                                    <span className="lbl-hot btn btn-tag color-3">Underrepresented</span>
                                                {/* </>
                                            )} */}
                                            {/* {show && (
                                                <div className="overlay">
                                                    <h2>Specialist connected support bringing ideas to life, for commercial and social enterprises across all market sectors and growth stages. </h2>
                                                </div>
                                            )} */}
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-7 col-sm-12 col-12">
                        <div className="card-image-top hover-up">
                            <Link legacyBehavior href="/">
                                <a>
                                    <div className="image" style={{ backgroundImage: "url(assets/imgs/page/homepage1/who-we-help/3.jpg)" }}>
                                        <span className="lbl-hot btn btn-tag color-2">Startups and Scaleups</span>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-7 col-sm-12 col-12">
                        <div className="card-image-top hover-up">
                            <Link legacyBehavior href="/">
                                <a>
                                    <div className="image" style={{ backgroundImage: "url(assets/imgs/page/homepage1/who-we-help/4.jpg)" }}>
                                        <span className="lbl-hot btn btn-tag color-2">Aspirers</span>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-7 col-sm-12 col-12">
                        <div className="card-image-top hover-up">
                            <Link legacyBehavior href="/">
                                <a>
                                    <div className="image" style={{ backgroundImage: "url(assets/imgs/page/homepage1/who-we-help/5.jpg)" }}>
                                        <span className="lbl-hot btn btn-tag color-1">Communities</span>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-7 col-sm-12 col-12">
                        <div className="card-image-top hover-up">
                            <Link legacyBehavior href="/">
                                <a>
                                    <div className="image" style={{ backgroundImage: "url(assets/imgs/page/homepage1/who-we-help/6.jpg)" }}>
                                        <span className="lbl-hot btn btn-tag color-3">Low-income Earners</span>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    
};

export default WhoWeHelp;