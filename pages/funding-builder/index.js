/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import Subscription from "../../components/Layout/Subscription";
import YellowBanner from "../../components/elements/YellowBanner";
import { Grid } from "@mui/material";
import FullAccessButton from "../../components/elements/FullAccessButton";
import FundingBuilderCard from "./FundingBuilderCard";

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
                        <div className="banner-hero-builder bg-img-fundingbuilder">
                            <div className="container d-flex align-items-center">
                                <div className="row">
                                    <div className="col">
                                        <div className="builder-hero-heading">Funding Builder</div>
                                        <div className="builder-hero-subheading">
                                            Resources,  tools and connections to deliver <span className="color-blue"> funding and investment </span> for your commercial or social enterprise
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <FundingBuilderCard />
                    </section>

                    <section className="section-box mt-75 mt-75-50">
                        <YellowBanner />
                    </section>

                    <section className="section-box mt-75 mt-75-50">
                        <div className="text-center">
                            <div className="section-heading-single">Funding: The Lifeblood of Business Startup & Survival</div>
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
                                            <iframe width="100%" height="450px" src="https://www.youtube.com/embed/CIoWgp020B0" allowFullScreen style={{ border: '1px solid #ccc', borderRadius: '16px' }}></iframe>
                                        </div>
                                    </Grid>
                                    <Grid
                                        item
                                        className=""
                                        lg={6}
                                        sx={{ paddingLeft: { lg: "75px" } }}
                                    >
                                        <div className="title-details-businessbuilder">
                                            <p className="builderparaheading" style={{ color: "#3C65F5" }}>
                                                Getting Prepared for Investment
                                            </p>
                                            <p className="builderparatext">
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
                                            <p className="builderparaheading mt-30" style={{ color: "#3AAB67" }}>
                                                Identifying Sources of Investment
                                            </p>
                                            <p className="builderparatext">
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
                                            <p className="builderparaheading mt-30" style={{ color: "#F58A3C" }}>
                                                Winning Investment
                                            </p>
                                            <p className="builderparatext">
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
                                <Grid
                                    container
                                    alignItems="center"
                                    style={{ minWidth: "100%" }}
                                    sx={{ display: { xs: "none", sm: "none", md: "flex", lg: "none" } }}
                                >
                                    <Grid item md={6} sx={{ paddingRight: { md: "30px" } }}>
                                        <div className='grid__thumb w-img fix grid_thumb_height grid_thumb' style={{ aspectRatio: '0' }}>
                                            <iframe width="100%" height="400px" src="https://www.youtube.com/embed/CIoWgp020B0" allowFullScreen style={{ border: '1px solid #ccc', borderRadius: '16px' }}></iframe>
                                        </div>
                                    </Grid>
                                    <Grid item md={6} sx={{ paddingLeft: { md: "30px" } }}>
                                        <div className="title-details-businessbuilder">
                                            <p className="builderparaheading" style={{ color: "#3C65F5" }}>
                                                Getting Prepared for Investment
                                            </p>
                                            <p className="builderparatext">
                                                {showMore1
                                                    ? "A Skynova study notes that 47% of startup failures in 2022 were due to a lack of financing, nearly double the percentage that failed for the same reason in 2021, based on CB Insight’s data. Raising funding is one of the most challenging times for a company. Access to funding is so competitive, additional advisor support is now almost compulsory."
                                                    : "A Skynova study notes that 47% of startup failures in 2022 were due to a lack of financing, nearly double the percentage that failed for the same reason in "}
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
                                            <p className="builderparaheading mt-30" style={{ color: "#3AAB67" }}>
                                                Identifying Sources of Investment
                                            </p>
                                            <p className="builderparatext">
                                                {showMore2
                                                    ? "Running a successful business requires more than just a great idea and a solid business plan. Adequate financing plays a crucial role in the growth and sustainability of any business, and understanding the various sources of finance available is essential for UK businesses. Kickstart your idea with grants if possible. although very competitive, grants and competitions are a low-cost way to prove your idea. "
                                                    : "Running a successful business requires more than just a great idea and a solid business plan. Adequate financing plays a crucial role in the growth and "}
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
                                            <p className="builderparaheading mt-30" style={{ color: "#F58A3C" }}>
                                                Winning Investment
                                            </p>
                                            <p className="builderparatext">
                                                {showMore3
                                                    ? "Due diligence. Making yourself stand out from the crowd is a must to ensure success! connect with the right partners who have experience in that area. Some Innovate UK Smart grant calls have a less than 3% success rate, whereas some organisations applying for Innovate UK grants have better than 50% success. They know what to right!"
                                                    : "Due diligence. Making yourself stand out from the crowd is a must to ensure success! connect with the right partners who have experience in that area. Some Innovate "}
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
                                <Grid
                                    container
                                    alignItems="center"
                                    style={{ minWidth: "100%" }}
                                    sx={{ display: { xs: "none", sm: "flex", md: "none", lg: "none" } }}
                                >
                                    <Grid item sm={12}>
                                        <div className='grid__thumb w-img fix grid_thumb_height grid_thumb' style={{ aspectRatio: '0' }}>
                                            <iframe width="100%" height="450px" src="https://www.youtube.com/embed/CIoWgp020B0" allowFullScreen style={{ border: '1px solid #ccc', borderRadius: '16px' }}></iframe>
                                        </div>
                                    </Grid>
                                    <Grid item sm={12} sx={{ paddingLeft: { md: "75px" } }}>
                                        <div className="title-details-builder mt-20 mt-20-10">
                                            <p className="builderparaheading" style={{ color: "#3C65F5" }}>
                                                Getting Prepared for Investment
                                            </p>
                                            <p className="builderparatext">
                                                {showMore1
                                                    ? "A Skynova study notes that 47% of startup failures in 2022 were due to a lack of financing, nearly double the percentage that failed for the same reason in 2021, based on CB Insight’s data. Raising funding is one of the most challenging times for a company. Access to funding is so competitive, additional advisor support is now almost compulsory."
                                                    : "A Skynova study notes that 47% of startup failures in 2022 were due to a lack of financing, nearly double the percentage that failed for the same reason in 2021, based on CB Insight’s data. Raising funding is one of the most challenging times for a company. Access to "}
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
                                            <p className="builderparaheading mt-30" style={{ color: "#3AAB67" }}>
                                                Identifying Sources of Investment
                                            </p>
                                            <p className="builderparatext">
                                                {showMore2
                                                    ? "Running a successful business requires more than just a great idea and a solid business plan. Adequate financing plays a crucial role in the growth and sustainability of any business, and understanding the various sources of finance available is essential for UK businesses. Kickstart your idea with grants if possible. although very competitive, grants and competitions are a low-cost way to prove your idea. "
                                                    : "Running a successful business requires more than just a great idea and a solid business plan. Adequate financing plays a crucial role in the growth and sustainability of any business, and understanding the various sources of finance available is essential for UK "}
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
                                            <p className="builderparaheading mt-30" style={{ color: "#F58A3C" }}>
                                                Winning Investment
                                            </p>
                                            <p className="builderparatext">
                                                {showMore3
                                                    ? "Due diligence. Making yourself stand out from the crowd is a must to ensure success! connect with the right partners who have experience in that area. Some Innovate UK Smart grant calls have a less than 3% success rate, whereas some organisations applying for Innovate UK grants have better than 50% success. They know what to right!"
                                                    : "Due diligence. Making yourself stand out from the crowd is a must to ensure success! connect with the right partners who have experience in that area. Some Innovate UK Smart grant calls have a less than 3% success rate, whereas some organisations applying "}
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
                                <Grid
                                    container
                                    alignItems="center"
                                    style={{ minWidth: "100%" }}
                                    sx={{ display: { xs: "flex", sm: "none", md: "none", lg: "none" } }}
                                >
                                    <Grid item xs={12}>
                                        <iframe width="100%" height="450px" src="https://www.youtube.com/embed/CIoWgp020B0" allowFullScreen style={{ border: '1px solid #ccc', borderRadius: '16px' }} className="builder-video"></iframe>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className="title-details-builder mt-20 mt-20-10">
                                            <p className="builderparaheading" style={{ color: "#3C65F5" }}>
                                                Getting Prepared for Investment
                                            </p>
                                            <p className="builderparatext">
                                                {showMore1
                                                    ? "A Skynova study notes that 47% of startup failures in 2022 were due to a lack of financing, nearly double the percentage that failed for the same reason in 2021, based on CB Insight’s data. Raising funding is one of the most challenging times for a company. Access to funding is so competitive, additional advisor support is now almost compulsory."
                                                    : "A Skynova study notes that 47% of startup failures in 2022 were due to a lack of financing, nearly double the percentage that failed for the same reason in 2021, based on CB Insight’s data. Raising "}
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
                                            <p className="builderparaheading mt-10" style={{ color: "#3AAB67" }}>
                                                Identifying Sources of Investment
                                            </p>
                                            <p className="builderparatext">
                                                {showMore2
                                                    ? "Running a successful business requires more than just a great idea and a solid business plan. Adequate financing plays a crucial role in the growth and sustainability of any business, and understanding the various sources of finance available is essential for UK businesses. Kickstart your idea with grants if possible. although very competitive, grants and competitions are a low-cost way to prove your idea. "
                                                    : "Running a successful business requires more than just a great idea and a solid business plan. Adequate financing plays a crucial role in the growth and sustainability of any business, and "}
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
                                            <p className="builderparaheading mt-10" style={{ color: "#F58A3C" }}>
                                                Winning Investment
                                            </p>
                                            <p className="builderparatext">
                                                {showMore3
                                                    ? "Due diligence. Making yourself stand out from the crowd is a must to ensure success! connect with the right partners who have experience in that area. Some Innovate UK Smart grant calls have a less than 3% success rate, whereas some organisations applying for Innovate UK grants have better than 50% success. They know what to right!"
                                                    : "Due diligence. Making yourself stand out from the crowd is a must to ensure success! connect with the right partners who have experience in that area. Some Innovate UK Smart grant calls have a less "}
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
                                            Most Used For Funding Businesses
                                        </div>
                                        <div className="title-details-builder">
                                            {readMore1 ? (
                                                <div>
                                                    < p className="builderparatext"> <strong> Friends, family and fools: </strong> As you know the people you’re pitching to, one of the perks of this type of funding is
                                                        that you don’t have to convince a jury of investors that you’re worth their time and money.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Bootstrapping: </strong> is when a startup is funded by the founding team themselves and then by revenue from the business,
                                                        without external capital.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Grants: </strong>  A form of non-dilutive funding where the money doesn’t require you to give up equity, or be paid back.
                                                        This is a common option for science-based startups and others with a social/impact mission.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Bank loans: </strong>  Can be difficult to secure for very early-stage startups. In the UK, founders can also apply for a &nbsp;
                                                        <u><a href="https://sifted.eu/articles/uk-business-loans-grants-startups">government-backed Start Up Loan</a></u>, which can provide up to £25k and offers 12 months of free mentoring, plus support
                                                        with writing a business plan.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> R&D Tax Credits: </strong>  Research and Development (R&D) tax relief from the government to supports companies that work on
                                                        innovative projects in science and technology.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="builderparatext"> <strong> Friends, family and fools: </strong> As you know the people you’re pitching to, one of the perks of this type of funding is
                                                        that you don’t have to convince a jury of investors that you’re worth their time and money.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Bootstrapping: </strong> is when a startup is funded by the founding team themselves and then by revenue from the business,
                                                        without external capital.
                                                    </p>
                                                    <p className="builderparatext mt-30">
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
                                    sx={{ display: { xs: "none", sm: "none", md: "flex", lg: "none" } }}
                                >
                                    <Grid item md={6} sx={{ paddingRight: { md: "30px" } }}>
                                        <div className="grid-content-heading">
                                            Most Used For Funding Businesses
                                        </div>
                                        <div className="title-details-builder">
                                            {readMore1 ? (
                                                <div>
                                                    < p className="builderparatext"> <strong> Friends, family and fools: </strong> As you know the people you’re pitching to, one of the perks of this type of funding is
                                                        that you don’t have to convince a jury of investors that you’re worth their time and money.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Bootstrapping: </strong> is when a startup is funded by the founding team themselves and then by revenue from the business,
                                                        without external capital.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Grants: </strong>  A form of non-dilutive funding where the money doesn’t require you to give up equity, or be paid back.
                                                        This is a common option for science-based startups and others with a social/impact mission.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Bank loans: </strong>  Can be difficult to secure for very early-stage startups. In the UK, founders can also apply for a &nbsp;
                                                        <u><a href="https://sifted.eu/articles/uk-business-loans-grants-startups">government-backed Start Up Loan</a></u>, which can provide up to £25k and offers 12 months of free mentoring, plus support
                                                        with writing a business plan.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> R&D Tax Credits: </strong>  Research and Development (R&D) tax relief from the government to supports companies that work on
                                                        innovative projects in science and technology.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="builderparatext"> <strong> Friends, family and fools: </strong> As you know the people you’re pitching to, one of the perks of this type of funding is
                                                        that you don’t have to convince a jury of investors that you’re worth their time and money.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Bootstrapping: </strong> is when a startup is funded by the founding team themselves and then by revenue from the business,
                                                        without external capital.
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
                                    <Grid md={6} sx={{ paddingLeft: { md: "30px" } }}>
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/funding-builder/mostusedbusinessess.jpg"
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
                                            Most Used For Funding Businesses
                                        </div>
                                    </Grid>
                                    <Grid item sm={12}>
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/funding-builder/mostusedbusinessess.jpg"
                                            alt="joxBox"
                                        />
                                    </Grid>
                                    <Grid item sm={12}>
                                        <div className="title-details-builder mt-20 mt-20-10">
                                            {readMore1 ? (
                                                <div>
                                                    < p className="builderparatext"> <strong> Friends, family and fools: </strong> As you know the people you’re pitching to, one of the perks of this type of funding is
                                                        that you don’t have to convince a jury of investors that you’re worth their time and money.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Bootstrapping: </strong> is when a startup is funded by the founding team themselves and then by revenue from the business,
                                                        without external capital.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Grants: </strong>  A form of non-dilutive funding where the money doesn’t require you to give up equity, or be paid back.
                                                        This is a common option for science-based startups and others with a social/impact mission.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Bank loans: </strong>  Can be difficult to secure for very early-stage startups. In the UK, founders can also apply for a &nbsp;
                                                        <u><a href="https://sifted.eu/articles/uk-business-loans-grants-startups">government-backed Start Up Loan</a></u>, which can provide up to £25k and offers 12 months of free mentoring, plus support
                                                        with writing a business plan.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> R&D Tax Credits: </strong>  Research and Development (R&D) tax relief from the government to supports companies that work on
                                                        innovative projects in science and technology.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="builderparatext"> <strong> Friends, family and fools: </strong> As you know the people you’re pitching to, one of the perks of this type of funding is
                                                        that you don’t have to convince a jury of investors that you’re worth their time and money.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Bootstrapping: </strong> is when a startup is funded by the founding team themselves and then by revenue from the business,
                                                        without external capital.
                                                    </p>
                                                    <p className="builderparatext mt-30">
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
                                                <div className="mt-20 mt-20-10 textaligncenter">
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
                                            Most Used For Funding Businesses
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/funding-builder/mostusedbusinessess.jpg"
                                            alt="joxBox"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className="title-details-builder mt-20 mt-20-10">
                                            {readMore1 ? (
                                                <div>
                                                    < p className="builderparatext"> <strong> Friends, family and fools: </strong> As you know the people you’re pitching to, one of the perks of this type of funding is
                                                        that you don’t have to convince a jury of investors that you’re worth their time and money.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        <strong> Bootstrapping: </strong> is when a startup is funded by the founding team themselves and then by revenue from the business,
                                                        without external capital.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        <strong> Grants: </strong>  A form of non-dilutive funding where the money doesn’t require you to give up equity, or be paid back.
                                                        This is a common option for science-based startups and others with a social/impact mission.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        <strong> Bank loans: </strong>  Can be difficult to secure for very early-stage startups. In the UK, founders can also apply for a &nbsp;
                                                        <u><a href="https://sifted.eu/articles/uk-business-loans-grants-startups">government-backed Start Up Loan</a></u>, which can provide up to £25k and offers 12 months of free mentoring, plus support
                                                        with writing a business plan.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        <strong> R&D Tax Credits: </strong>  Research and Development (R&D) tax relief from the government to supports companies that work on
                                                        innovative projects in science and technology.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="builderparatext"> <strong> Friends, family and fools: </strong> As you know the people you’re pitching to, one of the perks of this type of funding is
                                                        that you don’t have to convince a jury of investors that you’re worth their time and money.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        <strong> Bootstrapping: </strong> is when a startup is funded by the founding team themselves and then by revenue from the business,
                                                        without external capital.
                                                    </p>
                                                    <p className="builderparatext mt-10">
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
                                                <div className="mt-20 mt-20-10 textaligncenter">
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
                                        <div className="grid-content-heading">
                                            Less Often Used for Funding
                                        </div>
                                        <div className="title-details-builder">
                                            {readMore4 ? (
                                                <div>
                                                    <p className="builderparatext">
                                                        <strong> Crowdfunding: </strong>
                                                        A large group of people invest individual amounts through a platform. Types of crowdfunding include: Equity crowdfunding, Rewards-based crowdfunding and Crowdlending.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Revenue-based financing: </strong>
                                                        Technically a loan, which is repaid by promising the lender a percentage of the company’s future gross revenue over a set amount of time.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Accelerators: </strong>
                                                        Choose a cohort of early-stage founders to take part in a development programme with mentorship. Participants in some can also get a cash injection for equity.
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
                                                        <strong> Crowdfunding: </strong>
                                                        A large group of people invest individual amounts through a platform. Types of crowdfunding include: Equity crowdfunding, Rewards-based crowdfunding and Crowdlending.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Revenue-based financing: </strong>
                                                        Technically a loan, which is repaid by promising the lender a percentage of the company’s future gross revenue over a set amount of time.
                                                    </p>
                                                    <p className="builderparatext mt-30">
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
                                <Grid
                                    container
                                    alignItems="center"
                                    style={{ minWidth: "100%" }}
                                    sx={{ display: { xs: "none", sm: "none", md: "flex", lg: "none" } }}
                                >
                                    <Grid item md={6} sx={{ paddingRight: { md: "30px" } }}>
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/funding-builder/lessoften.jpg"
                                            alt="joxBox"
                                            style={{ height: '400px' }}
                                        />
                                    </Grid>
                                    <Grid item md={6} sx={{ paddingLeft: { md: "30px" } }}>
                                        <div className="grid-content-heading">
                                            Less Often Used for Funding
                                        </div>
                                        <div className="title-details-builder">
                                            {readMore4 ? (
                                                <div>
                                                    <p className="builderparatext">
                                                        <strong> Crowdfunding: </strong>
                                                        A large group of people invest individual amounts through a platform. Types of crowdfunding include: Equity crowdfunding, Rewards-based crowdfunding and Crowdlending.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Revenue-based financing: </strong>
                                                        Technically a loan, which is repaid by promising the lender a percentage of the company’s future gross revenue over a set amount of time.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Accelerators: </strong>
                                                        Choose a cohort of early-stage founders to take part in a development programme with mentorship. Participants in some can also get a cash injection for equity.
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
                                                        <strong> Crowdfunding: </strong>
                                                        A large group of people invest individual amounts through a platform. Types of crowdfunding include: Equity crowdfunding, Rewards-based crowdfunding and Crowdlending.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Revenue-based financing: </strong>
                                                        Technically a loan, which is repaid by promising the lender a percentage of the company’s future gross revenue over a set amount of time.
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
                                    sx={{ display: { xs: "none", sm: "flex", md: "none", lg: "none" } }}
                                >
                                    <Grid item sm={12}>
                                        <div className="grid-content-heading">
                                            Less Often Used for Funding
                                        </div>
                                    </Grid>
                                    <Grid item sm={12} sx={{ paddingLeft: { md: "75px" } }}>
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/funding-builder/lessoften.jpg"
                                            alt="joxBox"
                                        />
                                        <div className="title-details-builder mt-20 mt-20-10">
                                            {readMore4 ? (
                                                <div>
                                                    <p className="builderparatext">
                                                        <strong> Crowdfunding: </strong>
                                                        A large group of people invest individual amounts through a platform. Types of crowdfunding include: Equity crowdfunding, Rewards-based crowdfunding and Crowdlending.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Revenue-based financing: </strong>
                                                        Technically a loan, which is repaid by promising the lender a percentage of the company’s future gross revenue over a set amount of time.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Accelerators: </strong>
                                                        Choose a cohort of early-stage founders to take part in a development programme with mentorship. Participants in some can also get a cash injection for equity.
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
                                                        <strong> Crowdfunding: </strong>
                                                        A large group of people invest individual amounts through a platform. Types of crowdfunding include: Equity crowdfunding, Rewards-based crowdfunding and Crowdlending.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Revenue-based financing: </strong>
                                                        Technically a loan, which is repaid by promising the lender a percentage of the company’s future gross revenue over a set amount of time.
                                                    </p>
                                                    <p className="builderparatext mt-30">
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
                                                <div className="mt-20 mt-20-10 textaligncenter">
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
                                        <h4 className="grid-content-heading">
                                            Less Often Used for Funding
                                        </h4>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/funding-builder/lessoften.jpg"
                                            alt="joxBox"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className="title-details-builder mt-20 mt-20-10">
                                            {readMore4 ? (
                                                <div>
                                                    <p className="builderparatext">
                                                        <strong> Crowdfunding: </strong>
                                                        A large group of people invest individual amounts through a platform. Types of crowdfunding include: Equity crowdfunding, Rewards-based crowdfunding and Crowdlending.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        <strong> Revenue-based financing: </strong>
                                                        Technically a loan, which is repaid by promising the lender a percentage of the company’s future gross revenue over a set amount of time.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        <strong> Accelerators: </strong>
                                                        Choose a cohort of early-stage founders to take part in a development programme with mentorship. Participants in some can also get a cash injection for equity.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        <strong> Angel Investors: </strong>
                                                        Have VC experience, others pivot from being founders or operators themselves.
                                                        Investing in return for equity, and either put money in as individual investors or as part of a syndicate.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="builderparatext">
                                                        <strong> Crowdfunding: </strong>
                                                        A large group of people invest individual amounts through a platform. Types of crowdfunding include: Equity crowdfunding, Rewards-based crowdfunding and Crowdlending.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        <strong> Revenue-based financing: </strong>
                                                        Technically a loan, which is repaid by promising the lender a percentage of the company’s future gross revenue over a set amount of time.
                                                    </p>
                                                    <p className="builderparatext mt-10">
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
                                                <div className="mt-20 mt-20-10 textaligncenter">
                                                    {readMore4 ? <button className="btn btn-default fs-6">Show Less </button> : <button className="btn btn-default fs-6">Read More</button>}
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
                                            Even Less Often Used
                                        </div>
                                        <div className="title-details-builder">
                                            {readMore2 ? (
                                                <div>
                                                    <p className="builderparatext">
                                                        <strong> VC funding: </strong>
                                                        A venture capital firm will hand over cash in return for equity. VC is typically the most popular type of funding because the cheques tend to be larger than with other options.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Venture debt: </strong>
                                                        Has to be paid back, rather than exchanged for equity. This type of funding can be helpful to supplement funding in between equity rounds.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Convertible loan notes: </strong>
                                                        Sits between borrowing and equity. A startup loans money and if it isn’t paid back by a set maturity date, it converts into equity.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Revenue-based financing: </strong>
                                                        Technically a loan repaid by promising the lender a percentage of future gross revenue over a set time. No assets required as collateral, unlike a bank loan.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="builderparatext">
                                                        <strong> VC funding: </strong>
                                                        A venture capital firm will hand over cash in return for equity. VC is typically the most popular type of funding because the cheques tend to be larger than with other options.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Venture debt: </strong>
                                                        Has to be paid back, rather than exchanged for equity. This type of funding can be helpful to supplement funding in between equity rounds.
                                                    </p>
                                                    <p className="builderparatext mt-30">
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
                                    <Grid item lg={6} className="d-flex justify-content-center">
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/funding-builder/evenlessoften.jpg"
                                            alt="joxBox"
                                            style={{ border: '1px solid lightgrey' }}
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
                                            Even Less Often Used
                                        </div>
                                        <div className="title-details-builder mt-20 mt-20-10">
                                            {readMore2 ? (
                                                <div>
                                                    <p className="builderparatext">
                                                        <strong> VC funding: </strong>
                                                        A venture capital firm will hand over cash in return for equity. VC is typically the most popular type of funding because the cheques tend to be larger than with other options.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Venture debt: </strong>
                                                        Has to be paid back, rather than exchanged for equity. This type of funding can be helpful to supplement funding in between equity rounds.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Convertible loan notes: </strong>
                                                        Sits between borrowing and equity. A startup loans money and if it isn’t paid back by a set maturity date, it converts into equity.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Revenue-based financing: </strong>
                                                        Technically a loan repaid by promising the lender a percentage of future gross revenue over a set time. No assets required as collateral, unlike a bank loan.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="builderparatext">
                                                        <strong> VC funding: </strong>
                                                        A venture capital firm will hand over cash in return for equity. VC is typically the most popular type of funding because the cheques tend to be larger than with other options.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Venture debt: </strong>
                                                        Has to be paid back, rather than exchanged for equity. This type of funding can be helpful to supplement funding in between equity rounds.
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
                                                <div className="mt-20 mt-20-10">
                                                    {readMore2 ? <button className="btn btn-default fs-6">Show Less </button> : <button className="btn btn-default fs-6">Read More</button>}
                                                </div>
                                            </span>
                                        </div>
                                    </Grid>
                                    <Grid md={6} sx={{ paddingLeft: { md: "30px" } }}>
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/funding-builder/evenlessoften.jpg"
                                            alt="joxBox"
                                            style={{ border: '1px solid lightgrey', height: '400px' }}
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
                                            Even Less Often Used
                                        </div>
                                    </Grid>
                                    <Grid item sm={12}>
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/funding-builder/evenlessoften.jpg"
                                            alt="joxBox"
                                            style={{ border: '1px solid lightgrey' }}
                                        />
                                    </Grid>
                                    <Grid item sm={12}>
                                        <div className="title-details-builder mt-20 mt-20-10">
                                            {readMore2 ? (
                                                <div>
                                                    <p className="builderparatext">
                                                        <strong> VC funding: </strong>
                                                        A venture capital firm will hand over cash in return for equity. VC is typically the most popular type of funding because the cheques tend to be larger than with other options.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Venture debt: </strong>
                                                        Has to be paid back, rather than exchanged for equity. This type of funding can be helpful to supplement funding in between equity rounds.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Convertible loan notes: </strong>
                                                        Sits between borrowing and equity. A startup loans money and if it isn’t paid back by a set maturity date, it converts into equity.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Revenue-based financing: </strong>
                                                        Technically a loan repaid by promising the lender a percentage of future gross revenue over a set time. No assets required as collateral, unlike a bank loan.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="builderparatext">
                                                        <strong> VC funding: </strong>
                                                        A venture capital firm will hand over cash in return for equity. VC is typically the most popular type of funding because the cheques tend to be larger than with other options.
                                                    </p>
                                                    <p className="builderparatext mt-30">
                                                        <strong> Venture debt: </strong>
                                                        Has to be paid back, rather than exchanged for equity. This type of funding can be helpful to supplement funding in between equity rounds.
                                                    </p>
                                                    <p className="builderparatext mt-30">
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
                                                <div className="mt-20 mt-20-10 textaligncenter">
                                                    {readMore2 ? <button className="btn btn-default fs-6">Show Less </button> : <button className="btn btn-default fs-6">Read More</button>}
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
                                            Even Less Often Used
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/funding-builder/evenlessoften.jpg"
                                            alt="joxBox"
                                            style={{ border: '1px solid lightgrey' }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className="title-details-builder mt-20 mt-20-10">
                                            {readMore2 ? (
                                                <div>
                                                    <p className="builderparatext">
                                                        <strong> VC funding: </strong>
                                                        A venture capital firm will hand over cash in return for equity. VC is typically the most popular type of funding because the cheques tend to be larger than with other options.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        <strong> Venture debt: </strong>
                                                        Has to be paid back, rather than exchanged for equity. This type of funding can be helpful to supplement funding in between equity rounds.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        <strong> Convertible loan notes: </strong>
                                                        Sits between borrowing and equity. A startup loans money and if it isn’t paid back by a set maturity date, it converts into equity.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        <strong> Revenue-based financing: </strong>
                                                        Technically a loan repaid by promising the lender a percentage of future gross revenue over a set time. No assets required as collateral, unlike a bank loan.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="builderparatext">
                                                        <strong> VC funding: </strong>
                                                        A venture capital firm will hand over cash in return for equity. VC is typically the most popular type of funding because the cheques tend to be larger than with other options.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        <strong> Venture debt: </strong>
                                                        Has to be paid back, rather than exchanged for equity. This type of funding can be helpful to supplement funding in between equity rounds.
                                                    </p>
                                                    <p className="builderparatext mt-10">
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
                                                <div className="mt-20 mt-20-10 textaligncenter">
                                                    {readMore2 ? <button className="btn btn-default fs-6">Show Less </button> : <button className="btn btn-default fs-6">Read More</button>}
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
                                            src="assets/imgs/page/funding-builder/resources.jpg"
                                            alt="joxBox"
                                            style={{ border: '1px solid lightgrey' }}
                                        />
                                    </Grid>
                                    <Grid item lg={6} sx={{ paddingLeft: { lg: "75px" } }}>
                                        <div className="grid-content-heading">
                                            Resources to Improve Finance Access
                                        </div>
                                        <div className="title-details-builder">
                                            {readMore3 ? (
                                                <div>
                                                    <p className="builderparatext mt-10">
                                                        A range of evidence-led tools all created in response to business owner demand. Our tools are continuously being added to and amended to improve business success. As hibretOne knows running a successful business requires more than just a great idea, entrepreneurial drive and a solid business plan.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        Raising and accessing funding is one of the most challenging times for a company. hibretOne is putting in place funding resources which will provide grant funding and equity investment. At the same time making connections for you to alternative funding providers, who as hibretOne partners, we know will be able to support your enterprise.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        Checkout  our Funding Builder tools to see how they will empower your business.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="builderparatext mt-10">
                                                        A range of evidence-led tools all created in response to business owner demand. Our tools are continuously being added to and amended to improve business success. As hibretOne knows running a successful business requires more than just a great idea, entrepreneurial drive and a solid business plan.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        Raising and accessing funding is one of the most challenging times for a company. hibretOne is putting in place funding resources which will provide grant funding and equity investment.
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
                                    <Grid item md={6} sx={{ paddingRight: { md: "30px" } }}>
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/funding-builder/resources.jpg"
                                            alt="joxBox"
                                            style={{ border: '1px solid lightgrey', height: '400px' }}
                                        />
                                    </Grid>
                                    <Grid item md={6} sx={{ paddingLeft: { md: "30px" } }}>
                                        <div className="grid-content-heading">
                                            Resources to Improve Finance Access
                                        </div>
                                        <div className="title-details-builder mt-20 mt-20-10">
                                            {readMore3 ? (
                                                <div>
                                                    <p className="builderparatext mt-10">
                                                        A range of evidence-led tools all created in response to business owner demand. Our tools are continuously being added to and amended to improve business success. As hibretOne knows running a successful business requires more than just a great idea, entrepreneurial drive and a solid business plan.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        Raising and accessing funding is one of the most challenging times for a company. hibretOne is putting in place funding resources which will provide grant funding and equity investment. At the same time making connections for you to alternative funding providers, who as hibretOne partners, we know will be able to support your enterprise.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        Checkout  our Funding Builder tools to see how they will empower your business.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="builderparatext mt-10">
                                                        A range of evidence-led tools all created in response to business owner demand. Our tools are continuously being added to and amended to improve business success. As hibretOne knows running a successful business requires more than just a great idea, entrepreneurial drive and a solid business plan.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        Raising and accessing funding is one of the most challenging times for a company. hibretOne is putting in place funding resources which will provide grant funding.
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
                                            Resources to Improve Finance Access
                                        </div>
                                    </Grid>
                                    <Grid item sm={12} sx={{ paddingLeft: { md: "75px" } }}>
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/funding-builder/resources.jpg"
                                            alt="joxBox"
                                            style={{ border: '1px solid lightgrey' }}
                                        />
                                        <div className="title-details-builder">
                                            {readMore3 ? (
                                                <div>
                                                    <p className="builderparatext mt-10">
                                                        A range of evidence-led tools all created in response to business owner demand. Our tools are continuously being added to and amended to improve business success. As hibretOne knows running a successful business requires more than just a great idea, entrepreneurial drive and a solid business plan.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        Raising and accessing funding is one of the most challenging times for a company. hibretOne is putting in place funding resources which will provide grant funding and equity investment. At the same time making connections for you to alternative funding providers, who as hibretOne partners, we know will be able to support your enterprise.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        Checkout  our Funding Builder tools to see how they will empower your business.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="builderparatext mt-10">
                                                        A range of evidence-led tools all created in response to business owner demand. Our tools are continuously being added to and amended to improve business success. As hibretOne knows running a successful business requires more than just a great idea, entrepreneurial drive and a solid business plan.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        Raising and accessing funding is one of the most challenging times for a company. hibretOne is putting in place funding resources which will provide grant funding and equity investment.
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
                                                <div className="mt-20 mt-20-10 textaligncenter">
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
                                        <h4 className="grid-content-heading">
                                            Resources to Improve Finance Access
                                        </h4>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/funding-builder/resources.jpg"
                                            alt="joxBox"
                                            style={{ border: '1px solid lightgrey' }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className="title-details-builder mt-20 mt-20-10">
                                            {readMore3 ? (
                                                <div>
                                                    <p className="builderparatext">
                                                        A range of evidence-led tools all created in response to business owner demand. Our tools are continuously being added to and amended to improve business success. As hibretOne knows running a successful business requires more than just a great idea, entrepreneurial drive and a solid business plan.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        Raising and accessing funding is one of the most challenging times for a company. hibretOne is putting in place funding resources which will provide grant funding and equity investment. At the same time making connections for you to alternative funding providers, who as hibretOne partners, we know will be able to support your enterprise.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        Checkout  our Funding Builder tools to see how they will empower your business.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="builderparatext">
                                                        A range of evidence-led tools all created in response to business owner demand. Our tools are continuously being added to and amended to improve business success. As hibretOne knows running a successful business requires more than just a great idea, entrepreneurial drive and a solid business plan.
                                                    </p>
                                                    <p className="builderparatext mt-10">
                                                        Raising and accessing funding is one of the most challenging times for a company. hibretOne is putting in place funding resources which will provide grant funding and equity investment.
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
                                                <div className="mt-20 mt-20-10 textaligncenter">
                                                    {readMore3 ? <button className="btn btn-default fs-6">Show Less </button> : <button className="btn btn-default fs-6">Read More</button>}
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