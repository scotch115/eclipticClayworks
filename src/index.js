import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './Pages/About';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter, Routes } from 'react-router';

const routing = (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" Component={App} />
      <Route path="/about" Component={About} />
    </Routes>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  routing,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
