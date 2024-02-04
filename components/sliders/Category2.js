import Link from "next/link";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation]);

const data = [
    {
        img: "1.jpg",
        title: "Business Builder",
        count: 55
    },
    {
        img: "2.jpg",
        title: "Funding Builder",
        count: 35
    },
    {
        img: "3.jpg",
        title: "Resources Builder",
        count: 20
    },
    {
        img: "4.jpg",
        title: "Career Builder",
        count: 15
    },
    {
        img: "5.jpg",
        title: "Ecosystem Connect",
        count: 10
    },
    {
        img: "6.jpg",
        title: "Industry Intelligence",
        count: 10
    },
    {
        img: "7.jpg",
        title: "Problem Triage",
        count: 10
    },
    {
        img: "8.jpeg",
        title: "Grant Finder",
        count: 10
    },
    {
        img: "9.jpeg",
        title: "Grant Writer",
        count: 10
    },
    {
        img: "10.jpeg",
        title: "Scholarships & Bursaries",
        count: 10
    },
    {
        img: "11.jpeg",
        title: "Free Courses",
        count: 10
    },
    {
        img: "12.jpeg",
        title: "Mentor Masterclasses",
        count: 10
    },
    {
        img: "13.jpeg",
        title: "R&D Tax Calculator",
        count: 10
    }
];

const CategorySlider2 = () => {
    return (
        <>
            <div className="swiper-container swiper-group-6 mh-none swiper categories-slide-2">
                <Swiper
                    slidesPerView="auto"
                    spaceBetween={30}
                    loop={true}
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
                            slidesPerView: 6,
                            spaceBetween: 30
                        }
                    }}
                    className="swiper-wrapper pb-70 pt-5"
                >
                    {data.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="swiper-slide hover-up">
                                <div className="card-grid-5 card-category hover-up" style={{ backgroundImage: `url(assets/imgs/page/homepage1/how-we-help/${item.img})` }}>
                                    {/* <Link legacyBehavior href="/"> */}
                                        <div className="box-cover-img">
                                            <div className="content-bottom">
                                                <h6 className="color-white mb-5">{item.title}</h6>
                                                {/* <p className="color-white font-xs">
                                                    <span>{item.count}</span>
                                                    <span> Jobs Available</span>
                                                </p> */}
                                            </div>
                                        </div>
                                    {/* </Link> */}
                                </div>
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

export default CategorySlider2;
