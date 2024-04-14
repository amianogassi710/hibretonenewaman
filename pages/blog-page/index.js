/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import Layout from "../../components/Layout/Layout";
import Subscription from '../../components/Layout/Subscription';
import KickstartButton from '../../components/elements/KickstartButton';
import BlogPageCarousel from './BlogPageCarousel';
import CustomPagination from '../../components/elements/CustomPagination';
import YellowBanner from "../../components/elements/YellowBanner";
import BlogPageHeading from '../../components/elements/BlogPageHeading';
import Check2 from './../online-courses/check2';

const articleData1 = {
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
};

const articleData2 = {
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
};

const articleData3 = {
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
};

const articleData4 = {
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
};

const articleData5 = {
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
};

const articleData6 = {
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
};

export default function Index() {

    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <>
            <Layout>
                <div className="background-random-blogpage">

                    <div className="box-swiper">
                        <BlogPageHeading />
                    </div>
                    <div className="section-box wow animate__animated animate__fadeIn">
                        <div className="container mt-50" >
                            <BlogPageCarousel />
                        </div>
                    </div>

                    <section className="section-box mt-75 mb-50">
                        <YellowBanner />
                    </section>

                    <section className="section-box mt-50 mb-25">
                        <div className="container">
                            <div className="flex-container">
                                <div className="text-center">
                                    <h2 className="section-title mb-10">
                                        Trending Now
                                    </h2>
                                    <p className="font-lg fw-bold color-text-paragraph w-lg-50 mx-auto">
                                        Don't miss the trending news
                                    </p>
                                </div>
                                <div className="mt-30">
                                    <Check2 />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section-box mt-50 mb-15">
                        <div className="container">
                            <div className="flex-container">
                                <div className="text-center">
                                    <h2 className="section-title mb-10">
                                        Popular Posts
                                    </h2>
                                    <p className="font-lg fw-bold color-text-paragraph w-lg-50 mx-auto">
                                        Don't miss the trending news
                                    </p>
                                </div>

                                <div className="card-list mt-30">
                                    <article className="news-article-card">
                                        <div className="card-content">
                                            <img
                                                loading="lazy"
                                                src={articleData1.image}
                                                alt="Article featured image"
                                                className="featured-image"
                                            />
                                            <div className="blogpage-article-category">{articleData1.category}</div>

                                            <a href="/blog-page/blog-inner-page">
                                                <div className="article-title-container"> {/* Added container for title */}
                                                    <div className="blogpage-article-title">{articleData1.title}</div>
                                                </div>
                                            </a>
                                            <p className="blogpage-article-description">{articleData1.description}</p>
                                            <div className="blogpage-article-meta">
                                                <div className="author-info">
                                                    <img
                                                        loading="lazy"
                                                        src={articleData1.author.image}
                                                        alt={`${articleData1.author.name}'s profile picture`}
                                                        className="blogpage-author-image"
                                                    />
                                                    <div className="blogpage-author-details">
                                                        <div className="blogpage-author-name">{articleData1.author.name}</div>
                                                        <div className="blogpage-publish-date">{articleData1.author.date}</div>
                                                    </div>
                                                </div>
                                                <div className="blogpage-read-time">{articleData1.readTime}</div>
                                            </div>
                                        </div>
                                    </article>

                                    <article className="news-article-card">
                                        <div className="card-content">
                                            <img
                                                loading="lazy"
                                                src={articleData2.image}
                                                alt="Article featured image"
                                                className="featured-image"
                                            />
                                            <div className="blogpage-article-category">{articleData2.category}</div>
                                            <a href="/blog-page/blog-inner-page">
                                                <div className="article-title-container"> {/* Added container for title */}
                                                    <div className="blogpage-article-title">{articleData2.title}</div>
                                                </div>
                                            </a>
                                            <p className="blogpage-article-description">{articleData2.description}</p>
                                            <div className="blogpage-article-meta">
                                                <div className="author-info">
                                                    <img
                                                        loading="lazy"
                                                        src={articleData2.author.image}
                                                        alt={`${articleData2.author.name}'s profile picture`}
                                                        className="blogpage-author-image"
                                                    />
                                                    <div className="blogpage-author-details">
                                                        <div className="blogpage-author-name">{articleData2.author.name}</div>
                                                        <div className="blogpage-publish-date">{articleData2.author.date}</div>
                                                    </div>
                                                </div>
                                                <div className="blogpage-read-time">{articleData2.readTime}</div>
                                            </div>
                                        </div>
                                    </article>

                                    <article className="news-article-card">
                                        <div className="card-content">
                                            <img
                                                loading="lazy"
                                                src={articleData3.image}
                                                alt="News3"
                                                className="featured-image"
                                            />
                                            <div className="blogpage-article-category">{articleData3.category}</div>
                                            <a href="/blog-page/blog-inner-page">
                                                <div className="article-title-container"> {/* Added container for title */}
                                                    <div className="blogpage-article-title">{articleData3.title}</div>
                                                </div>
                                            </a>
                                            <p className="blogpage-article-description">{articleData3.description}</p>
                                            <div className="blogpage-article-meta">
                                                <div className="author-info">
                                                    <img
                                                        loading="lazy"
                                                        src={articleData3.author.image}
                                                        alt={`${articleData3.author.name}'s profile picture`}
                                                        className="blogpage-author-image"
                                                    />
                                                    <div className="blogpage-author-details">
                                                        <div className="blogpage-author-name">{articleData3.author.name}</div>
                                                        <div className="blogpage-publish-date">{articleData3.author.date}</div>
                                                    </div>
                                                </div>
                                                <div className="blogpage-read-time">{articleData3.readTime}</div>
                                            </div>
                                        </div>
                                    </article>

                                    <article className="news-article-card">
                                        <div className="card-content">
                                            <img
                                                loading="lazy"
                                                src={articleData4.image}
                                                alt="Article featured image"
                                                className="featured-image"
                                            />
                                            <div className="blogpage-article-category">{articleData4.category}</div>
                                            <a href="/blog-page/blog-inner-page">
                                                <div className="article-title-container"> {/* Added container for title */}
                                                    <h2 className="blogpage-article-title">{articleData4.title}</h2>
                                                </div>
                                            </a>
                                            <p className="blogpage-article-description">{articleData4.description}</p>
                                            <div className="blogpage-article-meta">
                                                <div className="author-info">
                                                    <img
                                                        loading="lazy"
                                                        src={articleData4.author.image}
                                                        alt={`${articleData4.author.name}'s profile picture`}
                                                        className="blogpage-author-image"
                                                    />
                                                    <div className="blogpage-author-details">
                                                        <div className="blogpage-author-name">{articleData4.author.name}</div>
                                                        <div className="blogpage-publish-date">{articleData4.author.date}</div>
                                                    </div>
                                                </div>
                                                <div className="blogpage-read-time">{articleData4.readTime}</div>
                                            </div>
                                        </div>
                                    </article>

                                    <article className="news-article-card">
                                        <div className="card-content">
                                            <img
                                                loading="lazy"
                                                src={articleData5.image}
                                                alt="Article featured image"
                                                className="featured-image"
                                            />
                                            <div className="blogpage-article-category">{articleData5.category}</div>
                                            <a href="/blog-page/blog-inner-page">
                                                <div className="article-title-container"> {/* Added container for title */}
                                                    <h2 className="blogpage-article-title">{articleData5.title}</h2>
                                                </div>
                                            </a>
                                            <p className="blogpage-article-description">{articleData5.description}</p>
                                            <div className="blogpage-article-meta">
                                                <div className="author-info">
                                                    <img
                                                        loading="lazy"
                                                        src={articleData5.author.image}
                                                        alt={`${articleData5.author.name}'s profile picture`}
                                                        className="blogpage-author-image"
                                                    />
                                                    <div className="blogpage-author-details">
                                                        <div className="blogpage-author-name">{articleData5.author.name}</div>
                                                        <div className="blogpage-publish-date">{articleData5.author.date}</div>
                                                    </div>
                                                </div>
                                                <div className="blogpage-read-time">{articleData5.readTime}</div>
                                            </div>
                                        </div>
                                    </article>

                                    <article className="news-article-card">
                                        <div className="card-content">
                                            <img
                                                loading="lazy"
                                                src={articleData6.image}
                                                alt="Article featured image"
                                                className="featured-image"
                                            />
                                            <div className="blogpage-article-category">{articleData6.category}</div>
                                            <a href="/blog-page/blog-inner-page">
                                                <div className="article-title-container"> {/* Added container for title */}
                                                    <h2 className="blogpage-article-title">{articleData6.title}</h2>
                                                </div>
                                            </a>
                                            <p className="blogpage-article-description">{articleData6.description}</p>
                                            <div className="blogpage-article-meta">
                                                <div className="author-info">
                                                    <img
                                                        loading="lazy"
                                                        src={articleData6.author.image}
                                                        alt={`${articleData6.author.name}'s profile picture`}
                                                        className="blogpage-author-image"
                                                    />
                                                    <div className="blogpage-author-details">
                                                        <div className="blogpage-author-name">{articleData6.author.name}</div>
                                                        <div className="blogpage-publish-date">{articleData6.author.date}</div>
                                                    </div>
                                                </div>
                                                <div className="blogpage-read-time">{articleData6.readTime}</div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <section className="section-box mt-60"  >
                                <CustomPagination currentPage={currentPage} totalPages={10} onPageChange={handlePageChange} setCurrentPage={setCurrentPage} />
                            </section>
                        </div>

                    </section>

                    <section className="section-box mt-0 mb-75">
                        <div className="post-loop-grid">
                            <div className="container">

                            </div>
                        </div>
                    </section>
                    <KickstartButton />
                    <Subscription />
                </div>
            </Layout>
        </>
    );
}

