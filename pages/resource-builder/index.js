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

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://website-widgets.pages.dev/dist/sienna.min.js";
        script.defer = true;
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);
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
                        <div className="banner-hero-builder bg-img-resourcebuilder">
                            <div className="container d-flex align-items-center">
                                <div className="row">
                                    <div className="col">
                                        <div className="builder-hero-heading">Resource Builder</div>
                                        <div className="builder-hero-subheading">
                                            Evidence-led resources <span className="color-blue"> to save business owners time and money</span>. Tools  continuously developed to the needs of business owners.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <ResourceBuilderCard />
                    </section>

                    <section className="section-box mt-75 mt-75-50">
                        <YellowBanner />
                    </section>

                    <section className="section-box mt-75 mt-75-50">
                        <div className="text-center">
                            <div className="section-heading-single"> Essential Elements to Achieve Your Business Goals...Faster </div>
                        </div>
                    </section>

                    <section className="section-box mt-40 mt-40-20">
                        <div className="post-loop-grid">
                            <div className="container">
                                <Grid
                                    container
                                    alignItems="center"
                                    style={{ minWidth: "100%" }}
                                    sx={{ display: { xs: "none", sm: "none", md: "none", lg: "flex" } }}
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
                                        <div className="grid-content-heading">
                                            Resources for side-hustlers to startups to scaleups...
                                        </div>
                                        <div className="title-details-builder">
                                            <div>
                                                <p className="builderparatext">
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
                                                <p className="builderparatext mt-30">
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
                                                <p className="builderparatext mt-30">
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
                                    sx={{ display: { xs: "none", sm: "none", md: "flex", lg: "none" } }}
                                >
                                    <Grid item md={6} sx={{ paddingRight: { md: "30px" } }}>
                                        <div className='grid__thumb w-img fix grid_thumb_height grid_thumb' style={{ aspectRatio: '0' }}>
                                            <iframe width="100%" height="400px" src="https://www.youtube.com/embed/8bu1Ltpeiu4" allowFullScreen style={{ border: '1px solid #ccc', borderRadius: '16px' }}></iframe>
                                        </div>
                                    </Grid>
                                    <Grid item md={6} sx={{ paddingLeft: { md: "30px" } }}>
                                        <div className="grid-content-heading">
                                            Resources for side-hustlers to startups to scaleups...
                                        </div>
                                        <div className="title-details-builder mt-20 mt-20-10">
                                            <div>
                                                <p className="builderparatext">
                                                    {showMore1
                                                        ? "A business owner or side-hustle, wanting to be successful in today’s economy will need to understand which resources will substantially grow their business, how to access them in their business model and how to make the most out of them. For startups & many scaleups even knowing these resources exist is often the first challenge."
                                                        : "A business owner or side-hustle, wanting to be successful in today’s economy will need to understand which resources will substantially grow their business, "}
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
                                                <p className="builderparatext mt-30">
                                                    {showMore2
                                                        ? "hibretOne works with technology & content Channel Partners throughout the world to continuously bring gamechanging resources to the attention of founders, all through one platform. We were the first Community Interest Company in the UK to use OpenAI’s GPT3 as part of the beta trial."
                                                        : "hibretOne works with technology & content Channel Partners throughout the world to continuously bring gamechanging resources to the attention of "}
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
                                                <p className="builderparatext mt-30">
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
                                    sx={{ display: { xs: "none", sm: "flex", md: "none", lg: "none" } }}
                                >
                                    <Grid item sm={12}>
                                        <div className="grid-content-heading">
                                            Resources for side-hustlers to startups to scaleups...
                                        </div>
                                    </Grid>
                                    <Grid item sm={12} sx={{ paddingLeft: { md: "75px" } }}>
                                        <div className='grid__thumb w-img fix grid_thumb_height grid_thumb' style={{ aspectRatio: '0' }}>
                                            <iframe width="100%" height="450px" src="https://www.youtube.com/embed/8bu1Ltpeiu4" allowFullScreen style={{ border: '1px solid #ccc', borderRadius: '16px' }}></iframe>
                                        </div>
                                        <div className="title-details-builder mt-20 mt-20-10">
                                            <div>
                                                <p className="builderparatext">
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
                                                <p className="builderparatext mt-30">
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
                                                <p className="builderparatext mt-30">
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
                                    sx={{ display: { xs: "flex", sm: "none", md: "none", lg: "none" } }}
                                >
                                    <Grid item xs={12}>
                                        <div className="grid-content-heading">
                                            New Resources in Development
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <iframe width="100%" height="450px" src="https://www.youtube.com/embed/8bu1Ltpeiu4" allowFullScreen style={{ border: '1px solid #ccc', borderRadius: '16px' }} className="builder-video"></iframe>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className="title-details-builder mt-20 mt-20-10">
                                            <p className="builderparatext">
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
                                            <p className="builderparatext mt-10">
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
                                            <p className="builderparatext mt-10" >
                                                Identifying tools, utilising them effectively & when the founder is ready, connecting to trusted organisations who can provide problem solving advice, products or services.
                                            </p>

                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </section>

                    <section className="section-box mt-100-grid mt-100-50 mt-100-30-grid">
                        <div className="post-loop-grid">
                            <div className="container">
                                <Grid
                                    container
                                    alignItems="center"
                                    style={{ minWidth: "100%" }}
                                    sx={{ display: { xs: "none", sm: "none", md: "none", lg: "flex" } }}
                                >
                                    <Grid item lg={6} sx={{ paddingRight: { lg: "75px" } }}>
                                        <div className="grid-content-heading">
                                            ...and All the Business Stages between
                                        </div>
                                        <div className="title-details-builder">
                                            <div>
                                                <p className="builderparatext">
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
                                                <p className="builderparatext mt-30">
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
                                    sx={{ display: { xs: "none", sm: "none", md: "flex", lg: "none" } }}
                                >
                                    <Grid item md={6} sx={{ paddingRight: { md: "30px" } }}>
                                        <div className="grid-content-heading">
                                            ...and All the Business Stages between
                                        </div>
                                        <div className="title-details-builder mt-20 mt-20-10">
                                            <div>
                                                <p className="builderparatext">
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
                                                <p className="builderparatext mt-30">
                                                    <strong> Business Plan Writer: </strong>   Thinking of skipping the business plan to save time? Think again. A business with a business plan created is 260% more likely to launch. 58% of founders polled in a CNBC study said they wished they had put together a stronger business plan.
                                                </p>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid md={6} sx={{ paddingLeft: { md: "30px" } }}>
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/resource-builder/andallthebusiness.jpg"
                                            alt="joxBox"
                                            style={{ height: '400px' }}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    alignItems="center"
                                    style={{ minWidth: "100%" }}
                                    sx={{ display: { xs: "none", sm: "flex", md: "none", lg: "none" } }}
                                >
                                    <Grid item sm={12}>
                                        <div className="grid-content-heading">
                                            ...and All the Business Stages between
                                        </div>
                                    </Grid>
                                    <Grid item sm={12}>
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/resource-builder/andallthebusiness.jpg"
                                            alt="joxBox"
                                        />
                                    </Grid>
                                    <Grid item sm={12}>
                                        <div className="title-details-builder mt-20 mt-20-10">
                                            <div>
                                                <p className="builderparatext">
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
                                                <p className="builderparatext mt-30">
                                                    <strong> Business Plan Writer: </strong>   Thinking of skipping the business plan to save time? Think again. A business with a business plan created is 260% more likely to launch. 58% of founders polled in a CNBC study said they wished they had put together a stronger business plan.
                                                </p>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    alignItems="center"
                                    style={{ minWidth: "100%" }}
                                    sx={{ display: { xs: "flex", sm: "none", md: "none", lg: "none" } }}
                                >
                                    <Grid item xs={12}>
                                        <div className="grid-content-heading">
                                            ...and All the Business Stages between
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/resource-builder/andallthebusiness.jpg"
                                            alt="joxBox"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className="title-details-builder mt-20 mt-20-10">
                                            <div>
                                                <p className="builderparatext">
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
                                                <p className="builderparatext mt-10">
                                                    <strong> Business Plan Writer: </strong>   Thinking of skipping the business plan to save time? Think again. A business with a business plan created is 260% more likely to launch. 58% of founders polled in a CNBC study said they wished they had put together a stronger business plan.
                                                </p>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </section>

                    <section className="section-box mt-100-grid mt-100-50 mt-100-30-grid">
                        <div className="post-loop-grid">
                            <div className="container">
                                <Grid
                                    container
                                    alignItems="center"
                                    style={{ minWidth: "100%" }}
                                    sx={{ display: { xs: "none", sm: "none", md: "none", lg: "flex" } }}
                                >
                                    <Grid item lg={6}>
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/resource-builder/evidenceledresearch.jpg"
                                            alt="joxBox"
                                        />
                                    </Grid>
                                    <Grid item
                                        lg={6}
                                        sx={{ paddingLeft: { lg: "75px" } }}
                                    >
                                        <div className="grid-content-heading">
                                            Evidence-led Resources
                                        </div>
                                        <div className="title-details-builder">
                                            <p className="builderparatext">
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
                                            <p className="builderparatext mt-30">
                                                {showMore2
                                                    ? <span><strong>Industry Intelligence: </strong> More than 50% of founders stated they wished they had completed more market research before launching their business. Industry Intelligence enables the gathering of real-time, structured, market intelligence in minutes, instead of months. Market intelligence before launch, means emotions can be taken out of your decisions. With the opportunity for business decisions to be made on facts. Let data be your guide, not gut instinct or confirmation bias. </span>
                                                    : <span><strong>Industry Intelligence: </strong> More than 50% of founders stated they wished they had completed more market research before launching their business. Industry Intelligence enables the gathering of real-time, structured,
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
                                            <p className="builderparatext mt-30">
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
                                    sx={{ display: { xs: "none", sm: "none", md: "flex", lg: "none" } }}
                                >
                                    <Grid item md={6} sx={{ paddingRight: { md: "30px" } }}>
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/resource-builder/evidenceledresearch.jpg"
                                            alt="joxBox"
                                            style={{ height: '400px' }}
                                        />
                                    </Grid>
                                    <Grid item md={6} sx={{ paddingLeft: { md: "30px" } }}>
                                        <div className="grid-content-heading">
                                            Evidence-led Resources
                                        </div>
                                        <div className="title-details-builder mt-20 mt-20-10">
                                            <p className="builderparatext">
                                                {showMore1
                                                    ? <span><strong>Ecosystem Connector:</strong> The Ecosystem Connector creates social capital, building a network of relationships which can provide tangible and intangible resources like office space, equipment, investment, technical expertise, patent advice. With all connections made through one platform.</span>
                                                    : <span><strong>Ecosystem Connector:</strong> The Ecosystem Connector creates social capital, building a network of relationships which can provide tangible and intangible </span>}
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
                                            <p className="builderparatext mt-30">
                                                {showMore2
                                                    ? <span><strong>Industry Intelligence: </strong> More than 50% of founders stated they wished they had completed more market research before launching their business. Industry Intelligence enables the gathering of real-time, structured, market intelligence in minutes, instead of months. Market intelligence before launch, means emotions can be taken out of your decisions. With the opportunity for business decisions to be made on facts. Let data be your guide, not gut instinct or confirmation bias. </span>
                                                    : <span><strong>Industry Intelligence: </strong> More than 50% of founders stated they wished they had completed more market research before launching their business. Industry </span>}
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
                                            <p className="builderparatext mt-30">
                                                {showMore3
                                                    ? <span><strong>Evidence-led Research:</strong>
                                                        Effective resources developed from the evidence are coordinated & delivered on our platform. New tools are developed every day, some will improve business success, boosting survivability for the 60% of startups failing within 3 years, or the 90% of entrepreneurs who will fail.
                                                    </span>
                                                    : <span><strong>Evidence-led Research:</strong>
                                                        Effective resources developed from the evidence are coordinated & delivered on our platform. New tools are developed every day, </span>}<button
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
                                    sx={{ display: { xs: "none", sm: "flex", md: "none", lg: "none" } }}
                                >
                                    <Grid item sm={12}>
                                        <div className="grid-content-heading">
                                            Evidence-led Resources
                                        </div>
                                    </Grid>
                                    <Grid item sm={12} sx={{ paddingLeft: { md: "75px" } }}>
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/resource-builder/evidenceledresearch.jpg"
                                            alt="joxBox"
                                        />
                                        <div className="title-details-builder mt-20 mt-20-10">
                                            <p className="builderparatext">
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
                                            <p className="builderparatext mt-30">
                                                {showMore2
                                                    ? <span><strong>Industry Intelligence: </strong> More than 50% of founders stated they wished they had completed more market research before launching their business. Industry Intelligence enables the gathering of real-time, structured, market intelligence in minutes, instead of months. Market intelligence before launch, means emotions can be taken out of your decisions. With the opportunity for business decisions to be made on facts. Let data be your guide, not gut instinct or confirmation bias. </span>
                                                    : <span><strong>Industry Intelligence: </strong> More than 50% of founders stated they wished they had completed more market research before launching their business. Industry Intelligence enables the gathering of real-time, structured,
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
                                            <p className="builderparatext mt-30">
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
                                    sx={{ display: { xs: "flex", sm: "none", md: "none", lg: "none" } }}
                                >
                                    <Grid item xs={12}>
                                        <h4 className="grid-content-heading">
                                            Evidence-led Resources
                                        </h4>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/resource-builder/evidenceledresearch.jpg"
                                            alt="joxBox"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className="title-details-builder mt-20 mt-20-10">
                                            <p className="builderparatext">
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
                                            <p className="builderparatext mt-10">
                                                {showMore2
                                                    ? <span><strong>Industry Intelligence: </strong> More than 50% of founders stated they wished they had completed more market research before launching their business. Industry Intelligence enables the gathering of real-time, structured, market intelligence in minutes, instead of months. Market intelligence before launch, means emotions can be taken out of your decisions. With the opportunity for business decisions to be made on facts. Let data be your guide, not gut instinct or confirmation bias.
                                                    </span>
                                                    : <span><strong>Industry Intelligence: </strong> More than 50% of founders stated they wished they had completed more market research before launching their business. Industry Intelligence enables the gathering of real-time, structured,
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
                                            <p className="builderparatext mt-10">
                                                {showMore3
                                                    ? <span><strong>Evidence-led Research: </strong>
                                                        Effective resources developed from the evidence are coordinated & delivered on our platform. New tools are developed every day, some will improve business success, boosting survivability for the 60% of startups failing within 3 years, or the 90% of entrepreneurs who will fail.
                                                    </span>
                                                    : <span><strong>Evidence-led Research: </strong>
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

                    <section className="section-box mt-100-grid mt-100-50 mt-100-30-grid">
                        <div className="post-loop-grid">
                            <div className="container">
                                <Grid
                                    container
                                    alignItems="center"
                                    style={{ minWidth: "100%" }}
                                    sx={{ display: { xs: "none", sm: "none", md: "none", lg: "flex" } }}
                                >
                                    <Grid item lg={6} sx={{ paddingRight: { lg: "75px" } }}>
                                        <div className="grid-content-heading">
                                            New Resources in Development
                                        </div>
                                        <div className="title-details-builder">
                                            <p className="builderparatext">
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
                                            <p className="builderparatext mt-30">
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
                                            <p className="builderparatext mt-30">
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
                                            className="imagecontent"
                                            src="assets/imgs/page/resource-builder/newresourcesindevelopment.jpg"
                                            alt="joxBox"
                                        />
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    alignItems="center"
                                    style={{ minWidth: "100%" }}
                                    sx={{ display: { xs: "none", sm: "none", md: "flex", lg: "none" } }}
                                >
                                    <Grid item md={6} sx={{ paddingRight: { md: "30px" } }}>
                                        <div className="grid-content-heading">
                                            New Resources in Development
                                        </div>
                                        <div className="title-details-builder mt-20 mt-20-10">
                                            <p className="builderparatext">
                                                {showMore4
                                                    ? <span><strong>Business Need:</strong>
                                                        Identifying, creating and developing accelerated support tools for founders at all business stages. Future resources helping new and mature ventures to refine business models, develop products/services and scale up effectively.
                                                    </span>
                                                    : <span><strong>Business Need:</strong>
                                                        Identifying, creating and developing accelerated support tools for founders at all business stages. Future resources helping new and mature
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
                                            <p className="builderparatext mt-30">
                                                {showMore5
                                                    ? <span><strong>Technology Need:</strong>
                                                        Identifying, developing and working with software communities, networks of developers and contributors. Providing access to cost-effective, low-risk software solutions to foster innovation which support even the less technically gifted business owner.
                                                    </span>
                                                    : <span><strong>Technology Need:</strong>
                                                        Identifying, developing and working with software communities, networks of developers and contributors. Providing access to cost-effective,
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
                                            <p className="builderparatext mt-30">
                                                {showMore6
                                                    ? <span><strong>Societal Need:</strong>
                                                        Identifying, developing and working with organisations with effective Environmental, Social and Governance (ESG) & Corporate Social Responsibility (CSR) objectives. Ensuring hibretOne continues to scale its ESG/CSR initiatives, contributing to societal well-being beyond our core  activities. Focusing on areas such as environmental sustainability, community development, education, and social justice. Supporting companies engaged in philanthropy, volunteerism, environmental conservation efforts, ethical sourcing practices and partnerships with non-profit organisations.
                                                    </span>
                                                    : <span><strong>Societal Need:</strong>
                                                        Identifying, developing and working with organisations with effective Environmental, Social and Governance (ESG) & Corporate Social
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
                                    <Grid md={6} sx={{ paddingLeft: { md: "30px" } }}>
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/resource-builder/newresourcesindevelopment.jpg"
                                            alt="joxBox"
                                            style={{ height: '400px' }}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    alignItems="center"
                                    style={{ minWidth: "100%" }}
                                    sx={{ display: { xs: "none", sm: "flex", md: "none", lg: "none" } }}
                                >
                                    <Grid item sm={12}>
                                        <div className="grid-content-heading">
                                            New Resources in Development
                                        </div>
                                    </Grid>
                                    <Grid item sm={12}>
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/resource-builder/newresourcesindevelopment.jpg"
                                            alt="joxBox"
                                        />
                                    </Grid>
                                    <Grid item sm={12}>
                                    <div className="title-details-builder mt-20 mt-20-10">
                                            <p className="builderparatext">
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
                                            <p className="builderparatext mt-30">
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
                                            <p className="builderparatext mt-30">
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
                                <Grid
                                    container
                                    alignItems="center"
                                    style={{ minWidth: "100%" }}
                                    sx={{ display: { xs: "flex", sm: "none", md: "none", lg: "none" } }}
                                >
                                    <Grid item xs={12}>
                                        <div className="grid-content-heading">
                                            New Resources in Development
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/resource-builder/newresourcesindevelopment.jpg"
                                            alt="joxBox"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className="title-details-builder mt-20 mt-20-10">
                                            <p className="builderparatext">
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
                                            <p className="builderparatext mt-10">
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
                                            <p className="builderparatext mt-10">
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

                    <section className="section-box mt-75 mt-75-40">
                        <FullAccessButton />
                    </section>

                    <Subscription />
                </div >
            </Layout >
        </>
    );
}