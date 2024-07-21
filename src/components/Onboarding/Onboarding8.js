import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Onboarding.css';
import { FormDataContext } from './FormDataContext';

export const Onboarding8 = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormDataContext);
  const [phoneNumber, setPhoneNumber] = useState(formData.phoneNumber || '');

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
    setPhoneNumber(e.target.value);
  };

  const handleContinue = () => {
    setFormData({ ...formData, phoneNumber });
    navigate('/onboarding9');
  };

  return (
    <div className="onboarding-screen">
      <div className="pause-icon">{/* Pause icon */}</div>
      <div className="progress-bar">
        <div className="progress" style={{ width: '80%' }}></div>
      </div>

      <p className="section-title">~ Personal information</p>
      <h2>Your phone number? Include country code</h2>

      <input
        type="tel"
        className="input-field"
        placeholder="E.g +234 90 342 6789"
        value={phoneNumber}
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
