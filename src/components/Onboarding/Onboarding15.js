import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Onboarding.css';
import { FormDataContext } from './FormDataContext';

export const Onboarding15 = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormDataContext);
  const [graduationDate, setGraduationDate] = useState(formData.graduationDate || '');

  const handleInputChange = (e) => {
    setGraduationDate(e.target.value);
  };

  const handleContinue = () => {
    setFormData({ ...formData, graduationDate });
    navigate('/onboarding16'); // Ensure this route is configured correctly
  };

  useEffect(() => {
    const storedFormData = localStorage.getItem('formData');
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, [setFormData]);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  return (
    <div className="onboarding-screen">
      <div className="pause-icon">{/* Pause icon */}</div>
      <div className="progress-bar">
        <div className="progress"></div>
      </div>

      <p className="section-title">~ Educational background</p>
      <h2>Your expected graduation date?</h2>

      <input
        type="date" // Changed to date input for better UX
        className="input-field"
        value={graduationDate}
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
