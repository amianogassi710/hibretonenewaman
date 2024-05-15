import React, { useEffect, useState } from 'react';

import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';


const articleData = [

    {
        image: "/assets/imgs/page/evidence-led-research/the top 20 reasons.png",
        pdfLocation: "/assets/files/page/evidence-led-research/the top 20 reasons.pdf",
    },
    {
        image: "/assets/imgs/page/evidence-led-research/time to change.png",
        pdfLocation: "/assets/files/page/evidence-led-research/time to change.pdf",
    },
    {
        image: "/assets/imgs/page/evidence-led-research/the dyslexic dynamic.png",
        pdfLocation: "/assets/files/page/evidence-led-research/the dyslexic dynamic.pdf",
    },
    {
        image: "/assets/imgs/page/evidence-led-research/beyond the vc.png",
        pdfLocation: "/assets/files/page/evidence-led-research/beyond the vc.pdf",
    },
    {
        image: "/assets/imgs/page/evidence-led-research/investment opportunities.png",
        pdfLocation: "/assets/files/page/evidence-led-research/investment opportunities.pdf",
    },
    {
        image: "/assets/imgs/page/evidence-led-research/facilitating new migrant.png",
        pdfLocation: "/assets/files/page/evidence-led-research/facilitating new migrant.pdf",
    },
];

export default function EvidenceLedResearchTrendingNowcarousel() {
    const [swiperInstance, setSwiperInstance] = useState(null);


    useEffect(() => {
        const mySwiper = new Swiper('.swiper-container', {
            slidesPerView: 6,
            spaceBetween: 30,
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
        setSwiperInstance(mySwiper);

    }, []);

    return (
        <div className="post-loop-grid">
            <div className="container-evidenceled">
                <div className="text-center">
                    <div className="component-title">
                        Research Trending Now
                    </div>
                    <div className="component-subtitle">
                        Don't miss the trending news
                    </div>
                </div>
                <div className="swiper-container mt-40 mt-40-20" style={{ overflow: 'hidden' }} >
                    <div className="swiper-wrapper" >
                        {articleData.map((article, index) => (
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
                {/* <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c658ccb5a89c8b196706d39f3080fe9aec5fca63395c6bacc09940807e1a2dd6?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&"
                    alt="" className="swiperprevious-evidenceled"
                    onClick={handlePrevious}
                />
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2337491ace933b4787201406e5daad90ed836fd3e530ce3a96946f5557244025?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&"
                    alt="" className="swipernext-evidenceled"
                    onClick={handleNext}
                /> */}
            </div>
        </div>
    );
}