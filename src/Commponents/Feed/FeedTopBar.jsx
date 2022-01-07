import { Link } from "react-router-dom";
import React from 'react';
import "./FeedTopBar.css";
import userImg from './user.png';
import logoSmall from './logoSmall.svg'
import titleSmall from './titleSmall.svg';

export default function FeedTopBar(){
    return(
        <div className="topBar-container" >
            <Link to="/user/post" className="user-img" >
                <img src={userImg} alt="img not found" />
            </Link>
            <img src={logoSmall} className="logo" alt="img not found" />
            <img src={titleSmall} className="devs" alt="img not found" />
        </div>
    )
}