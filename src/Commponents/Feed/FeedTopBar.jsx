import { Link } from "react-router-dom";
import React from 'react';
import userImg from './user.png';
import logoSmall from './logoSmall.svg'
import titleSmall from './titleSmall.svg';

export default function FeedTopBar(){
    return(
        <div display="flex" flex-direction="row">
            <Link to="/user/post" width="15vw" higth="100%">
                <img src={userImg} alt="img not found" />
            </Link>
            <img src={logoSmall} alt="img not found" />
            <img src={titleSmall} alt="img not found" />
        </div>
    )
}