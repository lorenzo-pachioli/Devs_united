import { Link } from "react-router-dom";
import React from 'react';

export default function UserFavorites(){
    return (
        <div width="100vw" higth="70vh">
            <h1>Favorites!!</h1>
            <Link to="/user/post">Post</Link>
        </div>
    )
}