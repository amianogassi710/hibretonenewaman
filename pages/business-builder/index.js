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
                <div className="background-random-fundingbuilder">
                    <section className="section-box">
                        <label className="headingdivider1"></label>
                        <div className="banner-hero-fundingbuilder bg-img-fundingbuilder">
                            <div className="container d-flex align-items-center">
                                <div className="row">
                                    <div className="col">
                                        <h2 className="fundingbuilder-hero-heading" style={{ marginBottom: '20px', fontSize: '60px' }}>Business Builder</h2>
                                        <p className="fundingbuilder-hero-subheading color-text-paragraph-2 subheading-aboutus" style={{ fontSize: '24px', maxWidth: '835px', lineHeight: '30px' }}>
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
                                        <div className="title-details-fundingbuilder">
                                            {readMore3 ? (
                                                <div>
                                                    <p className="fundingbuilderparatext">
                                                        Entrepreneurs acknowledge their first product may be far from perfect. Often this realisation comes at a large financial, of time & human cost.
                                                    </p>
                                                    <p className="fundingbuilderparatext mt-30">
                                                        It is widely thought there are 7 key traits of an entrepreneur include a strong work ethic, passion and drive, risk-taking, resilience, innovation, adaptability, and networking and building relationships. By identifying these traits in yourself and working to develop them, you can set yourself up for success as an entrepreneur.
                                                    </p>
                                                    <p className="fundingbuilderparatext mt-30">
                                                        Business success can take multiple attempts, with successful £billionaires going bankrupt 3.5 times. hibretOne Business Builder resources are a necessary part of improving startup success.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="fundingbuilderparatext">
                                                        Entrepreneurs acknowledge their first product may be far from perfect. Often this realisation comes at a large financial, of time & human cost.
                                                    </p>
                                                    <p className="fundingbuilderparatext mt-30">
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
                                        <iframe width="100%" height="450px" src="https://www.youtube.com/embed/-sQeREfZY-8" allowFullScreen style={{ border: '1px solid #ccc', borderRadius: '16px' }} className="fundingbuilder-video-laptop"></iframe>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <div className="title-details-fundingbuilder">
                                            <p className="fundingbuilderparaheading" style={{ color: "#3C65F5" }}>
                                                Getting Prepared for Investment
                                            </p>
                                            <p className="fundingbuilderparatext">
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
                                            <p className="fundingbuilderparaheading mt-10" style={{ color: "#3AAB67" }}>
                                                Identifying Sources of Investment
                                            </p>
                                            <p className="fundingbuilderparatext">
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
                                            <p className="fundingbuilderparaheading mt-10" style={{ color: "#F58A3C" }}>
                                                Winning Investment
                                            </p>
                                            <p className="fundingbuilderparatext">
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
                                        <div className="title-details-fundingbuilder">
                                            {readMore1 ? (
                                                <div>
                                                    <p className="fundingbuilderparatext">
                                                        <strong> Entrepreneur Assessments: </strong> Builder helps you assess your entrepreneurial potential, personality, skills and idea viability. You may be entrepreneurial, but your idea may not be. hibretOne gives you tools and the outcomes to objectively separate both.
                                                    </p>
                                                    <p className="fundingbuilderparatext mt-30">
                                                        <strong> Entrepreneur Academy: </strong> Completing an Entrepreneur Accelerator is proven to improve startup success. A NatWest study showed over 80% of entrepreneurs who completed a programme are still trading 3 years on.
                                                    </p>
                                                    <p className="fundingbuilderparatext mt-30">
                                                        <strong> Scholarships & Bursaries: </strong> Awarded on a set of entrepreneurial criteria, merit, equity and inclusion. Amazing scholarship supporters helping create more diverse business founders for a fairer world.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="fundingbuilderparatext">
                                                        <strong> Entrepreneur Assessments: </strong> Builder helps you assess your entrepreneurial potential, personality, skills and idea viability. You may be entrepreneurial, but your idea may not be. hibretOne gives you tools and the outcomes to objectively separate both.
                                                    </p>
                                                    <p className="fundingbuilderparatext mt-30">
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
                                            src="assets/imgs/page/funding-builder/mostusedbusinessess.jpg"
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
                                        <h2 className="fundingbuilder-inner-heading">
                                            Most Used For Funding Businesses
                                        </h2>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/funding-builder/mostusedbusinessess.jpg"
                                            alt="joxBox"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <div className="title-details-fundingbuilder">
                                            {readMore1 ? (
                                                <div>
                                                    < p className="fundingbuilderparatext"> <strong> Friends, family and fools: </strong> As you know the people you’re pitching to, one of the perks of this type of funding is
                                                        that you don’t have to convince a jury of investors that you’re worth their time and money.
                                                    </p>
                                                    <p className="fundingbuilderparatext mt-10">
                                                        <strong> Bootstrapping: </strong> is when a startup is funded by the founding team themselves and then by revenue from the business,
                                                        without external capital.
                                                    </p>
                                                    <p className="fundingbuilderparatext mt-10">
                                                        <strong> Grants: </strong>  A form of non-dilutive funding where the money doesn’t require you to give up equity, or be paid back.
                                                        This is a common option for science-based startups and others with a social/impact mission.
                                                    </p>
                                                    <p className="fundingbuilderparatext mt-10">
                                                        <strong> Bank loans: </strong>  Can be difficult to secure for very early-stage startups. In the UK, founders can also apply for a &nbsp;
                                                        <u><a href="https://sifted.eu/articles/uk-business-loans-grants-startups">government-backed Start Up Loan</a></u>, which can provide up to £25k and offers 12 months of free mentoring, plus support
                                                        with writing a business plan.
                                                    </p>
                                                    <p className="fundingbuilderparatext mt-10">
                                                        <strong> R&D Tax Credits: </strong>  Research and Development (R&D) tax relief from the government to supports companies that work on
                                                        innovative projects in science and technology.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="fundingbuilderparatext"> <strong> Friends, family and fools: </strong> As you know the people you’re pitching to, one of the perks of this type of funding is
                                                        that you don’t have to convince a jury of investors that you’re worth their time and money.
                                                    </p>
                                                    <p className="fundingbuilderparatext mt-10">
                                                        <strong> Bootstrapping: </strong> is when a startup is funded by the founding team themselves and then by revenue from the business,
                                                        without external capital.
                                                    </p>
                                                    <p className="fundingbuilderparatext mt-10">
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
                                            src="assets/imgs/page/funding-builder/lessoften.jpg"
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
                                        <div className="title-details-fundingbuilder">
                                            {readMore4 ? (
                                                <div>
                                                    <p className="fundingbuilderparatext">
                                                        <strong> Idea Validation: </strong>
                                                        Quick assessment of your product, service, or business idea to determine viability against known criteria. It's a framework to make quick, painless, and informed judgments so that you know whether it's worth pursuing.
                                                    </p>
                                                    <p className="fundingbuilderparatext mt-30">
                                                        <strong> Investability Rating: </strong>
                                                        Quick assessment to measure your potential to raise investment by analysing your performance across 5 key areas. Your unique score will reveal your personal strengths and weaknesses and deliver practical, actionable tips to improve your results and help you secure the funding you need.
                                                    </p>
                                                    <p className="fundingbuilderparatext mt-30">
                                                        <strong> Product Market Fit (PMF): </strong>
                                                        Assessing the entrepreneurs  vision of their product and the need in the market. Helping build solutions that customers want to buy whilst reducing risk.
                                                    </p>
                                                    <p className="fundingbuilderparatext mt-30">
                                                        <strong> Angel Investors: </strong>
                                                        Have VC experience, others pivot from being founders or operators themselves.
                                                        Investing in return for equity, and either put money in as individual investors or as part of a syndicate.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="fundingbuilderparatext">
                                                        <strong> Crowdfunding: </strong>
                                                        A large group of people invest individual amounts through a platform. Types of crowdfunding include: Equity crowdfunding, Rewards-based crowdfunding and Crowdlending.
                                                    </p>
                                                    <p className="fundingbuilderparatext mt-30">
                                                        <strong> Revenue-based financing: </strong>
                                                        Technically a loan, which is repaid by promising the lender a percentage of the company’s future gross revenue over a set amount of time.
                                                    </p>
                                                    <p className="fundingbuilderparatext mt-30">
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
                                        <h2 className="fundingbuilder-inner-heading">
                                            Less Often Used for Funding
                                        </h2>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/funding-builder/lessoften.jpg"
                                            alt="joxBox"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <div className="title-details-fundingbuilder">
                                            {readMore4 ? (
                                                <div>
                                                    <p className="fundingbuilderparatext">
                                                        <strong> Crowdfunding: </strong>
                                                        A large group of people invest individual amounts through a platform. Types of crowdfunding include: Equity crowdfunding, Rewards-based crowdfunding and Crowdlending.
                                                    </p>
                                                    <p className="fundingbuilderparatext mt-10">
                                                        <strong> Revenue-based financing: </strong>
                                                        Technically a loan, which is repaid by promising the lender a percentage of the company’s future gross revenue over a set amount of time.
                                                    </p>
                                                    <p className="fundingbuilderparatext mt-10">
                                                        <strong> Accelerators: </strong>
                                                        Accelerators: Choose a cohort of early-stage founders to take part in a development programme with mentorship. Participants in some can also get a cash injection for equity.
                                                    </p>
                                                    <p className="fundingbuilderparatext mt-10">
                                                        <strong> Angel Investors: </strong>
                                                        Have VC experience, others pivot from being founders or operators themselves.
                                                        Investing in return for equity, and either put money in as individual investors or as part of a syndicate.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="fundingbuilderparatext">
                                                        <strong> Crowdfunding: </strong>
                                                        A large group of people invest individual amounts through a platform. Types of crowdfunding include: Equity crowdfunding, Rewards-based crowdfunding and Crowdlending.
                                                    </p>
                                                    <p className="fundingbuilderparatext mt-10">
                                                        <strong> Revenue-based financing: </strong>
                                                        Technically a loan, which is repaid by promising the lender a percentage of the company’s future gross revenue over a set amount of time.
                                                    </p>
                                                    <p className="fundingbuilderparatext mt-10">
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