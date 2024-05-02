// In MyComponent.js

import React from "react";
import { Grid } from "@mui/material";
import { IoShareSocialOutline } from "react-icons/io5";


function SupportCard({ title, description, imageSrc, imageAlt, backgroundColor, border }) {
    return (
        <div className="support-card" style={{ backgroundColor }}>
            <div className="support-card-inner" style={{ border }}>
                <div className="support-card-content">
                    <h4 className="support-card-title">{title}</h4>
                    <p className="support-card-description">{description}</p>
                    <img src={imageSrc} alt={imageAlt} className="support-card-image" />
                </div>
            </div>
        </div>
    );
}

function ResourceBuilderCard() {
    const supportCards = [
        {
            title: "Resource Preparation",
            description: "Understanding your enterprise, to improve understanding of your resources needs..",
            imageSrc: "../assets/imgs/page/resource-builder/card1.jpg",
            imageAlt: "Resource Preparation",
            backgroundColor: "rgba(23, 175, 208, 0.40)",
            border: "1px solid rgba(23, 175, 208, 0.40)",
        },
        {
            title: "Support in Accessing Available Resource",
            description: "hibretOne resources and Channel Partners assisting in document creation.",
            imageSrc: "../assets/imgs/page/resource-builder/card2.jpg",
            imageAlt: "Support in Accessing Available Resource",
            backgroundColor: "rgba(255, 223, 54, 0.60)",
            border: "1px solid #FFDF36",
        },
        {
            title: "Sources of Resource",
            description: "Determining the best resource delivered by hibretOne or our valued Channel Partners.",
            imageSrc: "../assets/imgs/page/resource-builder/card3.jpg",
            imageAlt: "Sources of Resource",
            backgroundColor: "rgba(255, 126, 32, 0.50)",
            border: "1px solid rgba(255, 126, 32, 0.50)",
        },
        {
            title: "Types of Resource",
            description: "Tangible resources like equipment, offices and intangible such as applications.",
            imageSrc: "../assets/imgs/page/resource-builder/card4.jpg",
            imageAlt: "Types of Resource",
            backgroundColor: "rgba(208, 23, 178, 0.40)",
            border: "1px solid rgba(208, 23, 178, 0.40)",
        },
    ];

    const firstCard = supportCards[0]; // Accessing the third card (index 2)
    const secondCard = supportCards[1]; // Accessing the third card (index 2)
    const thirdCard = supportCards[2]; // Accessing the third card (index 2)
    const fourthCard = supportCards[3]; // Accessing the third card (index 2)


    return (
        <div className="">
            <section className="section-box mt-50 mt-50-30">
                <div className="container">
                    <div className="flex-container">
                        <div className="share-icon-container-resourcebuilder">
                            <IoShareSocialOutline className="share-icon-resourcebuilder" />
                        </div>
                        <div className="text-center">
                            <div className="component-title">
                                Bespoke Resources to Boost Your Business Success
                            </div>
                            <div className="component-subtitle">
                                Tools to overcome barriers in conducting your operations effectively
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-box mt-40-grid mt-40-30-grid">
                <div className="post-loop-grid">
                    <div className="container-builder">
                        <Grid
                            container
                            alignItems="center"
                            style={{ minWidth: "100%" }}
                            sx={{ display: { xs: "none", sm: "none", md: "none", lg: "flex" } }}
                        >
                            <Grid item lg={6} sx={{ paddingRight: { lg: "60px" } }}>
                                <section className="support-section-builder">
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
                            <Grid item
                                lg={6}
                                sx={{ paddingLeft: { lg: "60px" } }}>
                                <section className="support-section-builder">
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
                            sx={{ display: { xs: "none", sm: "none", md: "flex", lg: "none" } }}
                        >
                            <Grid item md={6} sx={{ paddingRight: { md: "25px" } }}>
                                <section className="support-section-builder">
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
                            <Grid item md={6} sx={{ paddingLeft: { md: "25px" } }}>
                                <section className="support-section-builder">
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
                            sx={{ display: { xs: "none", sm: "flex", md: "none", lg: "none" } }}
                        >
                            <Grid item sm={12}>
                                <section className="support-section-builder">
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
                            <Grid item sm={12}>
                            <section className="support-section-builder mt-30">
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
                            sx={{ display: { xs: "flex", sm: "none", md: "none", lg: "none" } }}
                        >
                            <Grid item xs={12}>
                                <section className="support-section-builder">
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
                                <section className="support-section-builder mt-30">
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

            <section className="section-box">
                <div className="post-loop-grid">
                    <div className="container-builder">
                        <Grid
                            container
                            alignItems="center"
                            style={{ minWidth: "100%" }}
                            sx={{ display: { xs: "none", sm: "none", md: "none", lg: "flex" }, marginTop: '100px' }}
                        >
                            <Grid item lg={6} sx={{ paddingRight: { lg: "60px" } }}>
                                <section className="support-section-builder">
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
                                sx={{ paddingLeft: { lg: "60px" } }}>
                                <section className="support-section-builder">
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
                            sx={{ display: { xs: "none", sm: "none", md: "flex", lg: "none" }, marginTop: '50px' }}
                        >
                            <Grid item md={6} sx={{ paddingRight: { md: "25px" } }}>
                                <section className="support-section-builder">
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
                            <Grid item md={6} sx={{ paddingLeft: { md: "25px" } }}>
                                <section className="support-section-builder">
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
                            sx={{ display: { xs: "none", sm: "flex", md: "none", lg: "none" } }}
                        >
                            <Grid item sm={12}>
                            <section className="support-section-builder mt-30">
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
                            <Grid item sm={12}>
                            <section className="support-section-builder mt-30">
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
                            sx={{ display: { xs: "flex", sm: "none", md: "none", lg: "none" } }}
                        >
                            <Grid item xs={12}>
                                <section className="support-section-builder mt-30">
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
                            <Grid item xs={12}>
                                <section className="support-section-builder mt-30">
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
export default ResourceBuilderCard;