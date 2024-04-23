/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import Subscription from "../../components/Layout/Subscription";
import YellowBanner from "../../components/elements/YellowBanner";
import { Grid } from "@mui/material";
import FullAccessButton from "../../components/elements/FullAccessButton";
import EvidenceLedResearchSearchBar1 from "./EvidenceLedResearchSearchBar1";
import { IoShareSocialOutline } from "react-icons/io5";
import Evidenceledresearchexplorecarousel from "./Evidenceledresearchexplorecarousel";
import EvidenceLedResearchPhotoGrid from "./EvidenceLedResearchPhotoGrid";
import EvidenceLedResearchTrendingNowcarousel from "./EvidenceLedResearchTrendingNowcarousel";
import dynamic from "next/dynamic";
import CustomAsyncSelect from "./App";


const NoSSRCategorySlider = dynamic(
    () => import("../../components/sliders/Category"),
    { ssr: false }
);
const NoSSRCategorySlider1 = dynamic(
    () => import("../../components/sliders/Category1"),
    { ssr: false }
);

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


    const articleData = [
        {
            title: "Time to Change",
            image: "/assets/imgs/page/evidence-led-research/time to change.png",
            pdfLocation: "/assets/files/page/evidence-led-research/time to change.pdf",
        },
        {
            title: "Supporting Diversity",
            image: "/assets/imgs/page/evidence-led-research/supporting diversity.png",
            pdfLocation: "/assets/files/page/evidence-led-research/supporting diversity.pdf",
        },
        {
            title: "Minority Businesses",
            image: "/assets/imgs/page/evidence-led-research/minority businesses.png",
            pdfLocation: "/assets/files/page/evidence-led-research/minority businesses.pdf",
        },
        {
            title: "Disability and Entrepreneurship",
            image: "/assets/imgs/page/evidence-led-research/disability and entrepreneurship.png",
            pdfLocation: "/assets/files/page/evidence-led-research/disability and entrepreneurship.pdf",
        },
        {
            title: "Beyond the VC",
            image: "/assets/imgs/page/evidence-led-research/beyond the vc.png",
            pdfLocation: "/assets/files/page/evidence-led-research/beyond the vc.pdf",
        },
        {
            title: "Exploring the Outcomes",
            image: "/assets/imgs/page/evidence-led-research/exploring the outcomes.png",
            pdfLocation: "/assets/files/page/evidence-led-research/exploring the outcomes.pdf",
        },
        {
            title: "The Shaw Trust",
            image: "/assets/imgs/page/evidence-led-research/the shaw trust.png",
            pdfLocation: "/assets/files/page/evidence-led-research/the shaw trust.pdf",
        },
        {
            title: "The 2023 UK LGBTQ+",
            image: "/assets/imgs/page/evidence-led-research/the 2023 uk lgbtq.png",
            pdfLocation: "/assets/files/page/evidence-led-research/the 2023 uk lgbtq.pdf",
        },
        {
            title: "Immerse",
            image: "/assets/imgs/page/evidence-led-research/immerse.png",
            pdfLocation: "/assets/files/page/evidence-led-research/immerse.pdf",
        },
        {
            title: "Unlocking Opportunity",
            image: "/assets/imgs/page/evidence-led-research/unlocking opportunity.png",
            pdfLocation: "/assets/files/page/evidence-led-research/unlocking opportunity.pdf",
        },
        {
            title: "Diversity Beyond Gender",
            image: "/assets/imgs/page/evidence-led-research/diversity beyond gender.png",
            pdfLocation: "/assets/files/page/evidence-led-research/diversity beyond gender.pdf",
        },
        {
            title: "The Alison Rose",
            image: "/assets/imgs/page/evidence-led-research/the alison rose.png",
            pdfLocation: "/assets/files/page/evidence-led-research/the alison rose.pdf",
        },
        {
            title: "The Dyslexic Dynamic",
            image: "/assets/imgs/page/evidence-led-research/the dyslexic dynamic.png",
            pdfLocation: "/assets/files/page/evidence-led-research/the dyslexic dynamic.pdf",
        },
        {
            title: "The Top 20 Reasons",
            image: "/assets/imgs/page/evidence-led-research/the top 20 reasons.png",
            pdfLocation: "/assets/files/page/evidence-led-research/the top 20 reasons.pdf",
        },
        
        
        
        
        {
            title: "Investment Opportunities",
            image: "/assets/imgs/page/evidence-led-research/investment opportunities.png",
            pdfLocation: "/assets/files/page/evidence-led-research/investment opportunities.pdf",
        },
        {
            title: "Facilitating New Migrant",
            image: "/assets/imgs/page/evidence-led-research/facilitating new migrant.png",
            pdfLocation: "/assets/files/page/evidence-led-research/facilitating new migrant.pdf",
        },
    ];
    
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.userway.org/widget.js";
        script.setAttribute("data-account", "IPLbOdMJ9G");
        script.async = true;
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

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
                                            Leading <span className="color-blue"> global academic research </span> is converted into a blueprint for change across economic, social and moral requirements                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section-box mt-50">
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
                        <div className="banner-hero-evidenceledresearch-searchbar mt-50">
                            <div className="block-banner-evidenceled block-banner-evidenceled">
                                {/* <EvidenceLedResearchSearchBar1 /> */}
                                {/* <EvidenceLedResearchSearchBar1 articleData={articleData} /> */}
                                
                            </div>
                        </div>
                                {/* <EvidenceLedResearchSearchBar1 /> */}
                                <CustomAsyncSelect />
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
                                                <p className="newsandeventsparatext-evidenceled">
                                                    <strong> hibertOne working with research partners, is able to convert theory into practise to generate results for the economy.. </strong>
                                                </p>
                                                <p className="newsandeventsparatext-evidenceled mt-30">
                                                    Academic research created  by researchers, very often does not translate into actionable, measurable outcomes. Papers are written as part of a dissertation, because funding is available, or to appear as if  action is being taken. hibretOne takes a different approach and supports report authors to ensure their recommendations become a blurprint for economic success.
                                                </p>
                                                <p className="newsandeventsparatext-evidenceled mt-30">
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
                                                <p className="newsandeventsparatext-evidenceled">
                                                    <strong> hibertOne working with research partners, is able to convert theory into practise to generate results for the economy.. </strong>
                                                </p>
                                                <p className="newsandeventsparatext-evidenceled mt-30">
                                                    Academic research created  by researchers, very often does not translate into actionable, measurable outcomes. Papers are written as part of a dissertation, because funding is available, or to appear as if  action is being taken. hibretOne takes a different approach and supports report authors to ensure their recommendations become a blurprint for economic success.
                                                </p>
                                                <p className="newsandeventsparatext-evidenceled mt-30">
                                                    Watch the video to understand the purpose of levelling-up. It’s not about driving the advantaged down, it’s using the research as evidence of the need to create opportunities for all.
                                                </p>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </section>

                    <section className="section-box mt-100">
                        <Evidenceledresearchexplorecarousel />
                    </section>

                    <section className="section-box mt-75">
                        <YellowBanner />
                    </section>

                    <section className="section-box mt-75">
                        <EvidenceLedResearchPhotoGrid />
                    </section>

                    <section className="section-box mt-100">
                        <EvidenceLedResearchTrendingNowcarousel />
                    </section>

                    <section className="section-box mt-100">
                        <div className="section-box wow animate__animated animate__fadeIn">
                            <div className="container">
                                <div className="text-center">
                                    <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp newsandeventsheading-evidenceled">
                                        Browse a Selection of Research Categories
                                    </h2>
                                    <p className="w-lg-50 mx-auto wow animate__animated animate__fadeInUp newsandeventssubheading-evidenceled">
                                        Find the research that supports your enterprise
                                    </p>
                                </div>
                            </div>
                            <div className="container2 mt-40">
                                <div className="box-swiper grant-category evidence-led-research">
                                    <div>
                                        {/* <NoSSRCategorySlider /> */}
                                        {/* <NoSSRCategorySlider1 /> */}
                                        <div className="swiper-button-next" />
                                        <div className="swiper-button-prev" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section-box mt-75">
                        <FullAccessButton />
                    </section>

                    <Subscription />
                </div >
            </Layout >
        </>
    );
}