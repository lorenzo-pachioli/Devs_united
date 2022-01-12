import { Link } from "react-router-dom";
import React from 'react';
import "./UserPost.css";
import TweetCard from '../TweetCard'; 

export default function UserPost(){
    const msj = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."

    return (
        <div className="post-container">
            <div className="post-top">
                <h2>POST</h2>
                <Link to="/user/favorites" className="link" >FAVORITES </Link>
            </div>
            <TweetCard Name={"USERNAME"} Tweet={msj} Likes={0} id={0} />
            <TweetCard Name={"Lorenzo"} Tweet={msj} Likes={5} id={0} />
            <TweetCard Name={"USERNAME"} Tweet={msj} Likes={0} id={0} />
        </div>
    )
}