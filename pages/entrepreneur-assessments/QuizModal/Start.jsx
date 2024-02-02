
const Start = props => {

  if (!props.show) {
    return null;
  }

  return (
    <>
      <div className="assessment-modal-body">
        <div className="start-image mt-30">
          <img alt="background" src="assets/imgs/page/entrepreneurial-assessments/start.jpg" />
        </div>
      </div>
      <div className="d-flex justify-content-center mb-15 pt-2 pb-2">
          <button id="start-btn" type="button" className="btn btn-quiz fs-6 fw-bold" onClick={props.onStart}>
            Get Started
          </button>
      </div>
    </>
  )
}

export default Start
