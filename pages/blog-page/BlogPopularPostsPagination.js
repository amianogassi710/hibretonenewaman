import Link from "next/link";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";

SwiperCore.use([Navigation]);
import "swiper/css/grid";

const BlogPopularPostsPagination = () => {
    const data = [
        {
            category_id: 1,
            image: "assets/imgs/page/blog-page/category4.jpeg",
            category: "News",
            title: "21 Grant Writing Tips: How To Make a Great Impression",
            description:
                "Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
            author: {
                image: "assets/imgs/page/blog-page/Tony.jpg",
                name: "Tony Carr",
                date: "06 March 2023",
            },
            readTime: "7 mins to read",
        },
        {
            category_id: 2,
            image: "assets/imgs/page/blog-page/news3.jpeg",
            category: "News",
            title: "21 Team Building Tips: How To Build an Efficient Startup Team",
            description:
                "Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
            author: {
                image: "assets/imgs/page/blog-page/Scarlett.jpg",
                name: "Scarlett Lily Allen-Horton",
                date: "15 December 2023",
            },
            readTime: "6 mins to read",
        },
        {
            category_id: 3,
            image: "assets/imgs/page/blog-page/category1.jpeg",
            category: "News",
            title: "21 Business Building Tips: How To Scale on a Budget",
            description:
                "Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
            author: {
                image: "assets/imgs/page/blog-page/Pam.jpg",
                name: "Pam Sheemar",
                date: "12 January 2023",
            },
            readTime: "8 mins to read",
        },
        {
            category_id: 4,
            image: "assets/imgs/page/blog-page/category2.jpeg",
            category: "News",
            title: "21 Job Interview Tips: How Students Can Make a Great Impression",
            description:
                "Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
            author: {
                image: "assets/imgs/page/blog-page/Sarah.jpg",
                name: "Sarah Collins",
                date: "11 November 2023",
            },
            readTime: "6 mins to read",
        },
        {
            category_id: 5,
            image: "assets/imgs/page/blog-page/category3.jpeg",
            category: "News",
            title: "21 Job Interview Tips: How To Make a Great Impression",
            description:
                "Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
            author: {
                image: "assets/imgs/page/blog-page/Denise.jpg",
                name: "Denise Myers",
                date: "26 September 2023",
            },
            readTime: "7 mins to read",
        },
        {
            category_id: 6,
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c9e0983fe02ce0fcfb84ec3cad70d39a7cf460a7bcbc4bff58c7624ee61a2183?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&",
            category: "News",
            title: "21 Product Development Tips: How To Build a Product Customers Need",
            description:
                "Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
            author: {
                image: "assets/imgs/page/blog-page/Tom.jpg",
                name: "Tom Howarth",
                date: "08 March 2024",
            },
            readTime: "8 mins to read",
        },
    ];

    const firstDivData = data.filter(item => item.category_id >= 1 && item.category_id <= 3);
    const secondDivData = data.filter(item => item.category_id >= 4 && item.category_id <= 6);
    

    return (
        <>
            <div className="swiper-container swiper-group-5">
                <Swiper
                    slidesPerView={3}
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
                            slidesPerView: 3,
                            spaceBetween: 25,
                        },
                    }}
                    className="swiper-wrapper pb-10 pt-5 swiper-grid-jobobx"
                >
                    <div>
                        {firstDivData.map((item, i) => (
                            <SwiperSlide key={i}>
                                <article className="news-article-card">
                                    <div className="card-content">
                                        <img
                                            loading="lazy"
                                            src={item.image}
                                            alt="Article featured image"
                                            className="featured-image"
                                        />
                                        <div className="blogpage-article-category">{item.category}</div>

                                        <a href="/blog-page/blog-inner-page">
                                            <div className="article-title-container"> {/* Added container for title */}
                                                <div className="blogpage-article-title">{item.title}</div>
                                            </div>
                                        </a>
                                        <p className="blogpage-article-description">{item.description}</p>
                                        <div className="blogpage-article-meta">
                                            <div className="author-info">
                                                <img
                                                    loading="lazy"
                                                    src={item.author.image}
                                                    alt={`${item.author.name}'s profile picture`}
                                                    className="blogpage-author-image"
                                                />
                                                <div className="blogpage-author-details">
                                                    <div className="blogpage-author-name">{item.author.name}</div>
                                                    <div className="blogpage-publish-date">{item.author.date}</div>
                                                </div>
                                            </div>
                                            <div className="blogpage-read-time">{item.readTime}</div>
                                        </div>
                                    </div>
                                </article>
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
                <Swiper
                    slidesPerView={3}
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
                            slidesPerView: 3,
                            spaceBetween: 25,
                        },
                    }}
                    className="swiper-wrapper pb-10 pt-5 swiper-grid-jobobx"
                >
                    <div>
                        {secondDivData.map((item, i) => (
                            <SwiperSlide key={i}>
                                <article className="news-article-card">
                                    <div className="card-content">
                                        <img
                                            loading="lazy"
                                            src={item.image}
                                            alt="Article featured image"
                                            className="featured-image"
                                        />
                                        <div className="blogpage-article-category">{item.category}</div>

                                        <a href="/blog-page/blog-inner-page">
                                            <div className="article-title-container"> {/* Added container for title */}
                                                <div className="blogpage-article-title">{item.title}</div>
                                            </div>
                                        </a>
                                        <p className="blogpage-article-description">{item.description}</p>
                                        <div className="blogpage-article-meta">
                                            <div className="author-info">
                                                <img
                                                    loading="lazy"
                                                    src={item.author.image}
                                                    alt={`${item.author.name}'s profile picture`}
                                                    className="blogpage-author-image"
                                                />
                                                <div className="blogpage-author-details">
                                                    <div className="blogpage-author-name">{item.author.name}</div>
                                                    <div className="blogpage-publish-date">{item.author.date}</div>
                                                </div>
                                            </div>
                                            <div className="blogpage-read-time">{item.readTime}</div>
                                        </div>
                                    </div>
                                </article>
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </div>
        </>
    );
};

export default BlogPopularPostsPagination;