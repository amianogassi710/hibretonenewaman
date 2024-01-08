/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Layout from "../../components/Layout/Layout";
import TaxCreditsCalculatorModal from './TaxCreditsCalculatorModal/TaxCreditsCalculatorModal';

export default function TaxCreditsCalculator() {
    const [isOpen,setIsOpen] = useState(false)
    const [result,setResult] = useState(0)
    const [start,setStart] = useState(true)

    const toggleOpen = e => {
        setIsOpen(prevOpen => !prevOpen)
    }

    return (
        <>
        <Layout>
            <div>
                <section className="section-box">
                    <div className=" banner-hero bg-img-about">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h2 className="mb-10">R&D Tax Credits Calculator</h2>
                                    <p className="font-lg color-text-paragraph-2">Claim money back from HMRC for your product development</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-30">
                    <div className="post-loop-grid">
                        <div className="container">
                            <div className="text-center">
                                <h2 className="section-title mb-10">Encouraging Innovation</h2>
                                <p className="font-md color-text-paragraph w-lg-50 mx-auto">UK Government encourages innovation as it is vital for improving the UK’s productivity, performance and competitiveness.
                                Hence, research and development (R&D) incentives for small and medium size enterprises (SMEs) and large companies have been improved over several years to encourage and reward greater UK innovation.<br /><br/>
                                Around £7bn of tax relief is paid to UK businesses through R&D Tax Credits every year.​
                                </p>
                            </div>
                            <div className="text-center mt-20" style={{display: start ? "block" : "none"}}>
                                <button className="btn btn-default fs-6" onClick={toggleOpen}>Get Started</button>
                            </div>
                            <TaxCreditsCalculatorModal show={isOpen} onClose={toggleOpen} />
                            <div className="row mt-50">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <img src="assets/imgs/page/about/img-about2.png" alt="joxBox" />
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <h3 className="mt-15">Examples of R&D tax credit claims</h3>
                                    <div className="mt-20">
                                        <p className="font-md color-text-paragraph mt-20">Size of your claim will depend on the scale of your R&D activity and your costs (Figures below are 2022-2023 tax year).</p>
                                        <p className="font-md color-text-paragraph mt-20"><strong>A profitable SME: </strong>In addition to the tax relief your company’s eligible R&D expenditure generates, a further 86% can be deducted from the yearly profit. If you spent £500,000 per year on R&D you could potentially claim back up to £107,500 as a tax refund or reduced tax liability.</p>
                                        <p className="font-md color-text-paragraph mt-20"><strong>A loss-making SME: </strong>A payable credit can be claimed by loss-making SMEs. With an R&D tax credit incentive of up to 18.6%, if a company spent £500,000 per year on R&D it could potentially claim back up to £93,000.</p>
                                        <p className="font-md color-text-paragraph mt-20"><strong>A loss-making, R&D intensive SME: </strong>At least 40% of a company’s total expenditure being spent on R&D. Businesses in this category may be eligible for up to 27%. If you spent £500,000 per year on R&D you could potentially claim back up to £135,000.</p>
                                    </div>
                                    <div className="mt-30">
                                        <a className="btn btn-default fs-6" href="#">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-20">
                    <div className="post-loop-grid">
                        <div className="container">
                            <div className="row mt-30">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <h3 className="mt-15">How we used The R&D Tax Credit Scheme</h3>
                                    <div className="mt-20">
                                        <h6 className="mt-20"><strong>A startup entrepreneur shares their inside story</strong></h6>
                                        <p className="font-md color-text-paragraph mt-20">Innovative companies need to develop to stay ahead, learn how the costs of successful & unsuccessful development can be minimised. </p>
                                        <p className="font-md color-text-paragraph mt-20 mb-20">Take our 6 minute assessment to check if you may qualify for R&D Tax credit relief.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/-OinRckvals?si=TUyb8vFa2udkyE4S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-20">
                    <div className="post-loop-grid">
                        <div className="container">
                            <div className="row mt-50">
                                <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 p-0 text-center'>
                                    <div className="row mb-10">
                                        <img src="assets/imgs/page/r&d-tax-credits-calculator/Woman.png" alt="joxBox" />
                                    </div>
                                    <div className="row">
                                        <img src="assets/imgs/page/r&d-tax-credits-calculator/Group.png" alt="joxBox" />
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 text-center">
                                    <img src="assets/imgs/page/r&d-tax-credits-calculator/HandsTogether.png" alt="joxBox" />
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <h3 className="mt-15">Staying on top of the Changes</h3>
                                    <div className="mt-20">
                                        <h6 className="font-md fw-bold color-text-paragraph mt-20">Calculating R&D tax credits for SMEs</h6>
                                        <p className="font-md color-text-paragraph">To qualify as an SME, your company must have fewer than 500 staff and a turnover of under £100 million GBP’s or a balance sheet total under £86 million GBP’s.</p>
                                        <h6 className="font-md fw-bold color-text-paragraph mt-20">Changes to R&D tax credit scheme</h6>
                                        <p className="font-md color-text-paragraph">The government makes ongoing reforms to R&D tax credit relief schemes. Contact a Preferred Partner tax advisor for the latest information.</p>
                                    </div>
                                    <div className="mt-30">
                                        <a className="btn btn-default fs-6" href="#">
                                            Read More
                                        </a>
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
