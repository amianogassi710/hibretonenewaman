// In MyComponent.js

import React from "react";
import { Grid } from "@mui/material";
import { IoShareSocialOutline } from "react-icons/io5";


function SupportCard({ title, description, imageSrc, imageAlt, backgroundColor, border }) {
    return (
        <div className="support-card" style={{ backgroundColor }}>
            <div className="support-card-inner" style={{ border }}>
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
                <div className="container">
                    <div className="share-icon-container-fundingbuilder">
                        <IoShareSocialOutline className="share-icon-fundingbuilder" />
                    </div>
                </div>
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
                            <Grid item lg={6} sx={{ paddingRight: { lg: "60px" } }}>
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
                            <Grid item xs={12} md={12}>
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
                            <Grid item xs={12} md={12}>
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
                    </div>
                </div>
            </section>
        </div>
    );
}
export default FundingBuilderCard;