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
                        <div className="banner-hero-businessbuilder bg-img-businessbuilder">
                            <div className="container d-flex align-items-center">
                                <div className="row">
                                    <div className="col">
                                        <h2 className="businessbuilder-hero-heading" style={{ marginBottom: '20px', fontSize: '60px' }}>Business Builder</h2>
                                        <p className="businessbuilder-hero-subheading color-text-paragraph-2 subheading-aboutus" style={{ fontSize: '24px', maxWidth: '835px', lineHeight: '30px' }}>
                                            Your enterprise starts with resources, tools and connections to deliver  reliable, consistent outcomes for you as an entrepreneur
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <BusinessBuilderCard />
                    </section>

                    <section className="section-box mt-75">
                        <YellowBanner />
                    </section>

                    <section className="section-box mt-75">
                        <div className="text-center">
                            <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp" style={{ fontSize: '40px' }}>Analyse & Improve Self including Idea Validation </h2>
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
                                            <iframe width="100%" height="450px" src="https://www.youtube.com/embed/-sQeREfZY-8" allowFullScreen style={{ border: '1px solid #ccc', borderRadius: '16px' }}></iframe>
                                        </div>
                                    </Grid>
                                    <Grid
                                        item
                                        className=""
                                        lg={6}
                                        sx={{ paddingLeft: { lg: "75px" } }}
                                    >
                                        <h2
                                            className=""
                                            style={{ marginBottom: "40px", fontSize: "36px !important" }}
                                        >
                                            Characteristics of Successful Entrepreneurs
                                        </h2>
                                        <div className="title-details-businessbuilder">
                                            {readMore3 ? (
                                                <div>
                                                    <p className="businessbuilderparatext">
                                                        Entrepreneurs acknowledge their first product may be far from perfect. Often this realisation comes at a large financial, of time & human cost.
                                                    </p>
                                                    <p className="businessbuilderparatext mt-30">
                                                        It is widely thought there are 7 key traits of an entrepreneur include a strong work ethic, passion and drive, risk-taking, resilience, innovation, adaptability, and networking and building relationships. By identifying these traits in yourself and working to develop them, you can set yourself up for success as an entrepreneur.
                                                    </p>
                                                    <p className="businessbuilderparatext mt-30">
                                                        Business success can take multiple attempts, with successful £billionaires going bankrupt 3.5 times. hibretOne Business Builder resources are a necessary part of improving startup success.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="businessbuilderparatext">
                                                        Entrepreneurs acknowledge their first product may be far from perfect. Often this realisation comes at a large financial, of time & human cost.
                                                    </p>
                                                    <p className="businessbuilderparatext mt-30">
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
                                    sx={{ display: { xs: "flex", md: "flex", lg: "none", marginBottom: '-20px' } }}
                                >
                                    <Grid item xs={12} md={12}>
                                        <h4
                                            className="businessbuilder-inner-heading"
                                        >
                                            Characteristics of Successful Entrepreneurs
                                        </h4>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <iframe width="100%" height="450px" src="https://www.youtube.com/embed/-sQeREfZY-8" allowFullScreen style={{ border: '1px solid #ccc', borderRadius: '16px' }} className="businessbuilder-video-laptop"></iframe>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                    <div className="title-details-businessbuilder">
                                            {readMore3 ? (
                                                <div>
                                                    <p className="businessbuilderparatext">
                                                        Entrepreneurs acknowledge their first product may be far from perfect. Often this realisation comes at a large financial, of time & human cost.
                                                    </p>
                                                    <p className="businessbuilderparatext mt-10">
                                                        It is widely thought there are 7 key traits of an entrepreneur include a strong work ethic, passion and drive, risk-taking, resilience, innovation, adaptability, and networking and building relationships. By identifying these traits in yourself and working to develop them, you can set yourself up for success as an entrepreneur.
                                                    </p>
                                                    <p className="businessbuilderparatext mt-10">
                                                        Business success can take multiple attempts, with successful £billionaires going bankrupt 3.5 times. hibretOne Business Builder resources are a necessary part of improving startup success.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="businessbuilderparatext">
                                                        Entrepreneurs acknowledge their first product may be far from perfect. Often this realisation comes at a large financial, of time & human cost.
                                                    </p>
                                                    <p className="businessbuilderparatext mt-10">
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
                            </div>
                        </div>
                    </section>



                    <section className="section-box mt-75">
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
                                            Building More Capable Entrepreneurs
                                        </h2>
                                        <div className="title-details-businessbuilder">
                                            {readMore1 ? (
                                                <div>
                                                    <p className="businessbuilderparatext">
                                                        <strong> Entrepreneur Assessments: </strong> Builder helps you assess your entrepreneurial potential, personality, skills and idea viability. You may be entrepreneurial, but your idea may not be. hibretOne gives you tools and the outcomes to objectively separate both.
                                                    </p>
                                                    <p className="businessbuilderparatext mt-30">
                                                        <strong> Entrepreneur Academy: </strong> Completing an Entrepreneur Accelerator is proven to improve startup success. A NatWest study showed over 80% of entrepreneurs who completed a programme are still trading 3 years on.
                                                    </p>
                                                    <p className="businessbuilderparatext mt-30">
                                                        <strong> Scholarships & Bursaries: </strong> Awarded on a set of entrepreneurial criteria, merit, equity and inclusion. Amazing scholarship supporters helping create more diverse business founders for a fairer world.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="businessbuilderparatext">
                                                        <strong> Entrepreneur Assessments: </strong> Builder helps you assess your entrepreneurial potential, personality, skills and idea viability. You may be entrepreneurial, but your idea may not be. hibretOne gives you tools and the outcomes to objectively separate both.
                                                    </p>
                                                    <p className="businessbuilderparatext mt-30">
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
                                    sx={{ display: { xs: "flex", md: "flex", lg: "none", marginTop: '-25px' } }}
                                >
                                    <Grid item xs={12} md={12} sx={{ marginBottom: "20px" }}>
                                        <h4 className="businessbuilder-inner-heading">
                                        Building More Capable Entrepreneurs
                                        </h4>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/business-builder/buildingmore.jpg"
                                            alt="joxBox"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                    <div className="title-details-businessbuilder">
                                            {readMore1 ? (
                                                <div>
                                                    <p className="businessbuilderparatext">
                                                        <strong> Entrepreneur Assessments: </strong> Builder helps you assess your entrepreneurial potential, personality, skills and idea viability. You may be entrepreneurial, but your idea may not be. hibretOne gives you tools and the outcomes to objectively separate both.
                                                    </p>
                                                    <p className="businessbuilderparatext mt-10">
                                                        <strong> Entrepreneur Academy: </strong> Completing an Entrepreneur Accelerator is proven to improve startup success. A NatWest study showed over 80% of entrepreneurs who completed a programme are still trading 3 years on.
                                                    </p>
                                                    <p className="businessbuilderparatext mt-10">
                                                        <strong> Scholarships & Bursaries: </strong> Awarded on a set of entrepreneurial criteria, merit, equity and inclusion. Amazing scholarship supporters helping create more diverse business founders for a fairer world.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="businessbuilderparatext">
                                                        <strong> Entrepreneur Assessments: </strong> Builder helps you assess your entrepreneurial potential, personality, skills and idea viability. You may be entrepreneurial, but your idea may not be. hibretOne gives you tools and the outcomes to objectively separate both.
                                                    </p>
                                                    <p className="businessbuilderparatext mt-10">
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
                                                <div className="mt-20">
                                                    {readMore1 ? <button className="btn btn-default fs-6">Show Less </button> : <button className="btn btn-default fs-6">Read More</button>}
                                                </div>
                                            </span>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </section>

                    <section className="section-box mt-75">
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
                                            src="assets/imgs/page/business-builder/buildingmoredesirable.jpg"
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
                                            Building More Desirable Products

                                        </h2>
                                        <div className="title-details-businessbuilder">
                                            {readMore4 ? (
                                                <div>
                                                    <p className="businessbuilderparatext">
                                                        <strong> Idea Validation: </strong>
                                                        Quick assessment of your product, service, or business idea to determine viability against known criteria. It's a framework to make quick, painless, and informed judgments so that you know whether it's worth pursuing.
                                                    </p>
                                                    <p className="businessbuilderparatext mt-30">
                                                        <strong> Investability Rating: </strong>
                                                        Quick assessment to measure your potential to raise investment by analysing your performance across 5 key areas. Your unique score will reveal your personal strengths and weaknesses and deliver practical, actionable tips to improve your results and help you secure the funding you need.
                                                    </p>
                                                    <p className="businessbuilderparatext mt-30">
                                                        <strong> Product Market Fit (PMF): </strong>
                                                        Assessing the entrepreneurs  vision of their product and the need in the market. Helping build solutions that customers want to buy whilst reducing risk.
                                                    </p>
                                                    <p className="businessbuilderparatext mt-30">
                                                        <strong> Angel Investors: </strong>
                                                        Have VC experience, others pivot from being founders or operators themselves.
                                                        Investing in return for equity, and either put money in as individual investors or as part of a syndicate.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="businessbuilderparatext">
                                                        <strong> Crowdfunding: </strong>
                                                        A large group of people invest individual amounts through a platform. Types of crowdfunding include: Equity crowdfunding, Rewards-based crowdfunding and Crowdlending.
                                                    </p>
                                                    <p className="businessbuilderparatext mt-30">
                                                        <strong> Revenue-based financing: </strong>
                                                        Technically a loan, which is repaid by promising the lender a percentage of the company’s future gross revenue over a set amount of time.
                                                    </p>
                                                    <p className="businessbuilderparatext mt-30">
                                                        <strong> Accelerators: </strong>
                                                        Accelerators: Choose a cohort of early-stage founders to take part in a development programme with mentorship. Participants in some can also get a cash injection for equity.
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
                                                {/* <div className="mt-20">
                                                    {readMore4 ? <button className="btn btn-default fs-6">Show Less </button> : <button className="btn btn-default fs-6">Read More</button>}
                                                </div> */}
                                            </span>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    alignItems="center"
                                    style={{ minWidth: "100%" }}
                                    sx={{ display: { xs: "flex", md: "flex", lg: "none", marginTop: '-25px' } }}
                                >
                                    <Grid item xs={12} md={12} sx={{ marginBottom: "20px" }}>
                                        <h4 className="businessbuilder-inner-heading">
                                        Building More Desirable Products
                                        </h4>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/business-builder/buildingmoredesirable.jpg"
                                            alt="joxBox"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <div className="title-details-businessbuilder">
                                            {readMore4 ? (
                                                <div>
                                                    <p className="businessbuilderparatext">
                                                        <strong> Crowdfunding: </strong>
                                                        A large group of people invest individual amounts through a platform. Types of crowdfunding include: Equity crowdfunding, Rewards-based crowdfunding and Crowdlending.
                                                    </p>
                                                    <p className="businessbuilderparatext mt-10">
                                                        <strong> Revenue-based financing: </strong>
                                                        Technically a loan, which is repaid by promising the lender a percentage of the company’s future gross revenue over a set amount of time.
                                                    </p>
                                                    <p className="businessbuilderparatext mt-10">
                                                        <strong> Accelerators: </strong>
                                                        Accelerators: Choose a cohort of early-stage founders to take part in a development programme with mentorship. Participants in some can also get a cash injection for equity.
                                                    </p>
                                                    <p className="businessbuilderparatext mt-10">
                                                        <strong> Angel Investors: </strong>
                                                        Have VC experience, others pivot from being founders or operators themselves.
                                                        Investing in return for equity, and either put money in as individual investors or as part of a syndicate.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="businessbuilderparatext">
                                                        <strong> Crowdfunding: </strong>
                                                        A large group of people invest individual amounts through a platform. Types of crowdfunding include: Equity crowdfunding, Rewards-based crowdfunding and Crowdlending.
                                                    </p>
                                                    <p className="businessbuilderparatext mt-10">
                                                        <strong> Revenue-based financing: </strong>
                                                        Technically a loan, which is repaid by promising the lender a percentage of the company’s future gross revenue over a set amount of time.
                                                    </p>
                                                    <p className="businessbuilderparatext mt-10">
                                                        <strong> Accelerators: </strong>
                                                        Accelerators: Choose a cohort of early-stage founders to take part in a development programme with mentorship. Participants in some can also get a cash injection for equity.
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
                            </div>
                        </div>
                    </section>

                 

                    <section className="section-box mt-0 mb-75">
                        <div className="post-loop-grid">
                            <div className="container"></div>
                        </div>
                    </section>

                    <FullAccessButton />
                    <Subscription />
                </div >
            </Layout >
        </>
    );
}