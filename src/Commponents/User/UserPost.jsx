import { Link } from "react-router-dom";
import React from 'react';

export default function UserPost(){
    return (
        <div width="100vw" higth="70vh">
            <h1>Post!!</h1>
            <Link to="/user/favorites">favorites</Link>
        </div>
    )
}