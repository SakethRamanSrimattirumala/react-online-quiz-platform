import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz.css';
const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/questions.json')
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error('Error loading JSON:', error));
  }, []);

  if (questions.length === 0) return <div>Loading...</div>;

  const handleAnswer = () => {
    if (selectedAnswer === questions[currentQuestion].answer) {
        setScore(score + 1);
    }
    const nextQ = currentQuestion + 1;
    if (nextQ < questions.length) {
      setCurrentQuestion(nextQ);
      setSelectedAnswer('');
    } else {
      setTimeout(() => {
        navigate('/results', { state: { score: score + (selectedAnswer === questions[currentQuestion].answer ? 1 : 0), total: questions.length } });
      }, 0);
    }
  };

  // return (
  //   <div className="quiz">
  //     <h2>{questions[currentQuestion].question}</h2>
  //     {questions[currentQuestion].options.map((option, index) => (
  //       <button
  //         key={index}
  //         onClick={() => setSelectedAnswer(option)}
  //         className={selectedAnswer === option ? 'selected' : ''}
  //       >
  //         {option}
  //       </button>
  //     ))}
  //     <div>
  //       <button onClick={handleAnswer}>Next</button>
  //     </div>
  //   </div>
  // );
  return (
    <div className="quiz">
      <div className="quiz-content">
        {/* Display the question */}
        <h2 className="quiz-question">{questions[currentQuestion].question}</h2>
  
        {/* Display the answers */}
        <div className="quiz-options">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedAnswer(option)}
              className={`quiz-option ${selectedAnswer === option ? 'selected' : ''}`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
  
      {/* Navigation button */}
      <div className="quiz-navigation">
        <button onClick={handleAnswer} className="next-button">
          Next
        </button>
      </div>
    </div>
  );
};
export default Quiz;