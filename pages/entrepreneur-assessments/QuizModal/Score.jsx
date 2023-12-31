import Swal from "sweetalert2";
import StrengthsAndIdealJobs from "./StrengthsAndIdealJobs.jsx";
import { IoCloseOutline  } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io"

const Score = props => {

  if (!props.show) {
    return null;
  }

  const handleEnquiries = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Enquiries",
      html: `
      <div>
        <input id="name" class="swal2-input" placeholder="Full Name">
        <input id="email" class="swal2-input" placeholder="Email">
        <input id="phone-number" class="swal2-input" placeholder="Phone Number">
        <select id="category" class="swal2-input">
          <option>Example1</option>
          <option>Example2</option>
          <option>Example3</option>
        </select>
        <textarea id="enquiry" class="swal2-textarea" placeholder="Enter Text" height=100></textarea><br/>
        <input id="data-privacy" type="checkbox" class="swal2-input-checkbox"/> I agree to share my data with 3rd party services
      </div>
      `,
      focusConfirm: false,
      confirmButtonText: "Send",
      confirmButtonColor: "#387A6E",
      showCloseButton: true,
      preConfirm: () => {
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const phoneNumber = document.getElementById("phone-number").value
        const enquiry = document.getElementById("enquiry").value
        if (!name | !email | !phoneNumber | !enquiry) {
          Swal.showValidationMessage('<i class="fa fa-info-circle"></i> Please complete all fields')
        }
        return [
          name,
          email,
          phoneNumber,
          enquiry,
        ];
      }
    });
    if (formValues) {
      Swal.fire(JSON.stringify(formValues));
    }
  }

  const handlePersonalityEnquiry = e => {
    let heading = e.target.dataset.value
    Swal.fire({
      title: heading,
      text: "Example text",
      showCloseButton: true,
      confirmButtonText: "Close",
      confirmButtonColor: "#046893"
    });
  }

  const Feedback = () => {
    if (props.assessment === "Entrepreneurial-Readiness") {
      const feedback = props.feedback.feedback
      let j = 0
      return (
        <>
          <div className="feedback-content">
            <div className="suggestion">
              <h4>
              {feedback["header"]}
              </h4>
            </div>
            <div className="feedback">
              <p>Follow these recommendations, then retake the assessment.</p>
              <ul>
                {feedback["recommendations"].map((recommendation) => (
                  <li key={j += 1}>{recommendation}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )
    } else if (props.assessment === "Personality") {
      const feedback = props.feedback
      return (
        <div className="feedback-content">
          {Object.entries(feedback).map(([category,result]) => {
            const trait = category.split("_").map(word => word[0].toUpperCase() + word.substring(1)).join(" ")
            return (
            <div className={`${category}`} key={`${category}`}>
              <div className="personality">
                <p><strong>{trait}</strong>
                <i
                  data-value={trait}
                  onClick={handlePersonalityEnquiry}
                  >
                    <IoIosInformationCircleOutline data-value={trait} size={25}/>
                  </i>
                </p>
                <div className="result">
                  <div className="result-bar">
                    <div className="bar" style={{width: `${result}`}}>
                      <span className="progression"></span>
                    </div>
                  </div>
                  {result}
                </div>
              </div>
            </div>
          )})}
        </div>
      )
    } else if (props.assessment === "ADHD-Screener" || props.assessment === "Dyslexia-Screener") {
      const feedback = props.feedback.feedback
      let j = 0
      return (
        <>
          <div className="feedback-content">
            <h4>{feedback["result"]}</h4>
            <div className="suggestion">
              <h5>
              {feedback["header"].split("<br />").map((text) => (
                <p key={j += 1}>{text}</p>
              ))}
              </h5>
            </div>
            <div className="feedback">
              <p>Next step:</p>
              <ul>
                {feedback["recommendations"].map((recommendation) => (
                  <li key={j += 1}>{recommendation}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )
    }
  }

  return (
    <>

        <div className="content p-20">
          <h3 className="score">Your Results:  {props.feedback.score}</h3>

          <h4 className="thank-you">
            Thank you for completing the {props.title} Assessment!
          </h4>

          <Feedback />

        </div>
        <div className="icons d-flex justify-content-center">
          <StrengthsAndIdealJobs isActive={true} />
        </div>
        <div className="footer pb-20">
          <div className="button-group d-flex justify-content-center">
            <button id="retake-btn" type="button" className="btn btn-quiz mx-1" onClick={props.onRetake}>Retake Assessment</button>
            <button type="button" id="subscribe-button" className="btn btn-quiz mx-1" onClick={handleEnquiries}>
              Need Specialist Help
            </button>
            <button className="btn btn-quiz mx-1" onClick={props.onClose}>Close</button>
          </div>
        </div>
    </>
  )
}

export default Score
