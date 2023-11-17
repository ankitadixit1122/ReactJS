import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyApp from './App';
import reportWebVitals from './reportWebVitals';
import MyClassComponent from './components/MyClassComponent';
import Counter from './components/Counter';
import CalculateSavings from './components/CalculateSavings';
import CalculateSavingUsingClass from './components/CalculateSavingUsingClass';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyApp/>
    {/* <CalculateSavings/> */}
    {/* <CalculateSavingUsingClass/> */}
    
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


reportWebVitals();
