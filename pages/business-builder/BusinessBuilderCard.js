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

function BusinessBuilderCard() {
    const supportCards = [
        {
            title: "Business Preparation",
            description: "Analysing self, environment and validating the business idea before costly errors are made.",
            imageSrc: "../assets/imgs/page/business-builder/businesspreparation.jpg",
            imageAlt: "Support in Securing Funding",
            backgroundColor: "rgba(23, 175, 208, 0.40)",
            border: "1px solid rgba(23, 175, 208, 0.40)",
        },
        {
            title: "Accessing Entrepreneurial Learning",
            description: "Entrepreneur education upskill programmes available to all aspirers on and off platform.",
            imageSrc: "../assets/imgs/page/business-builder/accessing.jpg",
            imageAlt: "Another Support Card",
            backgroundColor: "rgba(255, 223, 54, 0.60)",
            border: "1px solid #FFDF36",
        },
        {
            title: "Sources of Learning",
            description: "Curating the best sources and connections for business startup support.",
            imageSrc: "../assets/imgs/page/business-builder/sources.jpg",
            imageAlt: "Another Support Card",
            backgroundColor: "rgba(255, 126, 32, 0.50)",
            border: "1px solid rgba(255, 126, 32, 0.50)",
        },
        {
            title: "Funding Entrepreneurship",
            description: "Scholarships to create more aspirers from all socio-demographic backgrounds.",
            imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/536ab00b5153a7bde19d392b8df61c4d607b988391f2e27e64777ea1e14e5459?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&",
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
        <div className="">
            <section className="section-box mt-50">
                <div className="container">
                    <div className="flex-container">
                        <div className="share-icon-container-businessbuilder">
                                <IoShareSocialOutline className="share-icon-businessbuilder" />
                        </div>
                        <div className="text-center">
                            <h2 className="section-title mb-10">
                            Before Building Your Business, We Help Build You                            
                            </h2>
                            <p className="font-lg fw-bold color-text-paragraph w-lg-50 mx-auto">
                            Support to improve opportunities to be successful 
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-box mt-50">
                <div className="post-loop-grid">
                    <div className="container-businessbuilder">
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
                            <Grid item xs={12} md={12}>
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
                    <div className="container-businessbuilder">
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
                            <Grid item xs={12} md={12}>
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
export default BusinessBuilderCard;