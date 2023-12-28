import React, { useState, useRef, useEffect } from 'react'
import AssessmentModal from '../../../components/elements/AssessmentModal'
import Swal from 'sweetalert2';
import axios from 'axios';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const TaxCreditsCalculatorModal = props => {
  const [question,setQuestion] = useState(1);
  const [progress,setProgress] = useState(0)
  const formGroupRef = useRef([])
  const inputRef = useRef([])

  useEffect(() => {
    // Gets all the form sections in the quiz
    formGroupRef.current = document.querySelectorAll("form .assessment-form-group")
    console.log(question)
  },[formGroupRef.current])

  const handleValidateForm = form => {
    inputRef.current = form.querySelectorAll("input")

    if (inputRef.current.length > 1) {
        var isChecked = false
        for (var i = 0; i < inputRef.current.length; i++) {
            console.log(inputRef.current[i])
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

  const handleClose = e => {
    setQuestion(1)
    setProgress(0)
    const checkedInputs = document.querySelectorAll('input:checked');
    const costs = document.querySelectorAll('input[type="number"]')
    checkedInputs.forEach(input => {
        input.checked = false
    })

    costs.forEach(input => {
        input.value = ""
    })
    props.onClose()
  }


  const handleNext = e => {
      e.preventDefault()
      var currentForm = formGroupRef.current[question-1];
      if (handleValidateForm(currentForm)) {
          setQuestion(prevQuestion => prevQuestion + 1)
          setProgress(((question+1)/6)*100)
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
    var currentForm = formGroupRef.current[question-1];
    if (!handleValidateForm(currentForm)) {
      Swal.fire({
        text: "Please fill in the response before proceeding to the next question.",
        icon: "warning",
        confirmButtonText: "OK",
        confirmButtonColor: '#ff9494'
      });
      return;
    }
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
      props.handleSubmit(res)
      handleClose()
    } catch (error) {
      console.error("Error submitting form: ",error)
    }
  }

  const QuizButton = () => {
    // 1-indexed so question 1 === 1, question 2 === 2, etc.
    if (question === 1) {
      return (
        <div className="button-group d-flex">
          <button type="button" className="btn btn-quiz" onClick={handleNext}>
            <IoIosArrowDown />
          </button>
        </div>
      )
    } else if (question < 6) {
      return (
        <>
        <div className="button-group d-flex">
          <button type="button" className="btn btn-quiz" onClick={handlePrevious}>
            <IoIosArrowUp />
          </button>
          <button type="button" className="btn btn-quiz" onClick={handleNext}>
            <IoIosArrowDown />
          </button>
        </div>
        </>
      )
    } else {
      return (
        <>
        <div className="button-group d-flex">
          <button type="button" className="btn btn-quiz" onClick={handlePrevious}>
            <IoIosArrowUp />
          </button>
          <button type="button" className="btn btn-quiz" onClick={handleSubmit}>
            <IoIosArrowDown />
          </button>
        </div>
        </>
      )
    }
  }

  const Button = () => {
    // Also 1-indexed
    return (
      <div className="button-group d-flex align-items-center mt-15">
        <button type="button" className="btn btn-quiz" onClick={handleNext}>
          Next
        </button>
        <span className="ml-5">Or Press ENTER</span>
      </div>
    )
  }

  return (
    <AssessmentModal isOpen={props.show} onClose={handleClose} header={"R&D Tax Credits Calculator"} uizardHTML={"<p>Hello there!</p>"}>
      <div className="assessment-modal-body text-center p-5">
      <form className="text-center" onSubmit={handleSubmit}>
        <div className="assessment-form-group" style={{display: question === 1 ? "block" : "none"}}>
          <label className="fs-3 mb-30 lh-lg">Your headcount...</label>
          <ul className="assessment-radio-group">
            <li className="headcount-less">
              <input type="radio" name="headcount" id="headcount-less" value="A" />
              <label className="p-4" style={{"fontHeight": "3vh", "lineHeight": "4vh"}} htmlFor="headcount-less">Less than 500</label>
            </li>
            <li className="headcount-more">
              <input type="radio" name="headcount" id="headcount-more" value="B" />
              <label className="p-4" style={{"fontHeight": "3vh", "lineHeight": "4vh"}} htmlFor="headcount-more">More than 500</label>
            </li>
          </ul>
          <Button />
        </div>
          <div className="assessment-form-group" style={{display: question === 2 ? "block" : "none"}}>
              <label className="fs-3 mb-30 lh-lg">Your turnover...</label>
              <ul className="assessment-radio-group">
                <li className="turnover-less">
                  <input type="radio" name="turnover" id="turnover-no-more" value="A" />
                  <label className="p-4" style={{"fontHeight": "3vh", "lineHeight": "4vh"}} htmlFor="turnover-no-more">No more than £100 million</label>
                </li>
                <li className="turnover-more">
                  <input type="radio" name="turnover" id="turnover-more" value="B" />
                  <label className="p-4" style={{"fontHeight": "3vh", "lineHeight": "4vh"}} htmlFor="turnover-more">More than £100 million</label>
                </li>
              </ul>
              <Button />
          </div>
          <div className="assessment-form-group" style={{display: question === 3 ? "block" : "none"}}>
              <label className="fs-3 mb-30 lh-lg">Your balance sheet...</label>
              <ul className="assessment-radio-group">
                <li className="balance-sheet-less">
                  <input type="radio" name="balance-sheet" id="balance-sheet-less" value="A" />
                  <label className="p-4" style={{"fontHeight": "3vh", "lineHeight": "4vh"}} htmlFor="balance-sheet-less">Less than £86 million</label>
                </li>
                <li className="balance-sheet-more">
                  <input type="radio" name="balance-sheet" id="balance-sheet-more" value="B" />
                  <label className="p-4" style={{"fontHeight": "3vh", "lineHeight": "4vh"}} htmlFor="balance-sheet-more">More than £86 million</label>
                </li>
              </ul>
              <Button />
          </div>
          <div className="assessment-form-group" style={{display: question === 4 ? "block" : "none"}}>
              <label className="fs-3 mb-30 lh-lg">Is your company...</label>
              <ul className="assessment-radio-group">
                <li className="company-profit">
                  <input type="radio" name="company" id="company-profit" value="A" />
                  <label className="p-4" style={{"fontHeight": "3vh", "lineHeight": "4vh"}} htmlFor="company-profit">Profit-making</label>
                </li>
                <li className="company-loss">
                  <input type="radio" name="company" id="company-loss" value="B" />
                  <label className="p-4" style={{"fontHeight": "3vh", "lineHeight": "4vh"}} htmlFor="company-loss">Loss-making</label>
                </li>
              </ul>
              <Button />
          </div>
          <div className="assessment-form-group" style={{display: question === 5 ? "block" : "none"}}>
              <label className="fs-3 mb-30 lh-lg">Company staff, software, consumable items costs relating to R&D?</label>
              <div className="input group d-flex" role="group">
                  <span className="currency fs-1 d-flex align-items-center col-1">£</span>
                  <input type="number" className="fs-3 rounded" name="costs" placeholder="Costs" />
              </div>
              <Button />
          </div>
          <div className="assessment-form-group" style={{display: question === 6 ? "block" : "none"}}>
              <label className="fs-3 mb-30 lh-lg">What are your subcontractor costs relating to R&D activities?</label>
              <div className="input group d-flex" role="group">
                  <span className="currency fs-1 d-flex align-items-center col-1">£</span>
                  <input type="number" className="fs-3 rounded" name="subcontractor-costs" placeholder="Costs" />
              </div>
              <div className="button-group d-flex align-items-center mt-15">
                <button type="button" className="btn btn-quiz" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
          </div>
        </form>
      </div>
      <div className="assessment-modal-footer">
          <div className="tracker lh-sm">
          {/* questions.length + 1 to include gender question */}
          <p>Question {question} of 6</p>
          <div className="progress-bar">
              <div className="bar" style={{width: `${progress}%`}}>
              <span className="progression"></span>
              </div>
          </div>
        </div>
        <QuizButton />
    </div>
  </AssessmentModal>
  )
}

export default TaxCreditsCalculatorModal
