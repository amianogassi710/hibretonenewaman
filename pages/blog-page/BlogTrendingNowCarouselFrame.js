/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

function useLockBodyScroll(open) {
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.body.style.overflow = "visible";
        };
    }, [open]);
}
const BlogTrendingNowCarousel = dynamic(
    () => import("./BlogTrendingNowCarousel"),
    { ssr: false }
);

const BlogTrendingNowCarouselFrame = () => {

const [isOpen, setIsOpen] = useState(false);

useLockBodyScroll(isOpen);

return (
    <>
            <div className="section-box wow animate_animated animate_fadeIn">
                <div className="container blogpage-trendingnowcarousel">
                    
                    <div className="box-swiper grant-category">
                        <div>
                            <BlogTrendingNowCarousel />
                            <div className="swiper-button-next" />
                            <div className="swiper-button-prev" />
                        </div>
                    </div>
                </div>
            </div>
    </>
);
};

export default BlogTrendingNowCarouselFrame;