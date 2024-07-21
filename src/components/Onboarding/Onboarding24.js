import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Onboarding.css';
import { FormDataContext } from './FormDataContext';

export const Onboarding24 = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormDataContext);
  const [financialNeed, setFinancialNeed] = useState(formData.financialNeed || '');

  const handleInputChange = (e) => {
    setFinancialNeed(e.target.value);
  };

  const handleContinue = () => {
    setFormData({ ...formData, financialNeed });
    navigate('/onboarding25'); 
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

      <p className="section-title">~ Financial information</p>
      <h2>Financial need status?</h2>

      <div>
        <label>
          <input
            type="radio"
            value="Requires full need-based aid"
            checked={financialNeed === 'Requires full need-based aid'}
            onChange={handleInputChange}
          />
          Requires full need-based aid
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="Requires partial need-based aid"
            checked={financialNeed === 'Requires partial need-based aid'}
            onChange={handleInputChange}
          />
          Requires partial need-based aid
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="No need-based aid required"
            checked={financialNeed === 'No need-based aid required'}
            onChange={handleInputChange}
          />
          No need-based aid required
        </label>
      </div>

      <button className="continue-button" onClick={handleContinue}>
        Continue
      </button>
      <button className="later-button" onClick={() => navigate('/home')}>
        I will do this later
      </button>
    </div>
  );
};
