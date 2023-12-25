
const Start = props => {

  if (!props.show) {
    return null;
  }

  return (
    <>
    <div className="container">
      <div className="start-header d-flex justify-content-space-between align-items-center pl-40 pr-60">
        <div className="logo col-4 pt-10">
          <img alt="logo" src="assets/imgs/page/entrepreneurial-assessments/logo.png" />
        </div>
        <div className="assessment-title col-12 mt-10">
          <h3>{props.assessment.replace("-"," ")} Assessment</h3>
        </div>
      </div>
      <div className="content">
        <div className="start-image mb-10 mt-20">
          <img alt="background" src="assets/imgs/page/entrepreneurial-assessments/start.jpg" />
        </div>
        <div className="start-button-container d-flex justify-content-center mb-10">
          <button id="start-btn" type="button" className="btn btn-quiz" onClick={props.onStart}>
            Get Started
          </button>
        </div>
      </div>
      </div>
    </>
  )
}

export default Start
