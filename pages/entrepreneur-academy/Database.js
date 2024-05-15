import { TextField } from "@mui/material";
import { useRouter } from 'next/router';
import { IoSearchSharp } from "react-icons/io5";
import React, { useState, useEffect, useRef } from "react";
import Layout from "../../components/Layout/Layout";
import { Grid } from "@mui/material";
import { IoShareSocialOutline } from "react-icons/io5";
import dynamic from "next/dynamic";
import Swiper from 'swiper';
import YellowBanner from "../../components/elements/YellowBanner";
import FullAccessButton from "../../components/elements/FullAccessButton";
import Subscription from "../../components/Layout/Subscription";

const articleData = [
    {
        title: "Time to Change",
        image: "/assets/imgs/page/evidence-led-research/time to change.png",
        pdfLocation: "/assets/files/page/evidence-led-research/time to change.pdf",
    },
    {
        title: "Supporting Diversity",
        image: "/assets/imgs/page/evidence-led-research/supporting diversity.png",
        pdfLocation: "/assets/files/page/evidence-led-research/supporting diversity.pdf",
    },
    {
        title: "Minority Businesses",
        image: "/assets/imgs/page/evidence-led-research/minority businesses.png",
        pdfLocation: "/assets/files/page/evidence-led-research/minority businesses.pdf",
    },
    {
        title: "Disability and Entrepreneurship",
        image: "/assets/imgs/page/evidence-led-research/disability and entrepreneurship.png",
        pdfLocation: "/assets/files/page/evidence-led-research/disability and entrepreneurship.pdf",
    },
    {
        title: "Beyond the VC",
        image: "/assets/imgs/page/evidence-led-research/beyond the vc.png",
        pdfLocation: "/assets/files/page/evidence-led-research/beyond the vc.pdf",
    },
    {
        title: "Exploring the Outcomes",
        image: "/assets/imgs/page/evidence-led-research/exploring the outcomes.png",
        pdfLocation: "/assets/files/page/evidence-led-research/exploring the outcomes.pdf",
    },
    {
        title: "The Shaw Trust",
        image: "/assets/imgs/page/evidence-led-research/the shaw trust.png",
        pdfLocation: "/assets/files/page/evidence-led-research/the shaw trust.pdf",
    },
    {
        title: "The 2023 UK LGBTQ+",
        image: "/assets/imgs/page/evidence-led-research/the 2023 uk lgbtq.png",
        pdfLocation: "/assets/files/page/evidence-led-research/the 2023 uk lgbtq.pdf",
    },
    {
        title: "Immerse",
        image: "/assets/imgs/page/evidence-led-research/immerse.png",
        pdfLocation: "/assets/files/page/evidence-led-research/immerse.pdf",
    },
    {
        title: "Unlocking Opportunity",
        image: "/assets/imgs/page/evidence-led-research/unlocking opportunity.png",
        pdfLocation: "/assets/files/page/evidence-led-research/unlocking opportunity.pdf",
    },
    {
        title: "Diversity Beyond Gender",
        image: "/assets/imgs/page/evidence-led-research/diversity beyond gender.png",
        pdfLocation: "/assets/files/page/evidence-led-research/diversity beyond gender.pdf",
    },
    {
        title: "The Alison Rose",
        image: "/assets/imgs/page/evidence-led-research/the alison rose.png",
        pdfLocation: "/assets/files/page/evidence-led-research/the alison rose.pdf",
    },
    {
        title: "The Dyslexic Dynamic",
        image: "/assets/imgs/page/evidence-led-research/the dyslexic dynamic.png",
        pdfLocation: "/assets/files/page/evidence-led-research/the dyslexic dynamic.pdf",
    },
    {
        title: "The Top 20 Reasons",
        image: "/assets/imgs/page/evidence-led-research/the top 20 reasons.png",
        pdfLocation: "/assets/files/page/evidence-led-research/the top 20 reasons.pdf",
    },
];


function useLockBodyScroll(open) {
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.body.style.overflow = "visible";
        };
    }, [open]);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://website-widgets.pages.dev/dist/sienna.min.js";
        script.defer = true;
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);
}


const IndustryIntelligenceTopBusinessIdea = () => {

    const [showMore1, setShowMore1] = useState(false);
    const [showMore2, setShowMore2] = useState(false);
    const [showMore3, setShowMore3] = useState(false);
    const [readMore1, setReadMore1] = useState(false);
    const [readMore2, setReadMore2] = useState(false);
    const [readMore3, setReadMore3] = useState(false);
    const [readMore4, setReadMore4] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    useLockBodyScroll(isOpen);

    const router = useRouter();
    const [searchText, setSearchText] = useState('');
    const [filteredArticles, setFilteredArticles] = useState([]);
    const [slidesPerView, setSlidesPerView] = useState(2);
    const [matchedResultsCount, setMatchedResultsCount] = useState(0);
    const swiperRef = useRef(null);
    const swiperReference = useRef(null);

    const [carouselTrue, setCarouselTrue] = useState(false);


    const [formData, setFormData] = useState({
        number_of_business_ideas: '',
        location: ''
    });
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

    // useEffect(() => {
    //     if (swiperRef.current !== null) {
    //         const mySwiper = new Swiper(swiperRef.current, {
    //             slidesPerView: 6,
    //             spaceBetween: 30,
    //             navigation: {
    //                 nextEl: '.swiper-button-next',
    //                 prevEl: '.swiper-button-prev',
    //             },
    //             breakpoints: {
    //                 100: {
    //                     slidesPerView: 1,
    //                 },
    //                 450: {
    //                     slidesPerView: 2,
    //                 },
    //                 576: {
    //                     slidesPerView: 3,
    //                 },
    //                 768: {
    //                     slidesPerView: 4,
    //                 },
    //                 992: {
    //                     slidesPerView: 5,
    //                 },
    //                 1200: {
    //                     slidesPerView: 6,
    //                 },
    //                 1400: {
    //                     slidesPerView: 6,
    //                 }
    //             },
    //         });
    //         swiperRef.current.swiperInstance = mySwiper;
    //     }
    // }, []);

    useEffect(() => {
        if (swiperReference.current !== null) {
            const mySearchSwiper = new Swiper(swiperReference.current, {
                slidesPerView: 6,
                spaceBetween: 30,
                navigation: {
                    nextElReference: '.swiper-button-next-Reference',
                    prevElReference: '.swiper-button-prev-Reference',
                },
                breakpoints: {
                    100: {
                        slidesPerView: 1,
                    },
                    450: {
                        slidesPerView: 2,
                    },
                    576: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    992: {
                        slidesPerView: 5,
                    },
                    1200: {
                        slidesPerView: 6,
                    },
                    1400: {
                        slidesPerView: 6,
                    }
                },
            });
            swiperReference.current.swiperInstanceExplore = mySearchSwiper;
        }
    }, []);
    const [isBelow768px, setIsBelow768px] = useState(false);


    useEffect(() => {
        const handleResize = () => {
            setIsBelow768px(window.innerWidth < 768);
            setSlidesPerView(window.innerWidth < 992 ? 2 : 6); // Adjust slidesPerView based on the screen size
        };

        // Initial check
        handleResize();

        // Listen for window resize events
        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // const handlePrevious = () => {
    //     if (swiperRef.current !== null && swiperRef.current.swiperInstance) {
    //         swiperRef.current.swiperInstance.slidePrev();
    //     }
    // };

    // const handleNext = () => {
    //     if (swiperRef.current !== null && swiperRef.current.swiperInstance) {
    //         swiperRef.current.swiperInstance.slideNext();
    //     }
    // };

    const handlePreviousExplore = () => {
        if (swiperReference.current !== null && swiperReference.current.swiperInstanceExplore) {
            swiperReference.current.swiperInstanceExplore.slidePrev();
        }
    };

    const handleNextExplore = () => {
        if (swiperReference.current !== null && swiperReference.current.swiperInstanceExplore) {
            swiperReference.current.swiperInstanceExplore.slideNext();
        }
    };

    return (
        <>
            <Layout>
                <div className="background-random-evidenceledresearch">
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
                                            className="evidenceled-search-one-database"
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

                                        <button className="evidenceled-btn-search-database">
                                            <IoSearchSharp className="searchbox-searchicon-evidenceled" style={{ marginTop: '-2px' }} /> SEARCH
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section-box mt-75 mt-75-50">
                        <YellowBanner />
                    </section>

                    <section className="section-box mt-75 mt-75-40">
                        <FullAccessButton />
                    </section>

                    <Subscription />
                </div>
            </Layout>
        </>
    );
};

export default IndustryIntelligenceTopBusinessIdea;
