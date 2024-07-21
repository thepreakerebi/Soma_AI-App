import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Onboarding.css';
import { FormDataContext } from './FormDataContext';

export const Onboarding17 = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormDataContext);
  const [degreeType, setDegreeType] = useState(formData.degreeType || '');

  const handleInputChange = (e) => {
    setDegreeType(e.target.value);
  };

  const handleContinue = () => {
    if (degreeType) {
      setFormData({ ...formData, degreeType });
      navigate('/onboarding18');
    } else {
      alert('Please select a degree type before continuing.');
    }
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
        <div className="progress" style={{ width: '85%' }}></div> {/* Example width */}
      </div>

      <p className="section-title">~ Field of study</p>
      <h2>Your preferred degree type?</h2>

      <div className="radio-group">
        <label>
          <input
            type="radio"
            value="Bachelors"
            checked={degreeType === 'Bachelors'}
            onChange={handleInputChange}
          />
          Bachelors
        </label>
      </div>
      <div className="radio-group">
        <label>
          <input
            type="radio"
            value="Masters"
            checked={degreeType === 'Masters'}
            onChange={handleInputChange}
          />
          Masters
        </label>
      </div>
      <div className="radio-group">
        <label>
          <input
            type="radio"
            value="PhD"
            checked={degreeType === 'PhD'}
            onChange={handleInputChange}
          />
          PhD
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
