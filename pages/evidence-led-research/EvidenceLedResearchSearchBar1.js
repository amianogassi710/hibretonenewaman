// EvidenceLedResearchSearchBar.js

import React, { useState, useEffect, useRef } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useRouter } from 'next/router';
import { IoSearchSharp } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';



const EvidenceLedResearchSearchBar1 = ({ articleData }) => {

    const router = useRouter();
    const [searchText, setSearchText] = useState('');
    const [filteredArticles, setFilteredArticles] = useState([]);
    const [slidesPerView, setSlidesPerView] = useState(2);

    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current !== null) {
            const mySwiper = new Swiper(swiperRef.current, {
                slidesPerView: slidesPerView,
                spaceBetween: 30,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    450: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                },
            });
            swiperRef.current.swiperInstance = mySwiper;
        }
    }, [slidesPerView]);


    useEffect(() => {
        if (!searchText) {
            setFilteredArticles([]);
            return;
        }
        const filtered = articleData
        .filter(article =>
            article.title.toLowerCase().includes(searchText.toLowerCase())
        )
        .slice(0, slidesPerView); // Adjust slice based on the slidesPerView


        setFilteredArticles(filtered);
    }, [searchText, articleData, slidesPerView]);

    const handleSearch = (event) => {
        event.preventDefault(); // Prevent form submission
        router.push("#");
    };

    const [isBelow768px, setIsBelow768px] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsBelow768px(window.innerWidth < 768);
            setSlidesPerView(window.innerWidth < 992 ? 2 : 4); // Adjust slidesPerView based on the screen size
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

    return (
        <>
            <div className="evidenceled-form-find-top wow animate_animated animate_fadeInUp">
                <form>
                    <div style={{ width: '100%' }}>
                        <input
                            className="blog-one"
                            type="text"
                            placeholder="Enter name of report, article, research or subject"
                            style={{ marginTop: "5px" }}
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </div>

                    <button onClick={handleSearch} className="evidenceled-btn-search">
                        <IoSearchSharp className="searchbox-searchicon-evidenceled" /> SEARCH
                    </button>
                </form>
            </div>

            {/* Display the filtered articles */}
            <div className="swiper-container mt-50" style={{ overflow: 'hidden' }}>
                <div className="swiper-wrapper">
                    {filteredArticles.map((article, index) => (
                        <div key={index} className="swiper-slide swiper-slide-searchbar">

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
        </>
    );
};

export default EvidenceLedResearchSearchBar1;
