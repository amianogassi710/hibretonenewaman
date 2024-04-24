// SearchResult.js
import React, { useState, useEffect, useRef } from "react";
import { colourOptions } from './data';
import { useRouter } from 'next/router';
import Swiper from 'swiper'; // Import Swiper

const SearchResult = () => {
    const searchValue = "i";

    // Find the relevant data based on searchValue

    const filteredArticles = colourOptions.filter((option) =>
        option.value && option.value.toLowerCase().includes(searchValue ? searchValue.toLowerCase() : '')
    );


    const router = useRouter();
    const [searchText, setSearchText] = useState('');
    const [slidesPerView, setSlidesPerView] = useState(2);
    const [articles, setArticles] = useState([]);

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


    useEffect(() => {
        if (!searchValue) {
            setArticles([]);
            return;
        }
        const filtered = colourOptions
            .filter(article =>
                article.value && article.value.toLowerCase().includes(searchText.toLowerCase())
            )


        setArticles(filtered);
    }, [searchText, searchValue]);



    // useEffect(() => {
    //     const handleResize = () => {
    //         setIsBelow768px(window.innerWidth < 768);
    //         setSlidesPerView(window.innerWidth < 992 ? 2 : 6); // Adjust slidesPerView based on the screen size
    //     };

    //     // Initial check
    //     handleResize();

    //     // Listen for window resize events
    //     window.addEventListener("resize", handleResize);

    //     // Cleanup
    //     return () => {
    //         window.removeEventListener("resize", handleResize);
    //     };
    // }, []);

    return (


        <div className="post-loop-grid">
            <div className="container-evidenceled">
                <h1>Search Result</h1>
                <p>You searched for: {searchValue}</p>

                <div className="swiper-container mt-50" style={{ overflow: 'hidden' }} ref={swiperRef}>
                    <div className="swiper-wrapper">
                        {articles.length > 0 ? (
                            articles.map((article, index) => (
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
                            ))
                        ) : (
                            <div className="swiper-slide swiper-slide-searchbar">
                                <p>No results found for: {searchValue}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>




    );
};

export default SearchResult;
