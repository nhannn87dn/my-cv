import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppContext } from './AppContext';
import app_data from "./Config";
const root = ReactDOM.createRoot(document.getElementById('root'));
const data = app_data[0];

root.render(
  <React.StrictMode>
    <AppContext.Provider value={data}>
    <App />
    </AppContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
