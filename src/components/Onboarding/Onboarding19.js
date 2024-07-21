import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Onboarding.css';
import { FormDataContext } from './FormDataContext';

export const Onboarding19 = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormDataContext);
  const [clubs, setClubs] = useState(formData.clubs || []);
  const [newClub, setNewClub] = useState('');

  const handleInputChange = (e) => {
    setNewClub(e.target.value);
  };

  const handleAddClub = () => {
    if (newClub.trim() !== '') { // Prevent adding empty items
      setClubs([...clubs, newClub.trim()]);
      setNewClub('');
    }
  };

  const handleRemoveClub = (index) => {
    const updatedClubs = [...clubs];
    updatedClubs.splice(index, 1); 
    setClubs(updatedClubs);
  };

  const handleContinue = () => {
    setFormData({ ...formData, clubs });
    navigate('/onboarding20');
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
        <div className="progress" style={{ width: '95%' }}></div> {/* Example width */}
      </div>

      <p className="section-title">~ Extracurricular activities</p>
      <h2>Clubs? (optional)</h2>

      <div className="addable-input-container">
        <input
          type="text"
          className="input-field"
          placeholder="E.g Drama Club"
          value={newClub}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={handleAddClub} aria-label="Add club">Add</button>
      </div>

      {/* Display added clubs */}
      <ul className="added-items-list">
        {clubs.map((club, index) => (
          <li key={index} className="added-item">
            {club}
            <button className="remove-button" onClick={() => handleRemoveClub(index)} aria-label={`Remove ${club}`}>
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
