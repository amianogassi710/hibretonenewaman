import Link from "next/link";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";

SwiperCore.use([Navigation]);
import { TbDisabled } from "react-icons/tb";
import "swiper/css/grid";
import axiosFetchWithRetry from "../elements/fetchWithRetry";

const CategorySlider = () => {
    // const [data, setData] = useState([]);
    // const getCategories = async () => {
    //     const reqOptions = {
    //         method: "get",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     };

    //     try {
    //         const data = await axiosFetchWithRetry({
    //             url: "/grants/grant-categories",
    //             reqOptions: reqOptions,
    //             timeout: 2000,
    //         });
    //         setData(data);
    //     } catch (error) {
    //         console.error({ error: error.message });
    //     }
    // };

    // useEffect(() => {
    //     getCategories();
    // }, []);
    const data = [
        {
            "category_id": 1,
            "category_name": "Community",
            "total_num": 24
        },
        {
            "category_id": 2,
            "category_name": "Environment",
            "total_num": 23
        },
        {
            "category_id": 3,
            "category_name": "Research",
            "total_num": 39
        },
        {
            "category_id": 4,
            "category_name": "Technology",
            "total_num": 21
        },
        {
            "category_id": 5,
            "category_name": "Education",
            "total_num": 19
        },
        {
            "category_id": 6,
            "category_name": "Business",
            "total_num": 21
        },
        {
            "category_id": 7,
            "category_name": "Disability",
            "total_num": 0
        },
        {
            "category_id": 8,
            "category_name": "Equal Opportunities",
            "total_num": 0
        },
        {
            "category_id": 9,
            "category_name": "People & Families",
            "total_num": 0
        },
        {
            "category_id": 10,
            "category_name": "Health",
            "total_num": 0
        }
    ];
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
                    className="swiper-wrapper pb-10 pt-5 swiper-grid-jobobx"
                >
                    {data.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="swiper-slide hover-up">
                                <Link
                                    legacyBehavior
                                    href="/grant-finder/grants-list"
                                >
                                    <a>
                                        <div className="item-logo">
                                            <div className="image-left">
                                                {/* <img
                                                    alt=""
                                                    src={`assets/imgs/page/homepage1/${item.category_id}.svg`}
                                                /> */}
                                                <TbDisabled size={50} style={{ color: '#4294FF' }}/>
                                            </div>
                                            <div className="text-info-right">
                                                <h4>{item.category_name}</h4>
                                                <p className="font-xs">
                                                    {item.total_num}
                                                    <span>
                                                        {" "}
                                                        Grants Available
                                                    </span>
                                                </p>
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

export default CategorySlider;
