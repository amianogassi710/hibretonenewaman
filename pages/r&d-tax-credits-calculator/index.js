/* eslint-disable @next/next/no-img-element */
import Swal from "sweetalert2"
import React, { useState, useRef, useEffect } from 'react';
import axios from "axios";
import Layout from "../../components/Layout/Layout";

export default function TaxCreditsCalculator() {
    const [question,setQuestion] = useState(0)
    const inputRef = useRef([])
    const formGroupRef = useRef([])
    const [result,setResult] = useState(0)
    const [showResult,setShowResult] = useState(false)
    const [showCalulator,setShowCalculator] = useState(true)

    useEffect(() => {
        // Gets all the form sections in the quiz
        formGroupRef.current = document.querySelectorAll("form .form-group")
      },[formGroupRef.current])

    const handleValidateForm = form => {
        inputRef.current = form.querySelectorAll("input")

        if (inputRef.current.length > 1) {
            var isChecked = false
            for (var i = 0; i < inputRef.current.length; i++) {
                if (inputRef.current[i].checked) {
                    isChecked = true
                }
            }
            return isChecked
        } else {
            if (inputRef.current[0].value === "") {
                return false
            }
        }


        return true
    }

    const handleRetake = e => {
        setQuestion(1)
        setShowResult(false)
        setShowCalculator(true)
        setResult(0)
        const checkedInputs = document.querySelectorAll('input:checked');
        const costs = document.querySelectorAll('input[type="number"]')
        checkedInputs.forEach(input => {
            input.checked = false
        })

        costs.forEach(input => {
            input.value = ""
        })
    }

    const handleNext = e => {
        e.preventDefault()
        var currentForm = formGroupRef.current[question];
        if (question === 0 || handleValidateForm(currentForm)) {
            setQuestion(prevQuestion => prevQuestion + 1)
        } else {
            Swal.fire({
              text: "Please fill in the response before proceeding to the next question.",
              icon: "warning",
              confirmButtonText: "OK",
              confirmButtonColor: '#ff9494'
            });
        }
    }

    const handlePrevious = e => {
        e.preventDefault()
        setQuestion(prevQuestion => prevQuestion - 1)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        var currentForm = formGroupRef.current[question];
        if (!handleValidateForm(currentForm)) {
          Swal.fire({
            text: "Please fill in the response before proceeding to the next question.",
            icon: "warning",
            confirmButtonText: "OK",
            confirmButtonColor: '#ff9494'
          });
          return;
        }
        var feedback = {}
        try {
          // Extract relevant form data
          const checkedInputs = document.querySelectorAll('input:checked');
          const costs = document.querySelectorAll('input[type="number"]')
          const formData = {
            "assessment": "R&D Tax Calculator",
            "answers": []
          };
          var i = 1;
          Array.from(checkedInputs).forEach(input => {
            formData["answers"].push({
              "question_id": parseInt(i),
              "question_value": input.value
            })
            i++
          });
          Array.from(costs).forEach(input => {
            formData["answers"].push({
                "question_id": parseInt(i),
                "question_value": parseInt(input.value)
            })
            i++
          })
          const request = await axios.post("/tax-credits-calculator/tax-credits-calculator", formData);
          const res = request.data
          setResult(res)
          setShowResult(true)
          setShowCalculator(false)
        } catch (error) {
          console.error("Error submitting form: ",error)
        }
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
                                        <div className="modal-body">
                                            <form className="text-center" onSubmit={handleSubmit} style={{display: showCalulator ? "block" : "none"}}>
                                                    <div className="col-12 mb-50">
                                                        <h3>R&D Tax Credits Calculator</h3>
                                                    </div>
                                                <div className="form-group" style={{display: question === 0 ? "block" : "none"}}>
                                                    <p className="fs-4 lh-base mb-25">Companies who undertake R&D may be eligible for a government tax rebate.</p>
                                                    <p className="fs-4 lh-base mb-25">The hibretOne platform includes an R&D Tax Credit Calculator, enabling business owners to guesstimate how much they could be owed. Research estimates that £84bn in R&D tax relief available to SMEs remains unclaimed. </p><br />
                                                    <button className="btn btn-default mr-10 ml-10 fs-5" onClick={handleNext}>Start</button>
                                                </div>
                                                <div className="form-group" style={{display: question === 1 ? "block" : "none"}}>
                                                    <label className="fs-3 mb-30 lh-lg">Your headcount...</label><br />
                                                    <div className="btn-group btn-group-lg">
                                                        <input type="radio" className="btn-check" value="A" name="headcount" id="headcount-less" />
                                                        <label style={{"font-size": "3vh", "line-height": "4vh"}} htmlFor="headcount-less" className="btn btn-switch">Less than 500</label>
                                                        <input type="radio" className="btn-check" value="B" name="headcount" id="headcount-more" />
                                                        <label style={{"font-size": "3vh", "line-height": "4vh"}} htmlFor="headcount-more" className="btn btn-switch">More than 500</label>
                                                    </div>
                                                    <div className="button-group mt-30">
                                                        <button className="btn btn-default mr-10 ml-10 fs-5" onClick={handleNext}>Next</button>
                                                    </div>
                                                </div>
                                                <div className="form-group" style={{display: question === 2 ? "block" : "none"}}>
                                                    <label className="fs-3 mb-30 lh-lg">Your turnover...</label><br />
                                                    <div className="btn-group btn-group-lg" role="group">
                                                        <input type="radio" className="btn-check" value="A" name="turnover" id="turnover-no-more" />
                                                        <label style={{"font-size": "3vh", "line-height": "4vh"}} htmlFor="turnover-no-more" className="btn btn-switch">No more than £100 million</label>
                                                        <input type="radio" className="btn-check" value="B" name="turnover" id="turnover-more" />
                                                        <label style={{"font-size": "3vh", "line-height": "4vh"}} htmlFor="turnover-more" className="btn btn-switch">More than £100 million</label>
                                                    </div>
                                                    <div className="button-group mt-30">
                                                        <button className="btn btn-default mr-10 ml-10 fs-5" onClick={handlePrevious}>Back</button>
                                                        <button className="btn btn-default mr-10 ml-10 fs-5" onClick={handleNext}>Next</button>
                                                    </div>
                                                </div>
                                                <div className="form-group" style={{display: question === 3 ? "block" : "none"}}>
                                                    <label className="fs-3 mb-30 lh-lg">Your balance sheet...</label><br />
                                                    <div className="btn-group btn-group-lg">
                                                        <input type="radio" className="btn-check" value="A" name="balance-sheet" id="balance-sheet-less"/>
                                                        <label style={{"font-size": "3vh", "line-height": "4vh"}} htmlFor="balance-sheet-less" className="btn btn-switch">Less than £86 million</label>
                                                        <input type="radio" className="btn-check" value="B" name="balance-sheet" id="balance-sheet-more" />
                                                        <label style={{"font-size": "3vh", "line-height": "4vh"}} htmlFor="balance-sheet-more" className="btn btn-switch">More than £86 million</label>
                                                    </div>
                                                    <div className="button-group mt-30">
                                                        <button className="btn btn-default mr-10 ml-10 fs-5" onClick={handlePrevious}>Back</button>
                                                        <button className="btn btn-default mr-10 ml-10 fs-5" onClick={handleNext}>Next</button>
                                                    </div>
                                                </div>
                                                <div className="form-group" style={{display: question === 4 ? "block" : "none"}}>
                                                    <label className="fs-3 mb-30 lh-lg">Is your company...</label><br />
                                                    <div className="btn-group btn-group-lg">
                                                        <input type="radio" className="btn-check" value="A" name="company" id="company-profit" />
                                                        <label style={{"font-size": "3vh", "line-height": "4vh"}} htmlFor="company-profit" className="btn btn-switch">Profit-making</label>
                                                        <input type="radio" className="btn-check" value="B" name="company" id="company-loss" />
                                                        <label style={{"font-size": "3vh", "line-height": "4vh"}} htmlFor="company-loss" className="btn btn-switch">Loss-making</label>
                                                    </div>
                                                    <div className="button-group mt-30">
                                                        <button className="btn btn-default mr-10 ml-10 fs-5" onClick={handlePrevious}>Back</button>
                                                        <button className="btn btn-default mr-10 ml-10 fs-5" onClick={handleNext}>Next</button>
                                                    </div>
                                                </div>
                                                <div className="form-group" style={{display: question === 5 ? "block" : "none"}}>
                                                    <label className="fs-3 mb-30 lh-lg">Company staff, software, consumable items costs relating to R&D?</label>
                                                    <div className="input group d-flex" role="group">
                                                        <span className="currency fs-2 d-flex align-items-center col-1">£</span>
                                                        <input type="number" className="font-sm color-text-paragraph-2" name="costs" placeholder="Costs" />
                                                    </div>
                                                    <div className="button-group mt-30">
                                                        <button className="btn btn-default mr-10 ml-10 fs-5" onClick={handlePrevious}>Back</button>
                                                        <button className="btn btn-default mr-10 ml-10 fs-5" onClick={handleNext}>Next</button>
                                                    </div>
                                                </div>
                                                <div className="form-group" style={{display: question === 6 ? "block" : "none"}}>
                                                    <label className="fs-3 mb-30 lh-lg">What are your subcontractor costs relating to R&D activities?</label>
                                                    <div className="input group d-flex" role="group">
                                                        <span className="currency fs-2 d-flex align-items-center col-1">£</span>
                                                        <input type="number" className="font-sm color-text-paragraph-2" name="subcontractor-costs" placeholder="Costs" />
                                                    </div>
                                                    <div className="button-group mt-30">
                                                        <button className="btn btn-default mr-10 ml-10 fs-5" onClick={handlePrevious}>Back</button>
                                                        <button type="submit" className="btn btn-default mr-10 ml-10 fs-5">Submit</button>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="calculator-results" style={{display: showResult ? "block" : "none"}}>
                                                <div className="col-12">
                                                    <h3>R&D Tax Credits Calculator</h3>
                                                </div><br />
                                                <h4>Result: £{(result).toFixed(2)}</h4><br />
                                                <button className="btn btn-default fs-5 mx-auto" onClick={handleRetake}>Retake</button>
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
