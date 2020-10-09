//Filename: src/pages/login/login.jsx
import React, {useState, useEffect} from "react";
import { Card, Form, Button } from "react-bootstrap";
// import JALogo from './img/JALogo.png';
import { BeatLoader } from 'react-spinners'
//import { API_URL, fetchHeaders } from "../../utils/types";
//api fetching tools once backend service set up
import { LoginContext } from "../../context/LoginContext";
//import { DashboardContext} from "../../context/DashboardContext";
// import { getToken, setToken } from "./handleToken";

import "bootstrap/dist/css/bootstrap.css";
import "./PostLogin.css";
import Dashboard from "../Dashboard/Dashboard";


const PostLogin = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const fakeAPI_URL = 'http://google.com';
    const { loginSuccess, setLoginSuccess, handleConnectWA } = React.useContext(LoginContext)

    return (
        <div className="postlogin-page">
            <Dashboard/>
        </div>
    );
};

export default PostLogin;