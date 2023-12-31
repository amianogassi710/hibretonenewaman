
const Start = props => {

  if (!props.show) {
    return null;
  }

  return (
    <>
    <div className="container">
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
