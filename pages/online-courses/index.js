import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout'
import axios from 'axios';
import Loading from '../../components/elements/Loading';
import Subscription from '../../components/Layout/Subscription';
import Grid from '../../components/elements/Grid';

export default function Index() {
  const [data,setData] = useState({})


  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await axios.get(`/alison-courses/courses`)
        setData(response.data)
      } catch (error) {
        console.log("Couldn't retrieve quiz: ", error);
      }
    };
    getCourses();
  },[])

  // Render nothing if data is not available yet
  if (Object.keys(data).length === 0) {
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="slider__area">
         <div className="banner-hero bg-img-assessment">
            <div className="container d-flex align-items-center">
               <div className="row">
                  <div className="col-lg-8">
                     <h2 className="mb-10">Online <span className="color-blue">Courses</span></h2>
                     <p className="font-lg color-text-paragraph-2">Lorem ipsum dolor et al...</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section className="grid__area container pt-100 pb-70 assessment-container">
         <div className="row">
            <div className="col-xxl-12">
               <div className=" text-center mb-60">
                  <h2>Alison Courses</h2>
                  <p>Lorem Ipsum Dolor Et Al...</p>
               </div>
            </div>
         </div>
         <Grid data={data} />
      </section>

      <Subscription />
    </Layout>
  );
}
