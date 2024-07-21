import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Onboarding.css';
import { FormDataContext } from './FormDataContext';

export const Onboarding14 = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormDataContext);
  const [gpa, setGpa] = useState(formData.gpa || '');

  const handleInputChange = (e) => {
    setGpa(e.target.value);
  };

  const handleContinue = () => {
    setFormData({ ...formData, gpa });
    navigate('/onboarding15'); // Corrected the route
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
      <h2>Your GPA? (optional)</h2>

      <input
        type="text" // Or type="number" if only numbers are allowed
        className="input-field"
        placeholder="Enter your GPA (e.g., 3.5)"
        value={gpa}
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

