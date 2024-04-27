/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import Subscription from "../../components/Layout/Subscription";
import YellowBanner from "../../components/elements/YellowBanner";
import { Grid } from "@mui/material";
import FullAccessButton from "../../components/elements/FullAccessButton";
import CareerBuilderCard from "./CareerBuilderCard";

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

    const [isOpen, setIsOpen] = useState(false);
    useLockBodyScroll(isOpen);

    return (
        <>
            <Layout>
                <div className="background-random-careerbuilder">
                    <section className="section-box">
                        <div className="banner-hero-careerbuilder bg-img-careerbuilder">
                            <div className="container d-flex align-items-center">
                                <div className="row">
                                    <div className="col">
                                        <h2 className="careerbuilder-hero-heading" style={{ marginBottom: '20px', fontSize: '56px' }}>Career Builder</h2>
                                        <p className="careerbuilder-hero-subheading color-text-paragraph-2 subheading-aboutus" style={{ fontSize: '24px', maxWidth: '835px', lineHeight: '30px' }}>
                                            Providing not-yet-successful entrepreneurs with a <span className="color-blue"> soft-landing career change</span>, whilst they regroup following  business failure.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <CareerBuilderCard />
                    </section>

                    <section className="section-box mt-75">
                        <YellowBanner />
                    </section>

                    <section className="section-box mt-75">
                        <div className="text-center">
                            <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp" style={{ fontSize: '40px' }}>Guidance to  Make the Right Education and Career Choices</h2>
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
                                            <iframe width="100%" height="450px" src="https://www.youtube.com/embed/hNQRRsL3R4A" allowFullScreen style={{ border: '1px solid #ccc', borderRadius: '16px' }}></iframe>
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
                                            Turning Failure into Career Success
                                        </h2>
                                        <div className="title-details-careerbuilder">
                                            <div>
                                                <p className="careerbuilderparatext">
                                                    {showMore1
                                                        ? "No entrepreneur wants to be called a failure, but the reality is 90% of entrepreneurs will fail. With that failure costing startups an average £27,000 and the UK economy £9bn each year. Additionally, when a business fails, the founder may experience a loss of self-esteem and struggle to redefine themselves outside of their role as a business owner. Entrepreneurs and employees may experience feelings of grief, anger, guilt, or shame. The stress of uncertainty about the future can take a toll on mental health, leading to anxiety and depression."
                                                        : "No entrepreneur wants to be called a failure, but the reality is 90% of entrepreneurs will fail. With that failure costing startups an average £27,000 and the UK economy £9bn each year. Additionally, when a business "}
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
                                                <p className="careerbuilderparatext mt-30">
                                                    Don’t expect to figure out what you’re best at right away, especially after the hurt of a failed business venture and through the eyes of introspection. hibretOne resources are enablers to support your decision-making.
                                                </p>
                                            </div>
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
                                            className="careerbuilder-inner-heading"
                                        >
                                            Turning Failure into Career Success
                                        </h4>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <iframe width="100%" height="450px" src="https://www.youtube.com/embed/hNQRRsL3R4A" allowFullScreen style={{ border: '1px solid #ccc', borderRadius: '16px' }} className="careerbuilder-video-laptop"></iframe>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <div className="title-details-careerbuilder">
                                            <div>
                                                <p className="careerbuilderparatext">
                                                    {showMore1
                                                        ? "No entrepreneur wants to be called a failure, but the reality is 90% of entrepreneurs will fail. With that failure costing startups an average £27,000 and the UK economy £9bn each year. Additionally, when a business fails, the founder may experience a loss of self-esteem and struggle to redefine themselves outside of their role as a business owner. Entrepreneurs and employees may experience feelings of grief, anger, guilt, or shame. The stress of uncertainty about the future can take a toll on mental health, leading to anxiety and depression."
                                                        : "No entrepreneur wants to be called a failure, but the reality is 90% of entrepreneurs will fail. With that failure costing startups an average £27,000 and the UK economy £9bn each year. Additionally, when a business "}
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
                                                <p className="careerbuilderparatext mt-30">
                                                    Don’t expect to figure out what you’re best at right away, especially after the hurt of a failed business venture and through the eyes of introspection. hibretOne resources are enablers to support your decision-making.
                                                </p>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </section>

                    <section className="section-box grid-container-careerbuilder mt-75">
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
                                            Creating Career Choices
                                        </h2>
                                        <div className="title-details-careerbuilder">
                                            <div>
                                                <p className="careerbuilderparatext">
                                                    Making the right career choice stems from really knowing your strengths and weaknesses; your interests, motivations and personality. So, getting unbiased careers guidance based on industry standard guidelines, means you can analyse the real you. You will come to understand what motivates you and as a result, find the right career path after running your own business.
                                                </p>
                                                <p className="careerbuilderparatext mt-30">
                                                    Few journeys are more personal than your own journey to career success, especially for entrepreneurs who have run an unsuccessful business. With 60% of startups failing within 3 years, many entrepreneurs too often take the difficult path into having to work for an employer.
                                                </p>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item lg={6} className="d-flex justify-content-center">
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/career-builder/creatingcareer.jpg"
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
                                        <h4 className="careerbuilder-inner-heading">
                                            Creating Career Choices
                                        </h4>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/career-builder/creatingcareer.jpg"
                                            alt="joxBox"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <div className="title-details-careerbuilder">
                                            <p className="careerbuilderparatext">
                                                Making the right career choice stems from really knowing your strengths and weaknesses; your interests, motivations and personality. So, getting unbiased careers guidance based on industry standard guidelines, means you can analyse the real you. You will come to understand what motivates you and as a result, find the right career path after running your own business.
                                            </p>
                                            <p className="careerbuilderparatext mt-30">
                                                Few journeys are more personal than your own journey to career success, especially for entrepreneurs who have run an unsuccessful business. With 60% of startups failing within 3 years, many entrepreneurs too often take the difficult path into having to work for an employer.
                                            </p>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </section>

                    <section className="section-box grid-container-careerbuilder mt-75">
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
                                            src="assets/imgs/page/career-builder/throughfailure.jpg"
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
                                            Through Failure comes Opportunities
                                        </h2>
                                        <div className="title-details-careerbuilder">
                                            <div>
                                                <p className="careerbuilderparatext">
                                                    {showMore2
                                                        ? "hibretOne has created a Career Builder designed to work with failure. Data-driven technology and personalised tools to assess and connect entrepreneurs with great opportunities, which can be further exploited with the newfound wisdom and knowledge. Using generative AI to help match your wants, needs and skill sets."
                                                        : "hibretOne has created a Career Builder designed to work with failure. Data-driven technology and personalised tools to assess and connect entrepreneurs with great opportunities, which can be further "}
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
                                                <p className="careerbuilderparatext mt-30">
                                                    Our goal is to upskill entrepreneurs into better-paying careers, until you are ready to go again, or find a co-founder, until they have found a career which matches their aspirations.
                                                </p>
                                                <p className="careerbuilderparatext mt-30">
                                                    {showMore3
                                                        ? "Overall, the human impact of business failure extends beyond just financial losses and can profoundly affect individuals' well-being, relationships, and sense of self-worth. It's essential for affected individuals to seek support from friends, family, or mental health professionals to navigate the emotional challenges and plan for the future. Assessing the entrepreneurs  vision of their product and the need in the market. Helping build solutions that customers want to buy whilst reducing risk."
                                                        : "Overall, the human impact of business failure extends beyond just financial losses and can profoundly affect individuals' well-being, relationships, and sense of self-worth. It's essential for affected individuals to seek "}
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
                                        <h4 className="careerbuilder-inner-heading">
                                            Through Failure comes Opportunities
                                        </h4>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/career-builder/throughfailure.jpg"
                                            alt="joxBox"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <div className="title-details-careerbuilder">
                                            <div>
                                                <p className="careerbuilderparatext">
                                                    {showMore2
                                                        ? "hibretOne has created a Career Builder designed to work with failure. Data-driven technology and personalised tools to assess and connect entrepreneurs with great opportunities, which can be further exploited with the newfound wisdom and knowledge. Using generative AI to help match your wants, needs and skill sets."
                                                        : "hibretOne has created a Career Builder designed to work with failure. Data-driven technology and personalised tools to assess and connect entrepreneurs with great opportunities, which can be further "}
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
                                                <p className="careerbuilderparatext mt-30">
                                                    Our goal is to upskill entrepreneurs into better-paying careers, until you are ready to go again, or find a co-founder, until they have found a career which matches their aspirations.
                                                </p>
                                                <p className="careerbuilderparatext mt-30">
                                                    {showMore3
                                                        ? "Overall, the human impact of business failure extends beyond just financial losses and can profoundly affect individuals' well-being, relationships, and sense of self-worth. It's essential for affected individuals to seek support from friends, family, or mental health professionals to navigate the emotional challenges and plan for the future. Assessing the entrepreneurs  vision of their product and the need in the market. Helping build solutions that customers want to buy whilst reducing risk."
                                                        : "Overall, the human impact of business failure extends beyond just financial losses and can profoundly affect individuals' well-being, relationships, and sense of self-worth. It's essential for affected individuals to seek "}
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
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </section>

                    <section className="section-box grid-container-careerbuilder mt-75">
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
                                            Career Re-Building Resources
                                        </h2>
                                        <div className="title-details-careerbuilder">
                                            {readMore1 ? (
                                                <div>
                                                    <p className="careerbuilderparatext">
                                                        <strong> Online Courses: </strong> 
                                                        Failure for most entrepreneurs is inevitable. What happens with that failure can be the foundation needed to upskill or reskill and start a new career. Acquiring new skills ensures an entrepreneur, or failing (not-yet-ready) entrepreneur stays competitive and is able to adapt to the job market. 
                                                    </p>
                                                    <p className="careerbuilderparatext mt-30">
                                                        <strong> Career Guidance: </strong>
                                                        Guidance into entrepreneurship, or with honesty, delivering guidance away from entrepreneurship, if the early indicators show an aspirer is not-yet-ready. 
                                                    </p>
                                                    <p className="careerbuilderparatext mt-30">
                                                        <strong> New Occupation Guide: </strong> 
                                                        Researching your potential career in minutes, instead of months. Enabling you to quickly compare careers, salaries and vacancies throughout the UK. 
                                                    </p>
                                                    <p className="careerbuilderparatext mt-30">
                                                        <strong> Job Connect: </strong> 
                                                        It will have been a long time since many entrepreneurs have created a CV or Cover Letter. Once your CV is complete we can help you apply for that. 
                                                    </p>
                                                    <p className="careerbuilderparatext mt-30">
                                                        <strong> Skills Assessment: </strong> 
                                                        Taking a simple quiz about personality, strengths, skills, characteristics and traits. Matching them to potential new careers and ideal jobs. 
                                                    </p>
                                                    <p className="careerbuilderparatext mt-30">
                                                        <strong> CV Building: </strong> 
                                                        Many entrepreneurs may not have updated their CV for a long time. They may not understand what an Applicant Tracking System is, or the best way to lay out their skills. Our CV Writer driven by generative AI will help create a brilliant first pass, to build a strong CV. COMING SOON. 
                                                    </p>
                                                    <p className="careerbuilderparatext mt-30">
                                                        <strong> Co-Founder Finder: </strong> 
                                                        Connecting you to other co-founders or business partners to launch their startup idea, or to provide business advice. COMING SOON.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="careerbuilderparatext">
                                                        <strong> Online Courses: </strong> 
                                                        Failure for most entrepreneurs is inevitable. What happens with that failure can be the foundation needed to upskill or reskill and start a new career. Acquiring new skills ensures an entrepreneur, or failing (not-yet-ready) entrepreneur stays competitive and is able to adapt to the job market. 
                                                    </p>
                                                    <p className="careerbuilderparatext mt-30">
                                                        <strong> Career Guidance: </strong>
                                                        Guidance into entrepreneurship, or with honesty, delivering guidance away from entrepreneurship, if the early indicators show an aspirer is not-yet-ready. 
                                                    </p>
                                                    <p className="careerbuilderparatext mt-30">
                                                        <strong> New Occupation Guide: </strong> 
                                                        Researching your potential career in minutes, instead of months. Enabling you to quickly compare careers, salaries and vacancies throughout the UK. 
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
                                            src="assets/imgs/page/career-builder/careerrebuilding.jpg"
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
                                        <h4 className="careerbuilder-inner-heading">
                                            Career Re-Building Resources
                                        </h4>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <img
                                            className="imagecontent"
                                            src="assets/imgs/page/career-builder/careerrebuilding.jpg"
                                            alt="joxBox"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <div className="title-details-careerbuilder">
                                        {readMore1 ? (
                                                <div>
                                                    <p className="careerbuilderparatext">
                                                        <strong> Online Courses: </strong> 
                                                        Failure for most entrepreneurs is inevitable. What happens with that failure can be the foundation needed to upskill or reskill and start a new career. Acquiring new skills ensures an entrepreneur, or failing (not-yet-ready) entrepreneur stays competitive and is able to adapt to the job market. 
                                                    </p>
                                                    <p className="careerbuilderparatext mt-30">
                                                        <strong> Career Guidance: </strong>
                                                        Guidance into entrepreneurship, or with honesty, delivering guidance away from entrepreneurship, if the early indicators show an aspirer is not-yet-ready. 
                                                    </p>
                                                    <p className="careerbuilderparatext mt-30">
                                                        <strong> New Occupation Guide: </strong> 
                                                        Researching your potential career in minutes, instead of months. Enabling you to quickly compare careers, salaries and vacancies throughout the UK. 
                                                    </p>
                                                    <p className="careerbuilderparatext mt-30">
                                                        <strong> Job Connect: </strong> 
                                                        It will have been a long time since many entrepreneurs have created a CV or Cover Letter. Once your CV is complete we can help you apply for that. 
                                                    </p>
                                                    <p className="careerbuilderparatext mt-30">
                                                        <strong> Skills Assessment: </strong> 
                                                        Taking a simple quiz about personality, strengths, skills, characteristics and traits. Matching them to potential new careers and ideal jobs. 
                                                    </p>
                                                    <p className="careerbuilderparatext mt-30">
                                                        <strong> CV Building: </strong> 
                                                        Many entrepreneurs may not have updated their CV for a long time. They may not understand what an Applicant Tracking System is, or the best way to lay out their skills. Our CV Writer driven by generative AI will help create a brilliant first pass, to build a strong CV. COMING SOON. 
                                                    </p>
                                                    <p className="careerbuilderparatext mt-30">
                                                        <strong> Co-Founder Finder: </strong> 
                                                        Connecting you to other co-founders or business partners to launch their startup idea, or to provide business advice. COMING SOON.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="careerbuilderparatext">
                                                        <strong> Online Courses: </strong> 
                                                        Failure for most entrepreneurs is inevitable. What happens with that failure can be the foundation needed to upskill or reskill and start a new career. Acquiring new skills ensures an entrepreneur, or failing (not-yet-ready) entrepreneur stays competitive and is able to adapt to the job market. 
                                                    </p>
                                                    <p className="careerbuilderparatext mt-30">
                                                        <strong> Career Guidance: </strong>
                                                        Guidance into entrepreneurship, or with honesty, delivering guidance away from entrepreneurship, if the early indicators show an aspirer is not-yet-ready. 
                                                    </p>
                                                    <p className="careerbuilderparatext mt-30">
                                                        <strong> New Occupation Guide: </strong> 
                                                        Researching your potential career in minutes, instead of months. Enabling you to quickly compare careers, salaries and vacancies throughout the UK. 
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



                    <section className="section-box mt-75 mb-0">
                        <FullAccessButton />
                    </section>

                    <Subscription />
                </div >
            </Layout >
        </>
    );
}