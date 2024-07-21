import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'; 
import { FormDataProvider } from './components/Onboarding/FormDataContext';
import { SplashScreen } from './components/SplashScreen';
import { Onboarding1 } from './components/Onboarding/Onboarding1';
import { Onboarding2 } from './components/Onboarding/Onboarding2';
import {Onboarding3} from './components/Onboarding/Onboarding3';
import {Onboarding4} from './components/Onboarding/Onboarding4';
import {Onboarding5} from './components/Onboarding/Onboarding5';
import {Onboarding6} from './components/Onboarding/Onboarding6';
import {Onboarding7} from './components/Onboarding/Onboarding7';
import {Onboarding8} from './components/Onboarding/Onboarding8';
import {Onboarding9} from './components/Onboarding/Onboarding9';
import {Onboarding10} from './components/Onboarding/Onboarding10';
import {Onboarding11} from './components/Onboarding/Onboarding11';
import {Onboarding12} from './components/Onboarding/Onboarding12';
import {Onboarding13} from './components/Onboarding/Onboarding13';
import {Onboarding14} from './components/Onboarding/Onboarding14';
import {Onboarding15} from './components/Onboarding/Onboarding15';
import {Onboarding16} from './components/Onboarding/Onboarding16';
import {Onboarding17} from './components/Onboarding/Onboarding17';
import {Onboarding18} from './components/Onboarding/Onboarding18';
import {Onboarding19} from './components/Onboarding/Onboarding19';
import {Onboarding20} from './components/Onboarding/Onboarding20';
import {Onboarding21} from './components/Onboarding/Onboarding21';
import {Onboarding22} from './components/Onboarding/Onboarding22';
import {Onboarding23} from './components/Onboarding/Onboarding23';
import {Onboarding24} from './components/Onboarding/Onboarding24';
import {Onboarding25} from './components/Onboarding/Onboarding25';
import './App.css'; // Import your CSS

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
      <BrowserRouter>
        {showSplash ? (
          <SplashScreen /> // Show SplashScreen if state is true
        ) : (
          <FormDataProvider> 
            <Routes>
              <Route path="/" element={<Onboarding1 />} />
              <Route path="/onboarding1" element={<Onboarding1 />} />
              <Route path="/onboarding2" element={<Onboarding2 />} />
              <Route path="/onboarding3" element={<Onboarding3 />} />
              <Route path="/onboarding4" element={<Onboarding4 />} />
              <Route path="/onboarding5" element={<Onboarding5 />} />
              <Route path="/onboarding6" element={<Onboarding6 />} />
              <Route path="/onboarding7" element={<Onboarding7 />} />
              <Route path="/onboarding8" element={<Onboarding8 />} />
              <Route path="/onboarding9" element={<Onboarding9 />} />
              <Route path="/onboarding10" element={<Onboarding10 />} />
              <Route path="/onboarding11" element={<Onboarding11 />} />
              <Route path="/onboarding12" element={<Onboarding12 />} />
              <Route path="/onboarding13" element={<Onboarding13 />} />
              <Route path="/onboarding14" element={<Onboarding14 />} />
              <Route path="/onboarding15" element={<Onboarding15 />} />
              <Route path="/onboarding16" element={<Onboarding16 />} />
              <Route path="/onboarding17" element={<Onboarding17 />} />
              <Route path="/onboarding18" element={<Onboarding18 />} />
              <Route path="/onboarding19" element={<Onboarding19 />} />
              <Route path="/onboarding20" element={<Onboarding20 />} />
              <Route path="/onboarding21" element={<Onboarding21 />} />
              <Route path="/onboarding22" element={<Onboarding22 />} />
              <Route path="/onboarding23" element={<Onboarding23 />} />
              <Route path="/onboarding24" element={<Onboarding24 />} />
              <Route path="/onboarding25" element={<Onboarding25 />} />
            </Routes>
          </FormDataProvider>
        )}
      </BrowserRouter>
  );
}

export default App;