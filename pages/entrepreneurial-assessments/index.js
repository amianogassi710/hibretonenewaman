import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout'
import QuizModal from './QuizModal/QuizModal';

function App() {
  const [open,setOpen] = useState(false)
  const [assessment,setAssessment] = useState("")

  const toggleOpen = e => {
    if (open === false) {
      // Sets the assessment to load into the modal
      setAssessment(() => e.target.value)
    }
    setOpen(!open);
  }

  return (
    <Layout>
      <div className="App d-flex justify-content-center align-items-center">
        <button onClick={toggleOpen} value="Entrepreneurial-Readiness">Entrepreneurial Readiness</button>
        <button onClick={toggleOpen} value="Personality">Personality</button>
        <button onClick={toggleOpen} value="ADHD-Screener">ADHD</button>
        <button onClick={toggleOpen} value="Dyslexia-Screener">Dyslexia</button>
        <QuizModal onClose={toggleOpen} assessment={assessment} show={open} isLoggedIn={true}/>
      </div>
    </Layout>
  );
}

export default App;
