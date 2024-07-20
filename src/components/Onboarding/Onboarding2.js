import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Onboarding.css';
import { AiOutlineBell } from 'react-icons/ai';

export const Onboarding2 = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/nextstep');
  };

  const handleLater = () => {
    navigate('/home');
  };

  return (
    <div className="onboarding-screen onboarding2">
      <div className="onboarding-container">
        <div className="bell-icon">
          <AiOutlineBell size={30} color="#303f9f" />
        </div>
        <h1 className="welcome-text">Account successfully created,</h1>
        <p className="description">
          Now to get your profile fully set up, you'll need to provide the
          following details:
        </p>
        <ul className="details-list">
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
