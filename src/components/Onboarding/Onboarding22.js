import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Onboarding.css';
import { FormDataContext } from './FormDataContext';

export const Onboarding22 = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormDataContext);
  const [awards, setAwards] = useState(formData.awards || []);
  const [newAward, setNewAward] = useState('');

  const handleInputChange = (e) => {
    setNewAward(e.target.value);
  };

  const handleAddAward = () => {
    if (newAward.trim() !== '') { // Ensure that the input is not empty
      setAwards([...awards, newAward]);
      setNewAward('');
    }
  };

  const handleRemoveAward = (index) => {
    const updatedAwards = [...awards];
    updatedAwards.splice(index, 1); // Remove the specific award by index
    setAwards(updatedAwards);
  };

  const handleContinue = () => {
    setFormData({ ...formData, awards });
    navigate('/onboarding23'); // Proceed to the next onboarding step
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
        <div className="progress" style={{ width: '100%' }}></div> {/* Adjust width as necessary */}
      </div>

      <p className="section-title">~ Achievements</p>
      <h2>Awards and honors? (optional)</h2>

      <div className="addable-input-container">
        <input
          type="text"
          className="input-field"
          placeholder="E.g. National Science Award"
          value={newAward}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={handleAddAward}>Add</button>
      </div>

      {/* Display added awards */}
      <ul className="added-items-list">
        {awards.map((award, index) => (
          <li key={index}>
            {award}
            <button className="remove-button" onClick={() => handleRemoveAward(index)}>
              ×
            </button>
          </li>
        ))}
      </ul>

      <button className="continue-button" onClick={handleContinue}>
        Continue
      </button>
      <button className="later-button" onClick={() => navigate('/home')}>
        I will do this later
      </button>
    </div>
  );
};
