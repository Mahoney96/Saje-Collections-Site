import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  // <BrowserRouter>
  // <React.StrictMode>
    <App />,
  {/* </React.StrictMode>
  </BrowserRouter>, */}
);
document.getElementById('root')  
      
// 1. This root will be app.get("./App/HomePage/GuestUser/" 
                                                  //THEN 2. // using React-Dom-Router and axios to  http-route for correct path 
                                                     //  3. THEN the request Argument (Created by Axios, sent by Redux)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
