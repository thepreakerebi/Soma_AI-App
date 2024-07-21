import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Onboarding.css';
import { FormDataContext } from './FormDataContext';

export const Onboarding3 = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormDataContext);
  const [firstName, setFirstName] = useState(formData.firstName || '');

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
    setFirstName(e.target.value);
  };

  const handleContinue = () => {
    if (firstName.trim()) {
      setFormData({ ...formData, firstName });
      navigate('/onboarding4');
    } else {
      alert('Please fill out the form before continuing.');
    }
  };

  return (
    <div className="onboarding-screen">
      <div className="pause-icon">{/* Pause icon */}</div>
      <div className="progress-bar">
        <div className="progress" style={{ width: '14%' }}></div>
      </div>

      <p className="section-title">~ Personal information</p>
      <h2>Your first name?</h2>

      <input
        type="text"
        className="input-field"
        placeholder="E.g. Peter"
        value={firstName}
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

