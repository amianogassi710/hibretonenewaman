import Link from "next/link";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { TbDisabled } from "react-icons/tb";
import {
    MdFamilyRestroom,
    MdOutlineDiversity1,
    MdOutlineCastForEducation,
    MdOutlineBusinessCenter,
} from "react-icons/md";
import {
    GiHealthNormal,
    GiArchiveResearch,
    GiRegeneration,
} from "react-icons/gi";

import { PiPaintBrushBold } from "react-icons/pi";
import { LuTrees } from "react-icons/lu";
import {
    
    FaHotel,
} from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { FaRunning } from "react-icons/fa";

import { PiHeadsetDuotone } from "react-icons/pi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdMonitor } from "react-icons/md";
import { IoMdLock } from "react-icons/io";



SwiperCore.use([Navigation]);
import "swiper/css/grid";
import axiosFetchWithRetry from "../elements/fetchWithRetry";

const CategorySlider = () => {
    const router = useRouter();

    const data = [
        {
            category_id: 1,
            category_name: "Social Enterprise",
            total_num: 24,
        },
        {
            category_id: 2,
            category_name: "Migrant Enterprise",
            total_num: 23,
        },
        {
            category_id: 3,
            category_name: "Crime",
            total_num: 39,
        },
        {
            category_id: 4,
            category_name: "Neurodiversity",
            total_num: 21,
        },
        {
            category_id: 5,
            category_name: "Education",
            total_num: 19,
        },
        {
            category_id: 6,
            category_name: "Business",
            total_num: 21,
        },
        {
            category_id: 7,
            category_name: "Disability",
            total_num: 0,
        },
        {
            category_id: 8,
            category_name: "Equality & Diversity",
            total_num: 0,
        },
        {
            category_id: 9,
            category_name: "People & Families",
            total_num: 0,
        },
        {
            category_id: 10,
            category_name: "Health",
            total_num: 0,
        },
    ];

    const iconsMap = {
        "Social Enterprise": PiHeadsetDuotone,
        "Migrant Enterprise": HiOutlineLightBulb,
        "Crime": MdMonitor,
        "Neurodiversity": IoMdLock,


        "Disability": TbDisabled,
        "People & Families": MdFamilyRestroom,
        "Equality & Diversity": MdOutlineDiversity1,
        "Health": GiHealthNormal,
        "Arts": PiPaintBrushBold,
        "Rural": LuTrees,
        "Religion": FaHotel,
        "Leisure & Tourism": FaHotel,
        "Employment": GrUserWorker,
        "Young People": FaRunning,
        "Research": GiArchiveResearch,
        "Education": MdOutlineCastForEducation,
        "Business": MdOutlineBusinessCenter,
        "Regeneration": GiRegeneration,
    };

    return (
        <>
            <div className="swiper-container swiper-group-5">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next",
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        575: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        767: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        991: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1199: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                    className="swiper-wrapper swiper-grid-jobobx"
                >
                    {data.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="swiper-slide hover-up ">
                                    <div className="item-logo item-logo-evidenceled">
                                        <div className="image-left image-left-evidenceled">
                                            {React.createElement(
                                                iconsMap[item.category_name],
                                                {
                                                    size: 50,
                                                    style: {
                                                        color: "#4294FF",
                                                    },
                                                }
                                            )}
                                        </div>
                                        <div className="text-info-right" style={{display: 'flex', alignItems: 'center'}}>
                                            <h4>{item.category_name}</h4>
                                        </div>
                                    </div>
                                {/* </a> */}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default CategorySlider;
