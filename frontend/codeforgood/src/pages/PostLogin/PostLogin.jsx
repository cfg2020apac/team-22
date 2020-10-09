import React, {useState, useEffect} from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./PostLogin.css";
import Dashboard from "../Dashboard/Dashboard";
import NavBar from "../Navbar/NavBar";

const PostLogin = props => {
    return (
        <div className="postlogin-page">
            <NavBar/>
            <Dashboard/>
            <Dashboard/>
        </div>
    );
};

export default PostLogin;