import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import './Onboarding.css';

export const Onboarding1 = () => {
  const navigate = useNavigate();

  const handleGoogleSuccess = (credentialResponse) => {
    console.log("Google login success:", credentialResponse);
    navigate('/home');
  };

  const handleGoogleFailure = (error) => {
    console.log("Google login failure:", error);
  };

  return (
    <div className="onboarding-screen onboarding1"> 
      <div className="onboarding-container">
        <div className="pause-icon">{/* You can add a pause icon here */}</div>
        <h1 className="welcome-text">Welcome to Soma.</h1>
        <h3 className="description">Your AI scholarship application assistant where you can find
          personalized scholarship matches, AI-powered essay and
          document help, and stay organized with deadline reminders.
        </h3>

        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleFailure}
          buttonText="Sign up with Google"
          className="google-button signup-button"
        />
        
        <p className="account-text">Already have an account? Then</p>

        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleFailure}
          buttonText="Sign in with Google"
          className="google-button login-button"
        />
      </div>
    </div>
  );
};
