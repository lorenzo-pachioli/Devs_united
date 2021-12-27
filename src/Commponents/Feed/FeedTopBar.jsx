import { Link } from "react-router-dom";
import React from 'react';
import userImg from "src/Resourses/user.png";
import logoSmall from 'src/Resourses/logo small.svg'
import titleSmall from 'src/Resourses/title small.svg';

export default function FeedTopBar(){
    return(
        <div>
            <Link to="/">
                <img src={userImg} alt="img not found" />
            </Link>
            <img src={logoSmall} alt="img not found" />
            <img src={titleSmall} alt="img not found" />
        </div>
    )
}