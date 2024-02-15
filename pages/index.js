/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import BlogSlider from "./../components/sliders/Blog";
import BrandSlider from "./../components/sliders/Brand";
import CategorySlider2 from "./../components/sliders/Category2";
import TopRekruterSlider from "./../components/sliders/TopRekruter";
import TestimonialSliderHomePage from "./../components/sliders/TestimonialHomepage";
import WhoWeHelp from "../components/elements/WhoWeHelp";
import Subscription from "../components/Layout/Subscription"
import KickstartButton from "../components/elements/KickstartButton";
import YellowBanner from "../components/elements/YellowBanner";
export default function Home() {
    return (
         <>
            <Layout>
                <div>
                    <section className="section-box">
                        <div className="banner-hero hero-2">
                            <div className="banner-inner">
                                <div className="block-banner">
                                    <img src="assets/imgs/page/homepage1/WHITE-hibretOne-Logo.svg" alt="" />
                                    <h1 className="text-30 color-white wow animate__animated animate__fadeInUp">
                                    <span className="color-blue"> Empowering aspirers </span>, founders, leaders and organisations <span className="color-blue"> to positively transform </span> the economy, society and community through <span className="color-blue"> entrepreneurship </span> & education.
                                    <span className="color-blue">  </span>

                                    </h1>
                                </div>
                                <div className="mt-60">
                                    <div className="row">
                                        <div className="col-lg-3 col-sm-3 col-6 text-center mb-20">
                                            <div className="d-inline-block text-center">
                                                <h4 className="color-white">
                                                    <span className="count">£430BN+</span>
                                                </h4>
                                                <p className="font-sm color-text-mutted">Potential Boost</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-3 col-6 text-center mb-20">
                                            <div className="d-inline-block text-center">
                                                <h4 className="color-white">
                                                    <span className="count">26.7M+</span>
                                                </h4>
                                                <p className="font-sm color-text-mutted">Prospective Aspirers</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-3 col-6 text-center mb-20">
                                            <div className="d-inline-block text-center">
                                                <h4 className="color-white">
                                                    <span className="count">18:1</span>
                                                </h4>
                                                <p className="font-sm color-text-mutted">Return on Investment</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-3 col-6 text-center mb-20">
                                            <div className="d-inline-block text-center">
                                                <h4 className="color-white">
                                                    <span className="count">£1BN</span>
                                                </h4>
                                                <p className="font-sm color-text-mutted">Annual Target</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="list-brands mt-40 mb-30">
                                <div className="box-swiper">
                                    <h2 className="text-center section-title mb-40 wow animate__animated animate__fadeInUp">Our Founding Supporters</h2>
                                    

                                    <div className="swiper-button-next swiper-button-margin" />
                                    <div className="swiper-button-prev swiper-button-margin" />
                                    <BrandSlider />
                                    
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-20">
                        <div className="container">
                            <div className="text-center">
                                <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Who we Help</h2>
                                <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Aspirers wanting to create wealth through enterprise</p>
                            </div>
                        </div>
                        <WhoWeHelp />
                    </section>
                    <section className="section-box mt-20">
                        <YellowBanner/>
                    </section>
                    <section className="section-box mt-50">
                        <div className="section-box wow animate__animated animate__fadeIn">
                            <div className="container">
                                <div className="text-center">
                                    <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">How we Help</h2>
                                    <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Evidence-led resources & tools to build enterprise success</p>
                                </div>
                                <div className="box-swiper mt-50">
                                    <CategorySlider2 />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box pt-50 pb-50 mt-80">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center mb-30">
                                    <img className="img-job-search" src="assets/imgs/page/homepage1/Business.jpg" alt="" />
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                    <h2 className="mb-40">Delivering Economic, Social  and Moral impact</h2>
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
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-50">
                        <div className="container">
                            <div className="row">
                                <h2 className="text-center section-title mb-40 wow animate__animated animate__fadeInUp">Opportunities for  entrepreneurs, at all stages of growth</h2>
                                <div className="col-lg-6 col-md-12 mb-15 mb-lg-0">
                                    <div className="box-radius-8 bg-urgent hover-up">
                                        <div className="image">
                                            <figure>
                                                <img src="assets/imgs/page/homepage1/opportunities/1.jpg" alt="jobBox" />
                                            </figure>
                                        </div>
                                        <div className="text-info">
                                            <h3>Making entrepreneurship inclusive</h3>
                                            <p className="font-sm color-text-paragraph-2">Removing barriers for the underrepresented, the overlooked and the missing entrepreneurs.‘Up to £250 billion of new value could be added to the UK economy if women started</p>
                                            <div className="mt-15">
                                                <Link legacyBehavior href="#">
                                                    <a className="btn btn-arrow-right">Read More</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="box-radius-8 bg-9 hover-up">
                                        <div className="image">
                                            <figure>
                                                <img src="assets/imgs/page/homepage1/opportunities/2.jpg" alt="jobBox" />
                                            </figure>
                                        </div>
                                        <div className="text-info">
                                            <h3>Career pathways into better-paid jobs</h3>
                                            <p className="font-sm color-text-paragraph-2">Creating higher-skilled employment opportunities for low-paid and unsuccessful entrepreneurs.‘Average self-employed female worker would earn just over 76% more</p>
                                            <div className="mt-15">
                                                <Link legacyBehavior href="#">
                                                    <a className="btn btn-arrow-right">Read More</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 mb-15 mb-lg-0">
                                    <div className="box-radius-8 bg-16 hover-up">
                                        <div className="image">
                                            <figure>
                                                <img src="assets/imgs/page/homepage1/opportunities/3.jpg" alt="jobBox" />
                                            </figure>
                                        </div>
                                        <div className="text-info">
                                            <h3>Improving startup success</h3>
                                            <div className="empty-line"></div>
                                            <p className="font-sm color-text-paragraph-2">Creating higher-skilled employment opportunities for low-paid and unsuccessful entrepreneurs.‘80% of cooperatives are still trading after</p>
                                            <div className="mt-15">
                                                <Link legacyBehavior href="#">
                                                    <a className="btn btn-arrow-right">Read More</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="box-radius-8 bg-17 hover-up">
                                        <div className="image">
                                            <figure>
                                                <img src="assets/imgs/page/homepage1/opportunities/4.jpg" alt="jobBox" />
                                            </figure>
                                        </div>
                                        <div className="text-info">
                                            <h3>Partnership and revenue opportunities</h3>
                                            <p className="font-sm color-text-paragraph-2">Creating startup and scale up B2B  social capital connections in a safe space.‘80% of corporates believe that startups can have a positive impact on a large company’s approach to</p>
                                            <div className="mt-15">
                                                <Link legacyBehavior href="#">
                                                    <a className="btn btn-arrow-right">Read More</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

        )
}
