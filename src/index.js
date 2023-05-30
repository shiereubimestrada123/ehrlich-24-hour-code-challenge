import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from "@auth0/auth0-react";

import App from './App.jsx'
import './index.css';

const domain = process.env.REACT_APP_auth0_domain;
const clientId = process.env.REACT_APP_auth0_client_id;

const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        onRedirectCallback={onRedirectCallback}
        authorizationParams={{
          redirect_uri: "http://localhost:3000/home"
        }}
      >
        <BrowserRouter>
        <App />
        </BrowserRouter>
      </Auth0Provider>
    
  </React.StrictMode>
);
