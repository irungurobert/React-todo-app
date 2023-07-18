import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import  'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
// import Counters from './Components/counters';
// import Naming from './Components/naming';
// import Likes from './Components/likes';
// import Form from './Components/form';
//import App from './App';
import Checkbox from './Components/check';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
