/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useCallback, useRef } from 'react'
import Layout from "../../components/Layout/Layout";
import PieGraph from '../../components/elements/PieGraph';
import BarGraph from '../../components/elements/BarGraph';
import axios from 'axios';

export default function Index() {
  const [data,setData] = useState({})
  const formRef = useRef(null)

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const failure_reason = document.getElementById("failure_reason").value
    const country_of_origin = document.getElementById("country_of_origin").value
    const company_sector = document.getElementById("company_sector").value
    const failure_stage = document.getElementById("failure_stage").value
    const query = {
      "country_of_origin": country_of_origin,
      "company_sector": company_sector,
      "failure_reason": failure_reason,
      "failure_stage": failure_stage
    }

    try {
      const response = await axios.post("/business-problem-triage/get-data", query);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error appropriately (e.g., show an error message)
    }
  }

    return (
        <>
            <Layout>
              <div className="background-random">
              <section className="section-box">
                    <div className=" banner-hero bg-img-triage">
                        <div className="container d-flex align-items-center">
                            <div className="row">
                                <div className="col">
                                    <h2 className="mb-10">Business Problem Triage</h2>
                                    <p className="color-text-paragraph-2">Tried and tested options for your business problems,<br />empowering and informing your decision making.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
              </div>
            </Layout>
        </>
    );
};
