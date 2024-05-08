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
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://website-widgets.pages.dev/dist/sienna.min.js";
        script.defer = true;
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

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
                    <section className="section-box mt-75 mt-75-50">
                        <div className="container" >
                            <BlogPageCarousel />
                        </div>
                    </section>

                    <section className="section-box mt-75 mt-75-50">
                        <YellowBanner />
                    </section>

                    <section className="section-box mt-75 mt-75-50">
                        <div className="container">
                            <div className="flex-container">
                                <div className="text-center">
                                    <div className="component-title">
                                        Trending Now
                                    </div>
                                    <div className="component-subtitle">
                                        Don't miss the trending news
                                    </div>
                                </div>
                                <section className="section-box mt-40 mt-40-20">
                                    <BlogTrendingNowCarouselFrame />
                                </section>

                            </div>
                        </div>
                    </section>

                    <section className="section-box mt-100-grid mt-100-50 mt-100-30-grid">
                        <div className="container">
                            <div className="flex-container">
                                <div className="text-center">
                                    <div className="component-title">
                                        Popular Posts
                                    </div>
                                    <div className="component-subtitle">
                                        Don't miss the trending news
                                    </div>
                                </div>
                                {/* <div className="mt-30">
                                    <BlogPopularPostsPaginationBackup />
                                </div> */}
                                <div className="mt-30 mt-30-10">
                                    <BlogPopularPostsPaginationFrame />
                                </div>
                            </div>
                            <section className="section-box mt-50 mt-50-30"  >
                                <CustomPagination currentPage={currentPage} totalPages={10} onPageChange={handlePageChange} setCurrentPage={setCurrentPage} />
                            </section>
                        </div>

                    </section>

                    <section className="section-box mt-75 mt-75-40">
                        <KickstartButton />
                    </section>
                    <Subscription />
                </div>
            </Layout>
        </>
    );
}

