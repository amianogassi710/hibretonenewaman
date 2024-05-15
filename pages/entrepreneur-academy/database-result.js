import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import Subscription from "../../components/Layout/Subscription";
import KickstartButton from "../../components/elements/KickstartButton";
import ComingSoon from '../../components/elements/ComingSoon';
import { useRouter } from "next/router";
import axios from "axios";
import IndustryIntelligenceTopBusinessIdea from "./Database";
import { IoShareSocialOutline } from "react-icons/io5";
import FullAccessButton from "../../components/elements/FullAccessButton";
import { TextField } from "@mui/material";
import { IoSearchSharp } from "react-icons/io5";

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

export default function InnerPage() {
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
    const monthName = monthNames[month];
    const year = currentDate.getFullYear();
    const formattedDate = `${day} ${monthName} ${year}`;

    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [counter, setCounter] = useState(0);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        number_of_business_ideas: "",
        location: "",
    });
    const [responseData, setResponseData] = useState(null);
    useEffect(() => {
        const { number_of_business_ideas, location } = router.query;
        setFormData({
            number_of_business_ideas: number_of_business_ideas || "",
            location: location || "",
        });
    }, [router.query]);

    const callAPI = async () => {
        try {
            setLoading(true);
            incrementCounter();
            const response = await axios.post(
                "http://localhost:8000/businessidea",
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
        if (formData.number_of_business_ideas && formData.location) {
            callAPI();
        }
    }, [formData]);

    
    const [formErrors, setFormErrors] = useState({
        number_of_business_ideas: false,
        location: false
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!formData.number_of_business_ideas || !formData.location) {
            setFormErrors({
                number_of_business_ideas: !formData.number_of_business_ideas,
                location: !formData.location
            });
            return;
        }

        const queryParams = new URLSearchParams(formData);

        const url = `/evidence-led-research/database-result?${queryParams}`;
        if (window.location.pathname !== '/evidence-led-research/database-result') {
            router.push(url);
        } else {
            router.push({
                pathname: window.location.pathname,
                query: queryParams.toString()
            }, undefined, { shallow: true, replace: true });
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));

        setFormErrors(prevFormErrors => ({
            ...prevFormErrors,
            [name]: false
        }));
    }

    const incrementCounter = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };

    const [showDialog, setShowDialog] = useState(false);

    const handleClick = (event) => {
        setShowDialog(true);
    };

    const handleClose = () => {
        setShowDialog(false);
    };

    useLockBodyScroll(isOpen);

    return (
        <>
            <Layout>
                <div className="background-random-evidenceledresearch ">
                    <section className="section-box">
                        <div className="banner-hero-builder bg-img-businessbuilder-evidenceledresearch">
                            <div className="container d-flex align-items-center">
                                <div className="row">
                                    <div className="col">
                                        <div className="builder-hero-heading">Evidence-led Research</div>
                                        <div className="builder-hero-subheading">
                                            Leading <span className="color-blue"> global academic research </span> is used as our  economic, social and moral blueprint for change
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section-box mt-50 mt-50-30">
                        <div className="container">
                            <div className="flex-container">
                                <div className="share-icon-container-evidenceledresearch">
                                    <IoShareSocialOutline className="share-icon-evidenceledresearch" />
                                </div>
                                <div className="text-center">
                                    <div className="component-title">
                                        Explore the Supporting Global Research
                                    </div>
                                    <div className="component-subtitle">
                                        Social and economic research from great sources all in one place
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-50 mt-50-30">
                            <div className="">
                                <div className="industry-form-find-top  wow animate__animated animate__fadeInUp" style={{ width: '80%', margin: 'auto' }}>
                                    <form onSubmit={handleSubmit} className="database-search-evidence">
                                        <TextField
                                            name="location"
                                            id="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            label="Enter name of report, article, research or subject"
                                            variant="standard"

                                            InputProps={{
                                                disableUnderline: true,
                                            }}
                                            className="industry-input-top-one"
                                        />
                                        {formErrors.location && <p style={{ color: 'red' }}>required*</p>}
                                        <div className="divider-database-evidence"></div>

                                        <input
                                            className="evidenceled-search-two-database"
                                            type="text"
                                            name="number_of_business_ideas"
                                            id="number_of_business_ideas"
                                            value={formData.number_of_business_ideas}
                                            onChange={handleChange}
                                            placeholder="Numbers"
                                            style={{ marginTop: "5px" }}
                                        />
                                        {formErrors.number_of_business_ideas && <p style={{ color: 'red', marginRight: '15px' }}>required*</p>}
                                        {/* <button className="btn-search-database-evidence">SEARCH</button> */}

                                        <button className="evidenceled-btn-search-database">
                                            <IoSearchSharp className="searchbox-searchicon-evidenceled" style={{ marginTop: '-2px' }} /> SEARCH
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* <IndustryIntelligenceTopBusinessIdea /> */}
                    </section>

                    <section className="section-box mt-50 mt-50-30">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xxl-3 col-xl-3 col-lg-3">
                                    <div
                                        className="course__sidebar"
                                        style={{ marginLeft: "5px" }}
                                    >
                                        <div
                                            className="course__sidebar-info"
                                            style={{ textAlign: "center" }}
                                        >
                                            <div className="div-1">
                                                <div className="div-2">
                                                    Overview
                                                </div>

                                                <div className="div-3" />
                                                <div className="div-4">
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3966d739773f1551c4c6002add0bc2e41d51a27c33ca1d3932fdef69acd9652f?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&"
                                                        className="img"
                                                        alt="icon"
                                                    />
                                                    <div className="div-5">
                                                        Number {" "}
                                                    </div>
                                                </div>
                                                <div className="div-6">
                                                    {" "}
                                                    {
                                                        formData.number_of_business_ideas
                                                    }{" "}
                                                </div>

                                                <div className="div-7">
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3966d739773f1551c4c6002add0bc2e41d51a27c33ca1d3932fdef69acd9652f?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&"
                                                        className="img"
                                                        alt="icon"
                                                    />
                                                    <div className="div-5">
                                                        {" "}
                                                        Report Number{" "}
                                                    </div>
                                                </div>
                                                <div className="div-6">{`ELR${counter
                                                    .toString()
                                                    .padStart(3, "0")}`}</div>

                                                <div className="div-7">
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d851505b0f32c6cd83e7b1ce733fe851df6a7c3966b90317b41955fd13be155d?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&"
                                                        className="img"
                                                        alt="icon"
                                                    />
                                                    <div className="div-5">
                                                        {" "}
                                                        Keywords{" "}
                                                    </div>
                                                </div>
                                                <div className="div-6">
                                                    {formData.location}
                                                </div>

                                                <div className="div-14">
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/174809d5b3e32c42ab5fce22b15a815bb39a854a689610d2af97d42b1f822ee6?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&"
                                                        className="img"
                                                        alt="icon"
                                                    />
                                                    <div className="div-5">
                                                        {" "}
                                                        Date Produced{" "}
                                                    </div>
                                                </div>
                                                <div className="div-6">
                                                    {" "}
                                                    {formattedDate}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xxl-9 col-xl-9 col-lg-9">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="course__tab-content">
                                                <div className="tab-content" id="courseTabContent"
                                                >
                                                    <div
                                                        className="tab-pane fade show active" id="grid" role="tabpanel" aria-labelledby="grid-tab"
                                                    >
                                                        <div className="row">
                                                            <div className="component-title component-title-database-search-evidence">
                                                            Results For: {" "}
                                                                            {
                                                                                formData.location
                                                                            }{" "}
                                                            </div>
                                                        </div>
                                                        <div>
                                                            {loading ? (
                                                                <div style={{ textAlign: "center", }}
                                                                >
                                                                    <div
                                                                        className="spinner-border text-primary"
                                                                        role="status"
                                                                    >
                                                                        <span className="visually-hidden"></span>
                                                                    </div>
                                                                    <p
                                                                        className="descriptionoftitle"
                                                                        style={{ color: "#3d66f5", }}
                                                                    >
                                                                        Your document is generating. Please wait.
                                                                    </p>
                                                                </div>
                                                            ) : (
                                                                <>
                                                                    <div className="row mt-15">
                                                                        <div className="component-subtitle">
                                                                            {" "}
                                                                            {
                                                                                formData.number_of_business_ideas
                                                                            }{" "}
                                                                            results found
                                                                        </div>
                                                                        <div className="mt-50 mt-50-30" style={{ textAlign: "justify" }}                                                                                >
                                                                            <ul className="bullet-list-database-search-evidence">
                                                                                {responseData && (
                                                                                    <ul style={{ paddingLeft: '0px' }}>
                                                                                        {responseData.extracted_text_1
                                                                                            .split("<h3>")
                                                                                            .filter((section, index) => index !== 0)
                                                                                            .map((section, index) => {
                                                                                                const [titlePart, descriptionPart] = section.split("</h3>");
                                                                                                const cleanTitlePart = titlePart.replace(/^\d+\.\s*/, "").trim();
                                                                                                const cleanDescriptionPart = descriptionPart ? descriptionPart.replace(/<[^>]+>/g, "").trim() : "";
                                                                                                const link = cleanDescriptionPart.match(/http(s)?:\/\/[^\s]+/g);
                                                                                                const title = cleanTitlePart || "No Title";
                                                                                                return (
                                                                                                    <li key={index} className="descriptionoftitle">
                                                                                                        <div className="border-result-evidence hover-up">
                                                                                                            <span>{`• `}</span>
                                                                                                            <span style={{ fontWeight: "bold" }}>{title}</span>
                                                                                                            {link && (
                                                                                                                <>
                                                                                                                    <br />
                                                                                                                    <a href={link[0]} target="_blank" rel="noopener noreferrer">{link[0]}</a>
                                                                                                                </>
                                                                                                            )}
                                                                                                        </div>
                                                                                                    </li>
                                                                                                );
                                                                                            })}
                                                                                    </ul>
                                                                                )}

                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    <div className="button-container">
                                                                        <button className="button regenerate-button" onClick={handleClick}                                                                       >
                                                                            Regenerate
                                                                        </button>

                                                                        <button className="button download-button" onClick={handleClick}                                                                        >
                                                                            Download PDF
                                                                        </button>

                                                                        <button className="button share-button" onClick={handleClick}                                                                        >
                                                                            Share by Email
                                                                        </button>
                                                                    </div>
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section-box mt-75 mt-75-40">
                        <FullAccessButton />
                    </section>

                    <Subscription />
                </div>
            </Layout>
        </>
    );
}