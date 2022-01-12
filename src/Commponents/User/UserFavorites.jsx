import { Link } from "react-router-dom";
import React from 'react';
import TweetCard from '../TweetCard'; 
import "./UserFavorites.css";

export default function UserFavorites(){
    const msj = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."

    return (
        <div className="favorite-container">
            <div className="favorite-top">
                <Link to="/user/post" className="link">POST</Link>
                <h2>FAVORITES</h2>
                
            </div>
            <TweetCard Name={"Lorenzo"} Tweet={msj} Likes={5} id={0} />
            <TweetCard Name={"Lorenzo"} Tweet={msj} Likes={5} id={0} />
            <TweetCard Name={"Lorenzo"} Tweet={msj} Likes={5} id={0} />
            
        </div>
    )
}