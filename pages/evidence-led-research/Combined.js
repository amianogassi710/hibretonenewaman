// EvidenceLedResearchSearchBar.js

import React, { useState, useEffect, useRef } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useRouter } from 'next/router';
import { IoSearchSharp } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import Evidenceledresearchexplorecarousel from "./Evidenceledresearchexplorecarousel";
import Layout from "../../components/Layout/Layout";
import { IoShareSocialOutline } from "react-icons/io5";
import { Grid } from "@mui/material";

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
];


const Combined = () => {

    const router = useRouter();
    const [searchText, setSearchText] = useState('');
    const [filteredArticles, setFilteredArticles] = useState([]);
    const [slidesPerView, setSlidesPerView] = useState(2);
    const [matchedResultsCount, setMatchedResultsCount] = useState(0);
    const swiperRef = useRef(null);
    const swiperReference = useRef(null);

    const [carouselTrue, setCarouselTrue] = useState(false);

    const [readMore3, setReadMore3] = useState(false);


    useEffect(() => {
        if (swiperRef.current !== null) {
            const mySwiper = new Swiper(swiperRef.current, {
                slidesPerView: 6,
                spaceBetween: 30,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    100: {
                        slidesPerView: 1,
                    },
                    450: {
                        slidesPerView: 2,
                    },
                    576: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    992: {
                        slidesPerView: 5,
                    },
                    1200: {
                        slidesPerView: 6,
                    },
                    1400: {
                        slidesPerView: 6,
                    }
                },
            });
            swiperRef.current.swiperInstance = mySwiper;
        }
    }, []);

    useEffect(() => {
        if (swiperReference.current !== null) {
            const mySearchSwiper = new Swiper(swiperReference.current, {
                slidesPerView: 6,
                spaceBetween: 30,
                navigation: {
                    nextElReference: '.swiper-button-next-Reference',
                    prevElReference: '.swiper-button-prev-Reference',
                },
                breakpoints: {
                    100: {
                        slidesPerView: 1,
                    },
                    450: {
                        slidesPerView: 2,
                    },
                    576: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    992: {
                        slidesPerView: 5,
                    },
                    1200: {
                        slidesPerView: 6,
                    },
                    1400: {
                        slidesPerView: 6,
                    }
                },
            });
            swiperReference.current.swiperInstanceExplore = mySearchSwiper;
        }
    }, []);

    const countMatchedResults = () => {
        return filteredArticles.length;
    };

    useEffect(() => {
        if (!searchText) {
            setFilteredArticles([]);
            return;
        }
        const filtered = articleData
            .filter(article =>
                article.title.toLowerCase().includes(searchText.toLowerCase())
            )
        setFilteredArticles(filtered);
    }, [searchText, articleData, slidesPerView]);

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
        setCarouselTrue(event.target.value !== ''); // Set carouselTrue based on whether the search text is empty or not
    };

    const handleSearch = (event) => {
        event.preventDefault(); // Prevent form submission

        const queryParams = searchText ? `search=${encodeURIComponent(searchText)}` : '';
        router.push(`/evidence-led-research/?${queryParams}`);


        console.log('Matched Results Count:', queryParams);

    };

    const [isBelow768px, setIsBelow768px] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsBelow768px(window.innerWidth < 768);
            setSlidesPerView(window.innerWidth < 992 ? 2 : 6); // Adjust slidesPerView based on the screen size
        };

        // Initial check
        handleResize();

        // Listen for window resize events
        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handlePrevious = () => {
        if (swiperRef.current !== null && swiperRef.current.swiperInstance) {
            swiperRef.current.swiperInstance.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current !== null && swiperRef.current.swiperInstance) {
            swiperRef.current.swiperInstance.slideNext();
        }
    };

    const handlePreviousExplore = () => {
        if (swiperReference.current !== null && swiperReference.current.swiperInstanceExplore) {
            swiperReference.current.swiperInstanceExplore.slidePrev();
        }
    };

    const handleNextExplore = () => {
        if (swiperReference.current !== null && swiperReference.current.swiperInstanceExplore) {
            swiperReference.current.swiperInstanceExplore.slideNext();
        }
    };

    return (
        <>
            <div className="background-random-evidenceledresearch">
                <section className="section-box">
                    <div className="banner-hero-builder bg-img-businessbuilder-evidenceledresearch">
                        <div className="container d-flex align-items-center">
                            <div className="row">
                                <div className="col">
                                    <div className="builder-hero-heading" style={{paddingTop: '0px', paddingBottom: '0px'}}>Evidence-led Research</div>
                                    <div className="builder-hero-subheading">
                                        Leading <span className="color-blue"> global academic research </span> is used as our  economic, social and moral blueprint for change
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box mt-50 mt-50-30">
                    <div className="container">
                        <div className="flex-container">
                            <div className="share-icon-container-evidenceledresearch">
                                <IoShareSocialOutline className="share-icon-evidenceledresearch" />
                            </div>
                            <div className="text-center">
                                <div className="component-title">
                                    Explore the Supporting Global Research
                                </div>
                                <div className="component-subtitle">
                                    Social and economic research from great sources all in one place
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-hero-evidenceledresearch-searchbar mt-50 mt-50-30">
                        <div className="block-banner-evidenceled block-banner-evidenceled">
                            <div className="evidenceled-form-find-top wow animate_animated animate_fadeInUp">
                                <form>
                                    <div style={{ width: '100%' }}>
                                        <input
                                            className="blog-one"
                                            type="text"
                                            placeholder="Enter name of report, article, research or subject"
                                            value={searchText}
                                            // onChange={(e) => setSearchText(e.target.value)}
                                            onChange={handleInputChange}

                                        />
                                    </div>
                                    <button onClick={handleSearch} className="evidenceled-btn-search">
                                        <IoSearchSharp className="searchbox-searchicon-evidenceled" style={{ marginTop: '-2px' }} /> SEARCH
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>


                    {/* Display the count of matched results if searchText is not empty */}
                    {searchText && (
                        <div className="matched-results-count">
                            <div className="text-center mt-20 mb-20">
                                <h4 className="section-title mb-10">
                                    {countMatchedResults() === 1 ? 'Result' : 'Results'} For: {searchText}
                                </h4>
                                <p className="font-lg fw-bold color-text-paragraph w-lg-50 mx-auto">
                                    {countMatchedResults()} {countMatchedResults() === 1 ? 'Result' : 'Results'} Found
                                </p>
                            </div>
                        </div >
                    )}

                    {/* Display the filtered articles */}
                    <section className="section-box">
                        <div className="post-loop-grid">
                            <div className="container-evidenceled">
                                <div className="swiper-container-wrapper"> {/* Parent container */}
                                    <div className="swiper-container" style={{ overflow: 'hidden' }} ref={swiperRef}>
                                        {/* <div className="swiper-container" ref={swiperRef}> */}

                                        {countMatchedResults() < 6 ? (
                                            <div className="swiper-wrapper nested-swiper-wrapper">

                                                {filteredArticles.map((article, index) => (
                                                    <div key={index} className="swiper-slide">
                                                        <div className="card-content-evidenceled hover-up">
                                                            <a href={`${article.pdfLocation}`} target="_blank" rel="noopener noreferrer">
                                                                <img
                                                                    loading="lazy"
                                                                    src={article.image}
                                                                    alt="Article featured image"

                                                                    className="featured-image-evidenceled"
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>

                                                ))}
                                            </div>
                                        ) : (
                                            <div className="swiper-wrapper">

                                                {filteredArticles.map((article, index) => (
                                                    <div key={index} className="swiper-slide">
                                                        <div className="card-content-evidenceled hover-up">
                                                            <a href={`${article.pdfLocation}`} target="_blank" rel="noopener noreferrer">
                                                                <img
                                                                    loading="lazy"
                                                                    src={article.image}
                                                                    alt="Article featured image"

                                                                    className="featured-image-evidenceled"
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>


                            {/* Display navigation buttons if count is greater than 7 */}
                            {countMatchedResults() > 6 && (
                                <div className="navigation-buttons">
                                    <img
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c658ccb5a89c8b196706d39f3080fe9aec5fca63395c6bacc09940807e1a2dd6?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&"
                                        alt=""
                                        className="swiperprevious-search-evidenceled"
                                        onClick={handlePrevious}
                                    />
                                    <img
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2337491ace933b4787201406e5daad90ed836fd3e530ce3a96946f5557244025?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&"
                                        alt=""
                                        className="swipernext-search-evidenceled"
                                        onClick={handleNext}
                                    />
                                </div>
                            )}
                        </div>
                    </section >

                </section >

                <section className="section-box mt-75-belowsearch-evidence-led mt-75-50-belowsearch-evidence-led">
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
                                        Academic Research meets Action
                                    </div>
                                    <div className="title-details-builder">
                                        <div>
                                            <p className="builderparatext">
                                                <strong> hibertOne working with research partners, is able to convert theory into practise to generate results for the economy.. </strong>
                                            </p>
                                            <p className="builderparatext mt-30">
                                                Academic research created  by researchers, very often does not translate into actionable, measurable outcomes. Papers are written as part of a dissertation, because funding is available, or to appear as if  action is being taken. hibretOne takes a different approach and supports report authors to ensure their recommendations become a blurprint for economic success.
                                            </p>
                                            <p className="builderparatext mt-30">
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
                                sx={{ display: { xs: "none", sm: "none", md: "flex", lg: "none" } }}
                            >
                                <Grid item md={6} sx={{ paddingRight: { md: "30px" } }}>
                                    <div className="grid-content-heading">
                                        Academic Research meets Action
                                    </div>
                                    <div className="title-details-builder mt-20 mt-20-10">
                                        {readMore3 ? (
                                            <div>
                                                <p className="builderparatext">
                                                    <strong> hibertOne working with research partners, is able to convert theory into practise to generate results for the economy.. </strong>
                                                </p>
                                                <p className="builderparatext mt-30">
                                                    Academic research created  by researchers, very often does not translate into actionable, measurable outcomes. Papers are written as part of a dissertation, because funding is available, or to appear as if  action is being taken. hibretOne takes a different approach and supports report authors to ensure their recommendations become a blurprint for economic success.
                                                </p>
                                                <p className="builderparatext mt-30">
                                                    Watch the video to understand the purpose of levelling-up. It’s not about driving the advantaged down, it’s using the research as evidence of the need to create opportunities for all.
                                                </p>
                                            </div>
                                        ) : (
                                            <div>
                                                <p className="builderparatext">
                                                    <strong> hibertOne working with research partners, is able to convert theory into practise to generate results for the economy.. </strong>
                                                </p>
                                                <p className="builderparatext mt-30">
                                                    Academic research created  by researchers, very often does not translate into actionable, measurable outcomes. Papers are written as part of a dissertation, because funding is available, or to appear as if  action is being taken.
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
                                <Grid item md={6} sx={{ paddingLeft: { md: "30px" } }}>
                                    <div className='grid__thumb w-img fix grid_thumb_height grid_thumb' style={{ aspectRatio: '0' }}>
                                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/71KXmZcHi24" allowFullScreen style={{ border: '1px solid #ccc', borderRadius: '16px' }}></iframe>
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
                                        Academic Research meets Action
                                    </div>
                                </Grid>
                                <Grid item sm={12}>
                                    <div className='grid__thumb w-img fix grid_thumb_height grid_thumb' style={{ aspectRatio: '0' }}>
                                        <iframe width="100%" height="450px" src="https://www.youtube.com/embed/71KXmZcHi24" allowFullScreen style={{ border: '1px solid #ccc', borderRadius: '16px' }}></iframe>
                                    </div>
                                </Grid>
                                <Grid item sm={12}>
                                    <div className="title-details-builder mt-20 mt-20-10">
                                        <div>
                                            <p className="builderparatext">
                                                <strong> hibertOne working with research partners, is able to convert theory into practise to generate results for the economy.. </strong>
                                            </p>
                                            <p className="builderparatext mt-10">
                                                Academic research created  by researchers, very often does not translate into actionable, measurable outcomes. Papers are written as part of a dissertation, because funding is available, or to appear as if  action is being taken. hibretOne takes a different approach and supports report authors to ensure their recommendations become a blurprint for economic success.
                                            </p>
                                            <p className="builderparatext mt-10">
                                                Watch the video to understand the purpose of levelling-up. It’s not about driving the advantaged down, it’s using the research as evidence of the need to create opportunities for all.
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
                                        Academic Research meets Action
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <div className='grid__thumb w-img fix grid_thumb_height grid_thumb' style={{ aspectRatio: '0' }}>
                                        <iframe width="100%" height="450px" src="https://www.youtube.com/embed/71KXmZcHi24" allowFullScreen style={{ border: '1px solid #ccc', borderRadius: '16px' }} className="builder-video"></iframe>
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <div className="title-details-builder mt-20 mt-20-10">
                                        <div>
                                            <p className="builderparatext">
                                                <strong> hibertOne working with research partners, is able to convert theory into practise to generate results for the economy.. </strong>
                                            </p>
                                            <p className="builderparatext mt-10">
                                                Academic research created  by researchers, very often does not translate into actionable, measurable outcomes. Papers are written as part of a dissertation, because funding is available, or to appear as if  action is being taken. hibretOne takes a different approach and supports report authors to ensure their recommendations become a blurprint for economic success.
                                            </p>
                                            <p className="builderparatext mt-10">
                                                Watch the video to understand the purpose of levelling-up. It’s not about driving the advantaged down, it’s using the research as evidence of the need to create opportunities for all.
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
                        <div className="container-evidenceled">
                            <div className="text-center">
                                <div className="component-title">
                                    Explore the Research underpinning our £1bn annual target
                                </div>
                                <div className="component-subtitle">
                                    Evidence converted into practical applications
                                </div>
                            </div>
                            <div className="swiper-container mt-50 mt-50-30" style={{ overflow: 'hidden' }} ref={swiperReference}>
                                <div className="swiper-wrapper" >
                                    {articleData.map((article, index) => (
                                        <div key={index} className="swiper-slide">
                                            <div className="card-content-evidenceled hover-up">
                                                {/* <a href={article.websiteLink} target="_blank" rel="noopener noreferrer"> */}
                                                <a href={`${article.pdfLocation}`} target="_blank" rel="noopener noreferrer">

                                                    <img
                                                        loading="lazy"
                                                        src={article.image}
                                                        alt="Article featured image"
                                                        className="featured-image-evidenceled"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>



                            </div>

                            {carouselTrue ? (
                                <>
                                    <img
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c658ccb5a89c8b196706d39f3080fe9aec5fca63395c6bacc09940807e1a2dd6?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&"
                                        alt=""
                                        className="swiperprevious-evidenceled-explore-true"
                                        onClick={handlePreviousExplore}
                                    />

                                    <img
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2337491ace933b4787201406e5daad90ed836fd3e530ce3a96946f5557244025?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&"
                                        alt=""
                                        className="swipernext-evidenceled-explore-true"
                                        onClick={handleNextExplore}
                                    />
                                </>
                            ) : (
                                <>
                                    <img
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c658ccb5a89c8b196706d39f3080fe9aec5fca63395c6bacc09940807e1a2dd6?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&"
                                        alt=""
                                        className="swiperprevious-evidenceled-explore"
                                        onClick={handlePreviousExplore}
                                    />

                                    <img
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2337491ace933b4787201406e5daad90ed836fd3e530ce3a96946f5557244025?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&"
                                        alt=""
                                        className="swipernext-evidenceled-explore"
                                        onClick={handleNextExplore}
                                    />
                                </>
                            )}
                        </div>
                    </div>
                </section>


            </div >

        </>

    );
}
export default Combined;
