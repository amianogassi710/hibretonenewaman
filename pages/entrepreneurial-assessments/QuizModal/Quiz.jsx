import Swal from "sweetalert2";
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import StrengthsAndIdealJobs from "./StrengthsAndIdealJobs.jsx";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline,IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Questions from '../Questions.json'


const Quiz = props => {
  const formGroupRef = useRef([])
  const [formIndex,setFormIndex] = useState(0)
  const checkBoxesRef = useRef([])
  const [progress,setProgress] = useState(0)
  const [questions,setQuestions] = useState([])
  const [time,setTime] = useState("")
  const [uizardText,setUizardText] = useState("")
  const [answers,setAnswers] = useState([])

  const nextOnEnter = (e) => {
    var currentForm = formGroupRef.current[formIndex]
    if (e.keyCode === 13) {
        e.preventDefault()
      // Default function of enter submits form so only eliminate when not on the last question
      if (formIndex < questions.length) {
        handleGoNext()
      } else if (!handleValidateForm(currentForm)) {
        Swal.fire({
          text: "Please fill in the response before proceeding to the next question.",
          icon: "warning",
          confirmButtonText: "OK",
          confirmButtonColor: '#ff9494'
        });
        return;
      } else {
        handleSubmit(e)
      }
    }
  };

  useEffect(() => {
    const getQuiz = async () => {
      if (props.assessment !== "Personality") {
        const assessment = Questions[`${props.assessment}`]
        setTime(assessment["time"])
        setQuestions(assessment["assessment"])
        setUizardText(assessment["uizard-html"])
        setAnswers(assessment["answers"])
      } else {
        try {
          const response = await axios.get(`/assessments/personality`)
          const data = response.data;
          setTime(data.time)
          setQuestions(data.assessment)
          setUizardText(data["uizard-html"])
          setAnswers(data["answers"])
        } catch (error) {
          console.log("Couldn't retrieve quiz: ", error);
        }
      }
    };
    getQuiz();
  },[])

  useEffect(() => {
    document.body.addEventListener('keydown', nextOnEnter)
    return function cleanup() {
      document.body.removeEventListener('keydown', nextOnEnter)
    }
  },[nextOnEnter])

  useEffect(() => {
    // Gets all the form sections in the quiz
    formGroupRef.current = document.querySelectorAll("form .assessment-form-group")
  },[formGroupRef.current])

  if (!props.show) {
    return null;
  }

  const handleGoNext = (e) => {
    // Check if the key pressed is not Enter
    var currentForm = formGroupRef.current[formIndex];
    if (handleValidateForm(currentForm)) {
      currentForm.style.display = "none";

      var nextFormIndex = formIndex + 1;
      setFormIndex(nextFormIndex);
      setProgress((nextFormIndex+1)/(questions.length+1)*100)

      var nextForm = formGroupRef.current[nextFormIndex];
      nextForm.style.display = "block";
    } else {
      Swal.fire({
        text: "Please fill in the response before proceeding to the next question.",
        icon: "warning",
        confirmButtonText: "OK",
        confirmButtonColor: '#ff9494'
      });
    }
  };

  const handleGoBack = () => {
    var currentForm = formGroupRef.current[formIndex];
    currentForm.style.display = "none";

    var previousFormIndex = formIndex - 1;
    setFormIndex(previousFormIndex);
    setProgress((previousFormIndex+1)/(questions.length+1)*100)

    var previousForm = formGroupRef.current[previousFormIndex];
    previousForm.style.display = "block";
  };

  const handleValidateForm = (form) => {
    checkBoxesRef.current = form.querySelectorAll("input[type='radio']")
    var isChecked = false;

    for (var i = 0; i < checkBoxesRef.current.length; i++) {
      if (checkBoxesRef.current[i].checked) {
        isChecked = true;
        break;
      }
    }

    return isChecked;
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    var currentForm = formGroupRef.current[formIndex];
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
      const formData = {
        "assessment": props.assessment,
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
      const request = await axios.post(`/assessments/feedback`, formData)
      feedback = request.data
      setFormIndex(0)
      setProgress(0)
    } catch (error) {
      console.error("Error submitting form: ",error)
    }
    props.onSubmit(feedback)
  }

  const QuizButton = ({ number }) => {
    // 1-indexed so question 1 === 1, question 2 === 2, etc.
    if (number === 0) {
      return (
        <div className="button-group d-flex">
          <button type="button" className="btn btn-quiz" onClick={handleGoNext}>
            <IoIosArrowDown />
          </button>
        </div>
      )
    } else if (number < questions.length) {
      return (
        <>
        <div className="button-group d-flex">
          <button type="button" className="btn btn-quiz" onClick={handleGoBack}>
            <IoIosArrowUp />
          </button>
          <button type="button" className="btn btn-quiz" onClick={handleGoNext}>
            <IoIosArrowDown />
          </button>
        </div>
        </>
      )
    } else {
      return (
        <>
        <div className="button-group d-flex">
          <button type="button" className="btn btn-quiz" onClick={handleGoBack}>
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
        <button type="button" className="btn btn-quiz" onClick={handleGoNext}>
          Next
        </button>
        <span className="ml-5">Or Press ENTER</span>
      </div>
    )
  }

  const Question = ({ section, question }) => {
    if (section) {
      return (
        <>
          <div className="section">
            <div className="section-name mb-5">
              <p>{section}</p>
            </div>
          </div>
          <div className="assessment-question">
            <label className="fs-5 fw-bolder">{question}</label>
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className="assessment-question">
            <label className=" fs-5 mt-10 fw-bolder">{question}</label>
          </div>
        </>
      )
    }
  }

  return (
    <>
      <div className="assessment-modal-body text-center">
        <h4 className="mb-20 mt-10 col-12">Take this simple {time} assessment</h4>
            <form onSubmit={handleSubmit}>
              {/* Loops through all the provided questions */}
              {questions.map((question) => (
                <div className="assessment-form-group" style={{display: question.question_number === 1 ? "block" : "none"}} key={question.question_number}>
                  <Question section={question.section} question={question.question_text} />
                    <ul className="assessment-radio-group">
                      {answers.map((answer) => (
                        <li
                          className={`${question.question_number}-${answer.value}`}
                          key={answer.value}
                        >
                            <input
                              type="radio"
                              style={{"fontHeight": "3vh", "lineHeight": "4vh"}}
                              name={`q${question.question_number}`}
                              id={`q${question.question_number}-${answer.text}`}
                              value={answer.value}
                            />
                          <label style={{"fontHeight": "3vh", "lineHeight": "4vh"}} htmlFor={`q${question.question_number}-${answer.text}`}>
                            {answer.text}
                          </label>
                        </li>
                      ))}
                    </ul>
                    <Button number={question.question_number} />
                  </div>
              ))}

              <div className="assessment-form-group" style={{display:"none"}} key={26}>
                <div className="section">
                  <div className="section-name mb-5">
                    <p>Gender</p>
                  </div>
                </div>
                <div className="assessment-question">
                  <label className="fs-5 fw-bolder">Select Your Gender</label>
                </div>
                <ul className="assessment-radio-group">
                  <li className="gender-male">
                    <input type="radio" name="gender" id="gender-male" value="male" />
                    <label htmlFor="gender-male">Male</label>
                  </li>
                  <li className="gender-female">
                    <input type="radio" name="gender" id="gender-female" value="female" />
                    <label htmlFor="gender-female">Female</label>
                  </li>
                </ul>
                <div className="button-group d-flex align-items-center mt-15">
                  <button type="button" className="btn btn-quiz" onClick={handleSubmit}>
                    Submit
                  </button>
                </div>
              </div>
            </form>
      </div>
      <div className="icons d-flex justify-content-center">
        <StrengthsAndIdealJobs isActive={false} />
      </div>
      <div className="assessment-modal-footer">
        <div className="tracker lh-sm">
          {/* questions.length + 1 to include gender question */}
          <p>Question {formIndex+1} of {questions.length+1}</p>
          <div className="progress-bar">
            <div className="bar" style={{width: `${progress}%`}}>
              <span className="progression"></span>
            </div>
          </div>
        </div>
          <QuizButton number={formIndex} />
      </div>
    </>
  )
}

export default Quiz
