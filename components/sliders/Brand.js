import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

SwiperCore.use([Navigation]);

const BrandSlider = () => {
    return (
        <>
            <div className="swiper-container swiper-group-9 swiper">
                <Swiper
                    slidesPerView={9}
                    spaceBetween={30}
                    loop={true}
                    navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next"
                    }}
                    className="swiper-wrapper"
                >
                    <SwiperSlide>
                        <a href="#">
                            <img src="assets/imgs/slider/logo/Aston_Uni.jpg" alt="HibretOne" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#">
                            <img src="assets/imgs/slider/logo/Tech-Nation-logo.png" alt="HibretOne" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#">
                            <img src="assets/imgs/slider/logo/NatWest-Logo.png" alt="HibretOne" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#">
                            <img src="assets/imgs/slider/logo/somerset house.png" alt="HibretOne" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#">
                            <img src="assets/imgs/slider/logo/womanwho_logo.jpg" alt="HibretOne" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#">
                            <img src="assets/imgs/slider/logo/TheDataCompany_logo-2.png" alt="HibretOne" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#">
                            <img src="assets/imgs/slider/logo/UoB Crest Logo RGB Stacked Positive.jpg" alt="HibretOne" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#">
                            <img src="assets/imgs/slider/logo/WMEH.jpg" alt="HibretOne" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#">
                            <img src="assets/imgs/slider/logo/alison online.jpg" alt="HibretOne" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#">
                            <img src="assets/imgs/slider/logo/big5Logo.png" alt="HibretOne" />
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default BrandSlider;
