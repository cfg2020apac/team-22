import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login/Login';
import PostLogin from './pages/PostLogin/PostLogin';
import Dashboard from "./pages/Dashboard/Dashboard";
import { getToken } from 'pages/Login/handleToken';

function App() {
  return (
    <div className="App">
      {getToken ? <Login /> : <PostLogin />}
    </div>
  );
}

export default App;
