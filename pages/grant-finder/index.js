/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import CategoryTab2 from "../../components/elements/CategoryTab2";
import CategorySlider from "../../components/sliders/Category";
import TestimonialSlider from "../../components/sliders/Testimonial1";
import Location from "../../components/elements/Location";
export default function Index2() {
    return (
        <>
            <Layout>
                <div>
                    <section className="section-box">
                        <div className="banner-hero hero-grant">
                            <div className="banner-inner">
                                <div className="block-banner">
                                    <h1 className="text-42 color-white wow animate__animated animate__fadeInUp">
                                        <span className="color-green">Grant Finder</span>
                                        <br className="d-none d-lg-block" />
                                        Finding Your Next Funding
                                    </h1>
                                    <div className="font-lg font-regular color-white mt-20 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                        Search for the latest public, private, personal, academic and voluntary sector grant funding. 100’s of new grants added every week
                                    </div>
                                    <div className="form-find mt-40 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                        <form>
                                            <div className="box-industry">
                                                <select className="form-input mr-10 select-active input-industry">
                                                    <option value={0}>Industry</option>
                                                    <option value={1}>Software</option>
                                                    <option value={2}>Finance</option>
                                                    <option value={3}>Recruting</option>
                                                    <option value={4}>Management</option>
                                                    <option value={5}>Advertising</option>
                                                    <option value={6}>Development</option>
                                                </select>
                                            </div>
                                            <div className="box-industry">
                                                <select className="form-input mr-10 select-active input-location">
                                                    <Location/>
                                                </select>
                                            </div>
                                            <input className="form-input input-keysearch mr-10" type="text" placeholder="Your keyword... " />
                                            <button className="btn btn-default btn-find font-sm">Search</button>
                                        </form>
                                    </div>
                                    <div className="list-tags-banner mt-20 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                                        <strong>Popular Searches:</strong>
                                        <Link legacyBehavior href="#">
                                            <a>Natwest </a>
                                        </Link>
                                        <Link legacyBehavior href="#">
                                            <a>Deutsche </a>
                                        </Link>
                                        <Link legacyBehavior href="#">
                                            <a>West Midlands </a>
                                        </Link>
                                        <Link legacyBehavior href="#">
                                            <a>Barclays </a>
                                        </Link>
                                        <Link legacyBehavior href="#">
                                            <a>Aston </a>
                                        </Link>
                                        <Link legacyBehavior href="#">
                                            <a>Bootcamp </a>
                                        </Link>
                                        <Link legacyBehavior href="#">
                                            <a>Funding </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="mt-60">
                                    <div className="row">
                                        <div className="col-lg-3 col-sm-3 col-6 text-center mb-20">
                                            <div className="d-inline-block text-start">
                                                <h4 className="color-white">
                                                    {" "}
                                                    <span className="count">100</span>
                                                    <span> M+</span>
                                                </h4>
                                                <p className="font-sm color-text-mutted">Total Value of Grants</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-3 col-6 text-center mb-20">
                                            <div className="d-inline-block text-start">
                                                <h4 className="color-white">
                                                    <span className="count">1</span>
                                                    <span> K+</span>
                                                </h4>
                                                <p className="font-sm color-text-mutted">Total No. of Grants</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-3 col-6 text-center mb-20">
                                            <div className="d-inline-block text-start">
                                                <h4 className="color-white">
                                                    {" "}
                                                    <span className="count">1</span>
                                                    <span> K+</span>
                                                </h4>
                                                <p className="font-sm color-text-mutted">Total No. of Funders</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-3 col-6 text-center mb-20">
                                            <div className="d-inline-block text-start">
                                                <h4 className="color-white">
                                                    {" "}
                                                    <span className="count">20</span>
                                                    <span> +</span>
                                                </h4>
                                                <p className="font-sm color-text-mutted">Grants Posted This Week</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-30">
                        <div className="container">
                            <div className="text-start">
                                <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Explore a Selection of Grants</h2>
                                <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Discover grant funding for your business type, 
stage, sector and region.</p>
                            </div>
                            <div className="mt-50">
                                <CategoryTab2 />
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
                    <section className="section-box mt-50 mb-30 bg-border-3 pt-100 pb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <img className="bdrd-10" src="assets/imgs/page/homepage5/img-profile.png" alt="jobBox" />
                                </div>
                                <div className="col-lg-6">
                                    <div className="pl-30">
                                        <h5 className="color-brand-2 mb-15 mt-15">Create Profile</h5>
                                        <h2 className="color-brand-1 mt-0 mb-15">Create Your Personal Account Profile</h2>
                                        <p className="font-lg color-text-paragraph-2">Work Profile is a personality assessment that measures an individual's work personality through their workplace traits, social and emotional traits; as well as the values and aspirations that drive them forward.</p>
                                        <div className="mt-20">
                                            <a className="btn btn-default">Create Profile</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-70 mb-40">
                        <div className="container">
                            <div className="text-start">
                                <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">How It Works</h2>
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
                    <section className="section-box mt-0">
                        <div className="section-box wow animate__animated animate__fadeIn">
                            <div className="container">
                                <div className="text-center">
                                    <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Here from some winners</h2>
                                    <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
                                    Successfully discovered grant funding and programmes
                                        <br className="d-none d-lg-block" />
                                        to build their business
                                    </p>
                                </div>
                                <div className="box-swiper mt-50">
                                    <TestimonialSlider />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-50 mb-20">
                        <div className="container">
                            <div className="box-newsletter box-newsletter-3">
                                <div className="row">
                                    <div className="col-xl-12 text-center">
                                        <div className="d-inline-block">
                                            <h2 className="color-white mt-30">Subscribe our newsletter</h2>
                                            <p className="mt-10 font-lg color-white">New Things Will Always Update Regularl</p>
                                            <div className="box-form-newsletter mt-30">
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
    );
}
