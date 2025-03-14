import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Component(props) {
  return (
    <h1>
      {props.isLoggedIn ? 'Welcome back!' : 'Please sign in.'}
    </h1>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Component isLoggedIn={true} />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
