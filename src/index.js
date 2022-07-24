import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContextProvider } from './context/ContextProvider';
import { registerLicense } from '@syncfusion/ej2-base';

fetch("http://localhost:4500/syncapi")
.then(
      res=>res.json()
    )
.then(
      json=>{
        registerLicense(json.key+"")
      console.log(typeof(json.key));
      }
    );



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ContextProvider>
    <App />
  </ContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
