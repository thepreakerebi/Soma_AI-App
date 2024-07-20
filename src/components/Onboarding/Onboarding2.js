import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Onboarding.css';
import { AiOutlineBell } from 'react-icons/ai'; 

export const Onboarding2 = () => { // Using "export const"
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/nextstep'); // Replace with your actual route
  };

  const handleLater = () => {
    navigate('/home');  // Replace with your actual route
  };

  return (
    <div className="onboarding-screen onboarding2">
      <div className="content">
        <div className="bell-icon">
          <AiOutlineBell size={30} color="#303f9f" />
        </div>
        <h1>Account successfully created,</h1>
        <p>
          Now to get your profile fully set up, you'll need to provide the
          following details:
        </p>
        <ul>
          <li>Personal information</li>
          <li>Educational background</li>
          <li>Field of study</li>
          <li>Extracurricular activities</li>
          <li>Financial information</li>
        </ul>

        <button className="continue-button" onClick={handleContinue}>
          Continue
        </button>

        <button className="later-button" onClick={handleLater}>
          I will do this later
        </button>
      </div>
    </div>
  );
};