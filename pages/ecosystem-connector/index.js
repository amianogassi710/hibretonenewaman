import Layout from '../../components/Layout/Layout'
import React from 'react'
import dynamic from "next/dynamic";
import YellowBanner from '../../components/elements/YellowBanner';
import { Grid } from '@mui/material';
import KickstartButton from '../../components/elements/KickstartButton';
import Subscription from '../../components/Layout/Subscription';

const NoSSRBrandSlider = dynamic(
    () => import("../../components/sliders/Brand"),
    { ssr: false }
);

const NoSSRCategorySlider = dynamic(
  () => import("../../components/elements/CategorySlider"),
  { ssr: false }
)

function index() {

const location = [

]


const data = [
  {
      icon: "customer.svg",
      title: "Investment"
  },
  {
      icon: "marketing.svg",
      title: "Marketing & Sale"
  },
  {
      icon: "finance.svg",
      title: "Finance"
  },
  {
      icon: "lightning.svg",
      title: "Software"
  },
  {
      icon: "human.svg",
      title: "Human Resource"
  },
  {
      icon: "management.svg",
      title: "Management"
  },
  {
      icon: "retail.svg",
      title: "Retail & Products"
  },
  {
      icon: "security.svg",
      title: "Security Analyst"
  },
  {
      icon: "content.svg",
      title: "Content Writer"
  },
  {
      icon: "research.svg",
      title: "Market Research"
  }
];


  return (
    <Layout>
      <section>
        <div className="banner-hero bg-img-assessment">
            <div className="container d-flex align-items-center">
              <div className="row">
                  <div className="col-lg-12">
                    <h2 className="mb-20 ml-20">Ecosystem Connector</h2>
                    <p className="ml-20">Sharing social capital by connecting aspirers, entrepreneurs, business founders,<br />startups and scaleups to business support</p>
                  </div>
              </div>
            </div>
        </div>
      </section>
      <section className="section-box mt-50">
        <div className="container">
            <div className="list-brands">
                <div className="box-swiper">
                    <div className=" text-center mb-30">
                        <h2>Connect with Expert Advice & Support</h2>
                        <p className="mt-10">Explore the support you need whenever you need it</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section className='section-box mt-75 mb-75'>
        <YellowBanner />
      </section>
      <section className="section-box">
        <div className="container">
            <div className="list-brands">
                <div className="box-swiper">
                    <div className=" text-center">
                        <h2>A Sample of our Amazing Support Providers</h2>
                        <p className="mt-10">Brilliant support providers available across all business categories</p>
                    </div>

                    <div className="swiper-button-next swiper-button-margin" />
                    <div className="swiper-button-prev swiper-button-margin" />
                    <NoSSRBrandSlider />
                </div>
            </div>
        </div>
      </section>
      <section className="section-box mb-100 mt-100">
         <div className="post-loop-grid">
            <div className="container">
               <Grid container alignItems="center" style={{minWidth: '100%'}}
                     sx={{display: {xs: 'none', md: "none", lg: 'flex'}}}>
                     <Grid item lg={6}>
                      <iframe className='content-media' width="1000" height="500" src="https://www.youtube.com/embed/xSaggc-qxn0?si=5GExD99pRLDqjIva" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                     </Grid>
                     <Grid item lg={6} sx={{paddingLeft: {lg: '75px'}}}>

                     <h3 className='mt-20'>hibretOne Preferred Provider</h3>
                     <div className="mt-10">
                        <p className="mt-20">Our Ecosystem Connector enables a new entrepreneur, or someone new to the region to connect with the most respected support in a region, at the touch of a button. Our Preferred Providers have been carefully curated to be helpful and to be able to add value to any startup, or  scaling business.</p>
                        <p className="mt-20">We also understand for the best ideas to flow and for optimum problem solving, the people you work with should not look like you, sound like you, or be educated like you. Cultivating new ideas brings financial gain, as company boards which include a woman are 15% more likely and ethnic minorities  are 35% more likely to see their profits in the top quarter.</p>
                        <p className="mt-20">So speak to a couple of our Recommended Support Providers, your business will be glad you did.</p>
                     </div>
                     <div className="mt-20 mb-30">
                        <button className="btn btn-default">Start Connecting</button>
                     </div>
                     </Grid>
               </Grid>
               <Grid container alignItems="center" style={{minWidth: '100%'}}
                     sx={{display: {xs: 'flex', md: "flex", lg: 'none'}}}>
                     <Grid item xs={12} md={12} sx={{marginBottom: '20px'}}>
                     <h3>hibretOne Preferred Provider</h3>
                     </Grid>
                     <Grid item xs={12} md={12}>
                     <div className="sm_img_container w-img fix grid_thumb_height">
                        <img className="content-media" src="assets/imgs/page/about/img-about2.png" alt="joxBox" />
                     </div></Grid>
                     <Grid item xs={12} md={12}>
                     <div className="mt-10">
                        <p className="mt-10">Our Ecosystem Connector enables a new entrepreneur, or someone new to the region to connect with the most respected support in a region, at the touch of a button. Our Preferred Providers have been carefully curated to be helpful and to be able to add value to any startup, or  scaling business.</p>
                        <p className=" mt-10">We also understand for the best ideas to flow and for optimum problem solving, the people you work with should not look like you, sound like you, or be educated like you. Cultivating new ideas brings financial gain, as company boards which include a woman are 15% more likely and ethnic minorities  are 35% more likely to see their profits in the top quarter.</p>
                        <p className="mt-10">So speak to a couple of our Recommended Support Providers, your business will be glad you did.</p>
                     </div>
                        <div className="mt-20 mb-30">
                           <button className="btn btn-default fs-6">Start Connecting</button>
                        </div>
                     </Grid>
               </Grid>
            </div>
         </div>
      </section>
      <section className='section-box'>
        <div className='container'>
          <div className="box-swiper mt-50 grant-category">
            <div>
              <NoSSRCategorySlider data={data} />
              <NoSSRCategorySlider />
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
            </div>
          </div>
        </div>
      </section>
      <section className="section-box mt-75">
         <div className="post-loop-grid">
            <div className="container">
               <Grid container className='mb-50' alignItems="center" style={{minWidth: '100%'}}
                     sx={{display: {xs: 'none', md: "none", lg: 'flex'}}}>
                     <Grid item lg={6} sx={{paddingRight: {lg: '75px'}}}>
                     <h3 className="mt-20">Possibly Great Support</h3>
                     <div className="mt-10">
                        <p className="mt-20">Fantastic new businesses are starting every day. But it’s hard to know which give great service and which will be gone within the year, leaving behind a trail of destruction. So the Alternative Providers list, generated by AI, may be  what you need, or they may be an unmitigated disaster. All the risk is on you.</p>
                        <p className="mt-20">So we suggest using our Recommended Support providers, as we have done some preliminary vetting, with many we have used ourselves providing high-quality support</p>
                        <p className='mt-20'>If you do find someone or an organisation that is brilliant, by all means ask them to apply to become one of our preferred support providers. Their business will thank you for it.</p>
                     </div>
                     <div className="mt-20 mb-30">
                        <button className="btn btn-default">Connect to Support</button>
                     </div>
                     </Grid>
                     <Grid item lg={6}>
                        <img className="content-media" src="assets/imgs/page/ecosystem-connector/1.png" alt="joxBox" />
                     </Grid>
               </Grid>
               <Grid container alignItems="center" style={{minWidth: '100%'}}
                     sx={{display: {xs: 'flex', md: "flex", lg: 'none'}}}>
                     <Grid item xs={12} md={12} sx={{marginBottom: '20px'}}>
                        <h3>Possibly Great Support</h3>
                     </Grid>
                     <Grid item lg={6}>
                      <div>
                        <img className="content-media" src="assets/imgs/page/ecosystem-connector/1.png" alt="joxBox" />
                      </div>
                      </Grid>
                     <Grid item xs={12} md={12}>
                        <div className="mt-10">
                           <p className="mt-10">Fantastic new businesses are starting every day. But it’s hard to know which give great service and which will be gone within the year, leaving behind a trail of destruction. So the Alternative Providers list, generated by AI, may be  what you need, or they may be an unmitigated disaster. All the risk is on you. </p>
                        <p className="mt-20">So we suggest using our Recommended Support providers, as we have done some preliminary vetting, with many we have used ourselves providing high-quality support</p>
                        <p className='mt-20'>If you do find someone or an organisation that is brilliant, by all means ask them to apply to become one of our preferred support providers. Their business will thank you for it.</p>
                        </div>
                        <div className="mt-20 mb-30">
                           <button className="btn btn-default fs-6">Connect to Support</button>
                        </div>
                     </Grid>
               </Grid>
            </div>
         </div>
      </section>
      <section className="section-box mt-70 mb-100">
          <div className="container">
              <div className="text-center">
                  <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">
                      How It Works?
                  </h2>
                  <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
                      3 Simple steps to find the ecosystem support you need
                  </p>
              </div>
              <div className="mt-70">
                  <div className="row">
                      <div className="col-lg-4">
                          <div className="box-step step-1">
                              <h1 className="number-element">
                                  1
                              </h1>
                              <h4 className="mb-20">
                                  Enter the support you need and
                                  <br className="d-none d-lg-block" />
                                  the area you are based
                              </h4>
                              <p className="font-lg color-text-paragraph-2">
                                  Whatever the subject we are your
                                  <br className="d-none d-lg-block" />
                                  social capital connecting you with
                                  <br className="d-none d-lg-block" />
                                  support throughout the UK
                              </p>
                          </div>
                      </div>
                      <div className="col-lg-4">
                          <div className="box-step step-2">
                              <h1 className="number-element">
                                  2
                              </h1>
                              <h4 className="mb-20">
                                  We'll find the best support
                                  <br className="d-none d-lg-block" />
                                  wherever they are
                              </h4>
                              <p className="font-lg color-text-paragraph-2">
                                  From our database of amazing
                                  <br className="d-none d-lg-block" />
                                  providers and AI generated support,
                                  <br className="d-none d-lg-block" />
                                  we match your requirements

                              </p>
                          </div>
                      </div>
                      <div className="col-lg-4">
                          <div className="box-step">
                              <h1 className="number-element">
                                  3
                              </h1>
                              <h4 className="mb-20">
                                  Select the most
                                  <br className="d-none d-lg-block" />
                                  suitable support
                              </h4>
                              <p className="font-lg color-text-paragraph-2">
                                  We will email the provider on your
                                  <br className="d-none d-lg-block" />
                                  behalf, as well ad supplying you
                                  <br className="d-none d-lg-block" />
                                  with their contact details
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
      <KickstartButton />
      <Subscription />
    </Layout>
  )
}

export default index
