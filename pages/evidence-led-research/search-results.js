import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import Subscription from "../../components/Layout/Subscription";
import KickstartButton from "../../components/elements/KickstartButton";
import { useRouter } from "next/router";
import axios from "axios";
import { colourOptions } from './data';

import EvidenceLedResearchMUISearch from "./EvidenceLedResearchMUISearch";

function useLockBodyScroll(open) {
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.body.style.overflow = "visible";
        };
    }, [open]);
}

export default function SearchResults() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const month = currentDate.getMonth();

    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        selectedOption: "",
    });
    const [responseData, setResponseData] = useState(null);
    const [showDialog, setShowDialog] = useState(false);
    useEffect(() => {
        const { selectedOption } = router.query;
        setFormData({
            selectedOption: selectedOption || "",
        });
    }, [router.query]);

    const callAPI = async () => {
        try {
            setLoading(true);
            incrementCounter();
            const response = await axios.post(
                "http://localhost:8000/occuptionalguide",
                formData
            );
            setResponseData(response.data);

        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        if (formData.guidename && formData.guidetype && formData.selectedOption) {
            callAPI();
        }
    }, [formData]);

    const incrementCounter = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };


    const handleClick = (event) => {
        setShowDialog(true);
    };

    const handleClose = () => {
        setShowDialog(false);
    };

    const [showIndustryComponent, setShowIndustryComponent] = useState(true);


    const filteredArticles = colourOptions.filter((option) =>
        option.value && option.value.toLowerCase().includes(formData.selectedOption ? formData.selectedOption.toLowerCase() : '')
    );



    useLockBodyScroll(isOpen);

    const handlePrevious = () => {
        if (swiperRef.current !== null && swiperRef.current.swiperInstance) {
            swiperRef.current.swiperInstance.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current !== null && swiperRef.current.swiperInstance) {
            swiperRef.current.swiperInstance.slideNext();
        }
    };

    return (
        <>
            <Layout>
                <div className="background-random-industry-intelligence">
                    {/* <DiscoverButton /> */}
                    <section className="section-box mt-25 mb-25">
                        <div className="container">
                            <div className="banner-hero1">
                                <div className="block-banner1">
                                    {showIndustryComponent && <EvidenceLedResearchMUISearch />}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="course__area pt-20 pb-75 grey-bg-3">
                        <div className="container">
                            <div className="row justify-content-center">


                                <div className="col-xxl-8 col-xl-9 col-lg-9">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="course__tab-content">
                                                <div className="tab-content" id="courseTabContent">
                                                    <div
                                                        className="tab-pane fade show active"
                                                        id="grid"
                                                        role="tabpanel"
                                                        aria-labelledby="grid-tab"
                                                    >
                                                        <div className="row">
                                                            <h3 className="guideheading">
                                                                Results for: {formData.selectedOption}
                                                            </h3>
                                                            <div
                                                                className="mb-15"
                                                                style={{
                                                                    textAlign: "justify",
                                                                    marginTop: "11px",
                                                                }}
                                                            ></div>
                                                        </div>

                                                        <div className="swiper-container mt-50" style={{ overflow: 'hidden' }}>
                                                            <div className="swiper-wrapper">
                                                                {filteredArticles.length > 0 ? (
                                                                    filteredArticles.map((article, index) => (
                                                                        <div key={index} className="swiper-slide swiper-slide-searchbar">
                                                                            <div className="card-content-evidenceled hover-up">
                                                                                <a href={`${article.pdfLocation}`} target="_blank" rel="noopener noreferrer">
                                                                                    <img
                                                                                        loading="lazy"
                                                                                        src={article.image}
                                                                                        alt="Article featured image"
                                                                                        className="featured-image-evidenceled"
                                                                                    />
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    ))
                                                                ) : (
                                                                    <div className="swiper-slide swiper-slide-searchbar">
                                                                        <p>No results found for: {formData.selectedOption}</p>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c658ccb5a89c8b196706d39f3080fe9aec5fca63395c6bacc09940807e1a2dd6?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&"
                    alt=""
                    className="swiperprevious-evidenceled"
                    onClick={handlePrevious}
                />
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2337491ace933b4787201406e5daad90ed836fd3e530ce3a96946f5557244025?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&"
                    alt=""
                    className="swipernext-evidenceled"
                    onClick={handleNext}
                />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <KickstartButton />
                    <Subscription />
                </div>
            </Layout>
        </>
    );
}