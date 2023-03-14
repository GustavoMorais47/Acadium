import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './contexts/Auth/AuthProvider';
import ScreeenProvider from './contexts/ScreenSize/ScreenProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ScreeenProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ScreeenProvider>
    </AuthProvider>
  </React.StrictMode>
);