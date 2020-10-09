//Filename: src/pages/login/login.jsx
import React, {useState, useEffect} from "react";

import { Button } from "react-bootstrap";
import JALogo from './img/JALogo.png';

import "bootstrap/dist/css/bootstrap.css";
import "./Login.css";
import axios from "axios"
import { useHistory } from "react-router-dom";
import { setToken } from "./handleToken";


const Login = props => {
	let history = useHistory();
	const [isLoading, setIsLoading] = useState(false);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [loginSuccess, setLoginSuccess] = useState(false);
	const handleLoginKeyPress = (event) => {
		if(event.key === 'Enter'){
			login()
		}
	}
		const login = async () => {
        setIsLoading(true)
		
		const endPoint = '/login';
		const userData = {
			email: username,
			password: password
		};

		
		try {
			const result = await axios.post(endPoint, userData);
			if (result.data.token){
			const clientToken = result.data.token;
			setToken(clientToken);
			setLoginSuccess(true);
			history.push("/");
			}
		} catch (error) {
			console.error (error)
		}
		setIsLoading(false)      
	};

	return (
		<div className="login-page" onKeyPress={handleLoginKeyPress}>
			<div className="login-div card">
				<div src={JALogo} className="login-logo card-img-top"/>
				<div class="card-body">
				<div className="login-title card-titel">Sign In</div>
				<div className="login-prompt card-text">Username</div>
				<input type="text" className="login-form" onChange={e => setUsername(e.target.value)} name="username"></input>
				<div className="login-prompt card-text">Password</div>
				<input type="password" className="login-form" onChange={e => setPassword(e.target.value)} name="password"></input>
				
				<Button type="submit" className="login-button" onClick={login}>
					Submit
				</Button>

				{/* <div className="loader">
					<BeatLoader 
						loading={isLoading} 
						color='rgb(3, 67, 110)'
						size='18'                     
					/>
				</div> */}
				<div className="login-forget-password card-text">Forget Password</div>
				<div className="login-sign-up card-text">Sign Up</div>
				</div>
			</div>
		</div>
	);
};

export default Login;