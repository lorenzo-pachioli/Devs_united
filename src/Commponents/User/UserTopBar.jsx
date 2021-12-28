import { Link } from "react-router-dom";
import React from 'react';


export default function FeedTopBar(){
    return(
        <div width="100vw" hight="5vh">
            <Link to="/feed">
                <h4>username</h4>
            </Link>
            <Link to="/LoggedOut" background-color="red">
                <h4>Log out</h4>
            </Link>
            
        </div>
    )
}