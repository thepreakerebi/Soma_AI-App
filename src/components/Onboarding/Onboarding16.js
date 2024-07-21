import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Onboarding.css';
import { FormDataContext } from './FormDataContext';

export const Onboarding16 = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormDataContext);
  const [intendedFieldOfStudy, setIntendedFieldOfStudy] = useState(
    formData.intendedFieldOfStudy || ''
  );

  const handleSelectChange = (e) => {
    setIntendedFieldOfStudy(e.target.value);
  };

  const handleContinue = () => {
    if (intendedFieldOfStudy) {
      setFormData({ ...formData, intendedFieldOfStudy });
      navigate('/onboarding17'); // Ensure this route is properly configured
    } else {
      alert('Please select a field of study before continuing.');
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
        <div className="progress"></div> {/* Update progress dynamically */}
      </div>

      <p className="section-title">~ Field of study</p>
      <h2>Your intended field of study?</h2>

      <select
        className="input-field"
        value={intendedFieldOfStudy}
        onChange={handleSelectChange}
      >
        <option value="">Select option</option>
        <option value="Agriculture">Agriculture</option>
        <option value="Business">Business</option>
        <option value="Engineering">Engineering</option>
        <option value="Life Sciences">Life Sciences</option>
        <option value="Medical Sciences">Medical Sciences</option>
        {/* ... Add more options as needed ... */}
      </select>

      <button className="continue-button" onClick={handleContinue}>
        Continue
      </button>
      <button className="later-button" onClick={() => navigate('/home')}>
        I will do this later
      </button>
    </div>
  );
};
