import React from "react";
import heartOn from "../Resourses/heartOn.svg";
import heartOff from "../Resourses/heartOff.svg";
import user from "../Resourses/user.png";

export default function TweetCard({id, Likes, Tweet, Name}){
    return (
        <div display="flex" flex-direction="row">
            <div>
                <img src={user} alt="img not found" />
            </div>
            <div>
                <div>{Name}</div>
                <div>{Tweet}</div>
                <div>
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
    )
}