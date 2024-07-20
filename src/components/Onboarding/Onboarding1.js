import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import './Onboarding.css';

export const Onboarding1 = () => {
  const navigate = useNavigate();

  const handleGoogleSuccess = (credentialResponse) => {
    console.log("Google login success:", credentialResponse);
    // After successful authentication, navigate (e.g., to '/home')
    navigate('/home');
  };

  const handleGoogleFailure = (error) => {
    console.log("Google login failure:", error);
  };

  return (
    <div className="onboarding-screen onboarding1"> 
      <div className="onboarding-container">
        <div className="pause-icon">{/* You can add a pause icon here */}</div>
        <h1>Welcome to Soma.</h1>
        <p>Your AI scholarship application assistant where you can find
          personalized scholarship matches, AI-powered essay and
          document help, and stay organized with deadline reminders.
        </p>

        {/* Sign Up Button (Top) */}
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleFailure}
          buttonText="Sign up with Google"
          className="google-button signup-button"
        />

        <p className="account-text">Already have an account? Then</p>

        {/* Sign In Button (Bottom) */}
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
