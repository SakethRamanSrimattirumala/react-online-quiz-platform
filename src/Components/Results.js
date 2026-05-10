import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Results.css';
const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || { score: 0, total: 0 };

  return (
    <div className="results">
      <h1>Quiz Results</h1>
      <p>You scored {score} out of {total}</p>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default Results;
