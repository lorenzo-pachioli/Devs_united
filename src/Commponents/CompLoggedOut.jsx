import { Link } from "react-router-dom";
import React from 'react';
import google from  "../Resourses/Group7.png";
import "./compLoggedOut.css";

export default function CompLoggedOut(){
    return (
        <div className="loggedOut-container">
            <div className="title">
                <h1>LOREM</h1>
                <h1>IPSUM DOLOR</h1>
            </div>
            <div className="text">
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                
            </div>
            <Link to="/feed" className="link">
                <div className="box">
                    <img src={google} alt="img not found" />
                </div>
                Sign in with google
            </Link>
            
        </div>
    )
}