import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout'
import QuizModal from './QuizModal/QuizModal';
import axios from 'axios';
import Loading from '../../components/elements/Loading';

function App() {
  const [open,setOpen] = useState(false)
  const [assessment,setAssessment] = useState("")
  const [data,setData] = useState({})
  const [uizard, setUizard] = useState("")

  useEffect(() => {
    const getQuiz = async () => {
      try {
        const response = await axios.get(`/assessments/get_assessments`)
        setData(response.data)
      } catch (error) {
        console.log("Couldn't retrieve quiz: ", error);
      }
    };
    getQuiz();
  },[])

  const toggleOpen = e => {
    if (open === false) {
      // Sets the assessment to load into the modal
      setAssessment(() => e.target.value)
      setUizard(data[`${e.target.value}`].uizard)
    }
    setOpen(!open);
  }

  // Render nothing if data is not available yet
  if (Object.keys(data).length === 0) {
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="App d-flex justify-content-center align-items-center">
        <button onClick={toggleOpen} value="Entrepreneurial-Readiness">Entrepreneurial Readiness</button>
        <button onClick={toggleOpen} value="Personality">Personality</button>
        <button onClick={toggleOpen} value="ADHD-Screener">ADHD</button>
        <button onClick={toggleOpen} value="Dyslexia-Screener">Dyslexia</button>
        <QuizModal onClose={toggleOpen} title={`${assessment}`} assessment={data[`${assessment}`]} uizard={uizard} show={open} isLoggedIn={true}/>
      </div>
    </Layout>
  );
}

export default App;
