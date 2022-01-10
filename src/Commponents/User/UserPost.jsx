import { Link } from "react-router-dom";
import React from 'react';
import "./UserPost.css";
import TweetCard from '../TweetCard'; 
import postSelected from './postSelected.svg';

export default function UserPost(){
    const msj = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."

    return (
        <div className="post-container">
            <div className="post-top">
                <img src={postSelected} alt="img not found" />
                <Link to="/user/favorites" className="link" />
            </div>
            <TweetCard Name={"Lorenzo"} Tweet={msj} Likes={5} id={0} />
            <TweetCard Name={"Lorenzo"} Tweet={msj} Likes={5} id={0} />
            <TweetCard Name={"Lorenzo"} Tweet={msj} Likes={5} id={0} />
        </div>
    )
}