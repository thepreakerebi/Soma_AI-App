import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 

import { GoogleOAuthProvider } from '@react-oauth/google';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="630056606819-bmb2vu3tq9oh5149ejp4c9cvgtdgdoe1.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
