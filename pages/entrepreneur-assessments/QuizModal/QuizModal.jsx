import React, { useEffect, useState } from 'react';
import AssessmentModal from '../../../components/elements/AssessmentModal';
import Quiz from './Quiz';
import Start from './Start';
import Score from './Score';
import Loading from '../../../components/elements/Loading';

const QuizModal = props => {
  const [startOpen,setStartOpen] = useState(true)
  const [quizOpen,setQuizOpen] = useState(false)
  const [scoreOpen,setScoreOpen] = useState(false)
  const [feedback,setFeedback] = useState({})
  const [loading, setLoading] = useState(false)

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
    setLoading(prevLoading => !prevLoading)
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

  const handleLoading = (e) => {
    setQuizOpen(prevQuizOpen => !prevQuizOpen)
    setLoading(prevLoading => !prevLoading)
  }

  const LoadingScreen = ({isLoading}) => {
    if (isLoading) {
      return <Loading />
    } else {
      return null
    }
  }


  return (
    <AssessmentModal isOpen={props.show} onClose={handleCloseModal} header={`${props.title}`} uizardHTML={props.uizard}>
        <Start onClose={handleCloseModal} assessment={props.assessment} onStart={handleStartQuiz} show={startOpen} />
        <Quiz onClose={handleCloseModal} assessment={props.assessment} title={`${props.title}`} onSubmit={handleSubmitQuiz} show={quizOpen} isLoggedIn={props.isLoggedIn} onLoad={handleLoading} />
        <LoadingScreen isLoading={loading} />
        <Score onClose={handleCloseModal} assessment={props.title} onRetake={handleRetake} header={`${props.title}`} show={scoreOpen} feedback={feedback} />
    </AssessmentModal>
  );
};

export default QuizModal;
