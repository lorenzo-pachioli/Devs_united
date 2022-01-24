import { Link } from "react-router-dom";
import React, {useContext} from 'react';
import google from  "../Resourses/Group7.png";
import "./compLoggedOut.css";
import userAuth from "../Services/autentication";
import { AppContext } from '../Hooks/AppContext';

export default function CompLoggedOut(){

    const {user, setUser} = useContext(AppContext);
    
    const singIn = async () => {
        console.log(user);
        const newUser =await userAuth();
        setUser({
            name: newUser.displayName,
            email: newUser.email,
            photo: newUser.photoURL,
            uid: newUser.uid
        }) 
        console.log(user)
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
            {user ? (
                <Link to="welcome" className="link green" > Continue </Link>
            ) : (
                <button  onClick={singIn}  className="link blue">
                    <div className="box">
                        <img src={google} alt="img not found" />
                    </div>
                    Sign in with google, 
                </button>
            )}
            </div>
            
            
        </div>
    )
}