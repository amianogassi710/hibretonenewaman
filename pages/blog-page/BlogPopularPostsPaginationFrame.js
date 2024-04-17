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

const BlogPopularPostsPagination = dynamic(
    () => import("./BlogPopularPostsPagination"),
    { ssr: false }
);

const BlogPopularPostsPaginationFrame = () => {

    const [isOpen, setIsOpen] = useState(false);

    useLockBodyScroll(isOpen);

    return (
        <>
            <div className="section-box wow animate_animated animate_fadeIn">
                <div className="flex-container blogpage-trendingnowcarousel">

                    <div className="box-swiper grant-category">
                        <div>
                            <BlogPopularPostsPagination />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogPopularPostsPaginationFrame;
