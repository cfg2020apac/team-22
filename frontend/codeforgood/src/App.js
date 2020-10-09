import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login/Login';
import { LoginContext } from './context/LoginContext';

function App() {
  const {loginSuccess} = useContext(LoginContext);
  return (
    <div className="App">
      {!loginSuccess ? 
      <Login />
    :
    <></>}
    </div>
  );
}

export default App;
