//Filename: src/pages/login/login.jsx
import React, {useState, useEffect} from "react";
import { Card, Form, Button } from "react-bootstrap";
import JALogo from './img/JALogo.png';
import { BeatLoader } from 'react-spinners'
//import { API_URL, fetchHeaders } from "../../utils/types";
//api fetching tools once backend service set up
import { LoginContext } from "../../context/LoginContext";
//import { DashboardContext} from "../../context/DashboardContext";
import { getToken, setToken } from "./handleToken";

import "bootstrap/dist/css/bootstrap.css";
import "./Login.css";


const Login = props => {
	const [isLoading, setIsLoading] = useState(false);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const { loginSuccess, setLoginSuccess, handleConnectWA } = React.useContext(LoginContext)
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
			const result = await axios.post(endpoint, userData);
			const clientToken = JSON.parse(result).response;
			setToken(clientToken);
			setLoginSuccess(true);
		} catch (error) {
			console.log (error)
			const jsonError = JSON.parse(error)
			alertCentral.error (jsonError.error || error)
		}
		setIsLoading(false)      
		setLoginSuccess(true)
	};

	return (
		<div className="login-page" onKeyPress={handleLoginKeyPress}>
			<Card className="login-card">
				<Card.Img src={JALogo} className="login-logo"/>
				<Card.Title className="login-title">Sign In</Card.Title>
				<Card.Text className="login-prompt">Username</Card.Text>
				<Form.Control type="text" className="login-form" onChange={e => setUsername(e.target.value)} name="username"></Form.Control>
				<Card.Text className="login-prompt">Password</Card.Text>
				<Form.Control type="password" className="login-form" onChange={e => setPassword(e.target.value)} name="password"></Form.Control>
				
				<Button type="submit" className="login-button" onClick={login}>
					Submit
				</Button>

				<div className="loader">
					<BeatLoader 
						loading={isLoading} 
						color='rgb(3, 67, 110)'
						size='18'                     
					/>
				</div>
				<Card.Text className="login-forget-password">Forget Password</Card.Text>
				<Card.Text className="login-sign-up">Sign Up</Card.Text>
			</Card>
		</div>
	);
};

export default Login;