import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginProvider from './context/LoginContext';
import * as serviceWorker from './serviceWorker';
function Index(props){
  return (
    <>
    <LoginProvider>
      <App/>
    </LoginProvider>
  </>
  )
}
ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
