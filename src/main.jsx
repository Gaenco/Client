import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router } from 'react-router-dom'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Auth0Provider  domain="dev-ygk2l0dg27spfjze.us.auth0.com"
    clientId="4d6AFCSh2c3ynAZHu0HdbGA4btPbuhh1"
    redirectUri={window.location.origin}>
  <Router>
        <App />
  </Router>
  </Auth0Provider>
  </React.StrictMode>
);

