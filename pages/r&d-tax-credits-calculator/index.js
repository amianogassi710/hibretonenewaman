/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Layout from "../../components/Layout/Layout";
import TaxCreditsCalculatorModal from './TaxCreditsCalculatorModal/TaxCreditsCalculatorModal';
import Subscription from '../../components/Layout/Subscription';

export default function Index() {
    const [isOpen,setIsOpen] = useState(false)

    const toggleOpen = e => {
        setIsOpen(prevOpen => !prevOpen)
    }

    return (
        <>
        <Layout>
            <div>
                <section className="section-box">
                    <div className=" banner-hero bg-img-calculator">
                        <div className="container d-flex align-items-center">
                            <div className="row">
                                <div className="col">
                                    <h2 className="mb-10">R&D Tax Credits Calculator</h2>
                                    <p className="font-lg color-text-paragraph-2">Claim money back from HMRC for your<br/>product development</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-30">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-title mb-10">How Much Can You Claim?</h2>
                            <p className="font-lg fw-bold color-text-paragraph w-lg-50 mx-auto">Answer these simple questions for a quick answer</p>
                        </div>
                        <div className="text-center mt-20">
                            <button className="btn btn-default fs-6" onClick={toggleOpen}>Get Started</button>
                        </div>
                        <TaxCreditsCalculatorModal show={isOpen} onClose={toggleOpen} />
                    </div>
                </section>
                <section className="section-box">
                    <div className="post-loop-grid">
                        <div className="container">
                            <div className="row mt-50">
                                <div className="col-lg-6 col-md-12 col-sm-12 mt-20 pr-60">
                                    <h4 className="mt-5">Using the R&D Tax Credit Scheme</h4>
                                    <div className="mt-10">
                                        <h6 className="mt-10 font-md"><strong>Nearly £84 billion of R&D tax relief is unclaimed in the UK according to the Treasury.</strong></h6>
                                        <p className="font-md color-text-paragraph mt-10">With 80% of eligible businesses not having made a claim, use our simple calculator to see if you may qualify. To claim you need to explain how a project: looked for an advance in the field, had to overcome the scientific or technological uncertainty, tried to overcome the scientific or technological uncertainty, could not be easily worked out by a professional in the field.</p>
                                        <p className="font-md color-text-paragraph mt-10 mb-10">Watch this simple video to learn more about how the scheme can be used.</p>
                                    </div>
                                    <div className="mt-20 mb-30">
                                        <button className="btn btn-default fs-6" onClick={toggleOpen}>Get Started</button>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <iframe className="content-media" width="791" height="400" src="https://www.youtube.com/embed/-OinRckvals?si=TUyb8vFa2udkyE4S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box ">
                    <div className="post-loop-grid">
                        <div className="container">
                            <div className="row mt-30">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <img className="content-media" src="assets/imgs/page/about/img-about2.png" alt="joxBox" />
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 pl-30 mt-10">
                                    <h4>Examples of R&D tax credit claims</h4>
                                    <div className="mt-10">
                                        <p className="font-md fw-bold color-text-paragraph">Size of your claim will depend on the scale of your R&D activity and your costs.</p>
                                        <p className="font-md color-text-paragraph mt-10"><span className="fw-bold" style={{color: "#1740d0"}}>A profitable SME:</span> In addition to the tax relief your company’s eligible R&D expenditure generates, a further 86% can be deducted from the yearly profit. If you spent £500,000 per year on R&D you could potentially claim back up to £107,500 as a tax refund or reduced tax liability.</p>
                                        <p className="font-md color-text-paragraph mt-10"><span className="fw-bold" style={{color: "#f58a3c"}}>A loss-making SME: </span>A payable credit can be claimed by loss-making SMEs. With an R&D tax credit incentive of up to 18.6%, if a company spent £500,000 per year on R&D it could potentially claim back up to £93,000.</p>
                                        <p className="font-md color-text-paragraph mt-10"><span className="fw-bold" style={{color: "#3aab67"}}>A loss-making, R&D intensive SME: </span>At least 40% of a company’s total expenditure being spent on R&D. Businesses in this category may be eligible for up to 27%. If you spent £500,000 per year on R&D you could potentially claim back up to £135,000.</p>
                                    </div>
                                    <div className="mt-20 mb-30">
                                        <button className="btn btn-default fs-6" onClick={toggleOpen}>Get Started</button>
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
                                <div className="col-lg-6 col-md-12 col-sm-12 pt-40 pl-60 mt-20 pr-60">
                                    <h3>Encouraging Innovation</h3>
                                    <div className="mt-20">
                                        <p className="font-md fw-bold color-text-paragraph mt-20">Around <span style={{color: "#3C65F5"}}>£7 billion</span> of tax relief is paid to UK businesses through R&D Tax Credits every year.</p>
                                        <p className="font-md color-text-paragraph mt-20">UK Government encourages innovation as it is vital for improving the UK’s productivity, performance and competitiveness. Hence, research and development (R&D) incentives for small and medium size enterprises (SMEs) and large companies have been improved over several years to encourage and reward greater UK innovation.</p>
                                    </div>
                                    <div className="mt-30 mb-20">
                                        <button className="btn btn-default fs-6" onClick={toggleOpen}>Get Started</button>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <img className="content-media" src="assets/imgs/page/r&d-tax-credits-calculator/BTW.jpeg" alt="joxBox" />
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
                                    <img className="content-media" src="assets/imgs/page/r&d-tax-credits-calculator/Tax.jpeg" alt="joxBox" />
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 pl-50">
                                    <h4 className="mt-5">Staying on top of the Changes</h4>
                                    <div className="mt-10">
                                        <h6 className="font-md fw-bold color-text-paragraph mt-5" style={{color: "#1740d0"}}>Calculating R&D tax credits for SMEs</h6>
                                        <p className="font-md color-text-paragraph">To qualify as an SME, your company must have fewer than 500 staff and a turnover of under £100 million GBP’s or a balance sheet total under £86 million GBP’s.</p>
                                        <h6 className="font-md fw-bold color-text-paragraph mt-5" style={{color: "#3aab67"}}>Changes to R&D tax credit scheme</h6>
                                        <p className="font-md color-text-paragraph">The government makes ongoing reforms to R&D tax credit relief schemes. Contact a Preferred Partner tax advisor for the latest information.</p>
                                        <h6 className="font-md fw-bold color-text-paragraph mt-5" style={{color: "#f58a3c"}}>Calculating R&D tax credits for SMEs</h6>
                                        <p className="font-md color-text-paragraph">To qualify as an SME, your company must have fewer than 500 staff and a turnover of under £100 million GBP’s or a balance sheet total under £86 million GBP’s.</p>
                                    </div>
                                    <div className="mt-20 mb-20">
                                        <button className="btn btn-default fs-6" onClick={toggleOpen}>Get Started</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-20">
                    <div className="post-loop-grid">
                        <div className="container">
                            <div className="row mt-20">
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mt-30">
                                    <h4 className="mt-15">UK Government Website</h4>
                                    <div className="mt-10">
                                        <p className="font-md color-text-paragraph">Keep up to date with UK Government R&D Tax Credit schemes. Along with calculations, provides detailed information on what can be claimed and what cannot be claimed, if your advance is in the arts, humanities, social sciences, including economics.</p>
                                    </div>
                                    <div className="mt-10 mb-50">
                                        <a className="btn btn-default fs-6" target="_blank" href="https://www.gov.uk/">
                                            gov.uk
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 mt-30">
                                    <img className="content-media" style={{"minWidth": "35vw"}} src="assets/imgs/page/r&d-tax-credits-calculator/Government.png" alt="joxBox" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Subscription />
            </div>
        </Layout>
        </>
    );
}
