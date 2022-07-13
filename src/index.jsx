import React from 'react';  
// Using React 18 uses the ReactDomClient for createRoot
import * as ReactDOMClient from 'react-dom/client';
import App from './components/main/App'
import './styles/main.scss'

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

