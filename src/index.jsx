import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './context';
import  ErrorBoundary  from './components/ErrorBoundary';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);
