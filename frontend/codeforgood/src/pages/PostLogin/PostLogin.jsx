import React, {useState, useEffect} from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./PostLogin.css";
import Dashboard from "../Dashboard/Dashboard";
import NavBar from "../Navbar/NavBar";
import Courses from "../Courses/Courses";

const PostLogin = props => {
    return (
        <div className="postlogin-page">
            <NavBar/>
            <Dashboard/>
            <Courses/>
        </div>
    );
};

export default PostLogin;