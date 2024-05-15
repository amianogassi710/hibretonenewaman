import Link from "next/link";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";

SwiperCore.use([Navigation]);
import "swiper/css/grid";

const BlogTrendingNowCaraousel = () => {
    const data = [
        {
            category_id: 1,
            image: "assets/imgs/page/blog-page/Melissa.jpg",
            title: "How to get better at finding customers",
            author: "Nourish3d",
        },
        {
            category_id: 2,
            image: "assets/imgs/page/blog-page/Gordon.jpg",
            title: "Why Accelerators are great when starting a business",
            author: "NatWest",
        },
        {
            category_id: 3,
            image: "assets/imgs/page/blog-page/Rupert.jpg",
            title: "Benefits of launching your business from a Hub",
            author: "X+Why",
        },
        {
            category_id: 4,
            image: "assets/imgs/page/blog-page/Maxine.jpg",
            title: "Recruiting staff member number one",
            author: "Absolute Collagen",
        },
        {
            category_id: 5,
            image: "assets/imgs/page/blog-page/Melissa.jpg",
            title: "How to get better at finding customers",
            author: "Nourish3d",
        },
        {
            category_id: 6,
            image: "assets/imgs/page/blog-page/Gordon.jpg",
            title: "Why Accelerators are great when starting a business",
            author: "NatWest",
        },
        {
            category_id: 7,
            image: "assets/imgs/page/blog-page/Rupert.jpg",
            title: "Benefits of launching your business from a Hub",
            author: "X+Why",
        },
        {
            category_id: 8,
            image: "assets/imgs/page/blog-page/Maxine.webp",
            title: "Recruiting staff member number one",
            author: "Absolute Collagen",
        },
    ];

    return (
        <>
            <div className="swiper-container swiper-group-5">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={25}
                    navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next",
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 25,
                        },
                        575: {
                            slidesPerView: 2,
                            spaceBetween: 25,
                        },
                        767: {
                            slidesPerView: 2,
                            spaceBetween: 25,
                        },
                        991: {
                            slidesPerView: 3,
                            spaceBetween: 25,
                        },
                        1199: {
                            slidesPerView: 4,
                            spaceBetween: 25,
                        },
                    }}
                    className="swiper-wrapper swiper-grid-jobobx"
                >
                    {data.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="swiper-slide hover-up">
                                <Link
                                    legacyBehavior
                                    href={`blog-page/blog-inner-page`}
                                >
                                    <a>
                                        <div className="blogpage-item-logo">
                                        <div className="product-image-container">
                                            <img
                                                src={item.image}
                                                alt={item.image}
                                                className="blogpage-trendingnow-author-mainimage"
                                            />
                                            <div className="product-details">
                                                <a href="/blog-page/blog-inner-page">
                                                    <div className="blogpage-trendingnow-product-title">{item.title}</div>
                                                </a>
                                                <div className="blogpage-trendingnow-product-author">
                                                    <div className="blogpage-trendingnow-author-name">{item.author}</div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default BlogTrendingNowCaraousel;