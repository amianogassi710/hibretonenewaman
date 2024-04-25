// EvidenceLedResearchSearchBar.js

import React, { useState, useEffect, useRef } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useRouter } from 'next/router';
import { IoSearchSharp } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import Evidenceledresearchexplorecarousel from "./Evidenceledresearchexplorecarousel";



const EvidenceLedResearchSearchBar1 = ({ articleData }) => {

    const router = useRouter();
    const [searchText, setSearchText] = useState('');
    const [filteredArticles, setFilteredArticles] = useState([]);
    const [slidesPerView, setSlidesPerView] = useState(2);
    const [matchedResultsCount, setMatchedResultsCount] = useState(0);


    const swiperRef = useRef(null);

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
        console.log('Matched Results Count is a :', event.target.value);
    
        // Construct the query string with the value
        const queryString = `searchText=${encodeURIComponent(event.target.value)}`;
        const pathname = '/evidenceledresearch/Evidenceledresearchexplorecarousel';

        // Append the query string to the current URL without navigating away
        const currentUrl = window.location.pathname + '?' + queryString;
        history.pushState(null, '', currentUrl);
    };


    const handleSearch = (event) => {
        event.preventDefault(); // Prevent form submission
        // router.push("#");

        const queryParams = searchText ? `search=${encodeURIComponent(searchText)}` : '';
        router.push(`/Evidenceledresearchexplorecarousel?${queryParams}`);


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

    return (

        <>

            <div className="banner-hero-evidenceledresearch-searchbar mt-50">
                <div className="block-banner-evidenceled block-banner-evidenceled">
                    <div className="evidenceled-form-find-top wow animate_animated animate_fadeInUp">
                        <form>
                            <div style={{ width: '100%' }}>
                                <input
                                    className="blog-one"
                                    type="text"
                                    placeholder="Enter name of report, article, research or subject"
                                    style={{ marginTop: "5px" }}
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
                        <div className="swiper-container" style={{ overflow: 'hidden' }} ref={swiperRef}>
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
                </div>
            </section>


        </>
    );
}
export default EvidenceLedResearchSearchBar1;
