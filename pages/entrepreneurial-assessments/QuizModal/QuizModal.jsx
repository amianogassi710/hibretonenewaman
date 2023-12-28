import React, { useEffect, useState } from 'react';
import AssessmentModal from '../../../components/elements/AssessmentModal';
import Quiz from './Quiz';
import Start from './Start';
import Score from './Score';
import Questions from '../Questions.json'

const QuizModal = props => {
  const [startOpen,setStartOpen] = useState(true)
  const [quizOpen,setQuizOpen] = useState(false)
  const [scoreOpen,setScoreOpen] = useState(false)
  const [feedback,setFeedback] = useState({})
  const assessment = Questions[`${props.assessment}`]

  const closeOnEscape = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      handleCloseModal()
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscape)
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscape)
    }
  },[closeOnEscape])

  const handleStartQuiz = (e) => {
    setStartOpen(prevStartOpen => !prevStartOpen);
    setQuizOpen(prevQuizOpen => !prevQuizOpen);
  }

  const handleSubmitQuiz = (e) => {
    setFeedback(e)
    setQuizOpen(prevQuizOpen => !prevQuizOpen);
    setScoreOpen(prevScoreOpen => !prevScoreOpen)
  }

  const handleCloseModal = (e) => {

    props.onClose()
    setQuizOpen(false)
    setScoreOpen(false)
    setStartOpen(true)
  }

  const handleRetake = (e) => {
    setScoreOpen(false)
    setQuizOpen(true)
  }


  return (
    <AssessmentModal isOpen={props.show} onClose={handleCloseModal} header={`${props.assessment}`} uizardHTML="Hello There!">
        <Start onClose={handleCloseModal} assessment={props.assessment} onStart={handleStartQuiz} show={startOpen} />
        <Quiz onClose={handleCloseModal} assessment={props.assessment} onSubmit={handleSubmitQuiz} show={quizOpen} isLoggedIn={props.isLoggedIn} />
        <Score onClose={handleCloseModal} assessment={props.assessment} onRetake={handleRetake} show={scoreOpen} feedback={feedback} />
    </AssessmentModal>
  );
};

export default QuizModal;
