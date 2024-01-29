import SwiperCore, { Navigation } from "swiper";
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

SwiperCore.use([Navigation]);

const TestimonialSliderHomePage = () => {
    const [showMore1, setShowMore1] = useState(false);
    const [showMore2, setShowMore2] = useState(false);
    const [showMore3, setShowMore3] = useState(false);
    const [showMore4, setShowMore4] = useState(false);

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
                                <div className="review-comment">
                                    {showMore1 ? "Thanks to Drew's support, I got a fully funded grant from Coventry University to update my company's logo, branding, and homepage, taking us to the next level." : "Thanks to Drew's support, I got a fully funded grant from Coventry University to update my company's logo, branding, and homepage"}
                                    <button className="btn-show-more" onClick={() => setShowMore1(!showMore1)}>{showMore1 ? "show less" : "...more"}</button>
                                </div> 
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
                                <div className="review-comment">
                                    {showMore2 ? "Drew provides consistent and essential support to entrepreneurs in in our West Midlands Eco-system. This support provides essential lifeblood for\
entrepreneurial growth and ultimately their survival. Essential support on funding and access to finance. \
He is a super connector that pulls together the wide-reaching information available across the region and provides a single point of truth to entrepreneurs via his newsletter. His Show Me The Money workshops pull together experts and funders from across the region." : "Drew provides consistent and essential support to entrepreneurs in in our West Midlands Eco-system. This support provides "}
                                    <button className="btn-show-more" onClick={() => setShowMore2(!showMore2)}>{showMore2 ? "show less" : "...more"}</button>
                                </div> 
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
                                <div className="review-comment">
                                    {showMore3 ? "I've just been part of the inaugural Department for International Trade's UK Black Founders Mission' to NYC. My face and company featured on the famous big screen on the Nasdaq Building in Times Square. Without Drew's introduction to the DIT programme it would never have happened, and we wouldn't have made the connections that are now enabling us to grow our business in the lucrative US market." : "I've just been part of the inaugural Department for International Trade's UK Black Founders Mission' to NYC. My face & company featured"}
                                    <button className="btn-show-more" onClick={() => setShowMore3(!showMore3)}>{showMore3 ? "show less" : "...more"}</button>
                                </div>
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
                                    <p className="font-xs">CEO & Founder</p>
                                    <p className="font-xs">Niyo Group</p>
                                </div>
                                <div className="review-rating">
                                    {" "}
                                    <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                </div>
                                <div className="review-comment">
                                    {showMore4 ? "I've just been part of the inaugural Department for International Trade's UK Black Founders Mission' to NYC. My face and company featured on the famous big screen on the Nasdaq Building in Times Square. Without Drew's introduction to the DIT programme it would never have happened, and we wouldn't have made the connections that are now enabling us to grow our business in the lucrative US market." : "I've just been part of the inaugural Department for International Trade's UK Black Founders Mission' to NYC. My face & company featured"}
                                    <button className="btn-show-more" onClick={() => setShowMore4(!showMore4)}>{showMore4 ? "show less" : "...more"}</button>
                                </div>                            
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default TestimonialSliderHomePage;
