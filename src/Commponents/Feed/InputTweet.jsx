import React from 'react';
import userImg from "./user.png";
import "./InputTweet.css";
import postOff from "./postOff.svg";
/* import postOn from "src/Resourses/post on.svg";  */

export default function InputTweet(){
  
    
    return (
        <div className='input-container' >
            <div className='inputuser-img'>
                <img src={userImg} className='user-img'  alt="img not found" /> 
            </div>
            
            <div className='input-tweet' >
                    <textarea
                        name="Tweet"
                        type="text"
                        id='input-tweet'
                        placeholder="What's happening?" 
                        rows="5" 
                        cols="30" 
                        maxlength="200"
                        />
                
                
                <div className='sub-textarea'>
                    <h5>17 </h5>
                    <h5>200 max.</h5>
                </div>
                <div className='container-post-button'>
                    <img src={postOff} className='post-button' alt="img not found" />
                </div>
                
            </div>
            
            
            {/* {post ? (
                <img src={postOff} alt="img not found" />
            ):(
                <img src={postOn} alt="img not found" />
            )}
             */}
        </div>
    )
}