import { Link } from "react-router-dom";
import React, {useContext} from 'react';
import google from  "../Resourses/Group7.png";
import "./compLoggedOut.css";
import userAuth from "../Services/autentication";
import { AppContext } from '../Hooks/AppContext';
import {getDataById} from "../Services/Operations";

export default function CompLoggedOut(){

    const {user, setUser} = useContext(AppContext);
    
    const singIn = async () => {
        const newUser =await userAuth();
        const oldUser = await getDataById("Users", newUser.uid);
        setUser({
            name: newUser.displayName,
            email: newUser.email,
            photo: newUser.photoURL,
            uid: newUser.uid,
            likes: oldUser.likes,
            color:oldUser.color
        }) 
    }

  
   
    return (
        <div className="loggedOut-container">
            <div className="title">
                <h1>LOREM</h1>
                <h1>IPSUM DOLOR</h1>
            </div>
            <div className="text">
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                
            </div>
            <div>
            {user.uid ? (
                <Link to="welcome" className="link green" > Continue </Link>
            ) : (
                <button  onClick={singIn}  className="link blue">
                    <div className="box">
                        <img src={google} alt="img not found" />
                    </div>
                    Sign in with google 
                </button>
            )}
            </div>
            <Link to="/feed" className="link green" > Continue without sign in </Link>
            
            
        </div>
    )
}