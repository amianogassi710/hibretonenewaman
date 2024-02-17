/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Layout from "../../components/Layout/Layout";
import Subscription from "../../components/Layout/Subscription";
import Link from '@mui/material/Link';
import YellowBanner from "../../components/elements/YellowBanner";


export default function Index() {
    return (
        <>
            <Layout>
                <div>
                    <section className="section-box">
                        <div className=" banner-hero bg-img-business-plan-writer">
                            <div className="container d-flex align-items-center">
                                <div className="row">
                                    <div className="col">
                                        <h2 className="mb-10">Business Plan Writer</h2>
                                        <p className="font-lg color-text-paragraph-2">Harness the power of AI to help
                                            write a winning business plan <br/>to start or grow your business</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-30">
                        <div className="container">
                            <div className="text-center">
                                <h2 className="section-title mb-10">Transform your business idea into a business
                                    plan</h2>
                                <p className="font-lg fw-bold color-text-paragraph w-lg-50 mx-auto">Takes less than 15
                                    minutes</p>
                            </div>
                            <div className="text-center mt-20">
                                <a href="/business-plan-wizard" target="_blank" rel="noopener noreferrer"
                                   className="btn btn-default fs-6">Get Started</a>
                            </div>
                        </div>
                    </section>

                    <section className="section-box">
                        <div className="post-loop-grid">
                            <div className="container">
                                <div className="row mt-50">
                                    <div className="col-lg-6 col-md-12 col-sm-12 mt-10">
                                        <h4 className="mt-5">Using the Business Plan Writer</h4>
                                        <div className="mt-10">
                                            <h6 className="mt-10 font-md"><strong>See how easily you can create your own
                                                Business Plan</strong></h6>
                                            <p className="font-md color-text-paragraph mt-10">Business plans are
                                                essential for credibility, to improve chances of success, to validate
                                                your idea and to secure investment. The hibretOne Business Plan writer
                                                creates a plan which includes: Executive Summary, Business overview,
                                                Sales and marketing, Operations and Management, Financial Plan...
                                                <Link href="#" color="primary">
                                                    read more
                                                </Link>
                                            </p>
                                        </div>
                                        <div className="mt-20 mb-30">
                                            <Link href="/business-plan-wizard" className="btn btn-default fs-6">Get
                                                Started</Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <iframe width="560" height="315"
                                                src="https://www.youtube.com/embed/4SyjPUEXUng?si=GE9BO5WNIANzNXZ9"
                                                title="YouTube video player" frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section-box mt-20">
                        <YellowBanner/>
                    </section>

                    <section className="section-box ">
                        <div className="post-loop-grid">
                            <div className="container">
                                <div className="row mt-30">
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <img className="content-media"
                                             src="assets/imgs/page/business-plan-writer/coffee-cup.jpeg"
                                             alt="joxBox"/>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 mt-10">
                                        <h4>Business Plan creation for everyone</h4>
                                        <div className="mt-10">
                                            <p className="font-md color-text-paragraph mt-10">In
                                                For aspirers who are neurodiverse, speak English as a second language,
                                                with limited business skills, or lower levels of education, creating a
                                                Business Plan can be daunting. We are here to help, to teach, to not
                                                judge and to provide solutions to build your business in smart,
                                                efficient ways...
                                                <Link href="#" color="primary">
                                                    read more
                                                </Link>
                                            </p>
                                        </div>
                                        <div className="mt-10 mb-30">
                                            <Link href="/business-plan-wizard" className="btn btn-default fs-6">Get
                                                Started</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-30">
                        <div className="post-loop-grid">
                            <div className="container">
                                <div className="row mt-10">
                                    <div className="col-lg-6 col-md-12 col-sm-12 mt-40">
                                        <h4>A business plan builds credibility & gives confidence to your idea
                                        </h4>
                                        <div className="mt-20">
                                            <p className="font-md color-text-paragraph mt-20">
                                                Once your plan is done, you can:
                                                <ul>
                                                    <li>&#8226; Download your plan as a PDF or Word doc so you can share
                                                        it easily.
                                                    </li>
                                                    <li>&#8226; Print out your plan to get a clean, professional
                                                        document.
                                                    </li>
                                                    <li>&#8226; Save to update in the future.</li>
                                                    <li>&#8226; Share with a business advisor for another perspective.
                                                    </li>
                                                </ul>
                                            </p>
                                        </div>
                                        <div className="mt-30 mb-20">
                                            <Link href="/business-plan-wizard" className="btn btn-default fs-6">Get
                                                Started</Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <img className="content-media"
                                             src="assets/imgs/page/business-plan-writer/Royalty-free-images-22.jpeg"
                                             alt="joxBox"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-30">
                        <div className="post-loop-grid">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <img className="content-media"
                                             src="assets/imgs/page/business-plan-writer/Royalty-free-images-14.jpeg"
                                             alt="joxBox"/>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 pl-20 mt-5 ">
                                        <h4 className="mt-5">Everyone with a good idea should have effective tools</h4>
                                        <div className="mt-10">
                                            <p className="font-md color-text-paragraph mt-20">
                                                You are capable enough to plan,
                                                build, and scale a business, with support if needed.
                                                Business planning and strategy is not a science, you just need to learn.
                                                Planning and running a business changes lives.
                                                Even if you fail we can help you gain a better paying job.
                                            </p>
                                        </div>
                                        <div className="mt-10 mb-20">
                                            <Link href="/business-plan-wizard" className="btn btn-default fs-6">Get
                                                Started</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Subscription/>
                </div>
            </Layout>
        </>
    );
}
