import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

SwiperCore.use([Navigation]);

const TestimonialSliderHomePage = () => {
    return (
        <>
            <div className="swiper-container swiper-group-4-border swiper">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    loop={true}
                    navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next"
                    }}
                    className="swiper-wrapper  pb-70 pt-5"
                >
                    <SwiperSlide className="swiper-slide hover-up">
                        <div className="card-review-1">
                            <div className="image-review">
                                {" "}
                                <img src="assets/imgs/page/homepage1/testimonials/1.jpg" alt="jobBox" />
                            </div>
                            <div className="review-info">
                                <div className="review-name">
                                    <h5>Ameesha Green</h5>
                                    <p className="font-xs">Director</p>
                                    <p className="font-xs">The Book Shelf</p>
                                </div>
                                <div className="review-rating">
                                    {" "}
                                    <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                </div>
                                <div className="review-comment">Thanks to Drew's support, I got a fully funded grant from Coventry University to update my company's logo, branding & homepage  ...more.</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide hover-up">
                        <div className="card-review-1">
                            <div className="image-review">
                                {" "}
                                <img src="assets/imgs/page/homepage1/testimonials/2.jpg" alt="jobBox" />
                            </div>
                            <div className="review-info">
                                <div className="review-name">
                                    <h5>Pam Sheemar</h5>
                                    <p className="font-xs">Director</p>
                                    <p className="font-xs">Commercial Banking NatWest</p>
                                </div>
                                <div className="review-rating">
                                    {" "}
                                    <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                </div>
                                <div className="review-comment">Drew provides consistent and essential support to entrepreneurs in in our West Midlands Eco-system.This support provide ...more</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide hover-up">
                        <div className="card-review-1">
                            <div className="image-review">
                                {" "}
                                <img src="assets/imgs/page/homepage1/testimonials/3.jpg" alt="jobBox" />
                            </div>
                            <div className="review-info">
                                <div className="review-name">
                                    <h5>Byron Dixon OBE</h5>
                                    <p className="font-xs">Founder</p>
                                    <p className="font-xs">Microfresh</p>
                                </div>
                                <div className="review-rating">
                                    {" "}
                                    <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                </div>
                                <div className="review-comment">I've just been part of the inaugural Department for International Trade's UK Black Founders Mission' to NYC. My face & company featured...more</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide hover-up">
                        <div className="card-review-1">
                            <div className="image-review">
                                {" "}
                                <img src="assets/imgs/page/homepage1/testimonials/4.jpg" alt="jobBox" />
                            </div>
                            <div className="review-info">
                                <div className="review-name">
                                    <h5>Oyinkansola Adebayo</h5>
                                    <p className="font-xs">Graphic CEO & Founder</p>
                                    <p className="font-xs">Niyo Group</p>
                                </div>
                                <div className="review-rating">
                                    {" "}
                                    <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                </div>
                                <div className="review-comment">Through the support of Drew we were able to access grant funding from the West Midlands Combined Authority (WMCA). This                ...more</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide hover-up">
                        <div className="card-review-1">
                            <div className="image-review">
                                {" "}
                                <img src="assets/imgs/page/homepage4/user.png" alt="jobBox" />
                            </div>
                            <div className="review-info">
                                <div className="review-name">
                                    <h5>Ellis Kim</h5>
                                    <span className="font-xs">Digital Artist</span>
                                </div>
                                <div className="review-rating">
                                    {" "}
                                    <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                </div>
                                <div className="review-comment">Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt. Labore et dolore nostrud temp exercitation.</div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default TestimonialSliderHomePage;
