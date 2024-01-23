/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import CategoryTab2 from "./../components/elements/CategoryTab2";
import BlogSlider from "./../components/sliders/Blog";
import BrandSlider from "./../components/sliders/Brand";
import CategorySlider2 from "./../components/sliders/Category2";
import TopRekruterSlider from "./../components/sliders/TopRekruter";
import TestimonialSlider1 from "./../components/sliders/Testimonial1";
import TestimonialSlider2 from "./../components/sliders/Testimonial2";
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
                                    A groundbreaking initiative <span className="color-blue"> empowering aspirers </span>, founders, leaders and organisations <span className="color-blue"> to positively transform </span> the economy, society and community through <span className="color-blue"> entrepreneurship </span> & education.
                                    <span className="color-blue">  </span>

                                    </h1>
                                    {/* <div className="font-lg font-regular color-white mt-20 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                    A revolutionary platform delivering the most comprehensive first-line business resources, tools and funding, all in one place
                                    </div> */}
                                    {/* <div className="form-find mt-40 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                        <form>
                                            <input className="form-input mr-10" type="text" placeholder="" />
                                            <button className="btn btn-default btn-find font-sm">Search</button>
                                        </form>
                                    </div> */}
                                </div>
                                <div className="mt-60">
                                    <div className="row">
                                        <div className="col-lg-3 col-sm-3 col-6 text-center mb-20">
                                            <div className="d-inline-block text-center">
                                                <h4 className="color-white">
                                                    <span className="count">231+</span>
                                                </h4>
                                                <p className="font-sm color-text-mutted">Grants Posted</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-3 col-6 text-center mb-20">
                                            <div className="d-inline-block text-center">
                                                <h4 className="color-white">
                                                    <span className="count">297+</span>
                                                </h4>
                                                <p className="font-sm color-text-mutted">Online Courses</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-3 col-6 text-center mb-20">
                                            <div className="d-inline-block text-center">
                                                <h4 className="color-white">
                                                    <span className="count">235+</span>
                                                </h4>
                                                <p className="font-sm color-text-mutted">Scholarships</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-3 col-6 text-center mb-20">
                                            <div className="d-inline-block text-center">
                                                <h4 className="color-white">
                                                    <span className="count">212+</span>
                                                </h4>
                                                <p className="font-sm color-text-mutted">Freelancers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="list-brands mt-40 mb-30">
                                <div className="box-swiper">
                                    <BrandSlider />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-50 mb-50">
                        <div className="container">
                            <div className="text-center">
                                <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">News and Blog</h2>
                                <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Get the latest news, updates and tips</p>
                            </div>
                        </div>
                        <div className="container">
                            <div className="mt-50">
                                <div className="box-swiper style-nav-top">
                                    <BlogSlider />
                                </div>
                                <div className="text-center">
                                    <Link legacyBehavior href="/blog-grid">
                                        <a className="btn btn-brand-1 btn-icon-load mt--30 hover-up">Load More Posts</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-50">
                        <div className="section-box wow animate__animated animate__fadeIn">
                            <div className="container">
                                <div className="text-start">
                                    <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">How We Help</h2>
                                    {/* <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Search and connect with the right candidates faster.</p> */}
                                </div>
                                <div className="box-swiper mt-50">
                                    <CategorySlider2 />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-0">
                        <div className="section-box wow animate__animated animate__fadeIn">
                            <div className="container">
                                <div className="text-center">
                                    <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">See Some Words</h2>
                                    <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
                                        What Our Users Say
                                        {/* <br className="d-none d-lg-block" />
                                        and feed back to us! */}
                                    </p>
                                </div>
                                <div className="box-swiper mt-50">
                                    <TestimonialSlider2 />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-50 mb-20">
                        <div className="box-newsletter box-newsletter-2">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-4 col-12 text-center d-none d-xl-block">
                                        <img src="assets/imgs/page/homepage4/img-newsletter.png" alt="joxBox" />
                                    </div>
                                    <div className="col-xl-8 col-lg-12 col-12 text-center">
                                        <div className="d-inline-block text-start">
                                            <h2 className="color-white">Subscribe our newsletter</h2>
                                            <p className="mt-10 font-lg color-white">New Things Will Always Update Regularl</p>
                                            <div className="box-form-newsletter mt-40">
                                                <form className="form-newsletter">
                                                    <input className="input-newsletter" type="text" placeholder="Enter your email here" />
                                                    <button className="btn btn-default font-heading icon-send-letter">Subscribe</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>

        )
}