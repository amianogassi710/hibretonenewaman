import React, { useState, useEffect } from "react";
import { Grid } from '@mui/material';

export default function EvidenceLedResearchPhotoGrid() {

    const [showMore1, setShowMore1] = useState(false);
    const [showMore2, setShowMore2] = useState(false);
    const [showMore3, setShowMore3] = useState(false);

    return (
        <section className="section-box">
            <div className="post-loop-grid">
                <div className="container">
                    <div className="text-center mb-40">
                        <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp newsandeventsheading-evidenceled">
                            The Need for Evidence-led Research
                        </h2>
                        <p className="w-lg-50 mx-auto wow animate__animated animate__fadeInUp newsandeventssubheading-evidenceled">
                            Global research  is the basis of our enterprise tools
                        </p>
                    </div>
                    <Grid container alignItems="center" style={{ minWidth: '100%' }}
                        sx={{ display: { xs: 'none', md: 'none', lg: 'flex' } }}>
                        <Grid item lg={6}>
                            <div className="about__thumb-wrapper d-sm-flex mr-20 p-relative">
                                <div className="about__thumb-left mr-10">
                                    <div className="about__thumb-1 mb-10">
                                        <iframe width="560" height="215" src="https://www.youtube.com/embed/i-7DGjUYCWc" allowFullScreen style={{ borderRadius: '16px' }}></iframe>
                                    </div>
                                    <div className="about__thumb-1 text-end">
                                        <img src="../assets/imgs/page/evidence-led-research/researchphotogrid-bottom.jpg" alt="" style={{ height: '180px', width: '240px', borderRadius: '16px' }} />
                                    </div>
                                </div>
                                <div className="about__thumb-2">
                                    <img src="../assets/imgs/page/evidence-led-research/researchphotogrid-right.jpg" alt="" style={{ height: '585px', width: '333px', borderRadius: '16px' }} />
                                </div>
                            </div>
                        </Grid>
                        <Grid item className="" lg={6} sx={{ paddingLeft: { lg: '75px' } }} style={{ marginTop: '-20px' }}>
                            <div style={{ textAlign: 'justify', marginTop: '27px' }}>
                                <p className="newsandeventsparaheading-evidenceled" style={{ color: "#3C65F5" }}>
                                    Economic
                                </p>
                                {/* <p className="newsandeventsparatext-evidenceled">
                                    {showMore1
                                        ? "Over £430bn could be added to the UK economy  if recommendations in the reports which talk about levelling-up were actioned. One of the biggest opportunities will come from migrant entrepreneurs. Watch the video to understand why migrant entrepreneurs appear to have many of the traits necessary to be a successful entrepreneur."
                                        : "Over £430bn could be added to the UK economy  if recommendations in the reports which talk about levelling-up were actioned. One of the biggest opportunities will come from migrant entrepreneurs. Watch the video to understand why migrant entrepreneurs appear to have many of the traits necessary to be a successful entrepreneur."
                                    }
                                    < button
                                        className="btn-show-more"
                                        onClick={() =>
                                            setShowMore1(
                                                !showMore1
                                            )
                                        }
                                    >
                                        {showMore1
                                            ? "show less"
                                            : "...more"}
                                    </button>
                                </p> */}
                                <p className="newsandeventsparatext-evidenceled">
                                    {showMore1 ? (
                                        <>
                                            Over £430bn could be added to the UK economy if recommendations in the reports which talk about levelling-up were actioned. One of the biggest opportunities will come from migrant entrepreneurs. Watch the video to understand why migrant entrepreneurs appear to have many of the traits necessary to be a successful entrepreneur.
                                            <div className="mt-30">
                                                60% of startups fail within 3 years, 2 years faster than they did 5 years ago, costing the UK economy £4 billion a year. 90% of entrepreneurs fail. 80% of venture capital goes to the London, Oxford, Cambridge triangle.
                                                <button
                                                    className="btn-show-more"
                                                    onClick={() => setShowMore1(!showMore1)}
                                                >
                                                    {showMore1 ? "show less" : "...more"}
                                                </button>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            Over £430bn could be added to the UK economy if recommendations in the reports which talk about levelling-up were actioned. One of the biggest opportunities will come from migrant entrepreneurs. Watch the video
                                            <button
                                                className="btn-show-more"
                                                onClick={() => setShowMore1(!showMore1)}
                                            >
                                                {showMore1 ? "show less" : "..more"}
                                            </button>
                                        </>
                                    )}
                                </p>
                                <p className="newsandeventsparaheading-evidenceled mt-30" style={{ color: "#3AAB67" }}>
                                    Social
                                </p>
                                <p className="newsandeventsparatext-evidenceled">
                                    Time To Change - CREME/ Aston University/ Natwest demonstrated, Extend Ventures, Rose Review (NatWest) , ACH, Llilac Review explore the benefit  of empowering underrepresented groups to add to the economy. Whilst fostering deeper inclusion for all socio-demographic groups.
                                </p>
                                <p className="newsandeventsparaheading-evidenceled mt-30" style={{ color: "#F58A3C" }}>
                                    Moral
                                </p>
                                <p className="newsandeventsparatext-evidenceled">
                                    VC’s give 2 pence in the £1 to all-women startups & slightly less than that for Black-led teams. Because investment is focussed on scaleups, the startup pipeline is drying up. Low-income earners struggle to save or create wealth.
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" style={{ minWidth: '100%' }}
                        sx={{ display: { xs: 'none', md: "flex", lg: 'none' } }}>

                        <Grid item xs={12} md={12}>
                            <div className='grid__thumb w-img fix grid_thumb_height grid_thumb'>
                                <iframe height="100%" src="https://www.youtube.com/embed/i-7DGjUYCWc" allowfullscreen></iframe>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <div className="mt-10" style={{ textAlign: 'justify' }}>
                               

                            <p className="newsandeventsparaheading-evidenceled" style={{ color: "#3C65F5" }}>
                                    Economic
                                </p>
                                
                                <p className="newsandeventsparatext-evidenceled">
                                    {showMore1 ? (
                                        <>
                                            Over £430bn could be added to the UK economy if recommendations in the reports which talk about levelling-up were actioned. One of the biggest opportunities will come from migrant entrepreneurs. Watch the video to understand why migrant entrepreneurs appear to have many of the traits necessary to be a successful entrepreneur.
                                            <div className="mt-30">
                                                60% of startups fail within 3 years, 2 years faster than they did 5 years ago, costing the UK economy £4 billion a year. 90% of entrepreneurs fail. 80% of venture capital goes to the London, Oxford, Cambridge triangle.
                                                <button
                                                    className="btn-show-more"
                                                    onClick={() => setShowMore1(!showMore1)}
                                                >
                                                    {showMore1 ? "show less" : "...more"}
                                                </button>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            Over £430bn could be added to the UK economy if recommendations in the reports which talk about levelling-up were actioned. One of the biggest opportunities will come from migrant entrepreneurs. Watch the video
                                            <button
                                                className="btn-show-more"
                                                onClick={() => setShowMore1(!showMore1)}
                                            >
                                                {showMore1 ? "show less" : "..more"}
                                            </button>
                                        </>
                                    )}
                                </p>
                                <p className="newsandeventsparaheading-evidenceled mt-30" style={{ color: "#3AAB67" }}>
                                    Social
                                </p>
                                <p className="newsandeventsparatext-evidenceled">
                                    Time To Change - CREME/ Aston University/ Natwest demonstrated, Extend Ventures, Rose Review (NatWest) , ACH, Llilac Review explore the benefit  of empowering underrepresented groups to add to the economy. Whilst fostering deeper inclusion for all socio-demographic groups.
                                </p>
                                <p className="newsandeventsparaheading-evidenceled mt-30" style={{ color: "#F58A3C" }}>
                                    Moral
                                </p>
                                <p className="newsandeventsparatext-evidenceled">
                                    VC’s give 2 pence in the £1 to all-women startups & slightly less than that for Black-led teams. Because investment is focussed on scaleups, the startup pipeline is drying up. Low-income earners struggle to save or create wealth.
                                </p>

                            </div>
                            <div className="mt-20">
                                <button href="/" className="btn btn-default fs-6">Read More</button>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" style={{ minWidth: '100%' }}
                        sx={{ display: { xs: 'flex', md: "none", lg: 'none' } }}>
                        <Grid item xs={12} md={12}>
                            <div className='grid__thumb w-img fix grid_thumb_height grid_thumb'>
                                <iframe width="" height="100%" src="https://www.youtube.com/embed/i-7DGjUYCWc" allowfullscreen></iframe>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <div className="mt-10" style={{ textAlign: 'justify' }}>
                                

                            <p className="newsandeventsparaheading-evidenceled" style={{ color: "#3C65F5" }}>
                                    Economic
                                </p>
                                
                                <p className="newsandeventsparatext-evidenceled">
                                    {showMore1 ? (
                                        <>
                                            Over £430bn could be added to the UK economy if recommendations in the reports which talk about levelling-up were actioned. One of the biggest opportunities will come from migrant entrepreneurs. Watch the video to understand why migrant entrepreneurs appear to have many of the traits necessary to be a successful entrepreneur.
                                            <div className="mt-30">
                                                60% of startups fail within 3 years, 2 years faster than they did 5 years ago, costing the UK economy £4 billion a year. 90% of entrepreneurs fail. 80% of venture capital goes to the London, Oxford, Cambridge triangle.
                                                <button
                                                    className="btn-show-more"
                                                    onClick={() => setShowMore1(!showMore1)}
                                                >
                                                    {showMore1 ? "show less" : "...more"}
                                                </button>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            Over £430bn could be added to the UK economy if recommendations in the reports which talk about levelling-up were actioned. One of the biggest opportunities will come from migrant entrepreneurs. Watch the video
                                            <button
                                                className="btn-show-more"
                                                onClick={() => setShowMore1(!showMore1)}
                                            >
                                                {showMore1 ? "show less" : "..more"}
                                            </button>
                                        </>
                                    )}
                                </p>
                                <p className="newsandeventsparaheading-evidenceled mt-30" style={{ color: "#3AAB67" }}>
                                    Social
                                </p>
                                <p className="newsandeventsparatext-evidenceled">
                                    Time To Change - CREME/ Aston University/ Natwest demonstrated, Extend Ventures, Rose Review (NatWest) , ACH, Llilac Review explore the benefit  of empowering underrepresented groups to add to the economy. Whilst fostering deeper inclusion for all socio-demographic groups.
                                </p>
                                <p className="newsandeventsparaheading-evidenceled mt-30" style={{ color: "#F58A3C" }}>
                                    Moral
                                </p>
                                <p className="newsandeventsparatext-evidenceled">
                                    VC’s give 2 pence in the £1 to all-women startups & slightly less than that for Black-led teams. Because investment is focussed on scaleups, the startup pipeline is drying up. Low-income earners struggle to save or create wealth.
                                </p>

                            </div>
                            <div className="mt-20">
                                <button href="/" className="btn btn-default fs-6">Read More</button>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </section >
    );
}