import Link from "next/link";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";
SwiperCore.use([Navigation]);

import "swiper/css/grid";
import { Grid } from "swiper";

// const data = [
//     {
//         icon: "marketing.svg",
//         title: "Marketing & Sale",
//         count: 1526
//     },
//     {
//         icon: "customer.svg",
//         title: "Customer Help",
//         count: 185
//     },
//     {
//         icon: "finance.svg",
//         title: "Finance",
//         count: 168
//     },
//     {
//         icon: "lightning.svg",
//         title: "Software",
//         count: 1856
//     },
//     {
//         icon: "human.svg",
//         title: "Human Resource",
//         count: 165
//     },
//     {
//         icon: "management.svg",
//         title: "Management",
//         count: 965
//     },
//     {
//         icon: "retail.svg",
//         title: "Retail & Products",
//         count: 563
//     },
//     {
//         icon: "security.svg",
//         title: "Security Analyst",
//         count: 254
//     },
//     {
//         icon: "content.svg",
//         title: "Content Writer",
//         count: 142
//     },
//     {
//         icon: "research.svg",
//         title: "Market Research",
//         count: 532
//     }
// ];

const CategorySlider = () => {
    const [data,setData] = useState([])

    useEffect(()=>{
    const getCategories= async()=>{
        const reqOptions ={
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            },
        }
        const response = await fetch("/grants/grant-categories", reqOptions)
        const data = await response.json()

        if(!response.ok){
            console.log({"error":data.detail})
        }
        else{
            setData(data)
        }
    }
    getCategories()
},[])
    return (
        <>
            <div className="swiper-container swiper-group-5">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next"
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 30
                        },
                        575: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        767: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        991: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        1199: {
                            slidesPerView: 5,
                            spaceBetween: 30
                        }
                    }}
                    className="swiper-wrapper pb-70 pt-5 swiper-grid-jobobx"
                >
                    {data.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="swiper-slide hover-up">
                                <Link legacyBehavior href="/jobs-list">
                                    <a>
                                        <div className="item-logo">
                                            <div className="image-left">
                                                <img alt="jobBox" src={`assets/imgs/page/homepage1/${item.category_id}.svg`} />
                                            </div>
                                            <div className="text-info-right">
                                                <h4>{item.category_name}</h4>
                                                <p className="font-xs">
                                                    {item.total_num}
                                                    <span> Grants Available</span>
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

            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />
        </>
    );
};

export default CategorySlider;
