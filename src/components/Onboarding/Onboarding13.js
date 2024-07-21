import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Onboarding.css';
import { FormDataContext } from './FormDataContext';

export const Onboarding13 = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormDataContext);
  const [courseOfStudy, setCourseOfStudy] = useState(formData.courseOfStudy || '');

  const handleInputChange = (e) => {
    setCourseOfStudy(e.target.value);
  };

  const handleContinue = () => {
    setFormData({ ...formData, courseOfStudy });
    // Log the complete form data for debugging
    console.log('Form Data:', { ...formData, courseOfStudy });
    navigate('/onboarding14'); // Navigate to a success or summary page
  };

  return (
    <div className="onboarding-screen">
      <div className="pause-icon">{/* Pause icon */}</div>
      <div className="progress-bar">{/* Progress bar (optional) */}</div>

      <p className="section-title">~ Educational background</p>
      <h2>Your current course of study? (optional)</h2>

      <input
        type="text"
        className="input-field"
        placeholder="Enter course of study"
        value={courseOfStudy}
        onChange={handleInputChange}
      />

      <button className="continue-button" onClick={handleContinue}>
        Continue
      </button>
      <button className="later-button" onClick={() => navigate('/home')}>
        I will do this later
      </button>
    </div>
  );
};

