/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import Subscription from "../../components/Layout/Subscription";
import YellowBanner from "../../components/elements/YellowBanner";
import { Grid } from "@mui/material";
import FullAccessButton from "../../components/elements/FullAccessButton";
import BusinessBuilderCard from "./BusinessBuilderCard";

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
    const [readMore1, setReadMore1] = useState(false);
    const [readMore2, setReadMore2] = useState(false);
    const [readMore3, setReadMore3] = useState(false);
    const [readMore4, setReadMore4] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    useLockBodyScroll(isOpen);

    return (
        <>
            <Layout>
                <div className="background-random-businessbuilder">
                    <section className="section-box">
                        <div className="banner-hero-builder bg-img-businessbuilder">
                            <div className="container d-flex align-items-center">
                                <div className="row">
                                    <div className="col">
                                        <div className="builder-hero-heading">Business Builder</div>
                                        <div className="builder-hero-subheading">
                                            Your enterprise starts with <span className="color-blue"> resources, tools and connections to deliver reliable, consistent outcomes </span> for you as an entrepreneur
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <BusinessBuilderCard />
                    </section>

                    <section className="section-box mt-75 mt-75-50">
                        <YellowBanner />
                    </section>

                    <section className="section-box mt-75 mt-75-50">
                        <div className="text-center">
                            <div className="section-heading-single">Elevate Your Personal Growth & Validate Your Business Idea </div>
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
                                            <iframe width="100%" height="450px" src="https://www.youtube.com/embed/-sQeREfZY-8" allowFullScreen style={{ border: '1px solid #ccc', borderRadius: '16px' }}></iframe>
                                        </div>
                                    </Grid>
                                    <Grid
                                        item
                                        className=""
                                        lg={6}
                                        sx={{ paddingLeft: { lg: "75px" } }}
                                    >
                                        <div className="grid-content-heading">
                                            Characteristics of Successful Entrepreneurs
                                        </div>
                                        <div className="title-details-builder">
                                            {readMore3 ? (
                                                <div>
                                                    <p className="builderparatext">
                                                        Entrepreneurs acknowledge their first product may be far from perfect. Often this realisation comes at a large financial, of time & human cost.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        It is widely thought there are 7 key traits of an entrepreneur include a strong work ethic, passion and drive, risk-taking, resilience, innovation, adaptability, and networking and building relationships. By identifying these traits in yourself and working to develop them, you can set yourself up for success as an entrepreneur.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        Business success can take multiple attempts, with successful £billionaires going bankrupt 3.5 times. hibretOne Business Builder resources are a necessary part of improving startup success.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="builderparatext">
                                                        Entrepreneurs acknowledge their first product may be far from perfect. Often this realisation comes at a large financial, of time & human cost.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        It is widely thought there are 7 key traits of an entrepreneur include a strong work ethic, passion and drive, risk-taking, resilience, innovation, adaptability, and networking and building relationships. By identifying these traits in yourself and working to develop them, you can set yourself up for success as an entrepreneur.
                                                    </p>
                                                </div>
                                            )}
                                            <span
                                                className="btn-show-more"
                                                onClick={() =>
                                                    setReadMore3(
                                                        !readMore3
                                                    )
                                                }
                                            >
                                                <div className="mt-20">
                                                    {readMore3 ? <button className="btn btn-default fs-6">Show Less </button> : <button className="btn btn-default fs-6">Read More</button>}
                                                </div>
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
                                    <Grid item md={6}>
                                        <div className='grid__thumb w-img fix grid_thumb_height grid_thumb' style={{ aspectRatio: '0' }}>
                                            <iframe width="100%" height="450px" src="https://www.youtube.com/embed/-sQeREfZY-8" allowFullScreen style={{ border: '1px solid #ccc', borderRadius: '16px' }} className="builder-video"></iframe>
                                        </div>
                                    </Grid>
                                    <Grid item md={6} sx={{ paddingLeft: { md: "75px" } }}>
                                        <div className="grid-content-heading">
                                            Characteristics of Successful Entrepreneurs
                                        </div>
                                        {/* </Grid>
                                    
                                    <Grid item sm={12} md={12}> */}
                                        <div className="title-details-builder mt-20 mt-20-10">
                                            {readMore3 ? (
                                                <div>
                                                    <p className="builderparatext">
                                                        Entrepreneurs acknowledge their first product may be far from perfect. Often this realisation comes at a large financial, of time & human cost.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        It is widely thought there are 7 key traits of an entrepreneur include a strong work ethic, passion and drive, risk-taking, resilience, innovation, adaptability, and networking and building relationships. By identifying these traits in yourself and working to develop them, you can set yourself up for success as an entrepreneur.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        Business success can take multiple attempts, with successful £billionaires going bankrupt 3.5 times. hibretOne Business Builder resources are a necessary part of improving startup success.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="builderparatext">
                                                        Entrepreneurs acknowledge their first product may be far from perfect. Often this realisation comes at a large financial, of time & human cost.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        It is widely thought there are 7 key traits of an entrepreneur include a strong work ethic, passion and drive, risk-taking, resilience, innovation, adaptability, and networking and building relationships. By identifying these traits in yourself and working to develop them, you can set yourself up for success as an entrepreneur.
                                                    </p>
                                                </div>
                                            )}
                                            <span className="btn-show-more"
                                                onClick={() =>
                                                    setReadMore3(
                                                        !readMore3
                                                    )
                                                }
                                            >
                                                <div className="mt-20 mt-20-10">
                                                    {readMore3 ? <button className="btn btn-default fs-6">Show Less </button> : <button className="btn btn-default fs-6">Read More</button>}
                                                </div>
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
                                            Characteristics of Successful Entrepreneurs
                                        </div>

                                    </Grid>
                                    <Grid item sm={12} sx={{ paddingLeft: { md: "75px" } }}>
                                        <div className='grid__thumb w-img fix grid_thumb_height grid_thumb' style={{ aspectRatio: '0' }}>
                                            <iframe width="100%" height="450px" src="https://www.youtube.com/embed/-sQeREfZY-8" allowFullScreen style={{ border: '1px solid #ccc', borderRadius: '16px' }} className="builder-video"></iframe>
                                        </div>
                                        {/* </Grid>
                                    
                                    <Grid item sm={12} md={12}> */}
                                        <div className="title-details-builder mt-20 mt-20-10">
                                            {readMore3 ? (
                                                <div>
                                                    <p className="builderparatext">
                                                        Entrepreneurs acknowledge their first product may be far from perfect. Often this realisation comes at a large financial, of time & human cost.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        It is widely thought there are 7 key traits of an entrepreneur include a strong work ethic, passion and drive, risk-taking, resilience, innovation, adaptability, and networking and building relationships. By identifying these traits in yourself and working to develop them, you can set yourself up for success as an entrepreneur.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        Business success can take multiple attempts, with successful £billionaires going bankrupt 3.5 times. hibretOne Business Builder resources are a necessary part of improving startup success.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="builderparatext">
                                                        Entrepreneurs acknowledge their first product may be far from perfect. Often this realisation comes at a large financial, of time & human cost.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        It is widely thought there are 7 key traits of an entrepreneur include a strong work ethic, passion and drive, risk-taking, resilience, innovation, adaptability, and networking and building relationships. By identifying these traits in yourself and working to develop them, you can set yourself up for success as an entrepreneur.
                                                    </p>
                                                </div>
                                            )}
                                            <span className="btn-show-more"
                                                onClick={() =>
                                                    setReadMore3(
                                                        !readMore3
                                                    )
                                                }
                                            >
                                                <div className="mt-20 mt-20-10">
                                                    {readMore3 ? <button className="btn btn-default fs-6">Show Less </button> : <button className="btn btn-default fs-6">Read More</button>}
                                                </div>
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
                                            Characteristics of Successful Entrepreneurs
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <iframe width="100%" height="450px" src="https://www.youtube.com/embed/-sQeREfZY-8" allowFullScreen style={{ border: '1px solid #ccc', borderRadius: '16px' }} className="builder-video"></iframe>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className="title-details-builder mt-20 mt-20-10">
                                            {readMore3 ? (
                                                <div>
                                                    <p className="builderparatext">
                                                        Entrepreneurs acknowledge their first product may be far from perfect. Often this realisation comes at a large financial, of time & human cost.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        It is widely thought there are 7 key traits of an entrepreneur include a strong work ethic, passion and drive, risk-taking, resilience, innovation, adaptability, and networking and building relationships. By identifying these traits in yourself and working to develop them, you can set yourself up for success as an entrepreneur.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        Business success can take multiple attempts, with successful £billionaires going bankrupt 3.5 times. hibretOne Business Builder resources are a necessary part of improving startup success.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="builderparatext">
                                                        Entrepreneurs acknowledge their first product may be far from perfect. Often this realisation comes at a large financial, of time & human cost.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        It is widely thought there are 7 key traits of an entrepreneur include a strong work ethic, passion and drive, risk-taking, resilience, innovation, adaptability, and networking and building relationships. By identifying these traits in yourself and working to develop them, you can set yourself up for success as an entrepreneur.
                                                    </p>
                                                </div>
                                            )}
                                            <span className="btn-show-more"
                                                onClick={() =>
                                                    setReadMore3(
                                                        !readMore3
                                                    )
                                                }
                                            >
                                                <div className="mt-20 mt-20-10">
                                                    {readMore3 ? <button className="btn btn-default fs-6">Show Less </button> : <button className="btn btn-default fs-6">Read More</button>}
                                                </div>
                                            </span>
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
                                            Building More Capable Entrepreneurs
                                        </div>
                                        <div className="title-details-builder">
                                            {readMore1 ? (
                                                <div>
                                                    <p className="builderparatext">
                                                        <strong> Entrepreneur Assessments: </strong> Builder helps you assess your entrepreneurial potential, personality, skills and idea viability. You may be entrepreneurial, but your idea may not be. hibretOne gives you tools and the outcomes to objectively separate both.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Entrepreneur Academy: </strong> Completing an Entrepreneur Accelerator is proven to improve startup success. A NatWest study showed over 80% of entrepreneurs who completed a programme are still trading 3 years on.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Scholarships & Bursaries: </strong> Awarded on a set of entrepreneurial criteria, merit, equity and inclusion. Amazing scholarship supporters helping create more diverse business founders for a fairer world.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="builderparatext">
                                                        <strong> Entrepreneur Assessments: </strong> Builder helps you assess your entrepreneurial potential, personality, skills and idea viability. You may be entrepreneurial, but your idea may not be. hibretOne gives you tools and the outcomes to objectively separate both.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Entrepreneur Academy: </strong> Completing an Entrepreneur Accelerator is proven to improve startup success. A NatWest study showed over 80% of entrepreneurs who completed a programme are still trading 3 years on.
                                                    </p>
                                                </div>
                                            )}
                                            <span className="btn-show-more"
                                                onClick={() =>
                                                    setReadMore1(
                                                        !readMore1
                                                    )
                                                }
                                            >
                                                <div className="mt-20">
                                                    {readMore1 ? <button className="btn btn-default fs-6">Show Less </button> : <button className="btn btn-default fs-6">Read More</button>}
                                                </div>
                                            </span>
                                        </div>
                                    </Grid>
                                    <Grid item lg={6} className="d-flex justify-content-center">
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/business-builder/buildingmore.jpg"
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
                                    <Grid item md={6}>
                                        <div className="grid-content-heading">
                                            Building More Capable Entrepreneurs
                                        </div>
                                        <div className="title-details-builder mt-20 mt-20-10">
                                            {readMore1 ? (
                                                <div>
                                                    <p className="builderparatext">
                                                        <strong> Entrepreneur Assessments: </strong> Builder helps you assess your entrepreneurial potential, personality, skills and idea viability. You may be entrepreneurial, but your idea may not be. hibretOne gives you tools and the outcomes to objectively separate both.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        <strong> Entrepreneur Academy: </strong> Completing an Entrepreneur Accelerator is proven to improve startup success. A NatWest study showed over 80% of entrepreneurs who completed a programme are still trading 3 years on.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        <strong> Scholarships & Bursaries: </strong> Awarded on a set of entrepreneurial criteria, merit, equity and inclusion. Amazing scholarship supporters helping create more diverse business founders for a fairer world.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="builderparatext">
                                                        <strong> Entrepreneur Assessments: </strong> Builder helps you assess your entrepreneurial potential, personality, skills and idea viability. You may be entrepreneurial, but your idea may not be. hibretOne gives you tools and the outcomes to objectively separate both.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        <strong> Entrepreneur Academy: </strong> Completing an Entrepreneur Accelerator is proven to improve startup success. A NatWest study showed over 80% of entrepreneurs who completed a programme are still trading 3 years on.
                                                    </p>
                                                </div>
                                            )}
                                            <span
                                                className="btn-show-more"
                                                onClick={() =>
                                                    setReadMore1(
                                                        !readMore1
                                                    )
                                                }
                                            >
                                                <div className="mt-20 mt-20-10">
                                                    {readMore1 ? <button className="btn btn-default fs-6">Show Less </button> : <button className="btn btn-default fs-6">Read More</button>}
                                                </div>
                                            </span>
                                        </div>
                                    </Grid>
                                    <Grid md={6} sx={{ paddingLeft: { md: "75px" } }}>
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/business-builder/buildingmore.jpg"
                                            alt="joxBox"
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
                                            Building More Capable Entrepreneurs
                                        </div>
                                    </Grid>
                                    <Grid item sm={12}>
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/business-builder/buildingmore.jpg"
                                            alt="joxBox"
                                        />
                                    </Grid>
                                    <Grid item sm={12}>
                                        <div className="title-details-builder mt-20 mt-20-10">
                                            {readMore1 ? (
                                                <div>
                                                    <p className="builderparatext">
                                                        <strong> Entrepreneur Assessments: </strong> Builder helps you assess your entrepreneurial potential, personality, skills and idea viability. You may be entrepreneurial, but your idea may not be. hibretOne gives you tools and the outcomes to objectively separate both.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        <strong> Entrepreneur Academy: </strong> Completing an Entrepreneur Accelerator is proven to improve startup success. A NatWest study showed over 80% of entrepreneurs who completed a programme are still trading 3 years on.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        <strong> Scholarships & Bursaries: </strong> Awarded on a set of entrepreneurial criteria, merit, equity and inclusion. Amazing scholarship supporters helping create more diverse business founders for a fairer world.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="builderparatext">
                                                        <strong> Entrepreneur Assessments: </strong> Builder helps you assess your entrepreneurial potential, personality, skills and idea viability. You may be entrepreneurial, but your idea may not be. hibretOne gives you tools and the outcomes to objectively separate both.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        <strong> Entrepreneur Academy: </strong> Completing an Entrepreneur Accelerator is proven to improve startup success. A NatWest study showed over 80% of entrepreneurs who completed a programme are still trading 3 years on.
                                                    </p>
                                                </div>
                                            )}
                                            <span
                                                className="btn-show-more"
                                                onClick={() =>
                                                    setReadMore1(
                                                        !readMore1
                                                    )
                                                }
                                            >
                                                <div className="mt-20 mt-20-10">
                                                    {readMore1 ? <button className="btn btn-default fs-6">Show Less </button> : <button className="btn btn-default fs-6">Read More</button>}
                                                </div>
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
                                            Building More Capable Entrepreneurs
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/business-builder/buildingmore.jpg"
                                            alt="joxBox"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className="title-details-builder mt-20 mt-20-10">
                                            {readMore1 ? (
                                                <div>
                                                    <p className="builderparatext">
                                                        <strong> Entrepreneur Assessments: </strong> Builder helps you assess your entrepreneurial potential, personality, skills and idea viability. You may be entrepreneurial, but your idea may not be. hibretOne gives you tools and the outcomes to objectively separate both.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        <strong> Entrepreneur Academy: </strong> Completing an Entrepreneur Accelerator is proven to improve startup success. A NatWest study showed over 80% of entrepreneurs who completed a programme are still trading 3 years on.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        <strong> Scholarships & Bursaries: </strong> Awarded on a set of entrepreneurial criteria, merit, equity and inclusion. Amazing scholarship supporters helping create more diverse business founders for a fairer world.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="builderparatext">
                                                        <strong> Entrepreneur Assessments: </strong> Builder helps you assess your entrepreneurial potential, personality, skills and idea viability. You may be entrepreneurial, but your idea may not be. hibretOne gives you tools and the outcomes to objectively separate both.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        <strong> Entrepreneur Academy: </strong> Completing an Entrepreneur Accelerator is proven to improve startup success. A NatWest study showed over 80% of entrepreneurs who completed a programme are still trading 3 years on.
                                                    </p>
                                                </div>
                                            )}
                                            <span
                                                className="btn-show-more"
                                                onClick={() =>
                                                    setReadMore1(
                                                        !readMore1
                                                    )
                                                }
                                            >
                                                <div className="mt-20 mt-20-10">
                                                    {readMore1 ? <button className="btn btn-default fs-6">Show Less </button> : <button className="btn btn-default fs-6">Read More</button>}
                                                </div>
                                            </span>
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
                                            src="assets/imgs/page/business-builder/buildingmoredesirable.jpg"
                                            alt="joxBox"
                                        />
                                    </Grid>
                                    <Grid item
                                        lg={6}
                                        sx={{ paddingLeft: { lg: "75px" } }}
                                    >
                                        <div className="grid-content-heading">
                                            Building More Desirable Products
                                        </div>
                                        <div className="title-details-builder">
                                            {readMore4 ? (
                                                <div>
                                                    <p className="builderparatext">
                                                        <strong> Idea Validation: </strong>
                                                        Quick assessment of your product, service, or business idea to determine viability against known criteria. It's a framework to make quick, painless, and informed judgments so that you know whether it's worth pursuing.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Investability Rating: </strong>
                                                        Quick assessment to measure your potential to raise investment by analysing your performance across 5 key areas. Your unique score will reveal your personal strengths and weaknesses and deliver practical, actionable tips to improve your results and help you secure the funding you need.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Product Market Fit (PMF): </strong>
                                                        Assessing the entrepreneurs  vision of their product and the need in the market. Helping build solutions that customers want to buy whilst reducing risk.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Angel Investors: </strong>
                                                        Have VC experience, others pivot from being founders or operators themselves.
                                                        Investing in return for equity, and either put money in as individual investors or as part of a syndicate.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="builderparatext">
                                                        <strong> Idea Validation: </strong>
                                                        Quick assessment of your product, service, or business idea to determine viability against known criteria. It's a framework to make quick, painless, and informed judgments so that you know whether it's worth pursuing.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Investability Rating: </strong>
                                                        Quick assessment to measure your potential to raise investment by analysing your performance across 5 key areas. Your unique score will reveal your personal strengths and weaknesses and deliver practical, actionable tips to improve your results and help you secure the funding you need.
                                                    </p>
                                                </div>
                                            )}
                                            <span
                                                className="btn-show-more"
                                                onClick={() =>
                                                    setReadMore4(
                                                        !readMore4
                                                    )
                                                }
                                            >
                                                <div className="mt-20">
                                                    {readMore4 ? <button className="btn btn-default fs-6">Show Less </button> : <button className="btn btn-default fs-6">Read More</button>}
                                                </div>
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
                                    <Grid item md={6}>
                                    <img
                                            className="imagecontent"
                                            src="assets/imgs/page/business-builder/buildingmoredesirable.jpg"
                                            alt="joxBox"
                                        />
                                        
                                    </Grid>
                                    <Grid item md={6} sx={{ paddingLeft: { md: "75px" } }}>
                                    <div className="grid-content-heading">
                                            Building More Desirable Products
                                        </div>
                                   
                                        <div className="title-details-builder mt-20 mt-20-10">
                                            {readMore4 ? (
                                                <div>
                                                    <p className="builderparatext">
                                                        <strong> Idea Validation: </strong>
                                                        Quick assessment of your product, service, or business idea to determine viability against known criteria. It's a framework to make quick, painless, and informed judgments so that you know whether it's worth pursuing.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Investability Rating: </strong>
                                                        Quick assessment to measure your potential to raise investment by analysing your performance across 5 key areas. Your unique score will reveal your personal strengths and weaknesses and deliver practical, actionable tips to improve your results and help you secure the funding you need.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Product Market Fit (PMF): </strong>
                                                        Assessing the entrepreneurs  vision of their product and the need in the market. Helping build solutions that customers want to buy whilst reducing risk.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Angel Investors: </strong>
                                                        Have VC experience, others pivot from being founders or operators themselves.
                                                        Investing in return for equity, and either put money in as individual investors or as part of a syndicate.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="builderparatext">
                                                        <strong> Idea Validation: </strong>
                                                        Quick assessment of your product, service, or business idea to determine viability against known criteria. It's a framework to make quick, painless, and informed judgments so that you know whether it's worth pursuing.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Investability Rating: </strong>
                                                        Quick assessment to measure your potential to raise investment by analysing your performance across 5 key areas. Your unique score will reveal your personal strengths and weaknesses and deliver practical, actionable tips to improve your results and help you secure the funding you need.
                                                    </p>
                                                </div>
                                            )}
                                            <span
                                                className="btn-show-more"
                                                onClick={() =>
                                                    setReadMore4(
                                                        !readMore4
                                                    )
                                                }
                                            >
                                                <div className="mt-20 mt-20-10">
                                                    {readMore4 ? <button className="btn btn-default fs-6">Show Less </button> : <button className="btn btn-default fs-6">Read More</button>}
                                                </div>
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
                                            Building More Desirable Products
                                            </div>
                                    </Grid>
                                    <Grid item sm={12} sx={{ paddingLeft: { md: "75px" } }}>
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/business-builder/buildingmoredesirable.jpg"
                                            alt="joxBox"
                                        />
                                  
                                        <div className="title-details-builder mt-20 mt-20-10">
                                            {readMore4 ? (
                                                <div>
                                                    <p className="builderparatext">
                                                        <strong> Idea Validation: </strong>
                                                        Quick assessment of your product, service, or business idea to determine viability against known criteria. It's a framework to make quick, painless, and informed judgments so that you know whether it's worth pursuing.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Investability Rating: </strong>
                                                        Quick assessment to measure your potential to raise investment by analysing your performance across 5 key areas. Your unique score will reveal your personal strengths and weaknesses and deliver practical, actionable tips to improve your results and help you secure the funding you need.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Product Market Fit (PMF): </strong>
                                                        Assessing the entrepreneurs  vision of their product and the need in the market. Helping build solutions that customers want to buy whilst reducing risk.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Angel Investors: </strong>
                                                        Have VC experience, others pivot from being founders or operators themselves.
                                                        Investing in return for equity, and either put money in as individual investors or as part of a syndicate.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="builderparatext">
                                                        <strong> Idea Validation: </strong>
                                                        Quick assessment of your product, service, or business idea to determine viability against known criteria. It's a framework to make quick, painless, and informed judgments so that you know whether it's worth pursuing.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Investability Rating: </strong>
                                                        Quick assessment to measure your potential to raise investment by analysing your performance across 5 key areas. Your unique score will reveal your personal strengths and weaknesses and deliver practical, actionable tips to improve your results and help you secure the funding you need.
                                                    </p>
                                                </div>
                                            )}
                                            <span
                                                className="btn-show-more"
                                                onClick={() =>
                                                    setReadMore4(
                                                        !readMore4
                                                    )
                                                }
                                            >
                                                <div className="mt-20 mt-20-10">
                                                    {readMore4 ? <button className="btn btn-default fs-6">Show Less </button> : <button className="btn btn-default fs-6">Read More</button>}
                                                </div>
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
                                            Building More Desirable Products
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/business-builder/buildingmoredesirable.jpg"
                                            alt="joxBox"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className="title-details-builder mt-20 mt-20-10">
                                            {readMore4 ? (
                                                <div>
                                                    <p className="builderparatext">
                                                        <strong> Idea Validation: </strong>
                                                        Quick assessment of your product, service, or business idea to determine viability against known criteria. It's a framework to make quick, painless, and informed judgments so that you know whether it's worth pursuing.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Investability Rating: </strong>
                                                        Quick assessment to measure your potential to raise investment by analysing your performance across 5 key areas. Your unique score will reveal your personal strengths and weaknesses and deliver practical, actionable tips to improve your results and help you secure the funding you need.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Product Market Fit (PMF): </strong>
                                                        Assessing the entrepreneurs  vision of their product and the need in the market. Helping build solutions that customers want to buy whilst reducing risk.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Angel Investors: </strong>
                                                        Have VC experience, others pivot from being founders or operators themselves.
                                                        Investing in return for equity, and either put money in as individual investors or as part of a syndicate.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="builderparatext">
                                                        <strong> Idea Validation: </strong>
                                                        Quick assessment of your product, service, or business idea to determine viability against known criteria. It's a framework to make quick, painless, and informed judgments so that you know whether it's worth pursuing.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Investability Rating: </strong>
                                                        Quick assessment to measure your potential to raise investment by analysing your performance across 5 key areas. Your unique score will reveal your personal strengths and weaknesses and deliver practical, actionable tips to improve your results and help you secure the funding you need.
                                                    </p>
                                                </div>
                                            )}
                                            <span
                                                className="btn-show-more"
                                                onClick={() =>
                                                    setReadMore4(
                                                        !readMore4
                                                    )
                                                }
                                            >
                                                <div className="mt-20 mt-20-10">
                                                    {readMore4 ? <button className="btn btn-default fs-6">Show Less </button> : <button className="btn btn-default fs-6">Read More</button>}
                                                </div>
                                            </span>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </section>

                    <section className="section-box mt-75 mt-75-40">
                        <FullAccessButton />
                    </section>

                    <Subscription />
                </div >
            </Layout >
        </>
    );
}