import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login/Login';
import PostLogin from './pages/PostLogin/PostLogin';
import { LoginContext } from './context/LoginContext';
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  const {loginSuccess} = useContext(LoginContext);
  return (
    <div className="App">
      {loginSuccess ? <Login /> : <PostLogin />}
    </div>
  );
}

export default App;
