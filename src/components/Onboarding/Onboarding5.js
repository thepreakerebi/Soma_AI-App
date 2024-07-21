import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Onboarding.css';
import { FormDataContext } from './FormDataContext';


export const Onboarding5 = () => {

  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormDataContext);
  const [middleName, setMiddleName] = useState(formData.middleName || '');

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
    setMiddleName(e.target.value);
  };

  const handleContinue = () => {
    setFormData({ ...formData, middleName });
    navigate('/onboarding6');
  };

  return (
    <div className="onboarding-screen">
      <div className="pause-icon">{/* Pause icon */}</div>
      <div className="progress-bar">
        <div className="progress" style={{ width: '42%' }}></div>
      </div>

      <p className="section-title">~ Personal information</p>
      <h2>Your middle name? (optional)</h2>

      <input
        type="text"
        className="input-field"
        placeholder="E.g. Spiderman"
        value={middleName}
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
}