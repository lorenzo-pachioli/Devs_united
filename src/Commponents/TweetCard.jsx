import React, {useContext} from "react";
import "./TweetCard.css";
import heartOn from "../Resourses/heartOn.svg";
import heartOff from "../Resourses/heartOff.svg";
import userImg from "../Resourses/user.png";
import { AppContext } from '../Hooks/AppContext';

export default function TweetCard({id, Likes, Tweet, Name, Date, photo}){

    const {user} = useContext(AppContext);

    const namebackground = {
        backgroundColor: "#800FFF"
    }

    return (
        <div className="card" >
             <div className="card-container" >
                <div className="card-img">
                    {photo || user != null ? (
                        <img src={photo} alt="" />
                    ) : (
                        <img src={userImg} alt="" />
                    )}
                    
                </div>
                <div className="card-subcontainer">
                    <div className="name-date">
                        <div className="name" style={namebackground}>{Name}</div> 
                        <div className="date">- {`${Date}`} </div>
                    </div>
                    
                    <div className="tweet">{Tweet}</div>
                    <div className="likes">
                        <button name = "Likes" /* onClick={handleLikes} */ value={id}>
                        {Likes > 0 ? (
                            <img src={heartOn} alt="img not found" />
                        ) : (
                            <img src={heartOff} alt="img not found" />
                        )}
                        </button>
                        <div>{Likes}</div>
                    </div>
                </div>
            </div>
             <hr width="100%" />               
        </div>
       
    )
}