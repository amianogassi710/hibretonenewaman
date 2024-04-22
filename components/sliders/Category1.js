import Link from "next/link";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";

import { TbDisabled } from "react-icons/tb";
import { MdFamilyRestroom, MdOutlineDiversity1, MdOutlineCastForEducation, MdOutlineBusinessCenter } from "react-icons/md";
import { GiHealthNormal, GiConvict, GiArchiveResearch, GiTechnoHeart } from "react-icons/gi";
import { FaUserFriends, FaHotel, FaEnvira } from "react-icons/fa";
import { FaHandsPraying } from "react-icons/fa6";
import { GrUserWorker } from "react-icons/gr";
import { FaRunning } from "react-icons/fa";
import { RiCommunityLine } from "react-icons/ri";

import { FaBullhorn } from "react-icons/fa";
import { BsBank } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa6";
import { FcDocument } from "react-icons/fc";


SwiperCore.use([Navigation]);

import "swiper/css/grid";
import axiosFetchWithRetry from "../elements/fetchWithRetry";

const CategorySlider1 = () => {
    const data = [
        {
            category_id: 11,
            category_name: "Sustainability",
            total_num: 0,
        },
        {
            category_id: 12,
            category_name: "Economy",
            total_num: 0,
        },
        {
            category_id: 13,
            category_name: "Ethnic Diversity",
            total_num: 0,
        },
        {
            category_id: 14,
            category_name: "Female Diversity",
            total_num: 0,
        },
        {
            category_id: 15,
            category_name: "Religion",
            total_num: 0,
        },
        {
            category_id: 16,
            category_name: "Social Enterprise",
            total_num: 0,
        },
        {
            category_id: 17,
            category_name: "Leisure & Tourism",
            total_num: 0,
        },
        {
            category_id: 18,
            category_name: "Employment",
            total_num: 0,
        },
        {
            category_id: 19,
            category_name: "Crime",
            total_num: 0,
        },
        {
            category_id: 20,
            category_name: "Young People",
            total_num: 0,
        },
    ];

    const iconsMap = {
        "Sustainability": FaBullhorn,
        "Economy": BsBank,
        "Ethnic Diversity": FaUserTie,
        "Female Diversity": FcDocument,

        "Disability": TbDisabled,
        "People & Families": MdFamilyRestroom,
        "Health": GiHealthNormal,
        "Religion": FaHandsPraying,
        "Social Enterprise": FaUserFriends,
        "Leisure & Tourism": FaHotel,
        "Employment": GrUserWorker,
        "Crime": GiConvict,
        "Young People": FaRunning,
        "Community": RiCommunityLine,
        "Environment": FaEnvira,
        "Research": GiArchiveResearch,
        "Technology": GiTechnoHeart,
        "Education": MdOutlineCastForEducation,
        "Business": MdOutlineBusinessCenter,
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
                            <div className="swiper-slide hover-up">
                                                                  <div className="item-logo item-logo-evidenceled">
                                    <div className="image-left image-left-evidenceled">
                                                {React.createElement(
                                                        iconsMap[
                                                            item.category_name
                                                        ],
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
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default CategorySlider1;
