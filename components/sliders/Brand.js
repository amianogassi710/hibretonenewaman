import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

SwiperCore.use([Navigation]);

const BrandSlider = () => {
    return (
        <>
            <div className="swiper-container swiper-group-9 swiper">
                
                <Swiper
                    slidesPerView={7}
                    spaceBetween={40}
                    loop={true}
                    autoplay={{
                        delay: 2000
                      }}
                    centeredSlides={true}
                    // breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 7 }, 1920: { slidesPerView: 8 } }}
                    navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next"
                    }}
                    className="swiper-wrapper"
                >
                    
                    <SwiperSlide className="centered-swiper">
                        <img src="assets/imgs/slider/logo/Aston_Uni.jpg" alt="HibretOne" />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img src="assets/imgs/slider/logo/Tech-Nation-logo.png" alt="HibretOne" />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img src="assets/imgs/slider/logo/NatWest-Logo.png" alt="HibretOne" />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img src="assets/imgs/slider/logo/somerset house.png" alt="HibretOne" />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img src="assets/imgs/slider/logo/womanwho_logo.jpg" alt="HibretOne" />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img src="assets/imgs/slider/logo/TheDataCompany_logo-2.png" alt="HibretOne" />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img src="assets/imgs/slider/logo/UoB Crest Logo RGB Stacked Positive.jpg" alt="HibretOne" />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img src="assets/imgs/slider/logo/WMEH.jpg" alt="HibretOne" />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img src="assets/imgs/slider/logo/alison online.jpg" alt="HibretOne" />
                    </SwiperSlide>
                    <SwiperSlide className="centered-swiper">
                        <img src="assets/imgs/slider/logo/big5Logo.png" alt="HibretOne" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default BrandSlider;
