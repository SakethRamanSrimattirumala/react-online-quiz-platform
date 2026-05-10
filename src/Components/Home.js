import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home" >
      <h3>Welcome to the HU22CSEN0101177 online quiz platform. </h3>
      <h3> The exam is on Web Development.</h3>
      <h3> Click the button below to start the quiz.</h3>
      <h3>Good luck!</h3>
      <br/>
      <br/>
      <button onClick={() => navigate('/Quiz')}>Start the quiz</button>
    </div>
  );
};

export default Home;