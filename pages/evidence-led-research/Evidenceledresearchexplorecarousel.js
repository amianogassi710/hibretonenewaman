import React, { useEffect, useState, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { useRouter } from 'next/router';
import { useLocation } from 'react-router-dom';

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


export default function Evidenceledresearchexplorecarousel() {
    

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

        <div className="post-loop-grid">
            <div className="container-evidenceled">
                <div className="text-center">
                    <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp newsandeventsheading-evidenceled">
                        Explore the Research underpinning our £1bn annual target
                    </h2>
                    <p className="w-lg-50 mx-auto wow animate__animated animate__fadeInUp newsandeventssubheading-evidenceled">
                    Evidence converted into practical applications 
                    </p>
                </div>
                <div className="swiper-container mt-50" style={{ overflow: 'hidden' }} ref={swiperRef}>
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

                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c658ccb5a89c8b196706d39f3080fe9aec5fca63395c6bacc09940807e1a2dd6?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&"
                        alt=""
                        className="swiperprevious-evidenceled"
                        onClick={handlePrevious}
                    />

                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2337491ace933b4787201406e5daad90ed836fd3e530ce3a96946f5557244025?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&"
                        alt=""
                        className="swipernext-evidenceled"
                        onClick={handleNext}
                    />

                </div>

            </div>
        </div>
    );
}

