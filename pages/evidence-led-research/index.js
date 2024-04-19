/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import Subscription from "../../components/Layout/Subscription";
import YellowBanner from "../../components/elements/YellowBanner";
import { Grid } from "@mui/material";
import FullAccessButton from "../../components/elements/FullAccessButton";
import EvidenceLedResearchSearchBar from "./EvidenceLedResearchSearchBar";
import { IoShareSocialOutline } from "react-icons/io5";
import Evidenceledresearchexplorecarousel from "./Evidenceledresearchexplorecarousel";


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
                <div className="background-random-evidenceledresearch">
                    <section className="section-box">
                        <div className="banner-hero-evidenceledresearch bg-img-businessbuilder-evidenceledresearch">
                            <div className="container d-flex align-items-center">
                                <div className="row">
                                    <div className="col">
                                        <h2 className="businessbuilder-hero-heading-evidenceledresearch" style={{ marginBottom: '20px', fontSize: '60px' }}>Evidence-led Research</h2>
                                        <p className="businessbuilder-hero-subheading-evidenceledresearch color-text-paragraph-evidenceledresearch subheading-aboutus" style={{ fontSize: '24px', maxWidth: '835px', lineHeight: '30px' }}>
                                            Leading global academic research is converted into a blueprint for change across economic, social and moral requirements                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section-box mt-50 mb-25">
                        <div className="container">
                            <div className="flex-container">
                                <div className="share-icon-container-evidenceledresearch">
                                    <IoShareSocialOutline className="share-icon-evidenceledresearch" />
                                </div>
                                <div className="text-center">
                                    <h2 className="section-title mb-10">
                                        Explore the Supporting Global Research
                                    </h2>
                                    <p className="font-lg fw-bold color-text-paragraph w-lg-50 mx-auto">
                                        Exploit your abilities, skillset and traits
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="banner-hero-evidenceledresearch-searchbar mt-25">
                            <div className="block-banner-evidenceled block-banner-evidenceled">
                                <EvidenceLedResearchSearchBar />
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
                                            Academic Research meets Action
                                        </h2>
                                        <div className="title-details-evidenceled">
                                            <div>
                                                <p className="paratext-evidenceled">
                                                    <strong> hibertOne working with research partners, is able to convert theory into practise to generate results for the economy.. </strong>
                                                </p>
                                                <p className="paratext-evidenceled mt-30">
                                                    Academic research created  by researchers, very often does not translate into actionable, measurable outcomes. Papers are written as part of a dissertation, because funding is available, or to appear as if  action is being taken. hibretOne takes a different approach and supports report authors to ensure their recommendations become a blurprint for economic success.
                                                </p>
                                                <p className="paratext-evidenceled mt-30">
                                                    Watch the video to understand the purpose of levelling-up. It’s not about driving the advantaged down, it’s using the research as evidence of the need to create opportunities for all.
                                                </p>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item lg={6} className="d-flex justify-content-center">
                                        <div className='grid__thumb w-img fix grid_thumb_height grid_thumb' style={{ aspectRatio: '0' }}>
                                            <iframe width="100%" height="450px" src="https://www.youtube.com/embed/71KXmZcHi24" allowFullScreen style={{ border: '1px solid #ccc', borderRadius: '16px' }}></iframe>
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
                                        <h4 className="inner-heading-evidenceled">
                                            Academic Research meets Action
                                        </h4>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <div className='grid__thumb w-img fix grid_thumb_height grid_thumb' style={{ aspectRatio: '0' }}>
                                            <iframe width="100%" height="450px" src="https://www.youtube.com/embed/71KXmZcHi24" allowFullScreen style={{ border: '1px solid #ccc', borderRadius: '16px' }}></iframe>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <div className="title-details-evidenceled">
                                            <div>
                                                <p className="paratext-evidenceled">
                                                    <strong> hibertOne working with research partners, is able to convert theory into practise to generate results for the economy.. </strong>
                                                </p>
                                                <p className="paratext-evidenceled mt-30">
                                                    Academic research created  by researchers, very often does not translate into actionable, measurable outcomes. Papers are written as part of a dissertation, because funding is available, or to appear as if  action is being taken. hibretOne takes a different approach and supports report authors to ensure their recommendations become a blurprint for economic success.
                                                </p>
                                                <p className="paratext-evidenceled mt-30">
                                                    Watch the video to understand the purpose of levelling-up. It’s not about driving the advantaged down, it’s using the research as evidence of the need to create opportunities for all.
                                                </p>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </section>

                    <section className="section-box mt-75">
                        <Evidenceledresearchexplorecarousel />
                    </section>

                    <section className="section-box mt-75">
                        <YellowBanner />
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
                                        <h4 className="inner-heading-evidenceled">
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