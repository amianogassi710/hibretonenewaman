// In MyComponent.js

import React from "react";
import { Grid } from "@mui/material";


function SupportCard({ title, description, imageSrc, imageAlt, backgroundColor, border }) {
    return (
        <div className="support-card" style={{ backgroundColor }}>
            <div className="support-card-inner" style={{border}}>
                <div className="support-card-content">
                    <h2 className="support-card-title">{title}</h2>
                    <p className="support-card-description">{description}</p>
                    <img src={imageSrc} alt={imageAlt} className="support-card-image" />
                </div>
            </div>
        </div>
    );
}

function FundingBuilderCard() {
    const supportCards = [
        {
            title: "Preparation",
            description: "Improving your chances of funding through developing a  business with growth potential.",
            imageSrc: "../assets/imgs/page/funding-builder/card1.jpeg",
            imageAlt: "Support in Securing Funding",
            backgroundColor: "rgba(23, 175, 208, 0.40)",
            border: "1px solid rgba(23, 175, 208, 0.40)",
        },
        {
            title: "Support in Securing Funding",
            description: "hibretOne resources and our partners can assist in completing required documentation.",
            imageSrc: "../assets/imgs/page/funding-builder/card2.jpeg",
            imageAlt: "Another Support Card",
            backgroundColor: "rgba(255, 223, 54, 0.60)",
            border: "1px solid #FFDF36",
        },
        {
            title: "Sources of Funding",
            description: "Determining the best source of funding for your stage of business and  growth requirements.",
            imageSrc: "../assets/imgs/page/funding-builder/card3.jpeg",
            imageAlt: "Another Support Card",
            backgroundColor: "rgba(255, 126, 32, 0.50)",
            border: "1px solid rgba(255, 126, 32, 0.50)",
        },
        {
            title: "Funding & Investment",
            description: "Alternative forms of investment; include grants, loans, equity, debt, tax credits, crowdfunding.",
            imageSrc: "../assets/imgs/page/funding-builder/card4.jpeg",
            imageAlt: "Another Support Card",
            backgroundColor: "rgba(208, 23, 178, 0.40)",
            border: "1px solid rgba(208, 23, 178, 0.40)",
        },
    ];

    const firstCard = supportCards[0]; // Accessing the third card (index 2)
    const secondCard = supportCards[1]; // Accessing the third card (index 2)
    const thirdCard = supportCards[2]; // Accessing the third card (index 2)
    const fourthCard = supportCards[3]; // Accessing the third card (index 2)


    return (
        <div className="background-random-fundingbuilder">

            <section className="section-box mt-50">
                <div className="text-center">
                    <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp" style={{ fontSize: '40px' }}>Finance & Investment for Your Enterprise</h2>
                    <p className="w-lg-50 mx-auto wow animate__animated animate__fadeInUp meetteamtext">Support to overcome barriers in accessing funding
                    </p>
                </div>
            </section>



            <section className="section-box mt-35">
                <div className="post-loop-grid">
                    <div className="container-fundingbuilder">
                        <Grid
                            container
                            alignItems="center"
                            style={{ minWidth: "100%" }}
                            sx={{ display: { xs: "none", md: "none", lg: "flex" } }}
                        >
                            <Grid item lg={6} sx={{ paddingRight: { lg: "60px" } }}
                            >
                                <section className="support-section">
                                    <SupportCard
                                        title={firstCard.title}
                                        description={firstCard.description}
                                        imageSrc={firstCard.imageSrc}
                                        imageAlt={firstCard.imageAlt}
                                        backgroundColor={firstCard.backgroundColor}
                                        border={firstCard.border}
                                    />
                                </section>
                            </Grid>
                            <Grid
                                item
                                className=""
                                lg={6}
                                sx={{ paddingLeft: { lg: "60px" } }}
                            >
                                <section className="support-section">
                                    <SupportCard
                                        title={secondCard.title}
                                        description={secondCard.description}
                                        imageSrc={secondCard.imageSrc}
                                        imageAlt={secondCard.imageAlt}
                                        backgroundColor={secondCard.backgroundColor}
                                        border={secondCard.border}
                                    />
                                </section>

                            </Grid>
                        </Grid>
                        <Grid
                            container
                            alignItems="center"
                            style={{ minWidth: "100%" }}
                            sx={{ display: { xs: "flex", md: "flex", lg: "none" } }}
                        >
                            <Grid item xs={12} md={12} sx={{ marginBottom: "20px" }}>
                                <h3>Market Sector Guide</h3>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <div className="grid__thumb w-img fix grid_thumb_height grid_thumb">
                                    <img
                                        className="content-media"
                                        src="assets/imgs/page/industry-intelligence/market-sector-guide.jpeg"
                                        alt="joxBox"
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <div className="mt-10" style={{ textAlign: "justify" }}>
                                    <p>
                                        Intelligence to support your idea, your market, or to
                                        build your business plan. Helping you determine whether
                                        your idea is worth exploring, without investing too much
                                        time or money.
                                    </p>
                                    <p className="p-color mt-10">
                                        The standard chunk of Lorem Ipsum used since the 1500s
                                        is reproduced below for those interested. Sections
                                        1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
                                        by Cicero are also reproduced in their exact original
                                        form, accompanied by English versions from the 1914
                                        translation by H. Rackham.{" "}
                                    </p>
                                    <p className="p-color mt-10">
                                        Comprehensive analysis and statistics at your
                                        finger-tips.{" "}
                                    </p>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </section>



            <section className="section-box mt-25">
                <div className="post-loop-grid">
                    <div className="container-fundingbuilder">
                        <Grid
                            container
                            alignItems="center"
                            style={{ minWidth: "100%" }}
                            sx={{ display: { xs: "none", md: "none", lg: "flex" } }}
                        >
                            <Grid item lg={6} sx={{ paddingRight: { lg: "60px" } }}>
                                <section className="support-section">
                                    <SupportCard
                                        title={thirdCard.title}
                                        description={thirdCard.description}
                                        imageSrc={thirdCard.imageSrc}
                                        imageAlt={thirdCard.imageAlt}
                                        backgroundColor={thirdCard.backgroundColor}
                                        border={thirdCard.border}
                                    />
                                </section>

                            </Grid>
                            <Grid item lg={6}
                                sx={{ paddingLeft: { lg: "60px" } }}
                                className="d-flex justify-content-center">
                                <section className="support-section">
                                    <SupportCard
                                        title={fourthCard.title}
                                        description={fourthCard.description}
                                        imageSrc={fourthCard.imageSrc}
                                        imageAlt={fourthCard.imageAlt}
                                        backgroundColor={fourthCard.backgroundColor}
                                        border={fourthCard.border}
                                    />
                                </section>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            alignItems="center"
                            style={{ minWidth: "100%" }}
                            sx={{ display: { xs: "flex", md: "flex", lg: "none" } }}
                        >
                            <Grid item xs={12} md={12} sx={{ marginBottom: "20px" }}>
                                <h3>Intelligence to Plan or Change Career</h3>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <div className="grid__thumb w-img fix grid_thumb_height grid_thumb">
                                    <img
                                        className="content-media"
                                        src="assets/imgs/page/industry-intelligence/intelligence.jpeg"
                                        alt="joxBox"
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <div className="mt-10" style={{ textAlign: "justify" }}>
                                    <p className="p-color">
                                        Our tool enables you to quickly gather the intelligence
                                        and information you need to make informed decisions.
                                        Validating each of your ideas, to decide which to take
                                        forward.{" "}
                                    </p>
                                    <p className="p-color mt-10">
                                        Research which would normally take weeks, or even months
                                        to gather, hibretOne can discover it for you in minutes.
                                        The standard chunk of Lorem Ipsum used since the 1500s
                                        is reproduced below for those interested. Sections
                                        1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
                                        by Cicero are also reproduced in their exact original
                                        form, accompanied by English versions from the 1914
                                        translation by H. Rackham.{" "}
                                    </p>
                                </div>
                                <div className="mt-20 mb-30">
                                    <button href="" className="btn btn-default fs-6">
                                        Create Guide
                                    </button>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default FundingBuilderCard;