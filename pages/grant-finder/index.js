/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import GrantFinderCategoryTab from "../../components/elements/GrantFinderCategoryTab";
import CategorySlider from "../../components/sliders/Category";
import TestimonialSlider from "../../components/sliders/Testimonial1";
import Location from "../../components/elements/Location";
import YellowBanner from "../../components/elements/YellowBanner";
import KickstartButton from "../../components/elements/KickstartButton";
import TestimonialSliderHomePage from "./../../components/sliders/TestimonialHomepage";
import Subscription from "../../components/Layout/Subscription"
import GrantFinderSearchBox from "./../../components/elements/GrantFinderSearchBox";
export default function Index2() {
    return (
        <>
            <Layout>
                <div>
                    <section className="section-box">
                        <div className=" banner-hero bg-img-calculator">
                            <div className="container d-flex align-items-center">
                                <div className="row">
                                    <div className="col">
                                        <h2 className="mb-10">Grant Finder</h2>
                                        <p className="font-lg color-text-paragraph-2">Search for the latest personal, public, private, academic and voluntary sector grant funding</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <section className="section-box overflow-visible mt-50 mb-50">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                    <div className="text-center">
                                        <h1 className="color-brand-2">
                                            <span className="count">£100M</span>

                                        </h1>
                                        <h5>Total Grants</h5>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                    <div className="text-center">
                                        <h1 className="color-brand-2">
                                            <span className="count">3200+</span>
                                        </h1>
                                        <h5>Number of Grants</h5>

                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                    <div className="text-center">
                                        <h1 className="color-brand-2">
                                            <span className="count">1100+</span>
                                        </h1>
                                        <h5>Founders</h5>
   
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                    <div className="text-center">
                                        <h1 className="color-brand-2">
                                            <span className="count">£7.3</span>
                                        </h1>
                                        <h5>Supported</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    <section className="section-box mt-0">
                        <div className="container">
                        
                            <div className="banner-hero">
                                <div className="block-banner">
                                    <div className="text-center">
                                        <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Funding for Every Type of Enterprise</h2>
                                        <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Find the right grants for you.</p>
                                    </div>
                                        <GrantFinderSearchBox/>
                                </div>
                                
                            </div>
                        </div>
                    </section>
                    <section className="section-box overflow-visible mt-0 mb-110">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                    <div className="text-center">
                                        <h1 className="color-brand-2">
                                            <span className="count">£100M</span>

                                        </h1>
                                        <h5>Total Grants</h5>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                    <div className="text-center">
                                        <h1 className="color-brand-2">
                                            <span className="count">3200+</span>
                                        </h1>
                                        <h5>Number of Grants</h5>

                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                    <div className="text-center">
                                        <h1 className="color-brand-2">
                                            <span className="count">1100+</span>
                                        </h1>
                                        <h5>Founders</h5>
   
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                    <div className="text-center">
                                        <h1 className="color-brand-2">
                                            <span className="count">£7.3</span>
                                        </h1>
                                        <h5>Supported</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-0">
                        <div className="container">
                            <div className="text-center">
                                <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Explore a Selection of Grants</h2>
                                <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Over 20 new grants uploaded everyday.</p>
                            </div>
                            <div className="mt-0">

                                <GrantFinderCategoryTab/>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-80">
                    <div className="section-box wow animate__animated animate__fadeIn">
                        <div className="container">
                            <div className="text-center">
                                <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Browse by category</h2>
                                <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Find the grant that’s perfect for you. about 800+ new grants everyday</p>
                            </div>
                            <div className="box-swiper mt-50">
                                <CategorySlider />
                            </div>
                        </div>
                    </div>
                    </section>
                    <section className="section-box mt-20">
                        <YellowBanner/>
                    </section>
                    <section className="section-box pt-50 pb-50 mt-80">
                        <div className="container">
                            <div className="text-center mb-50">
                                <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">How It Works</h2>
                                <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Just via some simple steps, you will find your ideal grants you are looking for!</p>
                            </div>
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                    {/* <h2 className="mb-40">Delivering Economic, Social  and Moral impact</h2> */}
                                    <div className="box-checkbox mb-30">
                                        <h6>Economic</h6>
                                        <p className="font-md color-text-paragraph-2 justify-content-between">Entrepreneurship is multifaceted - job creation, innovation, economic growth, wealth creation, tax revenue, diversity. A thriving entrepreneurial environment is often seen as a key driver of economic prosperity and societal progress.</p>
                                    </div>
                                    <div className="box-checkbox mb-30">
                                        <h6>Social</h6>
                                        <p className="font-md color-text-paragraph-2">Entrepreneurship goes beyond economic impact. The potential to drive positive social change, address societal challenges, and contribute to the overall well-being of communities. Creating jobs which contribute to reducing unemployment rates and improving the economic well-being of communities.</p>
                                    </div>
                                    <div className="box-checkbox mb-30">
                                        <h6>Moral</h6>
                                        <p className="font-md color-text-paragraph-2">Entrepreneurship involves leadership grounded in ethical principles. Many successful entrepreneurs engage in philanthropy and charitable activities, using their wealth and influence to address issues contributing to the society’s welfare. Valuing diversity and inclusion in more equitable and just societies.</p>
                                    </div>
                                    
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center mb-30">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/CIoWgp020B0?si=JXBFLD2VmMtHcDwG" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                </div>
                            </div>

                        </div>
                    </section>
                    <section className="section-box mt-70 mb-40">
                        <div className="container">
                            <div className="text-center">
                                <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Simple steps for grant funding access</h2>
                                <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Just via some simple steps, you will find your ideal candidates you are looking for!</p>
                            </div>
                            <div className="mt-70">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="box-step step-1">
                                            <h1 className="number-element">1</h1>
                                            <h4 className="mb-20">
                                                Register an
                                                <br className="d-none d-lg-block" />
                                                account to start
                                            </h4>
                                            <p className="font-lg color-text-paragraph-2">
                                            Free access to over 90% of our platform resources forever
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="box-step step-2">
                                            <h1 className="number-element">2</h1>
                                            <h4 className="mb-20">
                                                Explore the
                                                <br className="d-none d-lg-block" />
                                                game-changing tools
                                            </h4>
                                            <p className="font-lg color-text-paragraph-2">
                                            Empowering you to start, grow and scale
                                                <br className="d-none d-lg-block" />
                                                your business or social enterprise
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="box-step">
                                            <h1 className="number-element">3</h1>
                                            <h4 className="mb-20">
                                                Find opportunities
                                                <br className="d-none d-lg-block" />

                                            </h4>
                                            <p className="font-lg color-text-paragraph-2">
                                            Discover sales, procurement,
                                                <br className="d-none d-lg-block" />
                                                branding all in one place{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-50 text-center">
                                <a className="btn btn-default">Get Started</a>
                            </div>
                        </div>
                    </section>

                    <section className="section-box mt-50">
                        <div className="section-box wow animate__animated animate__fadeIn">
                            <div className="container">
                                <div className="text-center">
                                    <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Testimonials</h2>
                                    <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
                                    Trusted feedback from the aspirers and the ecosystem
                                        {/* <br className="d-none d-lg-block" />
                                        and feed back to us! */}
                                    </p>
                                </div>
                                <div className="box-swiper mt-50">
                                    <div className="swiper-button-next" />
                                    <div className="swiper-button-prev" />
                                    <TestimonialSliderHomePage />
                                </div>
                                <KickstartButton/>
                            </div>
                        </div>
                    </section>
                    <Subscription/>
                </div>
            </Layout>
        </>
    );
}
