import React, { useState, useEffect } from "react";
import { Grid } from '@mui/material';

export default function EvidenceLedResearchPhotoGrid() {

    const [showMore1, setShowMore1] = useState(false);
    const [showMore2, setShowMore2] = useState(false);
    const [showMore3, setShowMore3] = useState(false);

    return (
        <div>
            <section className="section-box">
                <div className="post-loop-grid">
                    <div className="container">
                        <div className="text-center">
                            <div className="component-title">
                                The Need for Evidence-led Research
                            </div>
                            <div className="component-subtitle">
                                Global research  is the basis of our enterprise tools
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-box mt-40 mt-40-20">
                <div className="post-loop-grid">
                    <div className="container">
                        <Grid container alignItems="center" style={{ minWidth: '100%' }}
                            sx={{ display: { xs: "none", sm: "none", md: "none", lg: "flex" } }}
                        >
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
                            <Grid item className="" lg={6} sx={{ paddingLeft: { lg: '75px' } }}>
                                <div className="title-details-builder">
                                    <p className="builderparaheading" style={{ color: "#3C65F5" }}>
                                        Economic
                                    </p>
                                    <p className="builderparatext">
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
                                    <p className="builderparaheading mt-30" style={{ color: "#3AAB67" }}>
                                        Social
                                    </p>
                                    <p className="builderparatext">
                                        Time To Change - CREME/ Aston University/ Natwest demonstrated, Extend Ventures, Rose Review (NatWest) , ACH, Llilac Review explore the benefit  of empowering underrepresented groups to add to the economy. Whilst fostering deeper inclusion for all socio-demographic groups.
                                    </p>
                                    <p className="builderparaheading mt-30" style={{ color: "#F58A3C" }}>
                                        Moral
                                    </p>
                                    <p className="builderparatext">
                                        VC’s give 2 pence in the £1 to all-women startups & slightly less than that for Black-led teams. Because investment is focussed on scaleups, the startup pipeline is drying up. Low-income earners struggle to save or create wealth.
                                    </p>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container alignItems="center" style={{ minWidth: '100%' }}
                            sx={{ display: { xs: "none", sm: "none", md: "flex", lg: "none" } }}
                        >
                            <Grid item md={6} sx={{ paddingRight: { md: "30px" } }}>
                                <div className="about__thumb-wrapper d-sm-flex mr-20 p-relative">
                                    <div className="about__thumb-left mr-10">
                                        <div className="about__thumb-1 mb-10">
                                            <iframe width="100%" height="166" src="https://www.youtube.com/embed/i-7DGjUYCWc" allowFullScreen style={{ borderRadius: '16px' }}></iframe>
                                        </div>
                                        <div className="about__thumb-1 text-end">
                                            <img src="../assets/imgs/page/evidence-led-research/researchphotogrid-bottom.jpg" alt="" style={{ height: '166px', width: '240px', borderRadius: '16px' }} />
                                        </div>
                                    </div>
                                    <div className="about__thumb-2">
                                        <img src="../assets/imgs/page/evidence-led-research/researchphotogrid-right.jpg" alt="" style={{ height: '501px', width: '285px', borderRadius: '16px' }} />
                                    </div>
                                </div>
                            </Grid>
                            <Grid item md={6} sx={{ paddingLeft: { md: "30px" } }}>
                                <div className="title-details-builder">
                                    <p className="builderparaheading" style={{ color: "#3C65F5" }}>
                                        Economic
                                    </p>
                                    <p className="builderparatext">
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
                                                Over £430bn could be added to the UK economy if recommendations in the reports which talk about levelling-up were actioned. One of the biggest
                                                <button
                                                    className="btn-show-more"
                                                    onClick={() => setShowMore1(!showMore1)}
                                                >
                                                    {showMore1 ? "show less" : "..more"}
                                                </button>
                                            </>
                                        )}
                                    </p>
                                    <p className="builderparaheading mt-30" style={{ color: "#3AAB67" }}>
                                        Social
                                    </p>
                                    <p className="builderparatext">
                                        {showMore2 ? (
                                            <>
                                                Time To Change - CREME/ Aston University/ Natwest demonstrated, Extend Ventures, Rose Review (NatWest) , ACH, Llilac Review explore the benefit  of empowering underrepresented groups to add to the economy. Whilst fostering deeper inclusion for all socio-demographic groups.
                                                <button
                                                    className="btn-show-more"
                                                    onClick={() => setShowMore2(!showMore2)}
                                                >
                                                    {showMore2 ? "show less" : "...more"}
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                Time To Change - CREME/ Aston University/ Natwest demonstrated, Extend Ventures, Rose Review (NatWest) , ACH, Llilac Review explore the benefit  of
                                                <button
                                                    className="btn-show-more"
                                                    onClick={() => setShowMore2(!showMore2)}
                                                >
                                                    {showMore2 ? "show less" : "..more"}
                                                </button>
                                            </>
                                        )}
                                    </p>
                                    <p className="builderparaheading mt-30" style={{ color: "#F58A3C" }}>
                                        Moral
                                    </p>
                                    <p className="builderparatext">
                                        VC’s give 2 pence in the £1 to all-women startups & slightly less than that for Black-led teams. Because investment is focussed on scaleups, the startup pipeline is drying up. Low-income earners struggle to save or create wealth.
                                    </p>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container alignItems="center" style={{ minWidth: '100%' }}
                            sx={{ display: { xs: "none", sm: "flex", md: "none", lg: "none" } }}
                        >
                            <Grid item sm={12}>
                                <div className="about__thumb-wrapper d-sm-flex mr-20 p-relative">
                                    <div className='grid__thumb w-img fix grid_thumb_height grid_thumb'>
                                        <iframe width="" height="100%" src="https://www.youtube.com/embed/i-7DGjUYCWc" allowFullScreen style={{ borderRadius: '16px' }}></iframe>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item sm={12}>
                            <div className="title-details-builder mt-20 mt-20-10">
                                    <p className="builderparaheading" style={{ color: "#3C65F5" }}>
                                        Economic
                                    </p>
                                    <p className="builderparatext">
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
                                    <p className="builderparaheading mt-30" style={{ color: "#3AAB67" }}>
                                        Social
                                    </p>
                                    <p className="builderparatext">
                                        Time To Change - CREME/ Aston University/ Natwest demonstrated, Extend Ventures, Rose Review (NatWest) , ACH, Llilac Review explore the benefit  of empowering underrepresented groups to add to the economy. Whilst fostering deeper inclusion for all socio-demographic groups.
                                    </p>
                                    <p className="builderparaheading mt-30" style={{ color: "#F58A3C" }}>
                                        Moral
                                    </p>
                                    <p className="builderparatext">
                                        VC’s give 2 pence in the £1 to all-women startups & slightly less than that for Black-led teams. Because investment is focussed on scaleups, the startup pipeline is drying up. Low-income earners struggle to save or create wealth.
                                    </p>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container alignItems="center" style={{ minWidth: '100%' }}
                            sx={{ display: { xs: "flex", sm: "none", md: "none", lg: "none" } }}
                        >
                            <Grid item xs={12}>
                                <div className='grid__thumb w-img fix grid_thumb_height grid_thumb'>
                                    <iframe height="100%" src="https://www.youtube.com/embed/i-7DGjUYCWc" allowFullScreen style={{ border: '1px solid #ccc', borderRadius: '16px' }} className="builder-video"></iframe>
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <div className="title-details-builder mt-20 mt-20-10">
                                    <p className="builderparaheading" style={{ color: "#3C65F5" }}>
                                        Economic
                                    </p>
                                    <p className="builderparatext">
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
                                    <p className="builderparaheading mt-30" style={{ color: "#3AAB67" }}>
                                        Social
                                    </p>
                                    <p className="builderparatext">
                                        Time To Change - CREME/ Aston University/ Natwest demonstrated, Extend Ventures, Rose Review (NatWest) , ACH, Llilac Review explore the benefit  of empowering underrepresented groups to add to the economy. Whilst fostering deeper inclusion for all socio-demographic groups.
                                    </p>
                                    <p className="builderparaheading mt-30" style={{ color: "#F58A3C" }}>
                                        Moral
                                    </p>
                                    <p className="builderparatext">
                                        VC’s give 2 pence in the £1 to all-women startups & slightly less than that for Black-led teams. Because investment is focussed on scaleups, the startup pipeline is drying up. Low-income earners struggle to save or create wealth.
                                    </p>
                                </div>
                            </Grid>
                        </Grid>
                    </div >
                </div >
            </section >
        </div>
    );
}