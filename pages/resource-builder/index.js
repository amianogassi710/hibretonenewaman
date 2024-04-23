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
                                            Resources for side-hustlers to startups  to scaleups...
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
                                        <iframe width="100%" height="450px" src="https://www.youtube.com/embed/8bu1Ltpeiu4" allowFullScreen style={{ border: '1px solid #ccc', borderRadius: '16px' }} className="resourcebuilder-video-laptop"></iframe>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <div className="title-details-resourcebuilder">
                                            <p className="resourcebuilderparaheading" style={{ color: "#3C65F5" }}>
                                                Getting Prepared for Investment
                                            </p>
                                            <p className="resourcebuilderparatext">
                                                {showMore1
                                                    ? "A Skynova study notes that 47% of startup failures in 2022 were due to a lack of financing, nearly double the percentage that failed for the same reason in 2021, based on CB Insight’s data. Raising funding is one of the most challenging times for a company. Access to funding is so competitive, additional advisor support is now almost compulsory."
                                                    : "A Skynova study notes that 47% of startup failures in 2022 were due to a lack of financing, nearly double the percentage that failed for the same reason in 2021, based on CB Insight’s data. Raising funding is one of the most "}
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
                                            <p className="resourcebuilderparaheading mt-10" style={{ color: "#3AAB67" }}>
                                                Identifying Sources of Investment
                                            </p>
                                            <p className="resourcebuilderparatext">
                                                {showMore2
                                                    ? "Running a successful business requires more than just a great idea and a solid business plan. Adequate financing plays a crucial role in the growth and sustainability of any business, and understanding the various sources of finance available is essential for UK businesses. Kickstart your idea with grants if possible. although very competitive, grants and competitions are a low-cost way to prove your idea. "
                                                    : "Running a successful business requires more than just a great idea and a solid business plan. Adequate financing plays a crucial role in the growth and sustainability of any business, and understanding the various "}
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
                                            <p className="resourcebuilderparaheading mt-10" style={{ color: "#F58A3C" }}>
                                                Winning Investment
                                            </p>
                                            <p className="resourcebuilderparatext">
                                                {showMore3
                                                    ? "Due diligence. Making yourself stand out from the crowd is a must to ensure success! connect with the right partners who have experience in that area. Some Innovate UK Smart grant calls have a less than 3% success rate, whereas some organisations applying for Innovate UK grants have better than 50% success. They know what to right!"
                                                    : "Due diligence. Making yourself stand out from the crowd is a must to ensure success! connect with the right partners who have experience in that area. Some Innovate UK Smart grant calls have a less than "}
                                                <button
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
                                            Most Used For Funding Businesses
                                        </h4>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/funding-builder/mostusedbusinessess.jpg"
                                            alt="joxBox"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <div className="title-details-resourcebuilder">
                                            {readMore1 ? (
                                                <div>
                                                    < p className="resourcebuilderparatext"> <strong> Friends, family and fools: </strong> As you know the people you’re pitching to, one of the perks of this type of funding is
                                                        that you don’t have to convince a jury of investors that you’re worth their time and money.
                                                    </p>
                                                    <p className="resourcebuilderparatext mt-10">
                                                        <strong> Bootstrapping: </strong> is when a startup is funded by the founding team themselves and then by revenue from the business,
                                                        without external capital.
                                                    </p>
                                                    <p className="resourcebuilderparatext mt-10">
                                                        <strong> Grants: </strong>  A form of non-dilutive funding where the money doesn’t require you to give up equity, or be paid back.
                                                        This is a common option for science-based startups and others with a social/impact mission.
                                                    </p>
                                                    <p className="resourcebuilderparatext mt-10">
                                                        <strong> Bank loans: </strong>  Can be difficult to secure for very early-stage startups. In the UK, founders can also apply for a &nbsp;
                                                        <u><a href="https://sifted.eu/articles/uk-business-loans-grants-startups">government-backed Start Up Loan</a></u>, which can provide up to £25k and offers 12 months of free mentoring, plus support
                                                        with writing a business plan.
                                                    </p>
                                                    <p className="resourcebuilderparatext mt-10">
                                                        <strong> R&D Tax Credits: </strong>  Research and Development (R&D) tax relief from the government to supports companies that work on
                                                        innovative projects in science and technology.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="resourcebuilderparatext"> <strong> Friends, family and fools: </strong> As you know the people you’re pitching to, one of the perks of this type of funding is
                                                        that you don’t have to convince a jury of investors that you’re worth their time and money.
                                                    </p>
                                                    <p className="resourcebuilderparatext mt-10">
                                                        <strong> Bootstrapping: </strong> is when a startup is funded by the founding team themselves and then by revenue from the business,
                                                        without external capital.
                                                    </p>
                                                    <p className="resourcebuilderparatext mt-10">
                                                        <strong> Grants: </strong>  A form of non-dilutive funding where the money doesn’t require you to give up equity, or be paid back.
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
                                            Less Often Used for Funding
                                        </h4>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/funding-builder/lessoften.jpg"
                                            alt="joxBox"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <div className="title-details-resourcebuilder">
                                            {readMore4 ? (
                                                <div>
                                                    <p className="resourcebuilderparatext">
                                                        <strong> Crowdfunding: </strong>
                                                        A large group of people invest individual amounts through a platform. Types of crowdfunding include: Equity crowdfunding, Rewards-based crowdfunding and Crowdlending.
                                                    </p>
                                                    <p className="resourcebuilderparatext mt-10">
                                                        <strong> Revenue-based financing: </strong>
                                                        Technically a loan, which is repaid by promising the lender a percentage of the company’s future gross revenue over a set amount of time.
                                                    </p>
                                                    <p className="resourcebuilderparatext mt-10">
                                                        <strong> Accelerators: </strong>
                                                        Choose a cohort of early-stage founders to take part in a development programme with mentorship. Participants in some can also get a cash injection for equity.
                                                    </p>
                                                    <p className="resourcebuilderparatext mt-10">
                                                        <strong> Angel Investors: </strong>
                                                        Have VC experience, others pivot from being founders or operators themselves.
                                                        Investing in return for equity, and either put money in as individual investors or as part of a syndicate.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="resourcebuilderparatext">
                                                        <strong> Crowdfunding: </strong>
                                                        A large group of people invest individual amounts through a platform. Types of crowdfunding include: Equity crowdfunding, Rewards-based crowdfunding and Crowdlending.
                                                    </p>
                                                    <p className="resourcebuilderparatext mt-10">
                                                        <strong> Revenue-based financing: </strong>
                                                        Technically a loan, which is repaid by promising the lender a percentage of the company’s future gross revenue over a set amount of time.
                                                    </p>
                                                    <p className="resourcebuilderparatext mt-10">
                                                        <strong> Accelerators: </strong>
                                                        Choose a cohort of early-stage founders to take part in a development programme with mentorship. Participants in some can also get a cash injection for equity.
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
                                            Even Less Often Used
                                        </h4>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <img
                                            className="imagecontentwithborder"
                                            src="assets/imgs/page/funding-builder/evenlessoften.jpg"
                                            alt="joxBox"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <div className="title-details-resourcebuilder">
                                            {readMore2 ? (
                                                <div>
                                                    <p className="resourcebuilderparatext">
                                                        <strong> VC funding: </strong>
                                                        A venture capital firm will hand over cash in return for equity. VC is typically the most popular type of funding because the cheques tend to be larger than with other options.
                                                    </p>
                                                    <p className="resourcebuilderparatext mt-10">
                                                        <strong> Venture debt: </strong>
                                                        Has to be paid back, rather than exchanged for equity. This type of funding can be helpful to supplement funding in between equity rounds.
                                                    </p>
                                                    <p className="resourcebuilderparatext mt-10">
                                                        <strong> Convertible loan notes: </strong>
                                                        Sits between borrowing and equity. A startup loans money and if it isn’t paid back by a set maturity date, it converts into equity.
                                                    </p>
                                                    <p className="resourcebuilderparatext mt-10">
                                                        <strong> Revenue-based financing: </strong>
                                                        Technically a loan repaid by promising the lender a percentage of future gross revenue over a set time. No assets required as collateral, unlike a bank loan.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="resourcebuilderparatext">
                                                        <strong> VC funding: </strong>
                                                        A venture capital firm will hand over cash in return for equity. VC is typically the most popular type of funding because the cheques tend to be larger than with other options.
                                                    </p>
                                                    <p className="resourcebuilderparatext mt-10">
                                                        <strong> Venture debt: </strong>
                                                        Has to be paid back, rather than exchanged for equity. This type of funding can be helpful to supplement funding in between equity rounds.
                                                    </p>
                                                    <p className="resourcebuilderparatext mt-10">
                                                        <strong> Convertible loan notes: </strong>
                                                        Sits between borrowing and equity. A startup loans money and if it isn’t paid back by a set maturity date, it converts into equity.
                                                    </p>
                                                </div>
                                            )}
                                            <span
                                                className="btn-show-more"
                                                onClick={() =>
                                                    setReadMore2(
                                                        !readMore2
                                                    )
                                                }
                                            >
                                                <div className="mt-20">

                                                    {readMore2 ? <button className="btn btn-default fs-6">Show Less </button> : <button className="btn btn-default fs-6">Read More</button>}
                                                </div>
                                            </span>
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