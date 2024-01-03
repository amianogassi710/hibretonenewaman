import React from 'react'

const Result = props => {

  if (!props.show) {
      return null;
  }

  return (
    <div className="assessment-modal-body text-center p-5">
      <div className="calculator-results">
        <h4>Result: £{props.result.toFixed(2)}</h4><br />
        <button className="btn btn-default fs-5 mx-auto" onClick={props.onRetake}>Retake</button>
      </div>
    </div>
  )
}

export default Result
