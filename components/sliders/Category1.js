import Link from "next/link";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";

SwiperCore.use([Navigation]);

import "swiper/css/grid";
import axiosFetchWithRetry from "../elements/fetchWithRetry";

const CategorySlider1 = () => {
    const [data, setData] = useState([]);
    const getCategories = async () => {
        const reqOptions = {
            method: "get",
            headers: {
                "Content-Type": "application/json",
            },
        };

        try {
            const data = await axiosFetchWithRetry({
                url: "/grants/grant-categories",
                reqOptions: reqOptions,
                timeout: 2000,
            });
            setData(data);
        } catch (error) {
            console.error({ error: error.message });
        }
    };

    useEffect(() => {
        getCategories();
    }, []);
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
                            slidesPerView: 5,
                            spaceBetween: 30,
                        },
                    }}
                    className="swiper-wrapper pb-70 pt-5 swiper-grid-jobobx"
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
                                                <img
                                                    alt="jobBox"
                                                    src={`assets/imgs/page/homepage1/${item.category_id}.svg`}
                                                />
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

export default CategorySlider1;
