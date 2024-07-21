import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Onboarding.css';
import { FormDataContext } from './FormDataContext';

export const Onboarding20 = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormDataContext);
  const [communityService, setCommunityService] = useState(
    formData.communityService || ''
  );

  const handleInputChange = (e) => {
    setCommunityService(e.target.value);
  };

  const handleContinue = () => {
    setFormData({ ...formData, communityService });
    navigate('/onboarding21');
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
        <div className="progress" style={{ width: '100%' }}></div> {/* Example width */}
      </div>

      <p className="section-title">~ Extracurricular activities</p>
      <h2>Any volunteer or community service? (optional)</h2>

      <textarea
        className="input-field"
        placeholder="Enter details here"
        value={communityService}
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
