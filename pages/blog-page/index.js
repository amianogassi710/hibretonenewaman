/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import Layout from "../../components/Layout/Layout";
import Subscription from '../../components/Layout/Subscription';
import KickstartButton from '../../components/elements/KickstartButton';
import BlogPageCarousel from './BlogPageCarousel';
import CustomPagination from '../../components/elements/CustomPagination';
import YellowBanner from "../../components/elements/YellowBanner";
import BlogPageHeading from '../../components/elements/BlogPageHeading';
import BlogTrendingNowCarouselFrame from './BlogTrendingNowCarouselFrame';
import BlogPopularPostsPaginationFrame from './BlogPopularPostsPaginationFrame';

import BlogPopularPostsPaginationBackup from './BlogPopularPostsPaginationBackup';

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
                                    <BlogTrendingNowCarouselFrame />
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
                                {/* <div className="mt-30">
                                    <BlogPopularPostsPaginationBackup />
                                </div> */}
                                <div className="mt-30">
                                    <BlogPopularPostsPaginationFrame />
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

