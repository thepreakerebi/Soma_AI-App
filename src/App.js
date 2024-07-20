import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'; 
import { GoogleOAuthProvider } from '@react-oauth/google';
import { SplashScreen } from './components/SplashScreen';
import { Onboarding1 } from './components/Onboarding/Onboarding1';
import { Onboarding2 } from './components/Onboarding/Onboarding2';
import './App.css'; // Import your CSS

// Your Google Client ID
const clientId = '';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Show the SplashScreen for 2 seconds
    if (showSplash) {
      const timer = setTimeout(() => {
        setShowSplash(false); // Hide the SplashScreen after 2 seconds
      }, 2000); // 2000 milliseconds = 2 seconds

      return () => clearTimeout(timer); // Clean up the timer
    }
  }, [showSplash]);

  const handleGoogleLogin = (response) => {
    console.log('Google login success:', response);
    // After successful authentication, show the SplashScreen
    setShowSplash(true);
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <BrowserRouter>
        {showSplash ? (
          <SplashScreen /> // Show SplashScreen if state is true
        ) : (
          <Routes>
            <Route path="/" element={<Onboarding1 />} />
            <Route path="/onboarding1" element={<Onboarding1 />} />
            <Route path="/onboarding2" element={<Onboarding2 />} />
          </Routes>
        )}
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;