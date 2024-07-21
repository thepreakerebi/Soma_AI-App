import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Onboarding.css';
import { FormDataContext } from './FormDataContext';

export const Onboarding21 = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormDataContext);
  const [leadershipRoles, setLeadershipRoles] = useState(formData.leadershipRoles || []);
  const [newRole, setNewRole] = useState('');

  const handleInputChange = (e) => {
    setNewRole(e.target.value);
  };

  const handleAddRole = () => {
    if (newRole.trim() !== '') {
      setLeadershipRoles([...leadershipRoles, newRole]);
      setNewRole('');
    }
  };

  const handleRemoveRole = (index) => {
    const updatedRoles = [...leadershipRoles];
    updatedRoles.splice(index, 1);
    setLeadershipRoles(updatedRoles);
  };

  const handleContinue = () => {
    setFormData({ ...formData, leadershipRoles });
    navigate('/onboarding22');
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
      <h2>Leadership roles? (optional)</h2>

      <div className="addable-input-container">
        <input
          type="text"
          className="input-field"
          placeholder="E.g President of the Student Council"
          value={newRole}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={handleAddRole}>Add</button>
      </div>

      {/* Display added leadership roles */}
      <ul className="added-items-list">
        {leadershipRoles.map((role, index) => (
          <li key={index}>
            {role}
            <button className="remove-button" onClick={() => handleRemoveRole(index)}>
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

