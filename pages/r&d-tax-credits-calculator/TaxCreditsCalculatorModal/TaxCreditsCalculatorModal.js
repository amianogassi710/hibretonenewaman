import React, { useState, useRef, useEffect } from 'react'
import AssessmentModal from '../../../components/elements/AssessmentModal'
import Questions from './Questions'
import Result from './Result'
import Loading from '../../../components/elements/Loading'

const TaxCreditsCalculatorModal = props => {
  const [result,setResult] = useState(0)
  const [showQuestion,setShowQuestion] = useState(true)
  const [showResult, setShowResult] = useState(false)
  const [loading,setLoading] = useState(false)

  const handleSubmit = e => {
    setResult(e)
    setLoading(prevLoadValue => !prevLoadValue)
    setShowResult(prevResultValue => !prevResultValue)
  }

  const handleLoad = e => {
    setShowQuestion(prevQuestionValue => !prevQuestionValue)
    setLoading(prevLoadValue => !prevLoadValue)
  }

  const handleRetake = e => {
    setShowResult(prevResultValue => !prevResultValue)
    setShowQuestion(prevQuestionValue => !prevQuestionValue)
  }

  const LoadingScreen = ({isLoading}) => {
    if (isLoading) {
      return <Loading />
    }
  }

  const handleClose = () => {
    setShowResult(false)
    setLoading(false)
    setShowQuestion(true)
    props.onClose()
  }

  return (
    <AssessmentModal isOpen={props.show} onClose={handleClose} header={"R&D Tax Credits Calculator"} uizardHTML={"<p>Hello there!</p>"}>
      <Questions onClose={handleClose} show={showQuestion} onSubmit={handleSubmit} onLoad={handleLoad} />
      <LoadingScreen onClose={handleClose} isLoading={loading} />
      <Result onClose={handleClose} result={result} show={showResult} onRetake={handleRetake} />
    </AssessmentModal>
  )
}

export default TaxCreditsCalculatorModal
