import { Link } from "react-router-dom";
import React from 'react';
import "./UserTopBar.css"


export default function FeedTopBar(){
    return(
        <div className="topBar-container" >
            <Link to="/feed" className="username">
                <h4>username</h4>
            </Link>
            <Link to="/" className="logout">
                <h4>Log out</h4>
            </Link>
            
        </div>
    )
}