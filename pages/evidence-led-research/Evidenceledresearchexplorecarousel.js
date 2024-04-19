import React, { useEffect, useState } from 'react';

import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';


const articleData = [

    {
        image: "/assets/imgs/page/evidence-led-research/time to change.png",
    },
    {
        image: "/assets/imgs/page/evidence-led-research/supporting diversity.png",
    },
    {
        image: "/assets/imgs/page/evidence-led-research/minority businesses.png",
    },
    {
        image: "/assets/imgs/page/evidence-led-research/disability and entrepreneurship.png",
    },
    {
        image: "/assets/imgs/page/evidence-led-research/beyond the vc.png",
    },
    {
        image: "/assets/imgs/page/evidence-led-research/exploring the outcomes.png",
    },
    {
        image: "/assets/imgs/page/evidence-led-research/the shaw trust.png",
    },
    {
        image: "/assets/imgs/page/evidence-led-research/the 2023 uk lgbtq+.png",
    },
    {
        image: "/assets/imgs/page/evidence-led-research/immerse.png",
    },
    {
        image: "/assets/imgs/page/evidence-led-research/unlocking opportunity.png",
    },
    {
        image: "/assets/imgs/page/evidence-led-research/diversity beyond gender.png",
    },
    {
        image: "/assets/imgs/page/evidence-led-research/the alison rose.png",
    },
    {
        image: "/assets/imgs/page/evidence-led-research/the dyslexic dynamic.png",
    },
    {
        image: "/assets/imgs/page/evidence-led-research/the top 20 reasons.png",
    },

];

export default function Evidenceledresearchexplorecarousel() {
    const [swiperInstance, setSwiperInstance] = useState(null);


    useEffect(() => {
        const mySwiper = new Swiper('.swiper-container', {
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
                576: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 6,
                },
            },
        });
        setSwiperInstance(mySwiper);

    }, []);

    const handlePrevious = () => {
        if (swiperInstance !== null) {
            swiperInstance.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperInstance !== null) {
            swiperInstance.slideNext();
        }
    };

    return (
        <div className="post-loop-grid">
            <div className="container">
                <div className="text-center mb-40">
                    <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp newsandeventsheading">
                        Explore the Research underpinning our £1bn annual target
                    </h2>
                    <p className="w-lg-50 mx-auto wow animate__animated animate__fadeInUp meetteamtext">
                        Evidence converted into practical applications
                    </p>
                </div>
                <div className="swiper-container" style={{ overflow: 'hidden' }}>
                    <div className="swiper-wrapper" >
                        {articleData.map((article, index) => (
                            <div key={index} className="swiper-slide">
                                <div className="card-content-evidenceled">
                                    <img
                                        loading="lazy"
                                        src={article.image}
                                        alt="Article featured image"
                                        className="featured-image-evidenceled"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c658ccb5a89c8b196706d39f3080fe9aec5fca63395c6bacc09940807e1a2dd6?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&"
                    alt="" className="swiperprevious-evidenceled"
                    onClick={handlePrevious}
                />
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2337491ace933b4787201406e5daad90ed836fd3e530ce3a96946f5557244025?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&"
                    alt="" className="swipernext-evidenceled"
                    onClick={handleNext}
                />
            </div>
        </div>
    );
}