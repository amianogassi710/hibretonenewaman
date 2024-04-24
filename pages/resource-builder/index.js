/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import Subscription from "../../components/Layout/Subscription";
import YellowBanner from "../../components/elements/YellowBanner";
import { Grid } from "@mui/material";
import FullAccessButton from "../../components/elements/FullAccessButton";
import ResourceBuilderCard from "./ResourceBuilderCard";

function useLockBodyScroll(open) {
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.body.style.overflow = "visible";
        };
    }, [open]);
}

export default function Index() {

    const [showMore1, setShowMore1] = useState(false);
    const [showMore2, setShowMore2] = useState(false);
    const [showMore3, setShowMore3] = useState(false);
    const [showMore4, setShowMore4] = useState(false);
    const [showMore5, setShowMore5] = useState(false);
    const [showMore6, setShowMore6] = useState(false);
    const [readMore1, setReadMore1] = useState(false);
    const [readMore2, setReadMore2] = useState(false);
    const [readMore3, setReadMore3] = useState(false);
    const [readMore4, setReadMore4] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    useLockBodyScroll(isOpen);

    return (
        <>
            <Layout>
                <div className="background-random-resourcebuilder">
                    <section className="section-box">
                        <div className="banner-hero-resourcebuilder bg-img-resourcebuilder">
                            <div className="container d-flex align-items-center">
                                <div className="row">
                                    <div className="col">
                                        <h2 className="resourcebuilder-hero-heading" style={{ marginBottom: '20px', fontSize: '60px' }}>Resource Builder</h2>
                                        <p className="resourcebuilder-hero-subheading color-text-paragraph-2 subheading-aboutus" style={{ fontSize: '24px', maxWidth: '835px', lineHeight: '30px' }}>
                                            Evidence-led resources <span className="color-blue"> to save business owners time and money</span>. Tools  continuously developed to the needs of business owners.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <ResourceBuilderCard />
                    </section>

                    <section className="section-box mt-75">
                        <YellowBanner />
                    </section>


                    <section className="section-box mt-75">
                        <div className="text-center">
                            <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp" style={{ fontSize: '40px' }}>Essential Elements to Achieve Your Business Goals...Faster </h2>
                        </div>
                    </section>

                    <section className="section-box mt-40">
                        <div className="post-loop-grid">
                            <div className="container">
                                <Grid
                                    container
                                    alignItems="center"
                                    style={{ minWidth: "100%" }}
                                    sx={{ display: { xs: "none", md: "none", lg: "flex" } }}
                                >
                                    <Grid item lg={6}>
                                        <div className='grid__thumb w-img fix grid_thumb_height grid_thumb' style={{ aspectRatio: '0' }}>
                                            <iframe width="100%" height="450px" src="https://www.youtube.com/embed/8bu1Ltpeiu4" allowFullScreen style={{ border: '1px solid #ccc', borderRadius: '16px' }}></iframe>
                                        </div>
                                    </Grid>
                                    <Grid
                                        item
                                        className=""
                                        lg={6}
                                        sx={{ paddingLeft: { lg: "75px" } }}
                                    >
                                        <h2 className="" style={{ marginBottom: "40px", fontSize: "36px !important" }}>
                                            Resources for side-hustlers to startups to scaleups...
                                        </h2>
                                        <div className="title-details-resourcebuilder">
                                            <div>
                                                <p className="resourcebuilderparatext">
                                                    {showMore1
                                                        ? "A business owner or side-hustle, wanting to be successful in today’s economy will need to understand which resources will substantially grow their business, how to access them in their business model and how to make the most out of them. For startups & many scaleups even knowing these resources exist is often the first challenge."
                                                        : "A business owner or side-hustle, wanting to be successful in today’s economy will need to understand which resources will substantially grow their business, how to access them in their business model and how to "}
                                                    <button
                                                        className="btn-show-more"
                                                        onClick={() =>
                                                            setShowMore1(
                                                                !showMore1
                                                            )
                                                        }
                                                    >
                                                        {showMore1
                                                            ? "show less"
                                                            : "...more"}
                                                    </button>
                                                </p>
                                                <p className="resourcebuilderparatext mt-30">
                                                    {showMore2
                                                        ? "hibretOne works with technology & content Channel Partners throughout the world to continuously bring gamechanging resources to the attention of founders, all through one platform. We were the first Community Interest Company in the UK to use OpenAI’s GPT3 as part of the beta trial."
                                                        : "hibretOne works with technology & content Channel Partners throughout the world to continuously bring gamechanging resources to the attention of founders, all through one platform. We were the first Community "}
                                                    <button
                                                        className="btn-show-more"
                                                        onClick={() =>
                                                            setShowMore2(
                                                                !showMore2
                                                            )
                                                        }
                                                    >
                                                        {showMore2
                                                            ? "show less"
                                                            : "...more"}
                                                    </button>
                                                </p>
                                                <p className="resourcebuilderparatext mt-30">
                                                    Identifying tools, utilising them effectively & when the founder is ready, connecting to trusted organisations who can provide problem solving advice, products or services.
                                                </p>

                                            </div>

                                            <span
                                                className="btn-show-more"
                                                onClick={() =>
                                                    setReadMore1(
                                                        !readMore1
                                                    )
                                                }
                                            >
                                            </span>
                                        </div>

                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    alignItems="center"
                                    style={{ minWidth: "100%" }}
                                    sx={{ display: { xs: "flex", md: "flex", lg: "none" } }}
                                >
                                    <Grid item xs={12} md={12}>
                                    <h4
                                            className="resourcebuilder-inner-heading"
                                        >
                                            New Resources in Development
                                        </h4>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <iframe width="100%" height="450px" src="https://www.youtube.com/embed/8bu1Ltpeiu4" allowFullScreen style={{ border: '1px solid #ccc', borderRadius: '16px' }} className="resourcebuilder-video-laptop"></iframe>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <div className="title-details-resourcebuilder">

                                            <p className="resourcebuilderparatext">
                                                {showMore1
                                                    ? "A business owner or side-hustle, wanting to be successful in today’s economy will need to understand which resources will substantially grow their business, how to access them in their business model and how to make the most out of them. For startups & many scaleups even knowing these resources exist is often the first challenge."
                                                    : "A business owner or side-hustle, wanting to be successful in today’s economy will need to understand which resources will substantially grow their business, how to access them in their business model and how to "}
                                                <button
                                                    className="btn-show-more"
                                                    onClick={() =>
                                                        setShowMore1(
                                                            !showMore1
                                                        )
                                                    }
                                                >
                                                    {showMore1
                                                        ? "show less"
                                                        : "...more"}
                                                </button>
                                            </p>
                                            <p className="resourcebuilderparatext mt-10">
                                                {showMore2
                                                    ? "hibretOne works with technology & content Channel Partners throughout the world to continuously bring gamechanging resources to the attention of founders, all through one platform. We were the first Community Interest Company in the UK to use OpenAI’s GPT3 as part of the beta trial."
                                                    : "hibretOne works with technology & content Channel Partners throughout the world to continuously bring gamechanging resources to the attention of founders, all through one platform. We were the first Community "}
                                                <button
                                                    className="btn-show-more"
                                                    onClick={() =>
                                                        setShowMore2(
                                                            !showMore2
                                                        )
                                                    }
                                                >
                                                    {showMore2
                                                        ? "show less"
                                                        : "...more"}
                                                </button>
                                            </p>
                                            <p className="resourcebuilderparatext mt-10" >
                                                Identifying tools, utilising them effectively & when the founder is ready, connecting to trusted organisations who can provide problem solving advice, products or services.
                                            </p>

                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </section>

                    <section className="section-box grid-container-resourcebuilder mt-75">
                        <div className="post-loop-grid">
                            <div className="container">
                                <Grid
                                    container
                                    alignItems="center"
                                    style={{ minWidth: "100%" }}
                                    sx={{ display: { xs: "none", md: "none", lg: "flex" } }}
                                >
                                    <Grid item lg={6} sx={{ paddingRight: { lg: "75px" } }}>

                                        <h2 className="" style={{ marginBottom: "40px", fontSize: "36px !important" }}>
                                            ...and All the Business Stages between
                                        </h2>
                                        <div className="title-details-resourcebuilder">
                                            <div>
                                                <p className="newsandeventsparatext-evidenceled">
                                                    {showMore1 ? (
                                                        <>
                                                            <strong> Business Problem Triage: </strong>  Many believe you can learn more from failures and mistakes than from successes. Better than that hibretOne believes you can learn from the failures of others, using their experiences & their hindsight to support you in your success.
                                                            <div className="mt-30">
                                                                40% of the founders polled said they had previously pivoted their startups in some fashion to avoid failure. And 75% of them said pivoting helped lead to success.
                                                                <button
                                                                    className="btn-show-more"
                                                                    onClick={() => setShowMore1(!showMore1)}
                                                                >
                                                                    {showMore1 ? "show less" : "...more"}
                                                                </button>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <strong> Business Problem Triage: </strong>  Many believe you can learn more from failures and mistakes than from successes. Better than that hibretOne believes you can learn from the failures of others, using their experiences & their
                                                            <button
                                                                className="btn-show-more"
                                                                onClick={() => setShowMore1(!showMore1)}
                                                            >
                                                                {showMore1 ? "show less" : "..more"}
                                                            </button>
                                                        </>
                                                    )}
                                                </p>

                                                <p className="resourcebuilderparatext mt-30">
                                                    <strong> Business Plan Writer: </strong>   Thinking of skipping the business plan to save time? Think again. A business with a business plan created is 260% more likely to launch. 58% of founders polled in a CNBC study said they wished they had put together a stronger business plan.
                                                </p>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item lg={6} className="d-flex justify-content-center">
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/resource-builder/andallthebusiness.jpg"
                                            alt="joxBox"
                                        />
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    alignItems="center"
                                    style={{ minWidth: "100%" }}
                                    sx={{ display: { xs: "flex", md: "flex", lg: "none" } }}
                                >
                                    <Grid item xs={12} md={12} sx={{ marginBottom: "20px" }}>
                                        <h4 className="resourcebuilder-inner-heading">
                                            ...and All the Business Stages between
                                        </h4>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/resource-builder/andallthebusiness.jpg"
                                            alt="joxBox"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <div className="title-details-resourcebuilder">
                                            <div>
                                                <p className="newsandeventsparatext-evidenceled">
                                                    {showMore1 ? (
                                                        <>
                                                            <strong> Business Problem Triage: </strong>  Many believe you can learn more from failures and mistakes than from successes. Better than that hibretOne believes you can learn from the failures of others, using their experiences & their hindsight to support you in your success.
                                                            <div className="mt-30">
                                                                40% of the founders polled said they had previously pivoted their startups in some fashion to avoid failure. And 75% of them said pivoting helped lead to success.
                                                                <button
                                                                    className="btn-show-more"
                                                                    onClick={() => setShowMore1(!showMore1)}
                                                                >
                                                                    {showMore1 ? "show less" : "...more"}
                                                                </button>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <strong> Business Problem Triage: </strong>  Many believe you can learn more from failures and mistakes than from successes. Better than that hibretOne believes you can learn from the failures of others, using their experiences & their
                                                            <button
                                                                className="btn-show-more"
                                                                onClick={() => setShowMore1(!showMore1)}
                                                            >
                                                                {showMore1 ? "show less" : "..more"}
                                                            </button>
                                                        </>
                                                    )}
                                                </p>

                                                <p className="resourcebuilderparatext mt-10">
                                                    <strong> Business Plan Writer: </strong>   Thinking of skipping the business plan to save time? Think again. A business with a business plan created is 260% more likely to launch. 58% of founders polled in a CNBC study said they wished they had put together a stronger business plan.
                                                </p>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </section>

                    <section className="section-box grid-container-resourcebuilder mt-75">
                        <div className="post-loop-grid">
                            <div className="container">
                                <Grid
                                    container
                                    alignItems="center"
                                    style={{ minWidth: "100%" }}
                                    sx={{ display: { xs: "none", md: "none", lg: "flex" } }}
                                >
                                    <Grid item lg={6}>
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/resource-builder/evidenceledresearch.jpg"
                                            alt="joxBox"
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        className=""
                                        lg={6}
                                        sx={{ paddingLeft: { lg: "75px" } }}
                                    >
                                        <h2 className="" style={{ marginBottom: "40px", fontSize: "36px !important" }}>
                                            Evidence-led Resources
                                        </h2>
                                        <div className="title-details-fundingbuilder">
                                            <p className="fundingbuilderparatext">
                                                {showMore1
                                                    ? <span><strong>Ecosystem Connector:</strong> The Ecosystem Connector creates social capital, building a network of relationships which can provide tangible and intangible resources like office space, equipment, investment, technical expertise, patent advice. With all connections made through one platform.</span>
                                                    : <span><strong>Ecosystem Connector:</strong> The Ecosystem Connector creates social capital, building a network of relationships which can provide tangible and intangible resources like office space, equipment, investment, </span>}
                                                <button
                                                    className="btn-show-more"
                                                    onClick={() =>
                                                        setShowMore1(
                                                            !showMore1
                                                        )
                                                    }
                                                >
                                                    {showMore1
                                                        ? "show less"
                                                        : "...more"}
                                                </button>
                                            </p>
                                            <p className="fundingbuilderparatext mt-30">
                                                {showMore2
                                                    ? <span><strong>Industry Intelligence:</strong>
                                                        More than 50% of founders stated they wished they had completed more market research before launching their business. Industry Intelligence enables the gathering of real-time, structured, market intelligence in minutes, instead of months. Market intelligence before launch, means emotions can be taken out of your decisions. With the opportunity for business decisions to be made on facts. Let data be your guide, not gut instinct or confirmation bias.
                                                    </span>
                                                    : <span><strong>Industry Intelligence:</strong>
                                                        More than 50% of founders stated they wished they had completed more market research before launching their business. Industry Intelligence enables the gathering of real-time, structured,
                                                    </span>}
                                                <button
                                                    className="btn-show-more"
                                                    onClick={() =>
                                                        setShowMore2(
                                                            !showMore2
                                                        )
                                                    }
                                                >
                                                    {showMore2
                                                        ? "show less"
                                                        : "...more"}
                                                </button>
                                            </p>
                                            <p className="fundingbuilderparatext mt-30">
                                                {showMore3
                                                    ? <span><strong>Evidence-led Research:</strong>
                                                        Effective resources developed from the evidence are coordinated & delivered on our platform. New tools are developed every day, some will improve business success, boosting survivability for the 60% of startups failing within 3 years, or the 90% of entrepreneurs who will fail.
                                                    </span>
                                                    : <span><strong>Evidence-led Research:</strong>
                                                        Effective resources developed from the evidence are coordinated & delivered on our platform. New tools are developed every day, some will improve business success, boosting survivability
                                                    </span>}<button
                                                        className="btn-show-more"
                                                        onClick={() =>
                                                            setShowMore3(
                                                                !showMore3
                                                            )
                                                        }
                                                    >
                                                    {showMore3
                                                        ? "show less"
                                                        : "...more"}
                                                </button>
                                            </p>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    alignItems="center"
                                    style={{ minWidth: "100%" }}
                                    sx={{ display: { xs: "flex", md: "flex", lg: "none" } }}
                                >
                                    <Grid item xs={12} md={12} sx={{ marginBottom: "20px" }}>
                                        <h4 className="resourcebuilder-inner-heading">
                                        Evidence-led Resources
                                        </h4>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/resource-builder/evidenceledresearch.jpg"
                                            alt="joxBox"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                    <div className="title-details-fundingbuilder">
                                            <p className="fundingbuilderparatext">
                                                {showMore1
                                                    ? <span><strong>Ecosystem Connector:</strong> The Ecosystem Connector creates social capital, building a network of relationships which can provide tangible and intangible resources like office space, equipment, investment, technical expertise, patent advice. With all connections made through one platform.</span>
                                                    : <span><strong>Ecosystem Connector:</strong> The Ecosystem Connector creates social capital, building a network of relationships which can provide tangible and intangible resources like office space, equipment, investment, </span>}
                                                <button
                                                    className="btn-show-more"
                                                    onClick={() =>
                                                        setShowMore1(
                                                            !showMore1
                                                        )
                                                    }
                                                >
                                                    {showMore1
                                                        ? "show less"
                                                        : "...more"}
                                                </button>
                                            </p>
                                            <p className="fundingbuilderparatext mt-10">
                                                {showMore2
                                                    ? <span><strong>Industry Intelligence:</strong>
                                                        More than 50% of founders stated they wished they had completed more market research before launching their business. Industry Intelligence enables the gathering of real-time, structured, market intelligence in minutes, instead of months. Market intelligence before launch, means emotions can be taken out of your decisions. With the opportunity for business decisions to be made on facts. Let data be your guide, not gut instinct or confirmation bias.
                                                    </span>
                                                    : <span><strong>Industry Intelligence:</strong>
                                                        More than 50% of founders stated they wished they had completed more market research before launching their business. Industry Intelligence enables the gathering of real-time, structured,
                                                    </span>}
                                                <button
                                                    className="btn-show-more"
                                                    onClick={() =>
                                                        setShowMore2(
                                                            !showMore2
                                                        )
                                                    }
                                                >
                                                    {showMore2
                                                        ? "show less"
                                                        : "...more"}
                                                </button>
                                            </p>
                                            <p className="fundingbuilderparatext mt-10">
                                                {showMore3
                                                    ? <span><strong>Evidence-led Research:</strong>
                                                        Effective resources developed from the evidence are coordinated & delivered on our platform. New tools are developed every day, some will improve business success, boosting survivability for the 60% of startups failing within 3 years, or the 90% of entrepreneurs who will fail.
                                                    </span>
                                                    : <span><strong>Evidence-led Research:</strong>
                                                        Effective resources developed from the evidence are coordinated & delivered on our platform. New tools are developed every day, some will improve business success, boosting survivability
                                                    </span>}<button
                                                        className="btn-show-more"
                                                        onClick={() =>
                                                            setShowMore3(
                                                                !showMore3
                                                            )
                                                        }
                                                    >
                                                    {showMore3
                                                        ? "show less"
                                                        : "...more"}
                                                </button>
                                            </p>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </section>

                    <section className="section-box grid-container-resourcebuilder mt-75">
                        <div className="post-loop-grid">
                            <div className="container">
                                <Grid
                                    container
                                    alignItems="center"
                                    style={{ minWidth: "100%" }}
                                    sx={{ display: { xs: "none", md: "none", lg: "flex" } }}
                                >
                                    <Grid
                                        className="`"
                                        item
                                        lg={6}
                                        sx={{ paddingRight: { lg: "75px" } }}
                                    >
                                        <h2
                                            className=""
                                            style={{ marginBottom: "40px", fontSize: "36px !important" }}
                                        >
                                            New Resources in Development
                                        </h2>
                                        <div className="title-details-fundingbuilder">
                                            <p className="fundingbuilderparatext">
                                                {showMore4
                                                    ? <span><strong>Business Need:</strong>
                                                        Identifying, creating and developing accelerated support tools for founders at all business stages. Future resources helping new and mature ventures to refine business models, develop products/services and scale up effectively.
                                                    </span>
                                                    : <span><strong>Business Need:</strong>
                                                        Identifying, creating and developing accelerated support tools for founders at all business stages. Future resources helping new and mature ventures to refine business models, develop products/
                                                    </span>}
                                                <button
                                                    className="btn-show-more"
                                                    onClick={() =>
                                                        setShowMore4(
                                                            !showMore4
                                                        )
                                                    }
                                                >
                                                    {showMore4
                                                        ? "show less"
                                                        : "...more"}
                                                </button>
                                            </p>
                                            <p className="fundingbuilderparatext mt-30">
                                                {showMore5
                                                    ? <span><strong>Technology Need:</strong>
                                                        Identifying, developing and working with software communities, networks of developers and contributors. Providing access to cost-effective, low-risk software solutions to foster innovation which support even the less technically gifted business owner.
                                                    </span>
                                                    : <span><strong>Technology Need:</strong>
                                                        Identifying, developing and working with software communities, networks of developers and contributors. Providing access to cost-effective, low-risk software solutions to foster innovation
                                                    </span>}
                                                <button
                                                    className="btn-show-more"
                                                    onClick={() =>
                                                        setShowMore5(
                                                            !showMore5
                                                        )
                                                    }
                                                >
                                                    {showMore5
                                                        ? "show less"
                                                        : "...more"}
                                                </button>
                                            </p>
                                            <p className="fundingbuilderparatext mt-30">
                                                {showMore6
                                                    ? <span><strong>Societal Need:</strong>
                                                        Identifying, developing and working with organisations with effective Environmental, Social and Governance (ESG) & Corporate Social Responsibility (CSR) objectives. Ensuring hibretOne continues to scale its ESG/CSR initiatives, contributing to societal well-being beyond our core  activities. Focusing on areas such as environmental sustainability, community development, education, and social justice. Supporting companies engaged in philanthropy, volunteerism, environmental conservation efforts, ethical sourcing practices and partnerships with non-profit organisations.
                                                    </span>
                                                    : <span><strong>Societal Need:</strong>
                                                        Identifying, developing and working with organisations with effective Environmental, Social and Governance (ESG) & Corporate Social Responsibility (CSR) objectives. Ensuring hibretOne continues
                                                    </span>}<button
                                                        className="btn-show-more"
                                                        onClick={() =>
                                                            setShowMore6(
                                                                !showMore6
                                                            )
                                                        }
                                                    >
                                                    {showMore6
                                                        ? "show less"
                                                        : "...more"}
                                                </button>
                                            </p>
                                        </div>  
                                    </Grid>
                                    <Grid item lg={6} className="d-flex justify-content-center">
                                        <img
                                            className="imagecontentwithborder"
                                            src="assets/imgs/page/resource-builder/newresourcesindevelopmenet.jpg"
                                            alt="joxBox"
                                        />
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    alignItems="center"
                                    style={{ minWidth: "100%" }}
                                    sx={{ display: { xs: "flex", md: "flex", lg: "none" } }}
                                >
                                    <Grid item xs={12} md={12} sx={{ marginBottom: "20px" }}>
                                        <h4
                                            className="resourcebuilder-inner-heading"
                                        >
                                            New Resources in Development
                                        </h4>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <img
                                            className="imagecontentwithborder"
                                            src="assets/imgs/page/resource-builder/newresourcesindevelopmenet.jpg"
                                            alt="joxBox"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                    <div className="title-details-fundingbuilder">
                                            <p className="fundingbuilderparatext">
                                                {showMore4
                                                    ? <span><strong>Business Need:</strong>
                                                        Identifying, creating and developing accelerated support tools for founders at all business stages. Future resources helping new and mature ventures to refine business models, develop products/services and scale up effectively.
                                                    </span>
                                                    : <span><strong>Business Need:</strong>
                                                        Identifying, creating and developing accelerated support tools for founders at all business stages. Future resources helping new and mature ventures to refine business models, develop products/
                                                    </span>}
                                                <button
                                                    className="btn-show-more"
                                                    onClick={() =>
                                                        setShowMore4(
                                                            !showMore4
                                                        )
                                                    }
                                                >
                                                    {showMore4
                                                        ? "show less"
                                                        : "...more"}
                                                </button>
                                            </p>
                                            <p className="fundingbuilderparatext mt-10">
                                                {showMore5
                                                    ? <span><strong>Technology Need:</strong>
                                                        Identifying, developing and working with software communities, networks of developers and contributors. Providing access to cost-effective, low-risk software solutions to foster innovation which support even the less technically gifted business owner.
                                                    </span>
                                                    : <span><strong>Technology Need:</strong>
                                                        Identifying, developing and working with software communities, networks of developers and contributors. Providing access to cost-effective, low-risk software solutions to foster innovation
                                                    </span>}
                                                <button
                                                    className="btn-show-more"
                                                    onClick={() =>
                                                        setShowMore5(
                                                            !showMore5
                                                        )
                                                    }
                                                >
                                                    {showMore5
                                                        ? "show less"
                                                        : "...more"}
                                                </button>
                                            </p>
                                            <p className="fundingbuilderparatext mt-10">
                                                {showMore6
                                                    ? <span><strong>Societal Need:</strong>
                                                        Identifying, developing and working with organisations with effective Environmental, Social and Governance (ESG) & Corporate Social Responsibility (CSR) objectives. Ensuring hibretOne continues to scale its ESG/CSR initiatives, contributing to societal well-being beyond our core  activities. Focusing on areas such as environmental sustainability, community development, education, and social justice. Supporting companies engaged in philanthropy, volunteerism, environmental conservation efforts, ethical sourcing practices and partnerships with non-profit organisations.
                                                    </span>
                                                    : <span><strong>Societal Need:</strong>
                                                        Identifying, developing and working with organisations with effective Environmental, Social and Governance (ESG) & Corporate Social Responsibility (CSR) objectives. Ensuring hibretOne continues
                                                    </span>}<button
                                                        className="btn-show-more"
                                                        onClick={() =>
                                                            setShowMore6(
                                                                !showMore6
                                                            )
                                                        }
                                                    >
                                                    {showMore6
                                                        ? "show less"
                                                        : "...more"}
                                                </button>
                                            </p>
                                        </div> 
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </section >

                    <section className="section-box mt-75">
                        <FullAccessButton />
                    </section>

                    <Subscription />
                </div >
            </Layout >
        </>
    );
}