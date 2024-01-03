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
                    <section className="section-box-2">
                        <div className="container">
                            <div className="banner-hero banner-image-single">
                                <img src="assets/imgs/page/job-single/thumb.png" alt="jobBox" />
                            </div>
                            <div className="row mt-10">
                                <div className="col-lg-8 col-md-12">
                                    <h3>R&D Tax Credits Calculator</h3>
                                </div>
                            </div>
                            <div className="border-bottom pt-10 pb-10" />
                        </div>
                    </section>
                    <section className="section-box mt-50">
                        <div className="container">
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                                    <div className="calculator">
                                        <div className="modal-body text-center">
                                            <div className="col-12 mb-50">
                                                <h3>R&D Tax Credits Calculator</h3>
                                            </div>
                                            <div className="form-group" style={{display: start ? "block" : "none"}}>
                                                <p className="fs-4 lh-base mb-25">Companies who undertake R&D may be eligible for a government tax rebate.</p>
                                                <p className="fs-4 lh-base mb-25">The hibretOne platform includes an R&D Tax Credit Calculator, enabling business owners to guesstimate how much they could be owed. Research estimates that £84bn in R&D tax relief available to SMEs remains unclaimed. </p><br />
                                                <button className="btn btn-default mr-10 ml-10 fs-5" onClick={toggleOpen}>Start</button>
                                            </div>
                                            <TaxCreditsCalculatorModal show={isOpen} onClose={toggleOpen} />
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
