import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Component(props) {
  let message;

  if (props.isLoggedIn) {
    message = 'Welcome back!';
  } else {
    message = 'Please sign in.';
  }

  return <h1>{message}</h1>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<Component />);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
