import Link from "next/link";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { SlEarphonesAlt } from "react-icons/sl";
import { HiOutlineLightBulb } from "react-icons/hi";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { PiLockKey } from "react-icons/pi";

SwiperCore.use([Navigation]);
import "swiper/css/grid";

const OnlineCourse1 = () => {
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
            image: "assets/imgs/page/blog-page/Maxine.webp",
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
                    spaceBetween={55}
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
                    className="swiper-wrapper pb-10 pt-5 swiper-grid-jobobx"
                >
                    {data.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="swiper-slide hover-up">
                                <Link
                                    legacyBehavior
                                    href={`/online-courses/search?category_id=${item.category_id}`}
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
                                                    <div className="blogpage-trendingnow-author-name1">{item.author}</div>
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

export default OnlineCourse1;