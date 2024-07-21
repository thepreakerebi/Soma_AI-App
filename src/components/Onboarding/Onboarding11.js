import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Onboarding.css';
import { FormDataContext } from './FormDataContext';

export const Onboarding11 = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormDataContext);
  const [highSchoolName, setHighSchoolName] = useState(formData.highSchoolName || '');

  useEffect(() => {
    const storedFormData = localStorage.getItem('formData');
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, [setFormData]);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleInputChange = (e) => {
    setHighSchoolName(e.target.value);
  };

  const handleContinue = () => {
    if (highSchoolName.trim()) {
      setFormData({ ...formData, highSchoolName });
      navigate('/onboarding12');
    } else {
      alert("Please fill out the form before continuing.");
    }
  };

  return (
    <div className="onboarding-screen">
      <div className="pause-icon">{/* Pause icon */}</div>
      <div className="progress-bar">{/* Progress bar (optional) */}</div>

      <p className="section-title">~ Educational background</p>
      <h2>Name of high school?</h2>

      <input
        type="text"
        className="input-field"
        placeholder="Enter high school name"
        value={highSchoolName}
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
